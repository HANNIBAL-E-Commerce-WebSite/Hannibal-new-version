
const User  = require('../database/models/userModel.js')
const bcrypt = require('bcrypt')


const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error' });
  }
};

const getAllClients = async (req, res) => {
try {
  const users = await User.findAll({where:{role:"User"}});
  res.status(200).json(users);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error' });
}
};

const getAllSellers = async (req, res) => {
try {
  const users = await User.findAll({where:{role:"Seller"}});
  res.status(200).json(users);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error' });
}
};


const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error' });
  }
};


const createUser = async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body;

    console.log('Received registration request:', { fullName, email, role });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
      role,
    });

    console.log('User created:', newUser);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Error creating user' });
  }
};

const updateUserById = async (req, res) => {
    const userId = req.params.id;
    const { fullName, email, password } = req.body;
  
    try {
      const user = await User.findByPk(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      user.fullName = fullName;
      user.email = email;
  
      // If a new password is provided, update the password
      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
      }
  
      await user.save();
  
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error' });
    }
  };
  

const deleteUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await user.destroy();

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error' });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  getAllClients,
  getAllSellers
};
