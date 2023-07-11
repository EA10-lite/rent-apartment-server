const { Newsletter } = require("../models/newsletter");
const _ = require("lodash");
const { subscription_cancelled, subscription_successful } = require("../templates/newsletter");
const transport = require("../utils/transport");

const subscribe_to_newsletter = async(req, res) => {
    let subscription = await Newsletter.findOne({ email: req.body.email })
    if(subscription) return res.status(200).send({
        data: null,
        message: "You have subscribed to our newsleter",
        success: true
    })

    subscription = new Newsletter({...req.body});
    const mail_options = {
        from: process.env.GMAIL_USERNAME,
        to: subscription.email,
        subject: "Subscription to our Newsletter",
        html: subscription_successful(subscription.email),
    };

    await subscription.save();
    await transport.sendMail(mail_options);

    res.status(200).send({
        data: _.pick(subscription, ['email']),
        message: "Newsletter subscription successful",
        success: true
    });
    
}

const cancel_newsletter_subscription = async(req, res) => {
    const subscription = await Newsletter.findOneAndDelete({ email: req.params.email });
    if(!subscription) return res.status(400).send({ error: "Resource not found" });

    const mail_options = {
        from: process.env.GMAIL_USERNAME,
        to: subscription.email,
        subject: "Newsletter Subscription Cancelled",
        html: subscription_cancelled(req.params.email),
    };

    await transport.sendMail(mail_options);
    res.status(200).send("You have unscribed to our newsletter!");
}

module.exports = {
    cancel_newsletter_subscription,
    subscribe_to_newsletter
}