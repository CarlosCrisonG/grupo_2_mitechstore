const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multerUsers");
const validator = require("../middlewares/validationsMiddleware")
const guestMiddleware = require("../middlewares/guestMiddleware")
const checkLogin = require("../middlewares/checkLogin")

const usersController = require("../controllers/usersController");

router.get("/register", guestMiddleware, usersController.register);

router.post("/", upload.single("avatar"), validator.registerAndEdition, usersController.create)

router.get("/login", guestMiddleware, usersController.login);

router.post("/processLogin", validator.login, usersController.processLogin);

router.get("/profile", checkLogin, usersController.profile);

router.get("/edit", checkLogin, usersController.edit);

router.put("/", upload.single("avatar"), validator.registerAndEdition, usersController.update);

router.get("/logout", checkLogin, usersController.logout);

router.delete("/destroy",checkLogin, usersController.destroyUser);

module.exports = router;
