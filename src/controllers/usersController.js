const express = require("express");
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");
const { validationResult } = require('express-validator');

const usersPath = path.join(__dirname, "../data/users.json");
function getusers() {
  return JSON.parse(fs.readFileSync(usersPath));
}

const controller = {
  register: (req, res) => {
    res.render("users/register");
  },
  create: (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const users = getusers();
      let userInDB = users.find(user => user.email == req.body.email)
      if (userInDB) {
        return res.render('users/register', {
          errors: {
            email: {
              msg: "Ya existe un usuario registrado con ese email"
            }
          }, oldData: req.body
        });
      } else {
        const avatar = req.file ? req.file.filename : "defaultUser.jpg";

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

        res.redirect("/users/login");
      }
    } else {
      res.render('users/register', {
        errors: errors.mapped(),
        oldData: req.body,
      });
    }

  },
  login: (req, res) => {
    res.render("users/login");
  },
  processLogin: (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {

      const users = getusers();
      let userToLogin = users.find((person) => person.email == req.body.email);

      if (userToLogin) {
        if (bcrypt.compareSync(req.body.password, userToLogin.password)) {
          delete userToLogin.password;
          req.session.userLogged = {
            ...userToLogin,
          };
          return res.redirect("/");
        } else {
          return res.render('users/login', {
            errors: {
              password: {
                msg: "La contraseña ingresada es incorrecta"
              }
            }, oldData: req.body
          })
        }

      } else {
        return res.render('users/login', {
          errors: {
            email: {
              msg: "No existe ningún usuario registrado con ese email"
            }
          }, oldData: req.body
        })
      }

    } else {
      res.render('users/login', {
        errors: errors.mapped(),
        oldData: req.body,
      });
    }

  },
  profile: (req, res) => {
    res.render("Espcio para poner la vista", { user: req.session.userLogged });
  },
  edit: (req, res) => {
    res.render("admin/editUser");
  },
  update: (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
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
    } else {
      res.render('admin/editUser', {
        errors: errors.mapped(),
        oldData: req.body,
      })
    }
  },
  logout: (req, res) => {
    req.session.destroy();

    res.redirect("/");
  },
  destroyUser: (req, res) => {
    const users = getusers();

    const userToDestroyIndex = users.findIndex(user => user.id == req.session.userLogged.id);

    if (users[userToDestroyIndex].avatar != "defaultUser.jpg") {
      fs.unlinkSync(path.join(__dirname, "../public/images/avatars/", users[userToDestroyIndex].avatar));
    }

    users.splice(userToDestroyIndex, 1);

    req.session.destroy();

    fs.writeFileSync(usersPath, JSON.stringify(users, null, 3));

    res.redirect("/");
  }
};

module.exports = controller;
