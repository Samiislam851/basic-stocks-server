"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const verifyJWT_1 = __importDefault(require("./middleware/verifyJWT"));
const signUp_1 = __importDefault(require("./routes/signUp/signUp"));
const login_1 = __importDefault(require("./routes/login/login"));
const body_parser_1 = __importDefault(require("body-parser"));
const getAllStocks_1 = __importDefault(require("./routes/getAllStocks/getAllStocks"));
const db_1 = __importDefault(require("./config/db"));
const getUserData_1 = __importDefault(require("./routes/getUserData/getUserData"));
const deleteStock_1 = __importDefault(require("./routes/deleteStock/deleteStock"));
const updateStock_1 = __importDefault(require("./routes/updateStock/updateStock"));
const cors = require('cors');
const app = (0, express_1.default)();
/// Basic middlewares
app.use(cors());
app.use(express_1.default.json());
dotenv_1.default.config();
app.use(body_parser_1.default.json());
const port = process.env.PORT || 3000;
(0, db_1.default)();
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.post('/signup', signUp_1.default);
app.post('/login', login_1.default);
app.post('/user-data', verifyJWT_1.default, getUserData_1.default);
app.get('/stocks', verifyJWT_1.default, getAllStocks_1.default);
app.delete('/delete-stock/:id', verifyJWT_1.default, deleteStock_1.default);
app.put('/update-stock/:id', verifyJWT_1.default, updateStock_1.default);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
