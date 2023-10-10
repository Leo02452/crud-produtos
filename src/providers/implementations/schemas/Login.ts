/* eslint-disable @typescript-eslint/naming-convention */
import { z } from 'zod';

const loginSchema = z.object({
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

type ILoginDTO = z.infer<typeof loginSchema>;

export { loginSchema, ILoginDTO };
