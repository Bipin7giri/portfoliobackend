import express from 'express';
import { createAboutMe, getAboutMe, updateAboutMe } from './aboutme.controller'; // Import your controller functions

const router = express.Router();

// Create a new AboutMe document
router.post('/', createAboutMe);

// Get the AboutMe document
router.get('/', getAboutMe);

// Update the AboutMe document
router.put('/', updateAboutMe);

export default router;
