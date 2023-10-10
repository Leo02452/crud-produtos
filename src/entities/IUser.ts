import { JwtPayload } from 'jsonwebtoken';
import { ICreateUserDTO } from '../providers/implementations/schemas/User';

export interface IUser extends ICreateUserDTO {
  id: number
}

export type IUserWithoutPassword = Omit<IUser, 'password'>;

export interface IUserTokenPayload extends JwtPayload, IUserWithoutPassword { }
