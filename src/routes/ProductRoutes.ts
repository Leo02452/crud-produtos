import { Router } from 'express';
import CreateProductControllerFactory
  from '../factories/implementations/CreateProductControllerFactory';
import ListProductsControllerFactory
  from '../factories/implementations/ListProductsControllerFactory';

const createProductController = CreateProductControllerFactory.make();
const listProductsController = ListProductsControllerFactory.make();

const route = Router();

route.get(
  '/',
  async (req, res) => {
    const response = await listProductsController.handle();
    return res.status(response.status).json(response.body);
  },
);

route.use(authValidation);

route.post(
  '/',
  async (req, res) => {
    const response = await createProductController.handle(req);
    return res.status(response.status).json(response.body);
  },
);

export default route;
