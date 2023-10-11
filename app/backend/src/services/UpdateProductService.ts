import { IUpdateProductDTO } from '../providers/implementations/schemas/Product';
import { IUpdateProductRepository } from '../repositories/IProductRepository';

export default class UpdateProductService {
  constructor(
    private _productRepository: IUpdateProductRepository,
  ) { }

  async execute(id: string, dto: IUpdateProductDTO): Promise<void> {
    await this._productRepository.update(Number(id), dto);
  }
}
