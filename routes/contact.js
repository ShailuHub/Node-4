const express = require("express");
const router = express.Router();

const contactControllers = require("../controllers/contact.js");

router.get("/contact", contactControllers.getContactPage);

router.post("/contact", contactControllers.postContact);

module.exports = router;
