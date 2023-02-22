const express = require("express");
const path = require("path");

const controller = {
  createProduct: (req, res) => {
    res.render("admin/createProduct");
  },
  editProduct: (req, res) => {
    res.render("admin/editProduct");
  },
};

module.exports = controller;
