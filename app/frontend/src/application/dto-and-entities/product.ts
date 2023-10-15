export type IProductDTO = {
  name: string;
  description: string;
  price: string;
};

export type IProduct = IProductDTO & {
  id: string;
};
