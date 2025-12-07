import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      min: 5,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      uniqe: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role:{
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    }
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
