import { ICreateProductDTO } from '../providers/implementations/schemas/Product';
import CreateProductService from '../services/CreateProductService';
import { IHttpRequest, IHttpResponse } from './protocols/IHttp';
import { IRequestValidator } from './protocols/IRequestValidator';

export default class CreateProductController {
  constructor(
    private _createProductService: CreateProductService,
    private _bodyValidator: IRequestValidator,
  ) { }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const dto = await this._bodyValidator.parseAsync(httpRequest.body) as ICreateProductDTO;
    this._createProductService.execute(dto);
    return { status: 201, body: { message: 'Produto criado com sucesso!' } };
  }
}
