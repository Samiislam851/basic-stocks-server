// @ts-ignore
const jwt = require('jsonwebtoken')
const generateToken = (user: any) => {
 return jwt.sign({user:user}, process.env.JWT_SECRET_KEY,{
    expiresIn : '5h'
})
}
module.exports = generateToken