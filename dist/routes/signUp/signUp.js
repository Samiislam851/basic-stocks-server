"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("../../models/userModel"));
const generateToken_1 = __importDefault(require("../../utility/generateToken/generateToken"));
const bcryptFunction_1 = __importDefault(require("../../utility/hashing/bcryptFunction"));
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    console.log("hit with", req.body);
    try {
        const user = new userModel_1.default({
            firstName: (_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.firstName,
            lastName: (_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.lastName,
            email: (_c = req === null || req === void 0 ? void 0 : req.body) === null || _c === void 0 ? void 0 : _c.email,
            photoURL: (_d = req === null || req === void 0 ? void 0 : req.body) === null || _d === void 0 ? void 0 : _d.photoURL,
            password: yield (0, bcryptFunction_1.default)((_e = req === null || req === void 0 ? void 0 : req.body) === null || _e === void 0 ? void 0 : _e.password, 'hash')
        });
        const userEmail = user.email;
        const response = yield userModel_1.default.findOne({ email: userEmail });
        console.log('response');
        if (!response) {
            const saveUserRes = yield user.save();
            const token = (0, generateToken_1.default)(saveUserRes === null || saveUserRes === void 0 ? void 0 : saveUserRes.email, saveUserRes === null || saveUserRes === void 0 ? void 0 : saveUserRes._id);
            /// return a token from here also
            const responseToSend = {
                firstName: saveUserRes === null || saveUserRes === void 0 ? void 0 : saveUserRes.firstName,
                lastName: saveUserRes === null || saveUserRes === void 0 ? void 0 : saveUserRes.lastName,
                email: saveUserRes === null || saveUserRes === void 0 ? void 0 : saveUserRes.email,
                photoURL: saveUserRes === null || saveUserRes === void 0 ? void 0 : saveUserRes.photoURL,
                _id: saveUserRes === null || saveUserRes === void 0 ? void 0 : saveUserRes._id
            };
            res.status(200).json({ success: true, message: 'signup successful', user: responseToSend, token });
        }
        else {
            res.status(400).json({ success: false, message: 'Bad request | User Already Exists' });
        }
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'signup failed', error });
    }
});
exports.default = signUp;
