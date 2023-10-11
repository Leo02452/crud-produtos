import * as jwt from 'jsonwebtoken';
import { IUserTokenPayload } from '../../entities/IUser';
import { ITokenGeneratorProvider } from '../ITokenProvider';
import 'dotenv/config';
import { ErrorTypes } from '../../errors/catalog';

const secret = process.env.JWT_SECRET || '';

export default class TokenProviderAdapter implements ITokenGeneratorProvider {
  private _tokenHandler;
  private _secret: string;
  private _signOptions: jwt.SignOptions;

  constructor() {
    this._tokenHandler = jwt;
    this._secret = secret;
    this._signOptions = { expiresIn: '7d', algorithm: 'HS256' };
  }

  generate(user: IUserTokenPayload): string {
    const token = this._tokenHandler.sign(user, this._secret, this._signOptions);
    return token;
  }

  validate(token: string) {
    try {
      this._tokenHandler.verify(token, this._secret, this._signOptions);
    } catch (error) {
      throw new Error(ErrorTypes.NonAuthenticated);
    }
  }
}
