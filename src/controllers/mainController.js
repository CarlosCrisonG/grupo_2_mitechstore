const express = require("express");
const path = require("path");
const fs = require('fs');

const productsPath = path.join(__dirname, "../data/products.json");
function getProducts() {
  return JSON.parse(fs.readFileSync(productsPath));
}

const controller = {
  index: (req, res) => {
    const products = getProducts();

    const highlightedProducts = products.filter(product => product.highlight == "true");

    const onSale = products.filter(product => product.inSale == "true");

    res.render("main/index", { onSale, highlightedProducts });
  },
};

module.exports = controller;
