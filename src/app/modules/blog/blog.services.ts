import { IBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogInDD = async (data: IBlog) => {
  const result = await Blog.create(data);
  return result;
};

export const blogServices = {
    createBlogInDD,
}
