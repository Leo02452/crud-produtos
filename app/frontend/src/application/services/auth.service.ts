import ApiClient from '../../providers/api-client.provider';
import { ICreateUserDTO } from '../dto-and-entities/user';

export const registerUser = async (dto: ICreateUserDTO) => {
  const { data } = await ApiClient.post('users', dto);
  return data;
};

