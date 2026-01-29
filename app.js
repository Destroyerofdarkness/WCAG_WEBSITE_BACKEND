const express = require("express");

const app = express();

require("dotenv").config();

const {connectToMongoDB}= require("./handlers/mongoDbHandlers")

const default_routes = require("./routes/default_routes")

app.use(express.urlencoded({extended:true}))

app.use(express.json())

connectToMongoDB()

app.use(default_routes)

app.listen(process.env.PORT, ()=>{
    console.log("Backend Server running on Port 4000 and on host:", require("os").hostname());
})