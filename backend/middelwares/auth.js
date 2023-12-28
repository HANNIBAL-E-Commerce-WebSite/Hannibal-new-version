const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  const expiresIn = 60 * 60 * 24; // 1 day in seconds
  const token = jwt.sign({ userId: req.params.id }, 'secretKey', { expiresIn: expiresIn });
  // console.log('t', t);
  if (!token) {
    return res.status(403).json({ message: 'Token not provided' });
  }

  jwt.verify(token, 'secretKey', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    // console.log('req', req.params);
    // console.log('decoded', decoded);
    req.params.id = decoded.userId; 
    next();
  });  
};

module.exports = {
  authenticateUser,
};