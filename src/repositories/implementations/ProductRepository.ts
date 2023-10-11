import prismaModel from '../../database/prisma';
import { IProduct } from '../../entities/IProduct';
import {
  ICreateProductDTO,
  IUpdateProductDTO,
} from '../../providers/implementations/schemas/Product';
import {
  ICreateProductRepository,
  IFindAllProductsRepository,
  IUpdateProductRepository,
} from '../IProductRepository';

export default class ProductRepository implements
ICreateProductRepository,
IFindAllProductsRepository,
IUpdateProductRepository {
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
}
