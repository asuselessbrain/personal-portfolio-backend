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

const getAllBlogs = async (req: Request, res: Response) => {
    try {
      const result = await blogServices.getAllBlogsFromDb();
      res.status(200).json({
        success: true,
        message: 'All blogs retrieved successfully',
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Failed to get blog',
      });
    }
  };

export const blogController = {
  createBlog,
  getAllBlogs
};
