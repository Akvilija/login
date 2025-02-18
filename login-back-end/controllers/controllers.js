const authService = require('../services/authServices')

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await authService.loginUser(email, password)

        if (!user) {
            return res.status(401).json({message: 'Invalid credentials'})
        }

        res.json({ message: "Login successful", token: user.token })
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}

exports.register = async (req, res) => {
    try {
        const { email, password } = req.body
        const result = await authService.registerUser(email, password)

        if (result.error) {
            return res.status(400).json({ message: result.error })
        }

        return res.status(201).json(result)
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}