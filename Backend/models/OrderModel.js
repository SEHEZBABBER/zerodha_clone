const mongoose = require('mongoose');
const model = mongoose.model;
const OrderSchema = require('../schema/OrderSchema');
const OrderModel = new model("Order",OrderSchema);
module.exports = OrderModel;