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
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require('bcrypt');
const saltRounds = 10;
const bcryptFunction = (plainPassWord, type, oldHash) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (type === 'hash') {
            console.log('inside the hash scope');
            return yield bcrypt.hash(plainPassWord, saltRounds);
        }
        else if (type === 'compare') {
            console.log('inside compare...... plain>>>', plainPassWord, 'old hash', oldHash);
            return yield bcrypt.compare(plainPassWord, oldHash);
        }
    }
    catch (error) {
        console.log('error while hashing password', error);
    }
});
exports.default = bcryptFunction;
