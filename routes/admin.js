const express = require("express");
const router = express.Router();
const productController = require("../controllers/products.js");

// /admin/add-product ==> GET
router.get("/add-product", productController.getAddProducts);

// /admin/add-product ==> POST
router.post("/add-product", productController.postProducts);

module.exports = router;
