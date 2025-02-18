const { getDB } = require('../db')
const bcrypt = require('bcryptjs')

async function createUser(email, password) {
  const db = getDB();
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { email, password: hashedPassword, createdAt: new Date() }

  const result = await db.collection('users').insertOne(user)
  return result.insertedId
}

async function findUserByEmail(email) {
  const db = getDB()
  return await db.collection('users').findOne({ email })
}

async function comparePassword(enteredPassword, hashedPassword) {
  return await bcrypt.compare(enteredPassword, hashedPassword)
}

async function updateProfilePicture(userId, imageUrl) {
  const db = getDB()
  const result = await db.collection('users').updateOne(
    { _id: userId },
    { $set: { profilePicture: imageUrl }}
  )
  return result.modifiedCount > 0
}

module.exports = { createUser, findUserByEmail, comparePassword, updateProfilePicture }