const express = require("express");
const path = require("path");

const controller = {
  index: (req, res) => {
    res.render("main/index");
  },
};

module.exports = controller;
