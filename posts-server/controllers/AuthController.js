import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// register user
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExisting = await User.findOne({ email });
    if (userExisting) {
      return res.json({ message: `User with email ${email} already exists` });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      name,
      email,
      password: hash,
    });

    const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    await newUser.save();

    res.json({
      newUser,
      token,
      message: "Registration completed Successfully!",
    });
  } catch (error) {
    res.json({ message: "Error creating user!" });
  }
};

// login user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "User not found!" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.json({ message: "Password incorrect!" });
    }
    const token = jwt.sign(
      {
        id: user._id,
        // id: user,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    res.json({
      token,
      user,
      message: "You are logged in!",
    });
  } catch (error) {
    res.json({ message: "authorization error!" });
  }
};

// Get me user
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.json({ message: "User does not exist!" });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    res.json({
      user,
      token,
    });
  } catch (error) {
    res.json({ message: "No access!" });
  }
};

// logout
// export const logout=(req, res) => {

// }

//all users
export const getAll = async (req, res) => {
  const allUsers = await User.find();
  res.json(allUsers);
};
