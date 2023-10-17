import { useMutation } from 'react-query';

import { useToast } from '@chakra-ui/react';
import { ICreateUserDTO } from '../../application/dto-and-entities/user';
import { registerUser } from '../../application/services/auth.service';
import { IErrorResponse } from '../../application/dto-and-entities/error';

export default function useCreateUser() {
  const toast = useToast({
    position: 'bottom-right',
    isClosable: true,
  });

  return useMutation({
    mutationKey: 'create-user',
    mutationFn: async (dto: ICreateUserDTO) => registerUser(dto),
    onSuccess: () => {
      toast({
        title: 'Sucesso!',
        description: 'Usuário criado com sucesso.',
        status: 'success',
      });
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
