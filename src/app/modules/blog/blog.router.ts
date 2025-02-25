import express from 'express';
import { blogController } from './blog.controller';

const blogRoute = express.Router();

blogRoute.get('/', blogController.getAllBlogs)
blogRoute.post('/', blogController.createBlog);
// blogRoute.put('/:id', )
// blogRoute.delete('/:id', )

export default blogRoute;
