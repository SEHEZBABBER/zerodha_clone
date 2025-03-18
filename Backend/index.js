require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const mongoose = require("mongoose");
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