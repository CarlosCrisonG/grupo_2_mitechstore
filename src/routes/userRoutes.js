const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multerUsers");

const userController = require("../controllers/userController");

router.get("/register", userController.register);

router.post("/", upload.single("avatar"), userController.create)

router.get("/login", userController.login);

router.post("/processLogin", userController.processLogin);

router.get("/profile", userController.profile);

router.get("/edit", userController.edit);

router.put("/", upload.single("avatar"), userController.update);

router.get("/logout", userController.logout);

router.post("/destroy",userController.destroyUser);

module.exports = router;
