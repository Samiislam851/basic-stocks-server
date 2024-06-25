import User from "../../models/userModel"
import generateToken from "../../utility/generateToken/generateToken"
import bcryptFunction from "../../utility/hashing/bcryptFunction"

const login = async (req: any, res: any) => {
    const user = new User(req.body)
    try {
        const userEmail = user.email
        const response = await User.findOne({ email: userEmail })
        const isValidPassword = await bcryptFunction(user.password, 'compare', response.password)
        if (isValidPassword) {
            console.log('response.....', response);
            const token = await generateToken(response?.email, response?._id)
            const responseToSend = {
                firstName: response?.firstName,
                lastName: response?.lastName,
                email: response?.email,
                photoURL: response?.photoURL,
                _id: response?._id
            }
            res.status(200).json({ success: true, message: 'user Found', user: responseToSend, token })
        } else {
            res.status(401).json({ success: false, message: 'Wrong Email or Password' })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Login failed', error })
    }
}
export default login