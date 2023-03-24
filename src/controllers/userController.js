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
      userprofile: req.body.userprofile.toLowerCase(),
      country: req.body.country,
      region: req.body.region,
      city: req.body.city,
      zip: req.body.zip,
      address: req.body.address,
    };

    users.push(user);

    fs.writeFileSync(usersPath, JSON.stringify(users, null, 3));

    res.redirect("/user/login");
  },
  login: (req, res) => {
    res.render("user/login");
  },
  processLogin: (req, res) => {
    const users = getusers();

    const user = {
      email: req.body.email,
      password: req.body.password,
    };

    const userFound = users.find((person) => user.email == person.email);

    if (userFound && bcrypt.compareSync(user.password, userFound.password)) {
      delete userFound.password;

      req.session.userLogged = {
        ...userFound,
      };

      return res.redirect("/");
    }

    delete user.password;

    res.render("user/login", { oldData: user });
  },
  profile: (req, res) => {
    res.render("Espcio para poner la vista", { user: req.session.userLogged });
  },
  edit: (req, res) => {
    res.render("admin/editUser");
  },
  update: (req, res) => {
    const users = getusers()

    const userToUpdateIndex = users.findIndex(user => user.id == req.session.userLogged.id);

    const avatar = req.file ? req.file.filename : users[userToUpdateIndex].avatar;

    const password = req.body.password ? bcrypt.hashSync(req.body.password, 10) : users[userToUpdateIndex].password;

    users[userToUpdateIndex] = {
      ...users[userToUpdateIndex],
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password,
      phone: req.body.phone,
      avatar,
      userprofile: req.body.userprofile,
      country: req.body.country,
      region: req.body.region,
      city: req.body.city,
      zip: req.body.zip,
      address: req.body.address,
    }

    fs.writeFileSync(usersPath, JSON.stringify(users, null, 3));

    delete users[userToUpdateIndex].password;

    req.session.userLogged = {
      ...users[userToUpdateIndex]
    };

    res.redirect("/");
  },
  logout: (req, res) => {
    req.session.destroy();

    res.redirect("/");
  },
  destroyUser: (req, res) => {
    const users = getusers();

    const userToDestroyIndex = users.findIndex(user => user.id == req.session.userLogged.id);

    if(users[userToDestroyIndex].avatar != "defaultUser.jpg"){
      fs.unlinkSync(path.join(__dirname, "../public/images/avatars/", users[userToDestroyIndex].avatar));
    }

    users.splice(userToDestroyIndex, 1);

    req.session.destroy();

    fs.writeFileSync(usersPath, JSON.stringify(users, null, 3));

    res.redirect("/");
  }
};

module.exports = controller;
