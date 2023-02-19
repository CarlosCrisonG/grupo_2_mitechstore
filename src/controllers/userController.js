const express = require("express");
const path = require("path");

const controller = {
  register: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/user/register.html"));
  },
  login: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/user/login.html"));
  },
};

module.exports = controller;
