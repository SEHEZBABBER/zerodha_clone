const mongoose = require('mongoose');
const model = mongoose.model;
const WatchListSchema = require('../schema/WatchListSchema');
const WatchListModel = new model("WatchList",WatchListSchema);
module.exports = WatchListModel;