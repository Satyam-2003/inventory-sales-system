const express = require("express");
const {
  addItem,
  getItems,
  updateItem,
  deleteItem,
} = require("../controllers/inventoryController.js");
const router = express.Router();

router.post("/add", addItem);
router.get("/", getItems);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

module.exports = router;
