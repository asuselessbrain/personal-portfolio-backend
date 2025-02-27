import { IMessage } from './message.interface';
import { Message } from './message.model';

const createMessageInDB = async (data: IMessage) => {
  const result = await Message.create(data);
  return result;
};

const getAllMessageFromDB = async () => {
  const result = await Message.find();
  return result;
};

export const messageServices = {
  createMessageInDB,
  getAllMessageFromDB,
};
