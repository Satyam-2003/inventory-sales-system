const mongoose = require("mongoose");
const billItemSchema = require("./BillItem.js");

const billSchema = new mongoose.Schema({
  items: [billItemSchema],
  total: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Bill", billSchema);
