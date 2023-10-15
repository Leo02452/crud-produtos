import { SearchQueryFormFields } from '@app/components/forms/search-query/search-query.form.types';
import { useToast } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { getFilteredProducts } from '../../application/services/product.service';

export default function useGetFilteredProducts(dto: SearchQueryFormFields) {
  const toast = useToast({
    position: 'top-right',
    isClosable: true,
  });

  return useQuery(
    ['get-filtered-products', JSON.stringify(dto)],
    () => getFilteredProducts(dto),
    {
      onError: () => {
        toast({
          title: 'Erro!',
          description: 'Houve um erro ao tenta buscar os produtos!',
          status: 'error',
        });
      },
    },
  );
}
