export enum ErrorTypes {
  Conflict = 'conflict',
  Unauthorized = 'unauthorized',
}

type ErrorResponseObject = {
  message: string;
  httpStatus: number
};

export type ErrorCatalog = Record<ErrorTypes, ErrorResponseObject>;

export const errorCatalog: ErrorCatalog = {
  conflict: {
    message: 'Entidade já cadastrada',
    httpStatus: 409,
  },
  unauthorized: {
    message: 'Email ou senha incorretos',
    httpStatus: 401,
  },
};
