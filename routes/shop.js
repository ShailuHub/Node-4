const express = require("express");
const router = express.Router();

const productController = require("../controllers/products.js");

router.use("/", productController.getProducts);

module.exports = router;
