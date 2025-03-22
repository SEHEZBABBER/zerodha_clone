require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const mongoose = require("mongoose");
const HoldingModel = require("./models/HoldingModel");
const bodyparser = require("body-parser");
const OrderModel = require("./models/OrderModel");
const cors = require("cors");
const UserModel = require("./models/UserModels");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cookieparser = require("cookie-parser");

app.use(cookieparser());
app.use(bodyparser.json());
app.use(
  cors({
    origin: [process.env.CLIENT_URL_1, process.env.CLIENT_URL_2],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function main() {
  await mongoose
    .connect(uri)
    .then(() => console.log("Connection Successful"))
    .catch((err) => console.log(err));
}
main();
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// ✅ Get all holdings
app.get("/allholdings", async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(400).json({ message: "You're not logged in" });

  req.user = jwt.verify(token, process.env.JWT_SECRET);
  let data = await HoldingModel.find({ user: req.user._id });
  res.json(data);
});

// ✅ Get all orders
app.get("/allorders", async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(400).json({ message: "You're not logged in" });

  req.user = jwt.verify(token, process.env.JWT_SECRET);
  let data = await OrderModel.find({ user: req.user._id });
  res.json(data);
});

// ✅ Add new order
app.post("/addorder", async (req, res) => {
  let obj = new OrderModel({
    user: req.body.user,
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  await obj.save();
  let data = await HoldingModel.findOne({ name: req.body.name });
  await HoldingModel.deleteMany({ name: req.body.name });

  if (data) {
    if (req.body.mode === "BUY") {
      let avg_price =
        (data.avg * data.qty + req.body.price * req.body.qty) /
        (data.qty + req.body.qty);
      let holdings_obj = new HoldingModel({
        user: req.body.user,
        name: req.body.name,
        qty: data.qty + req.body.qty,
        avg: avg_price,
        price: req.body.price,
        net: "+0.00%",
        day: "+0.00%",
      });
      holdings_obj.save();
    } else {
      let avg_price =
        (data.avg * data.qty - req.body.price * req.body.qty) /
        (data.qty - req.body.qty);
      if (data.qty - req.body.qty < 0) avg_price = req.body.price;
      if (data.qty - req.body.qty != 0) {
        let holdings_obj = new HoldingModel({
          user: req.body.user,
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
  } else {
    if (req.body.mode === "BUY") {
      let holdings_obj = new HoldingModel({
        user: req.body.user,
        name: req.body.name,
        qty: req.body.qty,
        avg: req.body.price,
        price: req.body.price,
        net: "+0.00%",
        day: "+0.00%",
      });
      holdings_obj.save();
    } else {
      let holdings_obj = new HoldingModel({
        user: req.body.user,
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

  let order_id = (await OrderModel.findOne({ name: req.body.name }))._id;
  let user_id = (await UserModel.findOne({ name: req.body.name }))._id;
  const token = req.cookies.token;
  let loggedin_user = jwt.verify(token, process.env.JWT_SECRET);
  let newuser = await UserModel.findOne({ _id: loggedin_user._id });
  newuser.holdings.push(order_id);
  newuser.orders.push(user_id);
  await UserModel.replaceOne({ _id: loggedin_user._id }, newuser);
});

// ✅ Register new user
app.post("/register", async (req, res) => {
  let { username, email, password } = req.body;
  if (!username || !email || !password)
    return res.status(400).json({ message: "Missing credentials" });

  let check_user_present = await UserModel.findOne({ email: email });
  if (!email.includes("@"))
    return res.status(400).json({ message: "Email not valid" });
  if (check_user_present)
    return res.status(400).json({ message: "User already exists" });

  let newuser = new UserModel({
    username: username,
    email: email,
    password: password,
    holdings: [],
    orders: [],
  });
  await newuser.save();
  let temp_user = await UserModel.findOne({ email: newuser.email });
  let token = jwt.sign(
    {
      _id: temp_user._id,
      username: newuser.username,
      email: newuser.email,
      holdings: newuser.holdings,
      orders: newuser.holdings,
    },
    process.env.JWT_SECRET,
    { expiresIn: "30h" }
  );
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.COOKIE_SECURE === "true", // To make secure only in production
    maxAge: 30 * 60 * 60 * 1000,
  });
  res.status(200).json({ message: "Login successful" });
});

// ✅ Login user
app.post("/login", async (req, res) => {
  let { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: "Incomplete Credentials" });

  let check_user_present = await UserModel.findOne({ username: username });
  if (!check_user_present)
    return res.status(400).json({ message: "User does not exist" });

  const isMatch = await bcrypt.compare(
    password,
    check_user_present.password
  );
  if (!isMatch)
    return res
      .status(400)
      .json({ message: "Username and password don't match" });

  let token = jwt.sign(
    {
      _id: check_user_present._id,
      username: check_user_present.username,
      email: check_user_present.email,
      holdings: check_user_present.holdings,
      orders: check_user_present.orders,
    },
    process.env.JWT_SECRET,
    { expiresIn: "30h" }
  );
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.COOKIE_SECURE === "true",
    maxAge: 30 * 60 * 60 * 1000,
  });
  res.status(200).json({ message: "Logged in successfully" });
});

// ✅ Get user data
app.get("/userdata", async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(400).json({ message: "You're not logged in" });

  req.user = jwt.verify(token, process.env.JWT_SECRET);
  res.status(200).json({
    _id: req.user._id,
    username: req.user.username,
    email: req.user.email,
    holdings: req.user.holdings,
    orders: req.user.orders,
  });
});

// ✅ Logout user
app.get("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
  });
  res.status(200).json({ message: "Logout Successful" });
});
