import { ICreateProductDTO } from '../providers/implementations/schemas/Product';

export interface IProduct extends ICreateProductDTO {
  id: number
}
