const express = require('express');
const mongoose = require('mongoose');
const inventoryRoutes = require('./routes/inventoryRoutes');
const billRoutes = require('./routes/billRoutes');
const errorHandler = require('./middleware/errorHandler');
const { dbUrl } = require('./config/env');

const app = express();

app.use(express.json());

// Routes
app.use('/api/inventory', inventoryRoutes);
app.use('/api/bills', billRoutes);

// Error Handling
app.use(errorHandler);

module.exports = app;
