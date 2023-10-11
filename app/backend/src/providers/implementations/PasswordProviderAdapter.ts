import bcrypt from 'bcrypt';
import {
  IPasswordEncryptorProvider,
  IPasswordValidatorProvider,
} from '../IPasswordProvider';

export default class PasswordProviderAdapter implements
IPasswordEncryptorProvider,
IPasswordValidatorProvider {
  private _passwordHandler: typeof bcrypt;

  constructor() {
    this._passwordHandler = bcrypt;
  }

  async encrypt(password: string): Promise<string> {
    const salt = await this._passwordHandler.genSalt(5);
    const hashPassword = await this._passwordHandler.hash(password, salt);
    return hashPassword;
  }

  async validate(password: string, hashPassword: string): Promise<boolean> {
    const isCorrectPassword = await this._passwordHandler.compare(password, hashPassword);

    return isCorrectPassword;
  }
}
