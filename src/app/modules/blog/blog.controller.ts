import { Request, Response } from 'express';
import { blogServices } from './blog.services';

const createBlog = async (req: Request, res: Response) => {
  try {
    const blog = req.body;
    blog.author = 'Arfan Ahmed';
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
      data: err,
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
      message: 'Failed to get blogs',
      error: err,
    });
  }
};

const getSingBlog = async (req: Request, res: Response) => {
  try {
    const blogId = req.params.id;
    const result = await blogServices.getSingBlogFromDb(blogId);
    res.status(200).json({
      success: true,
      message: 'Single blog retrieved successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to get blog',
      error: err,
    });
  }
};

const updateBlog = async (req: Request, res: Response) => {
  try {
    const blogId = req.params.id;
    const data = req.body;
    const result = await blogServices.updateBlogInDB(blogId, data);
    res.status(200).json({
      success: true,
      message: 'Blog updated successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to update blog',
      error: err,
    });
  }
};

const deleteBlog = async (req: Request, res: Response) => {
  try {
    const blogId = req.params.id;
    const result = await blogServices.deleteBlogFromDB(blogId);
    res.status(200).json({
      success: true,
      message: 'Blog deleted successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete blog',
      error: err,
    });
  }
};

export const blogController = {
  createBlog,
  getAllBlogs,
  getSingBlog,
  updateBlog,
  deleteBlog,
};
