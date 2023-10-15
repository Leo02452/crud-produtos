import DeleteProductService from '../services/DeleteProductService';
import { IHttpRequest, IHttpResponse } from './protocols/IHttp';

export default class DeleteProductController {
  constructor(
    private _deleteProductService: DeleteProductService,
  ) { }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { id } = httpRequest.params as { id: string };
    await this._deleteProductService.execute(id);
    return { status: 200, body: { message: 'Produto deletado com sucesso!' } };
  }
}
