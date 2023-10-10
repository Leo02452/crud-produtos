/* eslint-disable @typescript-eslint/naming-convention */
import { z } from 'zod';

const createUserSchema = z.object({
  name: z.string({
    required_error: 'Parâmetro ausente: name',
    invalid_type_error: 'Valor de name deve ser do tipo texto',
  }),
  email: z.string({
    required_error: 'Parâmetro ausente: email',
    invalid_type_error: 'Valor de email deve ser do tipo texto',
  }).email({
    message: 'O email deve ter um formato válido',
  }),
  password: z.string({
    required_error: 'Parâmetro ausente: password',
    invalid_type_error: 'Valor de password deve ser do tipo texto',
  }),
});

type ICreateUserDTO = z.infer<typeof createUserSchema>;

export { createUserSchema, ICreateUserDTO };
