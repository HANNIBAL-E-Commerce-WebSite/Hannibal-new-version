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
const authenticateAdmin = (req, res, next) => {
  if (req.params.role !== 'admin') {
     return res.status(403).json({ message: 'Admin role required' });
  }
  next()
 }
 
 const authenticateSeller = (req, res, next) => {
  if (req.params.role !== 'seller') {
     return res.status(403).json({ message: 'Seller role required' })
  }
  next()
 }
 
 const authenticateClient = (req, res, next) => {
  if (req.params.role !== 'client') {
     return res.status(403).json({ message: 'Client role required' })
  }
  next()
 }

module.exports = {
  authenticateUser, authenticateAdmin,authenticateSeller, authenticateClient
};