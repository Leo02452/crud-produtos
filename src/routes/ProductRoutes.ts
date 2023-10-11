import { Router } from 'express';
import CreateProductControllerFactory
  from '../factories/implementations/CreateProductControllerFactory';

const createProductController = CreateProductControllerFactory.make();

const route = Router();

route.use(authValidation);

route.post(
  '/',
  async (req, res) => {
    const response = await createProductController.handle(req);
    return res.status(response.status).json(response.body);
  },
);

export default route;
