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