import { Button, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ILoginDTO } from '../application/dto-and-entities/auth';
import { LoginFormID } from '../components/forms/login/login.form.constants';
import LoginForm from '../components/forms/login/login.form.component';
import useAuth from '../hooks/contexts/auth.context-hook';
import useGetAuthentication from '../hooks/mutations/get-authentication.mutatition-hook';

export default function Login() {
  const auth = useAuth();
  const login = useGetAuthentication();
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (data: ILoginDTO) => {
      const result = await login.mutateAsync({
        ...data,
      });
      await auth.authenticate(result.token);
      navigate('/products');
    },
    [auth, login, navigate],
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
        <Heading textAlign="center">Login</Heading>
        <LoginForm onSubmit={onSubmit} />
        <Button
          form={LoginFormID}
          type="submit"
          isLoading={login.isLoading}
          color="secundary"
        >
          Entrar
        </Button>
        <Stack spacing={6}>
          <Stack spacing={0}>
            <Text textAlign="center" fontSize={14}>
              Não possui uma conta?
            </Text>
            <Link href="/registration" textAlign="center" fontSize={14}>
              Faça seu cadastro
            </Link>
          </Stack>
          <Link href="/products" textAlign="center" fontSize={14}>
            Visualizar produtos sem logar
          </Link>
        </Stack>
      </Stack>
    </Flex>
  );
}
