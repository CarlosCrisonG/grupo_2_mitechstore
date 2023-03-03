const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");

router.get("/createproduct", adminController.createProduct);

router.post("/", adminController.create);

router.get("/editproduct", adminController.editProduct);

module.exports = router;
