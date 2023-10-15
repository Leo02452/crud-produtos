import prismaModel from '../../database/prisma';
import { IProduct } from '../../entities/IProduct';
import {
  ICreateProductDTO,
  IUpdateProductDTO,
} from '../../providers/implementations/schemas/Product';
import {
  ICreateProductRepository,
  IDeleteProductRepository,
  IFindAllProductsRepository,
  IFindyProductByTermRepository,
  IUpdateProductRepository,
} from '../IProductRepository';

export default class ProductRepository implements
ICreateProductRepository,
IFindAllProductsRepository,
IUpdateProductRepository,
IDeleteProductRepository,
IFindyProductByTermRepository {
  constructor(
    private _model: typeof prismaModel.product,
  ) { }

  async save(data: ICreateProductDTO): Promise<void> {
    await this._model.create({ data });
  }

  async getAll(): Promise<IProduct[]> {
    const productsList = await this._model.findMany();

    return productsList;
  }

  async update(id: number, data: IUpdateProductDTO): Promise<void> {
    await this._model.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<void> {
    await this._model.delete({
      where: { id },
    });
  }

  async findByTerm(term: string): Promise<IProduct[] | []> {
    const filteredProductsList = await this._model.findMany({
      where: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        OR: [
          { name: {
            contains: term,
          } },
          { description: {
            contains: term,
          } },
        ],
      },
    });

    return filteredProductsList;
  }
}
