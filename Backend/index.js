require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const mongoose = require("mongoose");
const HoldingModel = require('./models/HoldingModel');
const bodyparser = require('body-parser');
const OrderModel = require('./models/OrderModel');
const cors = require('cors');
const UserModel = require('./models/UserModels');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
app.use(bodyparser.json());
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true,
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
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
    if(req.body.mode === "BUY"){
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
      let avg_price = ((data.avg * data.qty) - (req.body.price * req.body.qty))/(data.qty-req.body.qty);
      if(data.qty - req.body.qty < 0)avg_price = req.body.price;
      if(data.qty - req.body.qty != 0){
      let holdings_obj = new HoldingModel({
        name: req.body.name,
        qty: data.qty - req.body.qty,
        avg: avg_price,
        price: req.body.price,
        net: "+0.00%",
        day: "+0.00%",
        });
        holdings_obj.save();
      }
    }
  }
  else{
    if(req.body.mode === "BUY"){
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
  else{
    let holdings_obj = new HoldingModel({
      name: req.body.name,
      qty: -req.body.qty,
      avg: req.body.price,
      price: req.body.price,
      net: "+0.00%",
      day: "+0.00%",
      });
      holdings_obj.save();
  }
  }
});
app.post('/register',async(req,res)=>{
  let {username,email,password} = req.body;
  if(!username || ! email || ! password)res.status(400).json({message:"missing credentails"});
  let check_user_present = await UserModel.findOne({email:email});
  if(!email.includes('@'))return res.status(400),json({message:"email not valud"});
  if(check_user_present)return res.status(400).json({message:"user already exists"});
  let newuser = new UserModel({
    username:username,
    email:email,
    password:password,
    holdings:[],
    orders:[],
  });
  await newuser.save();
  let token = jwt.sign({user:newuser},"asfasdfasdfsad",{expiresIn:"30h"});
  res.cookie('token',token,{
    httpOnly:true,
    secure:true,
    maxAge:30*60*60*1000,
  });
  res.status(200).json({message:"login successful"});
});
app.post('/login',async(req,res)=>{
  let {username,password} = req.body;
  if(!username || !password)return res.status(400).json({message:"Incomplete Credentials"});
  let check_user_present = await UserModel.find({username:username});
  if(!check_user_present)return res.status(400).json({message:"user does not exists"});
  const isMatch = bcrypt.compare(password,check_user_present.password);
  if(!isMatch)return res.status(400).json({message:"username and password dont match"});
  let token = jwt.sign({user:req.body},"asfasdfasdfsad",{expiresIn:"30h"});
  res.cookie('token',token,{
    httpOnly:true,
    secure:true,
    maxAge:30*60*60*1000,
  });
  res.status(200).json({message:"logged in successfully"});
});