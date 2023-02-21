const express = require("express");
const path = require("path");

const controller = {
  header: (req, res) => {
    res.render("partials/header");
  },
  footer: (req, res) => {
    res.render("partials/footer");
  },
};

module.exports = controller;
