const express = require("express");
const path = require("path");

const controller = {
  register: (req, res) => {
    res.render("user/register");
  },
  login: (req, res) => {
    res.render("user/login");
  },
};

module.exports = controller;
