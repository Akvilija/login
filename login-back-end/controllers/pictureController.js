const pictureService = require('../services/pictureService')

exports.upload = async (req, res) => {
    try {
        const { imageUrl } = req.body
        const result = await pictureService.uploadImage(req.user.userId, imageUrl)

        if (result.error) return res.status(400).json({ message: result.error })

        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message })
    }
}

exports.getAll = async (req, res) => {
    try {
        const images = await pictureService.getImages()
        res.json(images)
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message })
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pictureService.removeImage(id, req.user.userId)

        if (result.error) return res.status(400).json({ message: result.error })

        res.json(result)
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message })
    }
}