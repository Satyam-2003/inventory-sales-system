const InventoryItem = require('../models/InventoryItem.js');

const addItem = async (itemData) => {
    const item = new InventoryItem(itemData);
    await item.save();
    return item;
};

const getItems = async () => {
    return await InventoryItem.find();
};

const getItemById = async (id) => {
    return await InventoryItem.findById(id);
};

const updateItem = async (id, itemData) => {
    return await InventoryItem.findByIdAndUpdate(id, itemData, { new: true });
};

const deleteItem = async (id) => {
    await InventoryItem.findByIdAndDelete(id);
    return { message: 'Item deleted successfully' };
};

module.exports = {
    addItem,
    getItems,
    getItemById,
    updateItem,
    deleteItem
};
