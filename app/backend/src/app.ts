import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler';
import {
  authRoutes,
  productRoutes,
  userRoutes,
} from './routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.app.get('/', (_req, res) => res.json({ ok: true }));
  }

  private config():void {
    this.app.use(express.json());
    this.app.use(cors({
      origin: 'http://localhost:3000',
      credentials: true,
    }));
    this.app.use('/users', userRoutes);
    this.app.use('/auth', authRoutes);
    this.app.use('/products', productRoutes);
    this.app.use(errorHandler);
  }

  public start(PORT: string | number | undefined):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };
export const { app } = new App();
