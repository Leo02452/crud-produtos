import * as jwt from 'jsonwebtoken';
import { IUserTokenPayload } from '../../entities/IUser';
import { ITokenGeneratorProvider } from '../ITokenProvider';
import 'dotenv/config';

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

  generate(manager: IUserTokenPayload): string {
    const token = this._tokenHandler.sign(manager, this._secret, this._signOptions);
    return token;
  }
}
