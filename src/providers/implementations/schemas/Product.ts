import { z } from 'zod';

const productBaseSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.string(),
});

type ICreateProductDTO = z.infer<typeof productBaseSchema>;

export {
  productBaseSchema,
  ICreateProductDTO,
};
