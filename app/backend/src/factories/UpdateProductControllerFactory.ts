import UpdateProductController from '../../controllers/UpdateProductController';
import prismaModel from '../../database/prisma';
import { productBaseSchema } from '../../providers/implementations/schemas/Product';
import ProductRepository from '../../repositories/implementations/ProductRepository';
import UpdateProductService from '../../services/UpdateProductService';

export default class UpdateProductControllerFactory {
  static make() {
    const productRepository = new ProductRepository(prismaModel.product);
    const updateProductService = new UpdateProductService(
      productRepository,
    );

    const updateProductController = new UpdateProductController(
      updateProductService,
      productBaseSchema,
    );

    return updateProductController;
  }
}
