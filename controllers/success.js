const path = require("path");
const rootDir = require("../util/path.js");

exports.getSuccessPage = (req, res) => {
  res.sendFile(path.join(rootDir, "views", "success.html"));
};
