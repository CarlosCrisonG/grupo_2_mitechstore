const express = require("express");
const path = require("path");

const controller = {
  productDetail: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/products/productDetail.html"));
  },
  productList: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/products/listaDeProducto.html"));
  },
  productCart: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/products/productCart.html"));
  },
};

module.exports = controller;
