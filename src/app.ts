import express, { Request, Response } from 'express';
import cors from 'cors';
import blogRoute from './app/modules/blog/blog.router';
import messageRoute from './app/modules/messages/message.router';
import projectRoute from './app/modules/projects/projects.router';
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/v1/blogs', blogRoute);
app.use('/api/v1/messages', messageRoute);
app.use('/api/v1/projects', projectRoute);

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'Welcome to the arfan ahmed portfolio!',
  });
});

export default app;
