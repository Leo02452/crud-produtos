import prismaModel from '../../database/prisma';
import {
  ICreateProductDTO,
} from '../../providers/implementations/schemas/Product';
import {
  ICreateProductRepository,
} from '../IProductRepository';

export default class ProductRepository implements
ICreateProductRepository {
  constructor(
    private _model: typeof prismaModel.product,
  ) { }

  async save(data: ICreateProductDTO): Promise<void> {
    await this._model.create({ data });
  }
}
