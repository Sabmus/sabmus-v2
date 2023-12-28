import mongoose, { Schema } from 'mongoose';

const projectSchema = new Schema({
  name: String,
  description: String,
  url: String,
  imageUrl: String,
  author: { type: mongoose.Types.ObjectId, ref: 'User' },
});

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

export default Project;
