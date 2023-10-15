import ApiClient from '../../providers/api-client.provider';
import { ILoginDTO } from '../dto-and-entities/auth';
import { ICreateUserDTO } from '../dto-and-entities/user';

export const registerUser = async (dto: ICreateUserDTO) => {
  const { data } = await ApiClient.post('users', dto);
  return data;
};

export const getAuth = async (dto: ILoginDTO) => {
  const { data } = await ApiClient.post('auth', dto);
  return data;
};
