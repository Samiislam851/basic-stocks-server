import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
const cors = require('cors');
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

/// Basic middlewares
app.use(cors())
app.use(express.json())


app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});