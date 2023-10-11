import { ErrorTypes } from '../errors/catalog';
import { ICreateUserDTO } from '../providers/implementations/schemas/User';
import { IPasswordEncryptorProvider } from '../providers/IPasswordProvider';
import { ITokenGeneratorProvider } from '../providers/ITokenProvider';
import { ICreateUserRepository } from '../repositories/IUserRepository';

export default class CreateUserService {
  constructor(
    private _userRepository: ICreateUserRepository,
    private _tokenProvider: ITokenGeneratorProvider,
    private _passwordProvider: IPasswordEncryptorProvider,
  ) { }

  async execute(data: ICreateUserDTO) {
    const userAlreadyExists = await this._userRepository.findByEmail(data.email);

    if (userAlreadyExists) throw new Error(ErrorTypes.Conflict);

    const encryptedPassword = await this._passwordProvider.encrypt(data.password);

    const userWithoutPassword = await this._userRepository.save({
      ...data,
      password: encryptedPassword,
    });

    const token = this._tokenProvider.generate(userWithoutPassword);

    return token;
  }
}
