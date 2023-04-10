const path = require("path");
const fs = require("fs");

const usersPath = path.join(__dirname, "../data/users.json");
function getUsers() {
  return JSON.parse(fs.readFileSync(usersPath));
}

const controller = {
    editUser: (req, res) => {
        const id = req.params.id;

        const users = getUsers();
    
        let userToEdit = users.find((user) => user.id == id);

        userToEdit = {
          ...userToEdit,
          phone: Number(userToEdit.phone)
        }
        res.render("admin/editUser", { user: userToEdit });
    }
}

module.exports = controller;