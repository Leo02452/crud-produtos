import CreateProductController from '../controllers/CreateProductController';
import prismaModel from '../database/prisma';
import { productBaseSchema } from '../providers/implementations/schemas/Product';
import ProductRepository from '../repositories/implementations/ProductRepository';
import CreateProductService from '../services/CreateProductService';

export default class CreateProductControllerFactory {
  static make() {
    const productRepository = new ProductRepository(prismaModel.product);

    const createProductService = new CreateProductService(
      productRepository,
    );

    const createProductController = new CreateProductController(
      createProductService,
      productBaseSchema,
    );

    return createProductController;
  }
}
