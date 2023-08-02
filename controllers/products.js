const path = require("path");
const rootDir = require("../util/path.js");

exports.getAddProducts = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postProducts = (req, res, next) => {
  res.redirect("/shop");
};

exports.getProducts = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
};
