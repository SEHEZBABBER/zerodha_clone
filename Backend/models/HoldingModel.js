const mongoose = require('mongoose');
const model = mongoose.model;
const HoldingsSchema = require('../schema/HoldingsSchema');
const HoldingsModel = new model("Holding",HoldingsSchema);
module.exports = HoldingsModel;