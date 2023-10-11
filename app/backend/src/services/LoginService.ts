import { ErrorTypes } from '../errors/catalog';
import { ILoginDTO } from '../providers/implementations/schemas/Login';
import { IPasswordValidatorProvider } from '../providers/IPasswordProvider';
import { ITokenGeneratorProvider } from '../providers/ITokenProvider';
import { IFindUserByEmail } from '../repositories/IUserRepository';

export default class LoginService {
  constructor(
    private _userRepository: IFindUserByEmail,
    private _passwordProvider: IPasswordValidatorProvider,
    private _tokenProvider: ITokenGeneratorProvider,
  ) { }

  async execute(data: ILoginDTO): Promise<string> {
    const user = await this._userRepository.findByEmail(data.email);

    if (!user) throw new Error(ErrorTypes.Unauthorized);

    const isCorrectPassword = await this._passwordProvider.validate(data.password, user.password);

    if (!isCorrectPassword) throw new Error(ErrorTypes.Unauthorized);

    const { password, ...userWithoutPassword } = user;

    const token = this._tokenProvider.generate(userWithoutPassword);

    return token;
  }
}
