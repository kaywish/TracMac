const express = require("express");
const app = express()
/* == method override == */
const methodOverride  = require('method-override')
//import cors
// const cors = require('cors')

const PORT= process.env.PORT || 3001
const routes = require('./routes')


/* == method override == */


// env 
require('dotenv').config()

/* == Bcrypt == */
const bcrypt = require('bcrypt')

/* == Middleware == */
// app.use(cors("*"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Routes 
app.use("/food", routes.macros)
app.use("/", routes.users)

// mongo atlas
require("./config/db.connection")




app.listen(PORT, () => 
console.log(PORT, "**** server is connected ****"))
