"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const jwt = require('jsonwebtoken');
const generateToken = (userEmail, userId) => {
    return jwt.sign({ userEmail: userEmail, userId: userId }, process.env.JWT_SECRET_KEY, {
        expiresIn: '5h'
    });
};
exports.default = generateToken;
