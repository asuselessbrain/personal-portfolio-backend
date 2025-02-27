import express from 'express';
import { projectController } from './projects.controller';

const projectRoute = express.Router();

projectRoute.get('/', projectController.getAllProjects);
projectRoute.get('/:id', projectController.getSingProject);
projectRoute.post('/', projectController.createProject);
projectRoute.put('/:id', projectController.updateProject);
projectRoute.delete('/:id', projectController.deleteProject);

export default projectRoute;
