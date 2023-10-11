import { ICreateUserDTO } from '../providers/implementations/schemas/User';
import CreateUserService from '../services/CreateUserService';
import { IHttpRequest, IHttpResponse } from './protocols/IHttp';
import { IRequestValidator } from './protocols/IRequestValidator';

export default class CreateUserController {
  constructor(
    private _createUserService: CreateUserService,
    private _bodyValidator: IRequestValidator,
  ) { }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const dto = await this._bodyValidator.parseAsync(httpRequest.body) as ICreateUserDTO;
    const token = await this._createUserService.execute(dto);
    return { status: 201, body: { token } };
  }
}
