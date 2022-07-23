import User from "../models/User.js";
import bcrypt from "bcryptjs";

//all users
export const getAll = async (req, res) => {
  const allUsers = await User.find();
  res.json(allUsers);
};

// register user
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExisting = await User.findOne({ email });
    if (userExisting) {
      return res
        .status(400)
        .json({ message: `User with email ${email} already exists` });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      name,
      email,
      password: hash,
    });
    await newUser.save();

    res.json({
      newUser,
      message: "Registration completed Successfully!",
    });
  } catch (error) {
    res.json({ message: "Error creating user!" });
  }
};

// login user
export const login = async (req, res) => {
  try {
  } catch (error) {}
};

//me user
export const getMe = async (req, res) => {
  try {
  } catch (error) {}
};
