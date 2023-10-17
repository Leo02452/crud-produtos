import { useMutation, useQueryClient } from 'react-query';

import { useToast } from '@chakra-ui/react';
import { IProductDTO } from '../../application/dto-and-entities/product';
import { createProduct } from '../../application/services/product.service';
import { IErrorResponse } from '../../application/dto-and-entities/error';

export interface IUseCreateProductProps {
  onClose: () => void;
}

export default function useCreateProduct({ onClose }: IUseCreateProductProps) {
  const client = useQueryClient();

  const toast = useToast({
    position: 'bottom-right',
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
    onError: (err: IErrorResponse) => {
      toast({
        title: 'Erro!',
        description: err.response.data.error,
        status: 'error',
      });
    },
  });
}
