const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  try {
    const token = req.header('Authorization').split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Authorization token missing' });
    }

    // Verify the JWT token
    const decoded = jwt.verify(token, 'your_secret_key');
    req.userId = decoded.userId;

    next();
  } catch (error) {
    console.error('Error during authentication:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
}

module.exports = auth;
