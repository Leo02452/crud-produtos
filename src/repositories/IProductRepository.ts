import {
  ICreateProductDTO,
} from '../providers/implementations/schemas/Product';

export interface ICreateProductRepository {
  save(data: ICreateProductDTO): Promise<void>
}
