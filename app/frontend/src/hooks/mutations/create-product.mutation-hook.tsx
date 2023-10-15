import { useMutation, useQueryClient } from 'react-query';

import { useToast } from '@chakra-ui/react';
import { IProductDTO } from '../../application/dto-and-entities/product';
import { createProduct } from '../../application/services/product.service';

export interface IUseCreateProductProps {
  onClose: () => void;
}

export default function useCreateProduct({ onClose }: IUseCreateProductProps) {
  const client = useQueryClient();

  const toast = useToast({
    position: 'top-right',
    isClosable: true,
  });

  return useMutation({
    mutationKey: 'create-product',
    mutationFn: async (dto: IProductDTO) => createProduct(dto),
    onSuccess: () => {
      toast({
        title: 'Sucesso!',
        description: 'Produto criado com sucesso.',
        status: 'success',
      });
      client.invalidateQueries(['get-products']);
      onClose();
    },
    onError: () => {
      toast({
        title: 'Erro!',
        description: 'Houve um erro ao tentar criar o produto.',
        status: 'error',
      });
    },
  });
}
