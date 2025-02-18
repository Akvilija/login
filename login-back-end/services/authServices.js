const jwt = require('jsonwebtoken')
const { findUserByEmail, comparePassword } = require('../models/userModel')

exports.loginUser = async (email, password) => {
    const user = await findUserByEmail(email)
    if (!user) return null
  
    const isMatch = await comparePassword(password, user.password)
    if (!isMatch) return null
  
    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    return { token }
  }