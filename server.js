const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors")
const app = express()

const { errorHandler, notfound } = require('./Backend/Middlewares/Error')
const contactRouter = require("./Backend/Routes/contactRoutes")
require("./Backend/Database/Db")()
require("dotenv").config();

const port = process.env.PORT || 5000

app.use(cors())

app.use(express.json());

app.use("/api/contact", contactRouter)

app.use(notfound)
app.use(errorHandler)



mongoose.connection.once("open", () => {
    console.log("Connected to mongodb");
    app.listen(port, () => {
        console.log(`Listening to PORT ${port}...`);
    });
});