import ApiClient from '../../providers/api-client.provider';
import { IProduct, IProductDTO } from '../dto-and-entities/product';

const endpoint = 'products';

export const getAllProducts = async () => {
  const { data } = await ApiClient.get(`${endpoint}`);
  return data;
};

export const createProduct = async (dto: IProductDTO) => {
  const { data } = await ApiClient.post(`${endpoint}`, dto);
  return data;
};

export const editProduct = async (dto: IProduct) => {
  const { data } = await ApiClient.put(`${endpoint}/${dto.id}`, dto);
  return data;
};

export const deleteProduct = async (id: string) => {
  const { data } = await ApiClient.delete(`${endpoint}/${id}`);
  return data;
};
