const express = require("express");
const path = require("path");

const controller = {
  header: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/partials/header.html"));
  },
  footer: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/partials/footer.html"));
  },
};

module.exports = controller;
