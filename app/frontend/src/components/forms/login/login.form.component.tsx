import { Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { ILoginDTO } from '../../../application/dto-and-entities/auth';
import TextInput from '../../inputs/text-input';
import { LoginFormID } from './login.form.constants';
import { LoginFormProps } from './login.form.types';
import LoginFormValidationSchema from './login.form.validation-schema';

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const formProps = useForm<ILoginDTO>({
    resolver: yupResolver(LoginFormValidationSchema),
  });

  return (
    <FormProvider {...formProps}>
      <Stack
        as="form"
        id={LoginFormID}
        onSubmit={formProps.handleSubmit(onSubmit)}
        spacing={4}
      >
        <TextInput
          name="email"
          label="Email"
          placeholder="Digite seu email"
          isRequired
        />
        <TextInput
          name="password"
          label="Senha"
          placeholder="Digite sua senha"
          isObscure
          isRequired
        />
      </Stack>
    </FormProvider>
  );
}
