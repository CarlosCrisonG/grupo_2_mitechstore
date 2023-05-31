//dotenv
require("dotenv").config();

//Requerimos Express
const express = require("express");
const app = express();

//CORS
const cors = require("cors");
app.use(cors());

//Express - cookie
const cookieParser = require("cookie-parser");
app.use(cookieParser());

//Express - session
const session = require("express-session");
app.use(session({ secret: "Palabra secreta", resave: false, saveUninitialized: false }));

//Requerimos Path
const path = require("path");
const publicPath = path.resolve(__dirname, "./public");

//puerto para el servidor
const port = process.env.PORT || 3000;

//EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//configuración para que lleguen los datos por post
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Definimos la carpeta public
app.use(express.static(publicPath));

//middleware para pasarle la variable local del usuario a todas las vistas
const authMiddleware = require("./middlewares/authMiddleware");
app.use(authMiddleware);

//middleware para pasar las categorías al header
const categoriesMiddleware = require('./middlewares/categoriesMiddleware');
app.use(categoriesMiddleware);

//middleware para recordar al usuario
const rememberMiddleware = require('./middlewares/rememberMiddleware');
app.use(rememberMiddleware);

//rutas
const mainRoutes = require("./routes/mainRoutes");
const productsRoutes = require("./routes/productRoutes");
const usersRoutes = require("./routes/usersRoutes");
const adminRoutes = require("./routes/adminRoutes");
const partialsRoutes = require("./routes/partialsRoutes");
const testRoutes = require("./routes/testRoutes");
const usersApiRoutes = require("./routes/api/usersApiRoutes")

//method override
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

//Iniciamos el servidor
app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`));

//Rutas principales (index)
app.use("/", mainRoutes);

//Rutas para los productos (carrito, lista producto, detalle del producto)
app.use("/product", productsRoutes);

//rutas para control de usuarios (login, register)
app.use("/users", usersRoutes);

//rutas para administradores (crear producto)
app.use("/admin", adminRoutes);

//rutas para los partials (header,footer)
app.use("/partials", partialsRoutes);

//rutas para testear
app.use("/test", testRoutes);

//Rutas APIs
app.use("/api/users", usersApiRoutes);