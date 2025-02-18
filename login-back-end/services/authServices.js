const jwt = require('jsonwebtoken')
const { findUserByEmail, comparePassword, createUser } = require('../models/userModel')

exports.loginUser = async (email, password) => {
    const user = await findUserByEmail(email)
    if (!user) return null
  
    const isMatch = await comparePassword(password, user.password)
    if (!isMatch) return null
  
    const token = jwt.sign({ userId: user._id, email: user.email }, 'your_jwt_secret', { expiresIn: '1h' });
    return { token }
  }

  exports.registerUser = async (email, password) => {
    const existingUser = await findUserByEmail(email)
    if (existingUser) return { error: 'USers already exists' }

    const userId = await createUser(email, password)
    return { message: 'User registered successfully', userId}
  }
