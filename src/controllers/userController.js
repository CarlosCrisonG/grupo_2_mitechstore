const express = require("express");
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");

const usersPath = path.join(__dirname, "../data/users.json");
function getusers() {
  return JSON.parse(fs.readFileSync(usersPath));
}

const controller = {
  register: (req, res) => {
    res.render("user/register");
  },
  create: (req, res) => {
    const users = getusers();

    const avatar = req.file ? req.file.filename : "defaultUser.png";

    const id = users[users.length - 1].id + 1;

    const user = {
      id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      phone: req.body.phone,
      avatar,
      userprofile: req.body.userprofile,
      country: req.body.country,
      region: req.body.region,
      city: req.body.city,
      zip: req.body.zip,
      address: req.body.address
    }

    users.push(user);

    fs.writeFileSync(usersPath, JSON.stringify(users));

    res.redirect("/");

  },
  login: (req, res) => {
    res.render("user/login");
  },
};

module.exports = controller;
