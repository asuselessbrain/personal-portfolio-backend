import mongoose, { Schema } from 'mongoose';
import { IProject } from './projects.interface';

// Create the schema
const ProjectSchema: Schema = new Schema<IProject>({
  name: {
    type: String,
    required: [true, 'Project name is required'],
    minlength: [10, 'Project name must be at least 10 characters long'],
    maxlength: [50, 'Project name cannot exceed 50 characters'],
  },
  imageUrl: {
    type: String,
    required: [true, 'Image URL is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    minlength: [50, 'Description must be at least 50 characters long'],
    maxlength: [200, 'Description cannot exceed 200 characters'],
  },
  features: {
    type: [String],
    required: [true, 'Features field is required'],
  },
  techStacks: {
    type: [String],
    required: [true, 'Tech stacks field is required'],
  },
  liveLink: {
    type: String,
    required: [true, 'Live link is required'],
  },
});

// Export the model
export const Project = mongoose.model<IProject>('Project', ProjectSchema);
