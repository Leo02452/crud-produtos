import { ICreateProductDTO } from '../providers/implementations/schemas/Product';
import { ICreateProductRepository } from '../repositories/IProductRepository';

export default class CreateProductService {
  constructor(
    private _productRepository: ICreateProductRepository,
  ) { }

  async execute(data: ICreateProductDTO): Promise<void> {
    await this._productRepository.save(data);
  }
}
