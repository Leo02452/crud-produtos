import { useMutation, useQueryClient } from 'react-query';

import { useToast } from '@chakra-ui/react';
import { IErrorResponse } from '../../application/dto-and-entities/error';
import { deleteProduct } from '../../application/services/product.service';

export interface IUseDeleteProductProps {
  onClose: () => void;
}

export default function useDeleteProduct({ onClose }: IUseDeleteProductProps) {
  const client = useQueryClient();

  const toast = useToast({
    position: 'bottom-right',
    isClosable: true,
  });

  return useMutation({
    mutationKey: 'delete-product',
    mutationFn: async (id: string) => deleteProduct(id),
    onSuccess: () => {
      toast({
        title: 'Sucesso!',
        description: 'Produto deletado com sucesso.',
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
