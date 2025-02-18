const { saveImage, getAllImages, deleteImage } = require('../models/pictureModel')

exports.uploadImage = async (userId, imageUrl) => {
    if (!imageUrl) return { error: 'Image URL is required' }

    const imageId = await saveImage(userId, imageUrl)
    return { message: 'Image uploaded successfully', imageId }
}

exports.getImages = async () => {
    return await getAllImages()
}

exports.removeImage = async (imageId, userId) => {
    const deleted = await deleteImage(imageId, userId)
    return deleted ? { message: 'Image deleted' } : { error: 'Failed to delete image' }
}
