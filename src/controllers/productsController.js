const express = require("express");
const path = require("path");

const controller = {
  productDetail: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/productDetail.html"));
  },
  productList: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/listaDeProducto.html"));
  },
  productCart: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/productCart.html"));
  },
};

module.exports = controller;
