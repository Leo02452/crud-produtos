import LoginController from '../controllers/LoginController';
import prismaModel from '../database/prisma';
import PasswordProviderAdapter from '../providers/implementations/PasswordProviderAdapter';
import TokenProviderAdapter from '../providers/implementations/TokenProviderAdapter';
import { loginSchema } from '../providers/implementations/schemas/Login';
import UserRepository from '../repositories/implementations/UserRepository';
import LoginService from '../services/LoginService';

export default class LoginControllerFactory {
  public static make() {
    const userRepository = new UserRepository(prismaModel.user);
    const passwordProvider = new PasswordProviderAdapter();
    const tokenProvider = new TokenProviderAdapter();

    const loginService = new LoginService(
      userRepository,
      passwordProvider,
      tokenProvider,
    );

    const loginController = new LoginController(
      loginService,
      loginSchema,
    );

    return loginController;
  }
}
