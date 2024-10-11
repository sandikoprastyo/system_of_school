// middleware/auth.js
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    // Get the token from the headers
    const token = req.headers['authorization']?.split(' ')[1]; // Assuming "Bearer <token>"

    if (!token) {
        return res.status(401).json({ message: 'No token provided.' });
    }

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Failed to authenticate token.' });
        }

        // Save the decoded information (like user ID) in the request for later use
        req.userId = decoded.id;
        next(); // Proceed to the next middleware or route handler
    });
};

module.exports = authenticate;
