import ListProductsService from '../services/ListProductsService';
import { IHttpResponse } from './protocols/IHttp';

export default class ListProductsController {
  constructor(
    private _listProductsService: ListProductsService,
  ) { }

  async handle(): Promise<IHttpResponse> {
    const productsList = await this._listProductsService.execute();

    return { status: 200, body: productsList };
  }
}
