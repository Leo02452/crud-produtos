import { useMutation, useQueryClient } from 'react-query';

import { useToast } from '@chakra-ui/react';
import { IProduct } from '../../application/dto-and-entities/product';
import { editProduct } from '../../application/services/product.service';

export interface IUseUpdateProductProps {
  onClose: () => void;
}

export default function useUpdateProduct({ onClose }: IUseUpdateProductProps) {
  const client = useQueryClient();

  const toast = useToast({
    position: 'top-right',
    isClosable: true,
  });

  return useMutation({
    mutationKey: 'update-product',
    mutationFn: async (dto: IProduct) => editProduct(dto),
    onSuccess: () => {
      toast({
        title: 'Sucesso!',
        description: 'Produto atualizado com sucesso.',
        status: 'success',
      });
      client.invalidateQueries(['get-products']);
      onClose();
    },
    onError: () => {
      toast({
        title: 'Erro!',
        description: 'Houve um erro ao tentar atualizar o produto.',
        status: 'error',
      });
    },
  });
}
