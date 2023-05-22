const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multerProducts");
const checkLogin = require("../middlewares/checkLogin");
const validator = require("../middlewares/validationsProductsMiddleware")

const adminController = require("../controllers/adminController");

router.get("/createproduct", checkLogin, adminController.createProduct);

router.post("/", upload.array("images"), validator.createAndUpdate, adminController.create);

router.get("/editproduct/:id", checkLogin, adminController.editProduct);

router.put("/:id", upload.array("images"), validator.createAndUpdate, adminController.edit);

router.delete("/:id", checkLogin, adminController.delete);

module.exports = router;
