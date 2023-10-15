import { Button, Flex, Heading, Link, Stack } from '@chakra-ui/react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICreateUserDTO } from '../application/dto-and-entities/user';
import RegisterUserForm from '../components/forms/create-user/create-user.form.component';
import { RegisterUserFormID } from '../components/forms/create-user/create-user.form.constants';
import useAuth from '../hooks/contexts/auth.context-hook';
import useCreateUser from '../hooks/mutations/create-user.mutation-hook';

export default function Registration() {
  const createUser = useCreateUser();
  const auth = useAuth();
  const navigate = useNavigate();

  const onCreate = useCallback(
    async (dto: ICreateUserDTO) => {
      const result = await createUser.mutateAsync(dto);
      await auth.authenticate(result.token);
      navigate('/products');
    },
    [createUser, navigate, auth],
  );

  return (
    <Flex
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      backgroundColor="main.500"
    >
      <Stack
        justifyContent="center"
        spacing={8}
        border="1px"
        borderColor="main.500"
        rounded="lg"
        p={8}
        height="fit-content"
        boxShadow="xl"
      >
        <Heading textAlign="center">Crie sua conta</Heading>
        <RegisterUserForm onSubmit={onCreate} />
        <Button
          form={RegisterUserFormID}
          type="submit"
          isLoading={createUser.isLoading}
          color="secundary"
        >
          Registrar
        </Button>
        <Link href="/signin" textAlign="center" fontSize={14}>
          Voltar para login
        </Link>
      </Stack>
    </Flex>
  );
}
