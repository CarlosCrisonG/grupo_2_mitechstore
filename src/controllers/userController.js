const users = require('../data/users.json');
const express = require("express");
const path = require("path");

const controller = {
  register: (req, res) => {
    res.render("user/register");
  },
  login: (req, res) => {
    res.render("user/login");
  },
  profile: (req, res) => {
    res.render("user/userProfile", {user: users[18]});
  },
};

module.exports = controller;
