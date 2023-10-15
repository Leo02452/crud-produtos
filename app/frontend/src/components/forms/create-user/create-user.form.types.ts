import { ICreateUserDTO } from '../../../application/dto-and-entities/user';

export type RegisterUserFormProps = {
  onSubmit(data: ICreateUserDTO): void;
};
