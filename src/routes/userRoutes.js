const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multerUsers");

const userController = require("../controllers/userController");

router.get("/register", userController.register);

router.post("/", upload.single("avatar"), userController.create)

router.get("/login", userController.login);

router.post("/consult", userController.consult);

router.get("/profile", userController.profile);

router.post("/logout", userController.logout);

module.exports = router;
