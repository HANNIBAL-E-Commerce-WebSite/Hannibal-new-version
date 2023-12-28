
const User  = require('../database/models/userModel.js')
const bcrypt = require('bcrypt')


const getAllUsers = async (req, res) => {
    console.log("user");
  try {
    const users = await User.findAll();
    console.log("users", users);
    res.status(200).json({users});
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
  const { fullName, email, password, role } = req.body;
//   console.log("req",req.body);
  
//   console.log("user",User);

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
      role
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error' });
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
};
