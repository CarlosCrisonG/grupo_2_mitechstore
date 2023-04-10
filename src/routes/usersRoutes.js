const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multerUsers");
const validator = require("../middlewares/validationsMiddleware")

const usersController = require("../controllers/usersController");

router.get("/register", usersController.register);

router.post("/", upload.single("avatar"), validator.registerAndEdition, usersController.create)

router.get("/login", usersController.login);

router.post("/processLogin", validator.login, usersController.processLogin);

router.get("/profile", usersController.profile);

router.get("/edit", usersController.edit);

router.put("/", upload.single("avatar"), validator.registerAndEdition, usersController.update);

router.get("/logout", usersController.logout);

router.delete("/destroy",usersController.destroyUser);

router.get("/userProfile", usersController.profile);

module.exports = router;
