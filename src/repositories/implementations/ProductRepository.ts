import prismaModel from '../../database/prisma';
import { IProduct } from '../../entities/IProduct';
import {
  ICreateProductDTO,
} from '../../providers/implementations/schemas/Product';
import {
  ICreateProductRepository,
  IFindAllProductsRepository,
} from '../IProductRepository';

export default class ProductRepository implements
ICreateProductRepository,
IFindAllProductsRepository {
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
}
