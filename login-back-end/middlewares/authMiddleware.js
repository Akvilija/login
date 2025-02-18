// This function protects routes by verifying the user's JWT token. If the token is valid, it allows the request to proceed. If not, it blocks access.
const jwt = require('jsonwebtoken')

exports.authMiddleware = (req, res, next) => {
    // Reads the Authorization header from the request.
    // The ?. (optional chaining) prevents errors if the header is missing.
    // Splits the value by " " (space) because the header looks like this:
    // Authorization: Bearer <token>
    // Extracts only the token (<token>), ignoring "Bearer".
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' })
    }

    try {
        // Uses jwt.verify() to decode and validate the token
        // "your_jwt_secret" must match the secret key used in jwt.sign() during login.
        // If the token is valid, decoded will contain user data.
        // example valid token:
        // {
        //     "userId": "65d0f6b5c123456789abcd",
        //     "email": "Lithuaniaaa@gmail.com",
        //     "iat": 1712345678,
        //     "exp": 1712355678
        //   }
        // iat (issued at) → When token was created.
        // exp (expires) → When token expires.

        const decoded = jwt.verify(token, 'your_jwt_secret')
        req.user = decoded
        next()
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' })
    }
}