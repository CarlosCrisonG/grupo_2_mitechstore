const express = require("express");
const router = express.Router();
const checkLogin = require ("../middlewares/checkLogin");

const productsController = require("../controllers/productController");

router.get("/search", productsController.searchBar)

router.get("/detail/:id", productsController.productDetail);

router.get("/list", productsController.productList);

router.get("/cart", checkLogin, productsController.productCart);

module.exports = router;
