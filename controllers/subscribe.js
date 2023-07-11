const { Newsletter } = require("../models/newsletter");
const _ = require("lodash");

const subscribe_to_newsletter = async(req, res) => {
    let subscription = await Newsletter.findOne({ email: req.body.email })
    if(subscription) return res.status(200).send({
        data: null,
        message: "You have subscribed to our newsleter",
        success: true
    })

    subscription = new Newsletter({...req.body});
    await subscription.save();

    res.status(200).send({
        data: _.pick(subscription, ['email']),
        message: "Successfully subscribed to our Newsletter",
        success: true
    });
    
}

const cancel_newsletter_subscription = async(req, res) => {
    const subscription = await Newsletter.findOneAndDelete({ email: req.params.email });
    if(!subscription) return res.status(400).send({ error: "Resource not found" });

    res.status(200).send("You have unscribed to our newsletter!");
}

module.exports = {
    cancel_newsletter_subscription,
    subscribe_to_newsletter
}