import { IUserTokenPayload } from '../entities/IUser';

export interface ITokenGeneratorProvider {
  generate(data: IUserTokenPayload): string
}
