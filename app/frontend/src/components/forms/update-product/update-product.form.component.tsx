import { FormProvider, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { Stack } from '@chakra-ui/react';
import { IProductDTO } from '../../../application/dto-and-entities/product';

import TextInput from '../../inputs/text-input';

import { UpdateProductFormID } from './update-product.form.constants';
import { UpdateProductProps } from './update-product.form.types';
import UpdateProductFormValidationSchema from './update-product.form.validation-schema';

export default function UpdateProductForm({
  onSubmit,
  product,
}: UpdateProductProps) {
  const formProps = useForm<IProductDTO>({
    resolver: yupResolver(UpdateProductFormValidationSchema),
    defaultValues: {
      name: product.name,
      description: product.description,
      price: product.price,
    },
  });

  return (
    <FormProvider {...formProps}>
      <Stack
        id={UpdateProductFormID}
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
