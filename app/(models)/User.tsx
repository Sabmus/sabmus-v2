import mongoose, { Schema } from 'mongoose';

mongoose.connect(process.env.MONGODB_URI || '');
mongoose.Promise = global.Promise;

interface IUser {
  name: string;
  email: string;
  password: string;
}

const userSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
