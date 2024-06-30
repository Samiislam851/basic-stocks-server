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
const getUserData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    console.log('hit!!!');
    try {
        const id = (_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.id;
        console.log('userEmail....', id);
        const response = yield userModel_1.default.findOne({ _id: id });
        console.log('response.....', response);
        const responseToSend = {
            firstName: response === null || response === void 0 ? void 0 : response.firstName,
            lastName: response === null || response === void 0 ? void 0 : response.lastName,
            email: response === null || response === void 0 ? void 0 : response.email,
            photoURL: response === null || response === void 0 ? void 0 : response.photoURL,
            _id: response === null || response === void 0 ? void 0 : response._id
        };
        res.status(200).json({ success: true, message: 'user Found', user: responseToSend });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'error refetching user data', error });
    }
});
exports.default = getUserData;
