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
    res.render("product/listaDeProducto", { products: getProducts() });
  },
  productCart: (req, res) => {
    res.render("product/productCart")
  },
};

module.exports = controller;
