const express = require('express')
const router = express.Router()
const pictureController = require('../controllers/pictureController')
const { authMiddleware } = require('../middlewares/authMiddleware')

router.get('/', pictureController.getAll)
router.post('/upload', authMiddleware, pictureController.upload)
router.delete('/:id', authMiddleware, pictureController.delete)

module.exports = router