import { Router } from 'express';
import CreateProductControllerFactory from '../factories/CreateProductControllerFactory';
import DeleteProductControllerFactory from '../factories/DeleteProductControllerFactory';
import UpdateProductControllerFactory from '../factories/UpdateProductControllerFactory';

const createProductController = CreateProductControllerFactory.make();
const updateProductController = UpdateProductControllerFactory.make();
const deleteProductController = DeleteProductControllerFactory.make();

const route = Router();

route.post(
  '/',
  async (req, res) => {
    const response = await createProductController.handle(req);
    return res.status(response.status).json(response.body);
  },
);

route.put(
  '/:id',
  async (req, res) => {
    const response = await updateProductController.handle(req);
    return res.status(response.status).json(response.body);
  },
);

route.delete(
  '/:id',
  async (req, res) => {
    const response = await deleteProductController.handle(req);
    return res.status(response.status).json(response.body);
  },
);

export default route;
