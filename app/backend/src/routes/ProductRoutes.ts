import { Router } from 'express';
import CreateProductControllerFactory from '../factories/CreateProductControllerFactory';
import DeleteProductControllerFactory from '../factories/DeleteProductControllerFactory';
import ListProductsControllerFactory from '../factories/ListProductsControllerFactory';
import UpdateProductControllerFactory from '../factories/UpdateProductControllerFactory';
import FindProductByTermControllerFactory from '../factories/FindProductByTermControllerFactory';
// import authValidation from '../middlewares/authValidation';

const createProductController = CreateProductControllerFactory.make();
const listProductsController = ListProductsControllerFactory.make();
const updateProductController = UpdateProductControllerFactory.make();
const deleteProductController = DeleteProductControllerFactory.make();
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

// route.use(authValidation);

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
