import { IProduct } from '../entities/IProduct';
import {
  ICreateProductDTO,
} from '../providers/implementations/schemas/Product';

export interface ICreateProductRepository {
  save(data: ICreateProductDTO): Promise<void>
}

export interface IFindAllProductsRepository {
  getAll(): Promise<IProduct[]>
}
