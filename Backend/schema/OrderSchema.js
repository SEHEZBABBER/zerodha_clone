const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
    user:{type:Schema.Types.ObjectId,ref:"User"},
    name:String,
    qty:Number,
    price:Number,
    mode:String,
});
module.exports = OrderSchema;
