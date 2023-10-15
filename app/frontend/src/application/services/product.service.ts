import ApiClient from '../../providers/api-client.provider';
import {
  IProductDTO
} from '../dto-and-entities/product';

const endpoint = 'products';

export const getAllProducts = async () => {
  const { data } = await ApiClient.get(`${endpoint}`);
  return data;
};

export const createProduct = async (dto: IProductDTO) => {
  const { data } = await ApiClient.post(`${endpoint}`, dto);
  return data;
};

