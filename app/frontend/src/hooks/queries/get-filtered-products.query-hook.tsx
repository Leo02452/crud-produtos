import { SearchQueryFormFields } from '@app/components/forms/search-query/search-query.form.types';
import { useToast } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { getFilteredProducts } from '../../application/services/product.service';
import { IErrorResponse } from '../../application/dto-and-entities/error';

export default function useGetFilteredProducts(dto: SearchQueryFormFields) {
  const toast = useToast({
    position: 'bottom-right',
    isClosable: true,
  });

  return useQuery(
    ['get-filtered-products', JSON.stringify(dto)],
    () => getFilteredProducts(dto),
    {
      onError: (err: IErrorResponse) => {
        toast({
          title: 'Erro!',
          description: err.response.data.error,
          status: 'error',
        });
      },
    },
  );
}
