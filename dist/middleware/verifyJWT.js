"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
const verifyJWT = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        console.log('Token was not given');
        return res.status(400).json({ success: false, message: 'Token was not given' });
    }
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            console.error('Token verification failed', err);
            return res.status(401).json({ success: false, message: 'Unauthorized' });
        }
        if (!decoded) {
            console.error('Decoded payload is undefined');
            return res.status(500).json({ success: false, message: 'Server Error: Payload undefined' });
        }
        console.log('Token verified');
        req.decoded = decoded;
        next();
    });
};
exports.default = verifyJWT;
