const express = require("express");
const path = require("path");

const controller = {
  productDetail: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/product/productDetail.html"));
  },
  productList: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/product/listaDeProducto.html"));
  },
  productCart: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/product/productCart.html"));
  },
};

module.exports = controller;
