import { Router } from 'express';
import CreateProductControllerFactory
  from '../factories/implementations/CreateProductControllerFactory';
import ListProductsControllerFactory
  from '../factories/implementations/ListProductsControllerFactory';
import UpdateProductControllerFactory
  from '../factories/implementations/UpdateProductControllerFactory';
import DeleteProductControllerFactory
  from '../factories/implementations/DeleteProductControllerFactory';
import authValidation from '../middlewares/authValidation';

const createProductController = CreateProductControllerFactory.make();
const listProductsController = ListProductsControllerFactory.make();
const updateProductController = UpdateProductControllerFactory.make();
const deleteProductController = DeleteProductControllerFactory.make();

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
