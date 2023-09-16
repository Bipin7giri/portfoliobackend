import express from 'express';
import { ProjectController } from './project.controller';

const router = express.Router();
const controller = new ProjectController();

// Create a new project
router.post('/', controller.createProject);

// Get all projects
router.get('/', controller.getAllProjects);

// Get a project by ID
router.get('/:id', controller.getProjectById);

// Update a project by ID
router.put('/:id', controller.updateProject);

// Delete a project by ID
router.delete('/:id', controller.deleteProject);

export default router;
