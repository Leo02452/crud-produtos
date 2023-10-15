import { Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { ICreateUserDTO } from '../../../application/dto-and-entities/user';
import TextInput from '../../inputs/text-input';
import { RegisterUserFormID } from './create-user.form.constants';
import { RegisterUserFormProps } from './create-user.form.types';
import RegisterUserFormValidationSchema from './create-user.form.validation-schema';

export default function RegisterUserForm({ onSubmit }: RegisterUserFormProps) {
  const formProps = useForm<ICreateUserDTO>({
    resolver: yupResolver(RegisterUserFormValidationSchema),
  });

  return (
    <FormProvider {...formProps}>
      <Stack
        as="form"
        id={RegisterUserFormID}
        onSubmit={formProps.handleSubmit(onSubmit)}
      >
        <TextInput
          name="name"
          label="Nome"
          placeholder="Digite o seu nome"
          isRequired
        />
        <TextInput
          name="email"
          label="Email"
          placeholder="Digite o seu melhor email"
          isRequired
        />
        <TextInput
          name="password"
          label="Senha"
          placeholder="Crie uma senha"
          isObscure
        />
      </Stack>
    </FormProvider>
  );
}
