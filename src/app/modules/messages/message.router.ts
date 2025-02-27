import express from 'express';
import { messageController } from './message.controller';

const messageRoute = express.Router();

messageRoute.get('/', messageController.getAllMessage);
messageRoute.post('/', messageController.createMessage);

export default messageRoute;
