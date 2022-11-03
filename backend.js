const express = require("express");
const app = express()
const port= 3001 

const routes = require('./routes')

app.use("/", routes.macros)

// mongo atlas
require("./config/db.connection")

// env 
require('dotenv').config()

/* == Middleware == */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(port,3001, ()=> {
    console.log("connected on port 3001")
} )

