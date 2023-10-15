import ApiException from './api.exception';

class UnauthorizedException extends ApiException {
  constructor(
    code = 'unauthorized',
    message = 'Você não está autenticado ou a sua sessão expirou, por favor, faça o seu login!',
  ) {
    super(code, message);
  }
}

export default UnauthorizedException;
