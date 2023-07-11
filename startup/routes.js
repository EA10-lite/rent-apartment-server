const express = require("express");

const subscribe = require("../routes/subscribe");

module.exports = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/subscribe", subscribe);
}