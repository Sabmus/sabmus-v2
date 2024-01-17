import mongoose, { Schema, Types } from 'mongoose';

interface IProject {
  title: string;
  description: string;
  techs: Types.ObjectId[];
  urls: { name: string; url: string }[];
  author: Types.ObjectId;
}

const projectSchema = new Schema<IProject>(
  {
    title: String,
    description: String,
    techs: [{ type: Schema.Types.ObjectId, ref: 'Tech' }],
    urls: [{ name: String, url: String }],
    author: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

export default Project;
