// @ts-ignore
const jwt = require('jsonwebtoken')
const generateToken = (userEmail: string, userId: string) => {
    return jwt.sign({ userEmail: userEmail, userId: userId }, process.env.JWT_SECRET_KEY, {
        expiresIn: '5h'
    })
}
export default generateToken