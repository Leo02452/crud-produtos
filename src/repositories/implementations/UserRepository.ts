import prismaModel from '../../database/prisma/index';
import { IUser, IUserWithoutPassword } from '../../entities/IUser';
import { ICreateUserDTO } from '../../providers/implementations/schemas/User';
import { ICreateUserRepository, IFindUserByEmail } from '../IUserRepository';

export default class UserRepository implements
ICreateUserRepository,
IFindUserByEmail {
  constructor(
    private _model: typeof prismaModel.user,
  ) { }

  async findByEmail(email: string): Promise<IUser | null> {
    const user = await this._model.findFirst({ where: { email } });
    return user;
  }

  async save(user: ICreateUserDTO): Promise<IUserWithoutPassword> {
    const createdUser = await this._model.create({
      data: user,
    });

    const { password, ...userWithoutPassword } = createdUser;
    return userWithoutPassword;
  }
}
