"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose = require('mongoose');
const stocksSchema = new mongoose_1.Schema({
    date: { type: String },
    trade_code: { type: String },
    high: { type: String },
    low: { type: String },
    open: { type: String },
    close: { type: String },
    volume: { type: String }
});
const Stocks = mongoose.model('stocks', stocksSchema);
exports.default = Stocks;
