import bcrypt from 'bcrypt';
import {
  IPasswordEncryptorProvider,
} from '../IPasswordProvider';

export default class PasswordProviderAdapter implements
IPasswordEncryptorProvider {
  private _passwordHandler: typeof bcrypt;

  constructor() {
    this._passwordHandler = bcrypt;
  }

  async encrypt(password: string): Promise<string> {
    const salt = await this._passwordHandler.genSalt(5);
    const hashPassword = await this._passwordHandler.hash(password, salt);
    return hashPassword;
  }
}
