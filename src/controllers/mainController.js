const express = require("express");
const path = require("path");
const fs = require('fs');
const db = require('../database/models');

const productsPath = path.join(__dirname, "../data/products.json");
function getProducts() {
  return JSON.parse(fs.readFileSync(productsPath));
}

const controller = {
  index: async (req, res) => {
    const highlightedProducts = await db.Product.findAll({ include: ["images"], where: { highlight: true } });

    const onSale = await db.Product.findAll({ include: ["images"], where: { inSale: true } });

    res.render("main/index", { onSale, highlightedProducts });
  },
};

module.exports = controller;
