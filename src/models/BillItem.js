const mongoose = require("mongoose");

const billItemSchema = new mongoose.Schema({
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "InventoryItem",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

module.exports = billItemSchema;
