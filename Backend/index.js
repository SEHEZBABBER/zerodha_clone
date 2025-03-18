require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const mongoose = require("mongoose");
const HoldingModel = require('./models/HoldingModel');
const bodyparser = require('body-parser');
const PositionModel = require('./models/PositonModel');
const OrderModel = require('./models/OrderModel');
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
app.get('/allorders',async(req,res)=>{
  let data = await OrderModel.find({});
  res.json(data);
});
app.post('/addorder',async(req,res)=>{
  let obj = new OrderModel({
    name:req.body.name,
    qty:req.body.qty,
    price:req.body.price,
    mode:req.body.mode,
  });
  await obj.save();
  let data = await HoldingModel.findOne({name:req.body.name});
  await HoldingModel.deleteMany({name:req.body.name});
  if(data){
    let avg_price = ((data.avg * data.qty) + (req.body.price * req.body.qty))/(data.qty+req.body.qty);
    let holdings_obj = new HoldingModel({
      name: req.body.name,
      qty: data.qty + req.body.qty,
      avg: avg_price,
      price: req.body.price,
      net: "+0.00%",
      day: "+0.00%",
      });
      holdings_obj.save();
  }
  else{
    let holdings_obj = new HoldingModel({
    name: req.body.name,
    qty: req.body.qty,
    avg: req.body.price,
    price: req.body.price,
    net: "+0.00%",
    day: "+0.00%",
    });
    holdings_obj.save();
  }
});
app.get('/allpositions',async(req,res)=>{
  let data = await PositionModel.find({});
  res.json(data);
});