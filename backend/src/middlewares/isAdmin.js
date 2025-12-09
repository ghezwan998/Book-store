import jwt from "jsonwebtoken";
import User from "../models/user.js";

const isAdmin = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header || !header.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Authorization header missing or malformed" });
    }

    const token = header.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("_id email role");
    if (!user) {
      return res
        .status(401)
        .json({ message: "User not found or token invalid" });
    }
    if (user.role !== "admin")
      return res.status(401).json({ message: "You dont have permission" });

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default isAdmin;
