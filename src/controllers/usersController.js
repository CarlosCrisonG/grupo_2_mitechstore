const db = require("../database/models");
// const users = require('../data/users.json');
const express = require("express");
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const { log } = require("console");

const usersPath = path.join(__dirname, "../data/users.json");

// function getusers() {
//   return JSON.parse(fs.readFileSync(usersPath));
// }

const controller = {
  register: (req, res) => {
    res.render("users/register");
  },
  create: async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("users/register", {
        errors: errors.mapped(),
        oldData: req.body,
      });
    }

    const userInDB = await db.User.findOne({ where: { email: req.body.email } })

    if (!userInDB) {
      return res.render("users/register", {
        errors: {
          email: {
            msg: "Ya existe un usuario registrado con ese email",
          },
        },
        oldData: req.body,
      });
    }

    //lo elimino ya que es redundante guardarlo
    delete userInDB;

    const avatar = req.file ? req.file.filename : "defaultUser.jpg";

    const userToCreate = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      phone: req.body.phone,
      avatar,
      region: req.body.region,
      city: req.body.city,
      zip: req.body.zip,
      address: req.body.address,
      userprofile_id: req.body.userprofile,
      country_id: req.body.country,
    }

    await db.User.create(userToCreate)

    res.redirect("/users/login");
  },
  login: (req, res) => {
    res.render("users/login");
  },
  processLogin: async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("users/login", {
        errors: errors.mapped(),
        oldData: req.body,
      });
    }

    const userToLogin = await db.User.findOne({ where: { email: req.body.email } });

    if (!userToLogin) {
      return res.render("users/login", {
        errors: {
          email: {
            msg: "No existe ningún usuario registrado con ese email",
          },
        },
        oldData: req.body,
      });
    }

    if (!bcrypt.compareSync(req.body.password, userToLogin.password)) {
      delete req.body.password;

      return res.render("users/login", {
        errors: {
          password: {
            msg: "La contraseña ingresada es incorrecta",
          },
        },
        oldData: req.body,
      });
    }

    delete userToLogin.password;

    req.session.userLogged = {
      ...userToLogin,
    };

    return res.redirect("/");
  },
  profile: (req, res) => {
    const userInDB = db.User.findOne({
      where: {
        email: req.session.userLogged.dataValues.email,
      },
    }).then(function (user) {
      if (user) {
        let userFound = user;
        res.render("users/userProfile", { user: userFound });
      } else {
        res.send("El usuario no se encuentra en la base de datos");
      }
    });
  },
  edit: (req, res) => {
    const userInDB = db.User.findOne({
      where: {
        email: req.session.userLogged.dataValues.email,
      },
    }).then(function (user) {
      if (user) {
        let userFound = user;
        res.render("admin/editUser", { user: userFound });
      } else {
        res.send("El usuario no se encuentra en la base de datos");
      }
    });
  },
  update: (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const userInDB = db.User.findOne({
        where: { email: req.body.email },
      }).then(function (user) {
        let avatar = user.avatar;

        if (req.file) {
          avatar = req.file.filename;
          fs.unlinkSync(
            path.join(__dirname, "../public/images/avatars/", user.avatar)
          );
        }

        const userToUpdate = {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, 10),
          phone: req.body.phone,
          avatar,
          region: req.body.region,
          city: req.body.city,
          zip: req.body.zip,
          address: req.body.address,
          userprofile_id: req.body.userprofile,
          country_id: req.body.country,
        };

        db.User.update(userToUpdate, {
          where: { id: user.id },
        });
        res.redirect("/users/userProfile");
      });
    } else {
      res.render("admin/editUser", {
        errors: errors.mapped(),
        oldData: req.body,
      });
    }
  },

  logout: (req, res) => {
    req.session.destroy();

    res.redirect("/");
  },
  destroyUser: (req, res) => {
    const userInDB = db.User.findOne({
      where: {
        email: req.session.userLogged.dataValues.email,
      },
    }).then(function (user) {
      if (user.avatar != "defaultUser.jpg") {
        fs.unlinkSync(
          path.join(__dirname, "../public/images/avatars/", user.avatar)
        );
      }
      db.User.destroy({ where: { id: user.id } });

      req.session.destroy();

      res.redirect("/");
    });
  },
};

module.exports = controller;
