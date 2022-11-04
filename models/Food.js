const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
   name: String,
   calories: Number,
   protein: Number,
   carbohydrate: Number,
   fat: Number,

})

const food = mongoose.model("food", foodSchema)

module.exports = food;