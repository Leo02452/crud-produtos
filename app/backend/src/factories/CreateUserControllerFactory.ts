import CreateUserController from '../controllers/CreateUserController';
import prismaModel from '../database/prisma';
import PasswordProviderAdapter from '../providers/implementations/PasswordProviderAdapter';
import TokenProvider from '../providers/implementations/TokenProviderAdapter';
import {
  createUserSchema,
} from '../providers/implementations/schemas/User';
import UserRepository from '../repositories/implementations/UserRepository';
import CreateUserService from '../services/CreateUserService';

export default class CreateUserControllerFactory {
  public static make() {
    const managerRepository = new UserRepository(prismaModel.user);
    const tokenProvider = new TokenProvider();
    const passwordProvider = new PasswordProviderAdapter();

    const createUserService = new CreateUserService(
      managerRepository,
      tokenProvider,
      passwordProvider,
    );

    const createUserController = new CreateUserController(
      createUserService,
      createUserSchema,
    );

    return createUserController;
  }
}
