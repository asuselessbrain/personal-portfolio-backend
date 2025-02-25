import { Request, Response } from 'express';
import { blogServices } from './blog.services';

const createBlog = async (req: Request, res: Response) => {
  try {
    const blog = req.body;
    const result = await blogServices.createBlogInDD(blog);
    res.status(201).json({
      success: true,
      message: 'Blog created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to create blog',
    });
  }
};

export const blogController = {
  createBlog,
};
