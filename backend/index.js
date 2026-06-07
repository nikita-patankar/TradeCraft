require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const HoldingModel = require("./model/HoldingModel");
const PositionsModel = require("./model/PositionsModel");
const OrderModel = require("./model/OrdersModel");
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 3005;
const uri = process.env.MONGO_URL;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrderModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();

    res.status(200).json({
      success: true,
      order: newOrder,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  mongoose.connect(uri);
  console.log("MongoDB connected");
});
