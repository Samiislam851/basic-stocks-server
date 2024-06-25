const jwt = require('jsonwebtoken')

const verifyJWT = (req: any, res: any, next: any) => {

    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        console.log('Token was not given');
        return res.status(400).json({ success: false, message: 'Token was not given' });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY as string, (err: any, decoded:any) => {
        if (err) {
            console.error('Token verification failed', err);
            return res.status(401).json({ success: false, message: 'Unauthorized' });
        }

        if (!decoded) {
            console.error('Decoded payload is undefined');
            return res.status(500).json({ success: false, message: 'Server Error: Payload undefined' });
        }

        console.log('Token verified');
        req.decoded = decoded;
        next();
    });
};
export default verifyJWT