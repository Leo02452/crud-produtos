import { useToast } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { getAllProducts } from '../../application/services/product.service';
import { IErrorResponse } from '../../application/dto-and-entities/error';

export default function useGetAllProducts() {
  const toast = useToast({
    position: 'bottom-right',
    isClosable: true,
  });

  return useQuery('get-products', () => getAllProducts(), {
    onError: (err: IErrorResponse) => {
      toast({
        title: 'Erro!',
        description: err?.response.data.error || 'xablau',
        status: 'error',
      });
    },
  });
}
