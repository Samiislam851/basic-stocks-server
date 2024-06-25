import User from "../../models/userModel"
import generateToken from "../../utility/generateToken/generateToken"
import bcryptFunction from "../../utility/hashing/bcryptFunction"

const signUp = async (req: any, res: any) => {
    console.log("hit with", req.body)
    try {
        const user = new User({
            firstName: req?.body?.firstName,
            lastName: req?.body?.lastName,
            email: req?.body?.email,
            photoURL: req?.body?.photoURL,
            password: await bcryptFunction(req?.body?.password, 'hash')
        })
        const userEmail = user.email
        const response = await User.findOne({ email: userEmail })
        console.log('response');

        if (!response) {
            const saveUserRes = await user.save()
            const token = generateToken(saveUserRes?.email, saveUserRes?._id);
            /// return a token from here also
            const responseToSend = {
                firstName: saveUserRes?.firstName,
                lastName: saveUserRes?.lastName,
                email: saveUserRes?.email,
                photoURL: saveUserRes?.photoURL,
                _id: saveUserRes?._id
            }
            res.status(200).json({ success: true, message: 'signup successful', user: responseToSend, token })
        } else {
            res.status(400).json({ success: false, message: 'Bad request | User Already Exists' })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'signup failed', error })
    }

}
export default signUp