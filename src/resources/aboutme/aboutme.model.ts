import mongoose, { Document, Schema } from 'mongoose';

interface IAboutMe extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  headline: string;
  summary: string;
  education: Array<{
    school: string;
    degree: string;
    major: string;
    graduationYear: number;
  }>;
  experience: Array<{
    position: string;
    company: string;
    startDate: Date;
    endDate: Date;
    description: string;
  }>;
  skills: string[];
  projects: Array<{
    title: string;
    description: string;
    link: string;
    technologiesUsed: string[];
  }>;
  languages: string[];
  hobbies: string[];
  socialMedia: Array<{
    platform: string;
    username: string;
    url: string;
  }>;
}

const aboutMeSchema = new Schema<IAboutMe>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  headline: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  education: [
    {
      school: String,
      degree: String,
      major: String,
      graduationYear: Number,
    },
  ],
  experience: [
    {
      position: String,
      company: String,
      startDate: Date,
      endDate: Date,
      description: String,
    },
  ],
  skills: [String],
  projects: [
    {
      title: String,
      description: String,
      link: String,
      technologiesUsed: [String],
    },
  ],
  languages: [String],
  hobbies: [String],
  socialMedia: [
    {
      platform: String,
      username: String,
      url: String,
    },
  ],
});

const AboutMe = mongoose.model<IAboutMe>('AboutMe', aboutMeSchema);

export default AboutMe;
