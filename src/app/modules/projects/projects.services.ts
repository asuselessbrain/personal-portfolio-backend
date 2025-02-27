import { IProject } from './projects.interface';
import { Project } from './projects.model';

const createProjectInDB = async (data: IProject) => {
  const result = await Project.create(data);
  return result;
};

const getAllProjectsFromDB = async () => {
  const result = await Project.find();
  return result;
};

const getSingProjectFromDB = async (id: string) => {
  const result = await Project.findById(id);
  return result;
};

const updateProjectInDB = async (id: string, data: IProject) => {
  const result = await Project.findByIdAndUpdate({ _id: id }, data, {
    new: true,
  });
  return result;
};

const deleteProjectFromDB = async (id: string) => {
  const result = await Project.findByIdAndDelete({ _id: id });
  return result;
};

export const ProjectServices = {
  createProjectInDB,
  getAllProjectsFromDB,
  getSingProjectFromDB,
  updateProjectInDB,
  deleteProjectFromDB,
};
