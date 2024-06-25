import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
const cors = require('cors');
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const db = require('./config/db')
const User = require('./models/userModel');
const generateToken = require('./utility/generateToken/generateToken')
/// Basic middlewares
app.use(cors())
app.use(express.json())


app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});


app.post('/saveUser', async (req, res) => {
    console.log("hit with",req.body)

    const user = new User(req.body)


    try {

        const userEmail = user.email

        const response = await User.findOne({ email: userEmail })


        if (!response) {

            try {
                const response = await user.save()
                const token = generateToken(response);
                /// return a token from here also
                res.status(200).json({ success: true, message: 'saved', user: response, token })
            } catch (error) {
                res.status(500).json({ success: false, message: 'Internal Server Error', error })
            }
        } else {
            res.status(400).json({ success: false, message: 'Bad request | User Already Exists', response })
        }


    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error', error })
    }
})


/////////////////////////////////////////// login give token to user


app.post('/login', async (req, res) => {

    const user = new User(req.body)

    try {

        const userEmail = user.email

        const response = await User.findOne({ email: userEmail })
        const token = generateToken(response)
        // console.log('token', token);
        if (!response) {

            res.status(400).json({ success: false, message: 'Not Found', response })

        } else {
            res.status(200).json({ success: true, message: 'user Found', user: response, token })
        }


    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error', error })
    }

})






app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});