//Requerimos Express
const express = require("express");
const app = express();

//Requerimos Path
const path = require("path");
const publicPath = path.resolve(__dirname, "./public")

//puerto para el servidor
const port = process.env.PORT || 3000;

//Definimos la carpeta public
app.use(express.static(publicPath));

//Iniciamos el servidor
app.listen(port, () =>
    console.log("Servidor corriendo en puerto 3000")
);

//Ruta para el home.html
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
});

//Ruta para el header.html
app.get('/header', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/header.html"));
});

//Ruta para el footer.html
app.get('/footer', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/footer.html"));
});

//Ruta para el productCart.html
app.get('/carrito', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/productCart.html"));
});

//Ruta para el login.html
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

//Ruta para el productDetail.html
app.get('/producto', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/productDetail.html"));
});

//Ruta para el register.html
app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

//Ruta para el createProduct.html
app.get('/createProduct', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/createProduct.html"));
});