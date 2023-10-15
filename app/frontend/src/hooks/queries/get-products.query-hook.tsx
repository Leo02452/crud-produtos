import { useToast } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { getAllProducts } from '../../application/services/product.service';

export default function useGetAllProducts() {
  const toast = useToast({
    position: 'top-right',
    isClosable: true,
  });

  return useQuery('get-products', () => getAllProducts(), {
    onError: () => {
      toast({
        title: 'Erro!',
        description: 'Houve um erro ao tenta buscar os produtos!',
        status: 'error',
      });
    },
  });
}
