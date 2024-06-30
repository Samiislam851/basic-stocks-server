"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose = require('mongoose');
const { schema } = mongoose;
const userSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true },
    photoURL: { type: String },
    password: { type: String, required: true }
});
const User = mongoose.model('users', userSchema);
exports.default = User;
