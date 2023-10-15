import { IProduct } from '../entities/IProduct';
import { IFindAllProductsRepository } from '../repositories/IProductRepository';

export default class ListProductsService {
  constructor(
    private _productRepository: IFindAllProductsRepository,
  ) { }

  async execute(): Promise<IProduct[]> {
    const productsList = await this._productRepository.getAll();
    return productsList;
  }
}
