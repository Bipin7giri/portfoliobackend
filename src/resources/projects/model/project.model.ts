import mongoose, { Schema, Document } from "mongoose";

// Define the project schema
export interface IProject extends Document {
  name: string;
  description: string;
  stacks: string[];
  link: string;
}

const projectSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  stacks: {
    type: [String], // Assuming stacks is an array of strings
    default: [],
  },
  link: {
    type: String,
    required: true,
  },
});

// Create a model based on the schema
const Project = mongoose.model<IProject>("Project", projectSchema);

export default Project;
