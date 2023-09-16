import { Request, Response } from 'express';
import AboutMe from './aboutme.model'; // Import your AboutMe model

// Create a new AboutMe document
export const createAboutMe = async (req: Request, res: Response) => {
  try {
    const aboutMeData = req.body;
    const newAboutMe = new AboutMe(aboutMeData);
    console.log("first")
    const savedAboutMe = await newAboutMe.save();
    res.status(201).json(savedAboutMe);
  } catch (error:any) {
    res.status(400).json({ error: 'Could not create About Me document', details: error.message });
  }
};

// Get the AboutMe document
export const getAboutMe = async (req: Request, res: Response) => {
  try {
    const aboutMe = await AboutMe.findOne({});
    res.status(200).json(aboutMe);
  } catch (error:any) {
    res.status(500).json({ error: 'Could not retrieve About Me document', details: error.message });
  }
};

// Update the AboutMe document
export const updateAboutMe = async (req: Request, res: Response) => {
  try {
    const updatedAboutMeData = req.body;
    const updatedAboutMe = await AboutMe.findOneAndUpdate({}, updatedAboutMeData, { new: true });
    res.status(200).json(updatedAboutMe);
  } catch (error:any) {
    res.status(400).json({ error: 'Could not update About Me document', details: error.message });
  }
};
