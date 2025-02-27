import { model, Schema } from 'mongoose';
import { IMessage } from './message.interface';

const messageSchema = new Schema<IMessage>(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
        'Please enter a valid Gmail address',
      ],
    },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const Message = model<IMessage>('Message', messageSchema);
