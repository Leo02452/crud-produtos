import BaseException from './base.exception';

class ApiException extends BaseException {
  constructor(public readonly string: string, message: string) {
    super(message);
  }
}

export default ApiException;
