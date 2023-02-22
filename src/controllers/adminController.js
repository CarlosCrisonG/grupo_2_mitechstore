const express = require("express");
const path = require("path");

const controller = {
  createProduct: (req, res) => {
    res.render("admin/createProduct");
  },
};

module.exports = controller;
