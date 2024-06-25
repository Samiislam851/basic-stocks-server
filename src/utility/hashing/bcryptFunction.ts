const bcrypt = require('bcrypt');
const saltRounds = 10;


const bcryptFunction = async (plainPassWord: string, type: 'hash' | 'compare', oldHash?: string) => {
    try {
        if (type === 'hash') {
            console.log('inside the hash scope');
            return await bcrypt.hash(plainPassWord, saltRounds);
        } else if (type === 'compare') {
            console.log('inside compare...... plain>>>', plainPassWord, 'old hash', oldHash);
            return await bcrypt.compare(plainPassWord, oldHash);
        }
    } catch (error) {
        console.log('error while hashing password', error);
    }
}
export default bcryptFunction