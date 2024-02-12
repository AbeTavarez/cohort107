import {Router} from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const router = new Router();


router.post('/signup', async (req, res) => {
    const {email, password} = req.body;
    try {
       const userExist = await User.findOne({email});
       console.log(userExist)

       if (userExist) {
        return res.status(400).json({msg: "User already exist!"})
       }

       const user = await User.create({email, password});
       console.log(user);

       const token = jwt.sign({payload: user}, process.env.SECRET ,{expiresIn: '24h'});
       
       res.status(201).json(token);
    } catch (error) {
        console.log(error);
    }
    
});


router.post('/signin', async(req, res) => {
    try {
        res.send('sign-in');
    } catch (error) {
        console.log(error);
    }
});


export default router;