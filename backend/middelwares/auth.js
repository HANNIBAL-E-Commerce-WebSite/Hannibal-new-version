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
const checkUserRole = (requiredRole) => async (req, res, next) => {
  try {
    const userId = req.params.id

    const user = await User.findByPk(userId)

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    if (user.role !== requiredRole) {
      return res.status(403).json({ error: 'Unauthorized access' })
    }
    next()
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error' })
  }
}

module.exports = {
  authenticateUser,checkUserRole
};