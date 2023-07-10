require("dotenv").config();
const express = require("express");
const app = express();

require("./startup/config")();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/validate")();
require("./startup/db")();

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("Now listenting for request at port: ", port);
});