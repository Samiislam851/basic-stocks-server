import { Schema } from "mongoose";

const mongoose = require('mongoose');
const stocksSchema = new Schema({
    date: { type: String },
    trade_code: { type: String },
    high: { type: String },
    low: { type: String },
    open: { type: String },
    close: { type: String },
    volume: { type: String }
})
const Stocks = mongoose.model('stocks',stocksSchema)
export default Stocks