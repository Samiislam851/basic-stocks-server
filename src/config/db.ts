require('dotenv').config();
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI).then(() => console.log('Connected to DB')
).catch((err: Error) => console.log('Error while connecting ', err)
)
module.exports = mongoose.connection