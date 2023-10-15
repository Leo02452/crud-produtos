import { Router } from 'express';
import CreateUserControllerFactory
  from '../factories/CreateUserControllerFactory';

const createUserController = CreateUserControllerFactory.make();

const route = Router();

route.post(
  '/',
  async (req, res) => {
    const response = await createUserController.handle(req);
    return res.status(response.status).json(response.body);
  },
);

export default route;
