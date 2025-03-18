const mongoose = require('mongoose');
const model = mongoose.model;
const PositionSchema = require('../schema/PositionSchema');
const PostionModel = new model("Postion",PositionSchema);
module.exports = PostionModel;