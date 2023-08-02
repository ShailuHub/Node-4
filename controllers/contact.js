const path = require("path");
const rootDir = require("../util/path.js");

exports.getContactPage = (req, res) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
};

exports.postContact = (req, res) => {
  const { username, email } = req.body;
  res.redirect("/success");
};
