import { FormProvider, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { Stack } from '@chakra-ui/react';
import { IProductDTO } from '../../../application/dto-and-entities/product';

import TextInput from '../../inputs/text-input';

import { CreateProductFormID } from './create-product.form.constants';
import { CreateProductProps } from './create-product.form.types';
import CreateProductFormValidationSchema from './create-product.form.validation-schema';

export default function CreateProductForm({ onSubmit }: CreateProductProps) {
  const formProps = useForm<IProductDTO>({
    resolver: yupResolver(CreateProductFormValidationSchema),
  });

  return (
    <FormProvider {...formProps}>
      <Stack
        id={CreateProductFormID}
        as="form"
        onSubmit={formProps.handleSubmit(onSubmit)}
      >
        <TextInput
          name="name"
          label="Nome do produto"
          placeholder="Digite o nome do produto"
          isRequired
        />
        <TextInput
          name="description"
          label="Descrição"
          placeholder="Dê uma descrição para o produto"
          isRequired
        />
        <TextInput
          name="price"
          label="Preço do produto"
          placeholder="Digite o preço do produto"
          isRequired
        />
      </Stack>
    </FormProvider>
  );
}
