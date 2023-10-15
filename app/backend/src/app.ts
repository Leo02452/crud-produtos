import express from 'express';
import 'express-async-errors';
import {
  userRoutes,
  authRoutes,
  productRoutes,
} from './routes';
import errorHandler from './middlewares/errorHandler';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.app.get('/', (_req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
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
