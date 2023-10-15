import {
  IProduct,
  IProductDTO,
} from '../../../application/dto-and-entities/product';

export type UpdateProductProps = {
  onSubmit: (fields: IProductDTO) => void;
  product: IProduct;
};
