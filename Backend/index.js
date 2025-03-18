require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const mongoose = require("mongoose");
const HoldingModel = require('./models/HoldingModel');
const bodyparser = require('body-parser');
const PositionModel = require('./models/PositonModel');
const cors = require('cors');
app.use(bodyparser.json());
app.use(cors());
async function main() {
  await mongoose
    .connect(uri)
    .then(() => console.log("Connection Successful"))
    .catch((err) => console.log(err));
}
main();
app.listen(port, () => {
  console.log("Listeing on port 3002");
});
app.get('/allholdings',async(req,res)=>{
  let data = await HoldingModel.find({});
  res.json(data);
});
app.get('/allpositions',async(req,res)=>{
  let data = await PositionModel.find({});
  res.json(data);
});