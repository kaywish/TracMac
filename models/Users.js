const mongoose = require('mongoose')

const userSchema= new mongoose.Schema({
   username: String,
   email: String,
   password: {type: String, 
    required: true, unique: true,
}

})

const user = mongoose.model("user", userSchema)

module.exports = user;