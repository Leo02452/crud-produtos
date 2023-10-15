import FindProductByTermService from '../services/FindProductByTermService';
import { IHttpRequest, IHttpResponse } from './protocols/IHttp';

export default class FindProductByTermController {
  constructor(
    private _findProductByTermService: FindProductByTermService,
  ) { }

  async handle(req: IHttpRequest):Promise<IHttpResponse> {
    const { term } = req.query as { term: string };
    const filteredProductsList = await this._findProductByTermService.execute(term);
    return { status: 200, body: filteredProductsList };
  }
}
