import { IDeleteProductRepository } from '../repositories/IProductRepository';

export default class DeleteProductService {
  constructor(
    private _productRepository: IDeleteProductRepository,
  ) { }

  async execute(id: string): Promise<void> {
    await this._productRepository.delete(Number(id));
  }
}
