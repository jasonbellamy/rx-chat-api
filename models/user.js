import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', schema);
