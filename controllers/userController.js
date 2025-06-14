const User = require('../models/User');

exports.registerUser = async (req, res) => {
    const {username, password} = req.body;
    try{
        const user = await User.create({username,password});
        res.status(201).json({message: "User registered successfully",user});
    }
    catch(err){
        res.status(401).json({error: err.message});
    }
};

exports.loginUser = async (req, res) => {
    const {username, password} = req.body;

    try{
        const user = await User.findOne({username, password});
        if(user) res.json({message: 'Login successful'});
        else res.status(401).json({message: "Invalid credentials"});
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
};