import { Schema } from "mongoose"
const mongoose = require('mongoose')
const { schema } = mongoose
const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true },
    photoURL: { type: String }
})
const User = mongoose.model('users', userSchema)
module.exports = User