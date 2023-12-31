const express = require("express");
const router = express.Router();
const { add } = require("../controllers/paymentController.js");
const { verify } = require("../controllers/paymentController.js");

router.post("/pay", add);
router.post("/pay/:id", verify);

module.exports = router;