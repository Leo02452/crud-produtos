import FindProductByTermController from '../controllers/FindProductByTermController';
import prismaModel from '../database/prisma';
import ProductRepository from '../repositories/implementations/ProductRepository';
import FindProductByTermService from '../services/FindProductByTermService';

export default class FindProductByTermControllerFactory {
  static make() {
    const productRepository = new ProductRepository(prismaModel.product);
    const findProductByTermService = new FindProductByTermService(
      productRepository,
    );

    const findProductByTermController = new FindProductByTermController(
      findProductByTermService,
    );

    return findProductByTermController;
  }
}
