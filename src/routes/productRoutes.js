const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productController");

router.get("/detail", productsController.productDetail);

router.get("/list", productsController.productList);

router.get("/cart", productsController.productCart);

module.exports = router;
