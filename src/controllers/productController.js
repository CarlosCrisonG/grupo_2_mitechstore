const express = require("express");
const path = require("path");
const fs = require('fs');

const productsPath = path.join(__dirname, "../data/products.json");
function getProducts() {
  return JSON.parse(fs.readFileSync(productsPath));
}

const controller = {
  productDetail: (req, res) => {
    const id = req.params.id;

    const products = getProducts();

    const product = products.find(product => product.id == id);

    res.render("product/productDetail", { product })
  },
  productList: (req, res) => {
    let allProducts = getProducts();

    if (req.query.category) {
      let categoryToShow = allProducts.filter(product => product.category == req.query.category)
      let categoryTitle = req.query.category == "cuidadoPersonal" ? "CUIDADO PERSONAL" : req.query.category.toUpperCase();
      return res.render("product/listaDeProducto", { products: categoryToShow, categoryTitle });
    } else {
      let categoryTitle = "TODOS LOS PRODUCTOS";
      return res.render("product/listaDeProducto", { products: allProducts, categoryTitle });
    }
  },
  productCart: (req, res) => {
    res.render("product/productCart")
  },
};

module.exports = controller;
