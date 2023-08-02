const path = require("path");
const rootDir = require("../util/path.js");
exports.pageNotFoud = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "404.html"));
};
