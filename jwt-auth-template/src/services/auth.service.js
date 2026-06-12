const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const registerUser = async(userData) => {
    const existingUser = await User.findOne({email : userData.email});

    if(existingUser) throw new Error('User Already Exist');

    const hashedPassword = await bcrypt.hash(userData.password,10);

    const user = await User.create({
        name : userData.name,
        email : userData.email,
        password : hashedPassword

    });
    return {
    id: user._id,
    name: user.name,
    email: user.email
    };
}

const loginUser = async (email, password) => {

    const user = await User.findOne({
        email
    }).select('+password');

    if (!user) {
        throw new Error('Invalid Credentials');
    }

    const isMatch = await bcrypt.compare(
        password,
        user.password
    );

    if (!isMatch) {
        throw new Error('Invalid Credentials');
    }

    const token = jwt.sign(
        { id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' }
    );

    return {
        token,
        user: {
            id: user._id,
            name: user.name,
            email: user.email
        }
    };
};

const updateUser = async(userId , updateData) =>{
    const { password, ...safeUpdateData } = updateData;
    const user = await User.findByIdAndUpdate(userId,safeUpdateData,{new:true});
    return user;
}

const deleteUser = async(userId) =>{
    const user = await User.findByIdAndDelete(userId);

    if(!user) throw new Error('User Not Found');

    return user;
}

module.exports = {
    registerUser,
    loginUser,
    updateUser,
    deleteUser
};