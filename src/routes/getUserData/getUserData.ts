import User from "../../models/userModel"

const getUserData = async (req: any, res: any) => {
    console.log('hit!!!');
    
    try {
        const id = req?.body?.id
        console.log('userEmail....', id);
        const response = await User.findOne({ _id: id })
        console.log('response.....', response);
        const responseToSend = {
            firstName: response?.firstName,
            lastName: response?.lastName,
            email: response?.email,
            photoURL: response?.photoURL,
            _id: response?._id
        }
        res.status(200).json({ success: true, message: 'user Found', user: responseToSend })
    } catch (error) {
        res.status(500).json({ success: false, message: 'error refetching user data', error })
    }
}
export default getUserData