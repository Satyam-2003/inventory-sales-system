const Bill = require('../models/Bill');
const InventoryItem = require('../models/InventoryItem');

const createBill = async (items) => {
    let total = 0;

    // Calculate total and update inventory
    for (const item of items) {
        const inventoryItem = await InventoryItem.findById(item.item);
        if (inventoryItem.quantity < item.quantity) {
            throw new Error('Insufficient inventory');
        }
        inventoryItem.quantity -= item.quantity;
        await inventoryItem.save();
        total += inventoryItem.price * item.quantity;
    }

    // Create and save the bill
    const bill = new Bill({ items, total });
    await bill.save();
    return bill;
};

const getBills = async () => {
    return await Bill.find().populate('items.item');
};

const getBillById = async (id) => {
    return await Bill.findById(id).populate('items.item');
};

module.exports = {
    createBill,
    getBills,
    getBillById
};
