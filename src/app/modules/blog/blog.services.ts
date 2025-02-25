import { IBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogInDD = async (data: IBlog) => {
  const result = await Blog.create(data);
  return result;
};

const getAllBlogsFromDb = async () => {
  const result = await Blog.find();
  return result;
};

const getSingBlogFromDb = async (id: string) => {
  const result = await Blog.findById(id);
  return result;
};

const updateBlogInDB = async (id: string, data: IBlog) => {
  const result = await Blog.findByIdAndUpdate({ _id: id }, data, {
    new: true,
  });
  return result;
};

export const blogServices = {
  createBlogInDD,
  getAllBlogsFromDb,
  getSingBlogFromDb,
  updateBlogInDB,
};
