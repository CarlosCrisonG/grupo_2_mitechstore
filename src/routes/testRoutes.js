const express = require("express");
const router = express.Router();

const testController = require("../controllers/testController");

router.get("/editUser/:id", testController.editUser);

module.exports = router;