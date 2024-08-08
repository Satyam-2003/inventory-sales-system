// /src/controllers/billController.js
const Bill = require('../models/Bill.js');
const InventoryItem = require('../models/InventoryItem.js');
const calculateTotal = require('../utils/calculateTotal.js');

exports.createBill = async (req, res, next) => {
    try {
        const { items } = req.body;
        let total = 0;

        // Calculate total and update inventory
        for (const item of items) {
            const inventoryItem = await InventoryItem.findById(item.item);
            if (inventoryItem.quantity < item.quantity) {
                return res.status(400).json({ error: 'Insufficient inventory' });
            }
            inventoryItem.quantity -= item.quantity;
            await inventoryItem.save();
            total += inventoryItem.price * item.quantity;
        }

        // Create new bill
        const bill = new Bill({ items, total });
        await bill.save();

        res.status(201).json(bill);
    } catch (error) {
        next(error);
    }
};

exports.getBills = async (req, res, next) => {
    try {
        const bills = await Bill.find().populate('items.item');
        res.status(200).json(bills);
    } catch (error) {
        next(error);
    }
};

exports.getBillById = async (req, res, next) => {
    try {
        const bill = await Bill.findById(req.params.id).populate('items.item');
        if (!bill) {
            return res.status(404).json({ error: 'Bill not found' });
        }
        res.status(200).json(bill);
    } catch (error) {
        next(error);
    }
};
