const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multerUsers");
const validator = require("../middlewares/validationsMiddleware")
const guestMiddleware = require("../middlewares/guestMiddleware")
const redLogin = require("../middlewares/redLogin")

const usersController = require("../controllers/usersController");

router.get("/register", guestMiddleware, usersController.register);

router.post("/", upload.single("avatar"), validator.registerAndEdition, usersController.create)

router.get("/login", guestMiddleware, usersController.login);

router.post("/processLogin", validator.login, usersController.processLogin);

router.get("/profile", redLogin, usersController.profile);

router.get("/edit", usersController.edit);

router.put("/", upload.single("avatar"), validator.registerAndEdition, usersController.update);

router.get("/logout", usersController.logout);

router.delete("/destroy",usersController.destroyUser);

module.exports = router;
