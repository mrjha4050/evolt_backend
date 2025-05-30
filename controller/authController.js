const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET , { expiresIn: '1h' });
};

exports.register = async (req , res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ message: 'User created successfully' , user });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.login = async(req ,res) => {
    try {
        const {email , password} = req.body;
        const user = await User.findOne({email});
        if(!user || !(await user.comparePassword(password))) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const token = generateToken(user);
        res.status(200).json({ message: 'Login successful' , token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};