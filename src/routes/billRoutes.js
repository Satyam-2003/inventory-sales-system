const express = require('express');
const { createBill, getBills, getBillById } = require('../controllers/billController.js');
const router = express.Router();

router.post('/create', createBill);
router.get('/', getBills);
router.get('/:id', getBillById);

module.exports = router;
