const express = require("express");
const path = require("path");

const controller = {
  createProduct: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/createProduct.html"));
  },
};

module.exports = controller;
