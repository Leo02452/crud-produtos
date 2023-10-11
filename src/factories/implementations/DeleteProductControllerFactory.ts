import DeleteProductController from '../../controllers/DeleteProductController';
import prismaModel from '../../database/prisma';
import ProductRepository from '../../repositories/implementations/ProductRepository';
import DeleteProductService from '../../services/DeleteProductService';

export default class DeleteProductControllerFactory {
  static make() {
    const productRepository = new ProductRepository(prismaModel.product);
    const deleteProductService = new DeleteProductService(
      productRepository,
    );

    const deleteProductController = new DeleteProductController(
      deleteProductService,
    );

    return deleteProductController;
  }
}
