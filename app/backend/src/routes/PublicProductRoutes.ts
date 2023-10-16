import { Router } from 'express';
import ListProductsControllerFactory from '../factories/ListProductsControllerFactory';
import FindProductByTermControllerFactory from '../factories/FindProductByTermControllerFactory';

const listProductsController = ListProductsControllerFactory.make();
const findProductByTermController = FindProductByTermControllerFactory.make();

const route = Router();

route.get(
  '/',
  async (req, res) => {
    const response = await listProductsController.handle();
    return res.status(response.status).json(response.body);
  },
);

route.get(
  '/search',
  async (req, res) => {
    const response = await findProductByTermController.handle(req);
    return res.status(response.status).json(response.body);
  },
);

export default route;
