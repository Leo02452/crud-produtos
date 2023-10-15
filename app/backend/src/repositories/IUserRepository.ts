import { IUser, IUserWithoutPassword } from '../entities/IUser';
import { ICreateUserDTO } from '../providers/implementations/schemas/User';

export interface IFindUserByEmail {
  findByEmail(email: string): Promise<IUser | null>
}

export interface ICreateUserRepository extends IFindUserByEmail {
  save(manager: ICreateUserDTO): Promise<IUserWithoutPassword>
}
