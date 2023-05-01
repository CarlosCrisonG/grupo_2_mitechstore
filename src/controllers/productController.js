const express = require("express");
const path = require("path");
const fs = require('fs');
const db = require('../database/models');


const productsPath = path.join(__dirname, "../data/products.json");
function getProducts() {
  return JSON.parse(fs.readFileSync(productsPath));
}

const controller = {
  productDetail: async (req, res) => {
    const id = req.params.id;

    const product = await db.Product.findOne({ include: ["images", "category", "features", "colors"], where: { id } });

    res.render("product/productDetail", { product })
  },
  productList: async (req, res) => {
    const categoryQueryId = req.query.category;

    const products = categoryQueryId ? await db.Product.findAll({ include: ["images"], where: { categories_id: categoryQueryId } }) : await db.Product.findAll({ include: ["images"] })

    res.render("product/listaDeProducto", { products, categoryQueryId })
  },
  productCart: (req, res) => {
    res.render("product/productCart")
  },
};

module.exports = controller;
