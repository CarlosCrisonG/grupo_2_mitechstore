const express = require("express");
const path = require("path");
const fs = require('fs');

const productsPath = path.join(__dirname, "../data/products.json");
function getProducts() {
  return JSON.parse(fs.readFileSync(productsPath));
}

const controller = {
  createProduct: (req, res) => {
    res.render("admin/createProduct");
  },
  create: (req, res) => {
    const productToPush = {
      name: req.body.name,
      description: req.body.description,
      price:req.body.price      
    }
  },
  editProduct: (req, res) => {
    res.render("admin/editProduct");
  },
};

module.exports = controller;
