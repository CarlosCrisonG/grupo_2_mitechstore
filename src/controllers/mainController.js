const express = require("express");
const path = require("path");

const controller = {
  index: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/index.html"));
  },
};

module.exports = controller;
