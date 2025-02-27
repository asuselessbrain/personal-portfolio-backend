import { Request, Response } from 'express';
import { ProjectServices } from './projects.services';

const createProject = async (req: Request, res: Response) => {
  try {
    const project = req.body;
    project.features = project.features.split(',');
    project.techStacks = project.techStacks.split(',');
    const result = await ProjectServices.createProjectInDB(project);
    res.status(201).json({
      success: true,
      message: 'project created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to create project',
      data: err,
    });
  }
};

const getAllProjects = async (req: Request, res: Response) => {
  try {
    const result = await ProjectServices.getAllProjectsFromDB();
    res.status(200).json({
      success: true,
      message: 'All projects retrieved successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to get projects',
      error: err,
    });
  }
};

const getSingProject = async (req: Request, res: Response) => {
  try {
    const projectId = req.params.id;
    const result = await ProjectServices.getSingProjectFromDB(projectId);
    res.status(200).json({
      success: true,
      message: 'Single project retrieved successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to get project',
      error: err,
    });
  }
};

const updateProject = async (req: Request, res: Response) => {
  try {
    const projectId = req.params.id;
    const data = req.body;
    const result = await ProjectServices.updateProjectInDB(projectId, data);
    res.status(200).json({
      success: true,
      message: 'project updated successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to update project',
      error: err,
    });
  }
};

const deleteProject = async (req: Request, res: Response) => {
  try {
    const projectId = req.params.id;
    const result = await ProjectServices.deleteProjectFromDB(projectId);
    res.status(200).json({
      success: true,
      message: 'project deleted successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete project',
      error: err,
    });
  }
};

export const projectController = {
  createProject,
  getAllProjects,
  getSingProject,
  updateProject,
  deleteProject,
};
