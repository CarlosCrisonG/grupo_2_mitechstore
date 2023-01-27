//Requerimos Express
const express = require("express");
const app = express();

//Requerimos Path
const path = require("path");
const publicPath = path.resolve(__dirname, "./public")

//Definimos la carpeta public
app.use(express.static(publicPath));

//Iniciamos el servidor
app.listen(3000, () =>
    console.log("Servidor corriendo en puerto 3000")
);

//Ruta para el home.html
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

//Ruta para el header.html
app.get('/header', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/header.html"));
});

//Ruta para el footer.html
app.get('/footer', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/footer.html"));
});

//Ruta para el carrito.html
app.get('/carrito', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/carrito.html"));
});

//Ruta para el login.html
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

//Ruta para el producto.html
app.get('/producto', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/producto.html"));
});

//Ruta para el registro.html
app.get('/registro', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/registro.html"));
});