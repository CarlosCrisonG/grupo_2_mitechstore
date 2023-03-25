const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multerUsers");

const usersController = require("../controllers/usersController");

router.get("/register", usersController.register);

router.post("/", upload.single("avatar"), usersController.create)

router.get("/login", usersController.login);

router.post("/processLogin", usersController.processLogin);

router.get("/profile", usersController.profile);

router.get("/edit", usersController.edit);

router.put("/", upload.single("avatar"), usersController.update);

router.get("/logout", usersController.logout);

router.delete("/destroy",usersController.destroyUser);

module.exports = router;
