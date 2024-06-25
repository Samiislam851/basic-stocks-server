import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import verifyJWT from "./middleware/verifyJWT";
import signUp from "./routes/signUp/signUp";
import login from "./routes/login/login";

import getAllStocks from "./routes/getAllStocks/getAllStocks";
import connectDB from "./config/db";
const cors = require('cors');
const app: Express = express();

/// Basic middlewares
app.use(cors())
app.use(express.json())
dotenv.config();
const port = process.env.PORT || 3000;
/////

connectDB()


app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.post('/signUp', signUp)

app.post('/login', login)

//// test api
app.get('/stocks', verifyJWT, getAllStocks)

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});