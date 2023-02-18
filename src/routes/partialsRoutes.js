const express = require("express");
const router = express.Router();

const partialsController = require("../controllers/partialsController");

router.get(["/", "/header"], partialsController.header);

router.get("/footer", partialsController.footer);

module.exports = router;
