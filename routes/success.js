const express = require("express");
const router = express.Router();

const successControllers = require("../controllers/success.js");

router.get("/success", successControllers.getSuccessPage);

module.exports = router;
