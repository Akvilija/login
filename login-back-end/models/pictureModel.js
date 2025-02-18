const { getDB } = require('../db')
const { ObjectId } = require('mongodb')

async function saveImage(userId, imageUrl){
    const db = getDB();
    const result = await db.collection('pictures').insertOne({
        userId: ObjectId.createFromHexString(userId), 
        imageUrl,
        createdAt: new Date()
    });
    return result.insertedId
}

async function getAllImages() {
    const db = getDB();
    return await db.collection('pictures').find().toArray()
}

async function deleteImage(imageId, userId) {
    const db = getDB();
    const result = await db.collection('pictures').deleteOne({
        _id: ObjectId.createFromHexString(imageId),
        userId: ObjectId.createFromHexString(userId)
    })
    return result.deletedCount > 0
}

module.exports = { saveImage, getAllImages, deleteImage }