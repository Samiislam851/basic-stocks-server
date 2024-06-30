import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import verifyJWT from "./middleware/verifyJWT";
import signUp from "./routes/signUp/signUp";
import login from "./routes/login/login";
import bodyParser from 'body-parser';
import getAllStocks from "./routes/getAllStocks/getAllStocks";
import connectDB from "./config/db";
import getUserData from "./routes/getUserData/getUserData";
import deleteStock from "./routes/deleteStock/deleteStock";
import updateStock from "./routes/updateStock/updateStock";
const cors = require('cors');
const app: Express = express();

/// Basic middlewares
app.use(cors())
app.use(express.json())
dotenv.config();
app.use(bodyParser.json()); 
const port = process.env.PORT || 3000;

connectDB()


app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.post('/signup', signUp)

app.post('/login', login)

app.post('/user-data', verifyJWT, getUserData)

app.get('/stocks', verifyJWT, getAllStocks)

app.delete('/delete-stock/:id',verifyJWT,deleteStock)

app.put('/update-stock/:id', verifyJWT, updateStock);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});