import User from '../models/user.js';
import jwt from 'jsonwebtoken';


export default {
    async login(req, res, next) {
        const token = jwt.sign({
            id: req.user._id
        }, 
        process.env.JWT_SEED,
        { 
            expiresIn: 1200 
        });

        return res.send({
            token
        });
    },

    async register(req, res, next){
        console.log(req.body);
        const { username, email, password } = req.body;
        const user = new User({ username, email });
        await User.register(user, password);

        return res.send('User created successfully.');
    }
}