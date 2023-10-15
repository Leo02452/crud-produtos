import { IProduct } from '../entities/IProduct';
import { IFindyProductByTermRepository } from '../repositories/IProductRepository';

export default class FindProductByTermService {
  constructor(
    private _productRepository: IFindyProductByTermRepository,
  ) { }

  async execute(term: string): Promise<IProduct[] | []> {
    const filteredProductsList = await this._productRepository.findByTerm(term);
    return filteredProductsList;
  }
}
