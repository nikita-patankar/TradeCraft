require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const HoldingModel = require("./model/HoldingModel");
const PositionsModel = require("./model/PositionsModel");

const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URL;

const app = express();

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  mongoose.connect(uri);
  console.log("MongoDB connected");
});
