const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path.js");

// /admin/add-product ==> GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product ==> POST
router.post("/add-product", (req, res, next) => {
  res.redirect("/shop");
});

module.exports = router;
