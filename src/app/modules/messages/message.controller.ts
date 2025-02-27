import { Request, Response } from 'express';
import { messageServices } from './message.services';

const createMessage = async (req: Request, res: Response) => {
  try {
    const message = req.body;
    const result = await messageServices.createMessageInDB(message);
    res.status(201).json({
      success: true,
      message: 'Message created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to create message',
      data: err,
    });
  }
};

const getAllMessage = async (req: Request, res: Response) => {
  try {
    const result = await messageServices.getAllMessageFromDB();
    res.status(200).json({
      success: true,
      message: 'All messages retrieved successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to get messages',
      error: err,
    });
  }
};

export const messageController = {
  createMessage,
  getAllMessage,
};
