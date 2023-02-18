const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");

router.get(["/","/createproduct"], adminController.createProduct);

module.exports = router;
