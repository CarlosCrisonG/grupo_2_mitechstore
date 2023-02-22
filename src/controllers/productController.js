const express = require("express");
const path = require("path");

const controller = {
  productDetail: (req, res) => {
    res.render("product/productDetail")
  },
  productList: (req, res) => {
    res.render("product/listaDeProducto")
  },
  productCart: (req, res) => {
    res.render("product/productCart")
  },
};

module.exports = controller;
