import { NextFunction, Request, Response } from 'express';
import TokenProviderAdapter from '../providers/implementations/TokenProviderAdapter';

const tokenProviderAdapter = new TokenProviderAdapter();

const authValidation = (req: Request, _res: Response, next: NextFunction) => {
  const { authorization } = req.headers as { authorization: string };
  tokenProviderAdapter.validate(authorization);

  next();
};

export default authValidation;
