import { useMutation } from 'react-query';

import { useToast } from '@chakra-ui/react';
import { ICreateUserDTO } from '../../application/dto-and-entities/user';
import { registerUser } from '../../application/services/auth.service';

export default function useCreateUser() {
  const toast = useToast({
    position: 'top-right',
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
    onError: () => {
      toast({
        title: 'Erro!',
        description: 'Houve um erro ao tentar cadastrar o usuário.',
        status: 'error',
      });
    },
  });
}
