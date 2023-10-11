import { IUpdateProductDTO } from '../providers/implementations/schemas/Product';
import UpdateProductService from '../services/UpdateProductService';
import { IHttpRequest, IHttpResponse } from './protocols/IHttp';
import { IRequestValidator } from './protocols/IRequestValidator';

export default class UpdateProductController {
  constructor(
    private _updateProductService: UpdateProductService,
    private _bodyValidator: IRequestValidator,
  ) { }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const dto = await this._bodyValidator.parseAsync(httpRequest.body) as IUpdateProductDTO;
    const { id } = httpRequest.params as { id: string };
    await this._updateProductService.execute(id, dto);
    return { status: 200, body: { message: 'Produto atualizado com sucesso!' } };
  }
}
