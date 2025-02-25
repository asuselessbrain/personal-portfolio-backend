import express from 'express';
import { blogController } from './blog.controller';

const blogRoute = express.Router();

blogRoute.get('/', blogController.getAllBlogs);
blogRoute.get('/:id', blogController.getSingBlog);
blogRoute.post('/', blogController.createBlog);
blogRoute.put('/:id', blogController.updateBlog);
blogRoute.delete('/:id', blogController.deleteBlog);

export default blogRoute;
