const inventoryService = require("../services/inventoryService.js");

exports.addItem = async (req, res, next) => {
  try {
    const item = await inventoryService.addItem(req.body);
    res.status(201).json(item);
  } catch (error) {
    next(error);
  }
};

exports.getItems = async (req, res, next) => {
  try {
    const items = await inventoryService.getItems();
    res.status(200).json(items);
  } catch (error) {
    next(error);
  }
};

exports.updateItem = async (req, res, next) => {
  try {
    const item = await inventoryService.updateItem(req.params.id, req.body);
    res.status(200).json(item);
  } catch (error) {
    next(error);
  }
};

exports.deleteItem = async (req, res, next) => {
  try {
    const message = await inventoryService.deleteItem(req.params.id);
    res.status(204).json(message);
  } catch (error) {
    next(error);
  }
};
