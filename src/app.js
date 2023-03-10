//Requerimos Express
const express = require("express");
const app = express();

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

//rutas
const mainRoutes = require("./routes/mainRoutes");
const productsRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const partialsRoutes = require("./routes/partialsRoutes");

//method override
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

//Definimos la carpeta public
app.use(express.static(publicPath));

//Iniciamos el servidor
app.listen(port, () => console.log("Servidor corriendo en puerto 3000"));

//Rutas principales (index)
app.use("/", mainRoutes);

//Rutas para los productos (carrito, lista producto, detalle del producto)
app.use("/product", productsRoutes);

//rutas para control de usuarios (login, register)
app.use("/user", userRoutes);

//rutas para administradores (crear producto)
app.use("/admin", adminRoutes);

//rutas para los partials (header,footer)
app.use("/partials", partialsRoutes);
