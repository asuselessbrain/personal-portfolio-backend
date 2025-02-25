import express, { Request, Response } from 'express';
import cors from 'cors';
import blogRoute from './app/modules/blog/blog.router';
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/v1/blogs', blogRoute)

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'Welcome to the arfan ahmed portfolio!',
  });
});

export default app;
