export enum ErrorTypes {
  Conflict = 'conflict',
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
};
