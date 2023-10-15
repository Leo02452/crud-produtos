import { useMutation, useQueryClient } from 'react-query';

import { useToast } from '@chakra-ui/react';
import { deleteProduct } from '../../application/services/product.service';

export interface IUseDeleteProductProps {
  onClose: () => void;
}

export default function useDeleteProduct({ onClose }: IUseDeleteProductProps) {
  const client = useQueryClient();

  const toast = useToast({
    position: 'top-right',
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
    onError: () => {
      toast({
        title: 'Erro!',
        description: 'Houve um erro ao tentar deletar o produto.',
        status: 'error',
      });
    },
  });
}
