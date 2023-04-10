const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multerProducts");

const adminController = require("../controllers/adminController");

router.get("/createproduct", adminController.createProduct);

router.post("/", upload.array("images"), adminController.create);

router.get("/editproduct/:id", adminController.editProduct);

router.put("/:id", upload.array("images"), adminController.edit);

router.delete("/:id", adminController.delete);

module.exports = router;
