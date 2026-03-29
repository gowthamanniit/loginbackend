const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    id:Number,
    itemname: String,
    price: Number,
    quantity: Number
});

const userSchema = new mongoose.Schema({
  name: String,
  orders: [orderSchema]
});

module.exports = mongoose.model("Products", userSchema);