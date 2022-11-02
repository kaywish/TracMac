const express = require("express");
const app = express()
const port= 3001 

const routes = require('./routes')

app.use("/macros", routes.macros)



app.listen(port,3001, ()=> {
    console.log("connected on port 3001")
} )

