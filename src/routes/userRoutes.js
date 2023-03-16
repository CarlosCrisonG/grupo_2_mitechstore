const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer");

const userController = require("../controllers/userController");

router.get("/register", userController.register);

router.post("/", upload.single("avatar"), userController.create)

router.get("/login", userController.login);

router.post("/consult", userController.consult);

module.exports = router;
