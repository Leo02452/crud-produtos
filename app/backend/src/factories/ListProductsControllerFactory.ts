import ListProductsController from '../controllers/ListProductsController';
import prismaModel from '../database/prisma';
import ProductRepository from '../repositories/implementations/ProductRepository';
import ListProductsService from '../services/ListProductsService';

export default class ListProductsControllerFactory {
  static make() {
    const productRepository = new ProductRepository(prismaModel.product);
    const listProductsService = new ListProductsService(
      productRepository,
    );

    const listProductsController = new ListProductsController(
      listProductsService,
    );

    return listProductsController;
  }
}
