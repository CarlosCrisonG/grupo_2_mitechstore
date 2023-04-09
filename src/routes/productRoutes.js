const express = require("express");
const router = express.Router();
const redLogin = require ("../middlewares/redLogin");

const productsController = require("../controllers/productController");

router.get("/detail/:id", productsController.productDetail);

router.get("/list", productsController.productList);

router.get("/cart", redLogin, productsController.productCart);

module.exports = router;
