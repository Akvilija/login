const express = require('express')
const router = express.Router()
const { authMiddleware } = require('../middlewares/authMiddleware')
const { updateProfilePicture, findUserByEmail } = require('../models/userModel')

router.get('/', authMiddleware, async (req, res) => {
    try {
        const user = await findUserByEmail(req.user.email)
        if (!user) return res.status(404).json({ message: 'User not found' })

        res.json({ email: user.email, profilePicture: user.profilePicture || null })
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message })
    }
})

router.put('/update-picture', authMiddleware, async (req, res) => {
    try {
        const { imageUrl } = req.body
        if (!imageUrl) return res.status(400).json({ message: 'No image provided' })

        const updated = await updateProfilePicture(req.user.userId, imageUrl)
        if (!updated) return res.status(400).json({ message: 'failed to update profile picture' })
        
        res.json({ message: 'profile picture updated successfully' })
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message })
    }
})

module.exports = router