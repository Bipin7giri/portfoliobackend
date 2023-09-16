import { Request, Response } from 'express';
import Project, { IProject } from './model/project.model'; // Import the Project model

export class ProjectController {
  // Create a new project
  public async createProject(req: Request, res: Response): Promise<void> {
    try {
      const project: IProject = new Project(req.body);
      const savedProject: IProject = await project.save();
      res.status(201).json(savedProject);
    } catch (error) {
        throw error
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  // Get all projects
  public async getAllProjects(req: Request, res: Response): Promise<void> {
    try {
      const projects: IProject[] = await Project.find();
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  // Get a single project by ID
  public async getProjectById(req: Request, res: Response): Promise<void> {
    try {
      const project: IProject | null = await Project.findById(req.params.id);
      if (!project) {
        res.status(404).json({ error: 'Project not found' });
        return;
      }
      res.status(200).json(project);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  // Update a project by ID
  public async updateProject(req: Request, res: Response): Promise<void> {
    try {
      const updatedProject: IProject | null = await Project.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedProject) {
        res.status(404).json({ error: 'Project not found' });
        return;
      }
      res.status(200).json(updatedProject);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  // Delete a project by ID
  public async deleteProject(req: Request, res: Response): Promise<void> {
    try {
      const deletedProject: IProject | null = await Project.findByIdAndDelete(
        req.params.id
      );
      if (!deletedProject) {
        res.status(404).json({ error: 'Project not found' });
        return;
      }
      res.status(204).json(); // No content for successful deletion
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
