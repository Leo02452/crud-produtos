import { useMutation } from 'react-query';

import { useToast } from '@chakra-ui/react';

import { getAuth } from '../../application/services/auth.service';

import { ILoginDTO } from '../../application/dto-and-entities/auth';
import { IErrorResponse } from '../../application/dto-and-entities/error';

export default function useGetAuthentication() {
  const toast = useToast({
    position: 'top-right',
    isClosable: true,
  });

  return useMutation({
    mutationKey: 'create-token',
    mutationFn: async (dto: ILoginDTO) => getAuth(dto),
    onError: (err: IErrorResponse) => {
      toast({
        title: 'Erro!',
        description: err.response.data.error,
        status: 'error',
      });
    },
  });
}
