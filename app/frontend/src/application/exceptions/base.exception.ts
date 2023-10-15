class BaseException extends Error {
  constructor(message = 'Ocorreu um erro não esperado!') {
    super(message);
  }
}

export default BaseException;
