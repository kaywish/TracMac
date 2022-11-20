const express = require("express");
const app = express()
//import cors
const cors = require('cors')
const routes = require('./routes')


/* == method override == */
const methodOverride  = require('method-override')

// env 
require('dotenv').config()

/* == Bcrypt == */
const bcrypt = require('bcrypt')

/* == Middleware == */
app.use(cors("*"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Routes 
app.use("/food", routes.macros)
app.use("/food", routes.users)

// mongo atlas
require("./config/db.connection")

const PORT = process.env.PORT || 3001;



app.listen(process.env.PORT || 3001, () => 
console.log("**** server is connected ****"))
