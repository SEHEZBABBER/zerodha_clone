const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    holdings:[{type:mongoose.Schema.Types.ObjectId,ref:"Holding"}],
    orders:[{type:mongoose.Schema.Types.ObjectId,ref:"Order"}],
});
userSchema.pre('save',async function(next){
    let salt = await bcrypt.genSalt(10);
    this.password = bcrypt.hash(this.password,salt);
    next();
})
module.exports = userSchema;