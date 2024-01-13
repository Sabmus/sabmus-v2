import mongoose, { Schema } from 'mongoose';

const techSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

const Tech = mongoose.models.Tech || mongoose.model('Tech', techSchema);

export default Tech;
