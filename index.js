require("dotenv").config();
const express = require("express");
const error = require("./middlewares/error");

const app = express();
require("./startup/config")();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/validate")();
require("./startup/db")();
app.use(error);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("Now listenting for request at port: ", port);
});