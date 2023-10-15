import { IProductDTO } from '@app/application/dto-and-entities/product';

export type CreateProductProps = {
  onSubmit: (fields: IProductDTO) => void;
};
