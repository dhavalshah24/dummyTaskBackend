const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const routeController = require("./api/v1");
app.use("/api/v1", routeController); 

const port = process.env.PORT;

app.listen(port, () => {
    console.log("Server is running at port", port);
});
