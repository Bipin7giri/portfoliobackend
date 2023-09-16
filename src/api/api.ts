import express from 'express';
import projectRouter from '../resources/projects/project.router';
import aboutmeRouter from '../resources/aboutme/aboutme.router'
const router = express.Router();

router.use('/projects', projectRouter);
router.use('/aboutme', aboutmeRouter);


export default router;
