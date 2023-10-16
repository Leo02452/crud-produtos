import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler';
import {
  authRoutes,
  publicProductRoutes,
  privateProductRoutes,
  userRoutes,
} from './routes';
import authValidation from './middlewares/authValidation';

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
      res.header('Access-Control-Allow-Headers', ['Content-Type', 'Authorization']);
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
    this.app.use('/users', userRoutes);
    this.app.use('/auth', authRoutes);
    this.app.use('/products', publicProductRoutes);
    this.app.use(authValidation);
    this.app.use('/products', privateProductRoutes);
    this.app.use(errorHandler);
  }

  public start(PORT: string | number | undefined):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };
export const { app } = new App();
