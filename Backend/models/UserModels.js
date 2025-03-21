const mongoose = require('mongoose');
const model = mongoose.model;
const UserSchema = require('../schema/UserSchema');
const UserModel = new model("User",UserSchema);
module.exports = UserModel;