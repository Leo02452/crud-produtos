import { useMutation } from 'react-query';

import { useToast } from '@chakra-ui/react';
import UnauthorizedException from '../../application/exceptions/unauthorized.exception';

import { getAuth } from '../../application/services/auth.service';

import { ILoginDTO } from '../../application/dto-and-entities/auth';

export default function useGetAuthentication() {
  const toast = useToast({
    position: 'top-right',
    isClosable: true,
  });

  return useMutation({
    mutationKey: 'create-token',
    mutationFn: async (dto: ILoginDTO) => getAuth(dto),
    onError: (err) => {
      if (err instanceof UnauthorizedException) {
        toast({
          title: 'Erro!',
          description: 'Usuário ou senha inválidos.',
          status: 'error',
        });
        return;
      }

      toast({
        title: 'Erro!',
        description: 'Houve um erro ao tentar fazer o login.',
        status: 'error',
      });
    },
  });
}
