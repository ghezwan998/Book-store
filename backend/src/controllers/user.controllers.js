import bcrypt from "bcrypt";
import User from "../models/user.js";

const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(409).json({ error: "This email already exist" });
    }

    const user = new User({
      username: username,
      email: email,
      password: password,
    });

    await user.save();

    return res.status(201).json({
      message: "User created successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const login = (req, res) => {};

const logout = (req, res) => {};

export { register, login, logout };
