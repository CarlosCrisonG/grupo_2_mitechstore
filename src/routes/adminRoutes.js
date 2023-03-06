const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

//multer configuracion
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const destinationPath = path.join(__dirname, "../public/images/products");
    cb(null, destinationPath);
  },
  filename: (req, file, cb) => {
    const filename =
      Date.now() + " product - image" + path.extname(file.originalname);
    cb(null, filename);
  },
});

const upload = multer({ storage });

const adminController = require("../controllers/adminController");

router.get("/createproduct", adminController.createProduct);

router.post("/", upload.array("images"), adminController.create);

router.get("/editproduct/:id", adminController.editProduct);

router.put("/:id", adminController.edit);

router.delete("/:id",adminController.delete);

module.exports = router;
