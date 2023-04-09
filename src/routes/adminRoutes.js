const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multerProducts");
const redLogin = require("../middlewares/redLogin");

const adminController = require("../controllers/adminController");

router.get("/createproduct", redLogin, adminController.createProduct);

router.post("/", upload.array("images"), adminController.create);

router.get("/editproduct/:id", redLogin, adminController.editProduct);

router.put("/:id", upload.array("images"), adminController.edit);

router.delete("/:id", redLogin, adminController.delete);

module.exports = router;
