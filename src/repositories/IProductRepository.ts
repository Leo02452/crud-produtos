import { IProduct } from '../entities/IProduct';
import {
  ICreateProductDTO,
  IUpdateProductDTO,
} from '../providers/implementations/schemas/Product';

export interface ICreateProductRepository {
  save(data: ICreateProductDTO): Promise<void>
}

export interface IFindAllProductsRepository {
  getAll(): Promise<IProduct[]>
}

export interface IUpdateProductRepository {
  update(id: number, data: IUpdateProductDTO): Promise<void>
}

export interface IDeleteProductRepository {
  delete(id: number): Promise<void>
}
