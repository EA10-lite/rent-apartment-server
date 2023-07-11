const { cancel_newsletter_subscription, subscribe_to_newsletter } = require("../controllers/subscribe");
const { email } = require("../schema/newsletter");
const validator = require('validator');
const express = require("express");
const router = express.Router();

router.post("/newsletter", validator(email), subscribe_to_newsletter);
router.delete("/newsletter/:email", cancel_newsletter_subscription);

module.exports = router;