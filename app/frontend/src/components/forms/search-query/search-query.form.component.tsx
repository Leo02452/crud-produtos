import { FormProvider, useForm } from 'react-hook-form';

import { Stack } from '@chakra-ui/react';

import TextInput from '../../inputs/text-input';

import {
  SearchQueryFormFields,
  SearchQueryFormProps,
} from './search-query.form.types';

export default function SearchQueryForm({ onUpdate }: SearchQueryFormProps) {
  const formProps = useForm<SearchQueryFormFields>({});

  formProps.watch((data) => {
    onUpdate({
      search: data.search,
    });
  });

  return (
    <FormProvider {...formProps}>
      <Stack as="form" flexGrow={1}>
        <TextInput name="search" placeholder="Digite para pesquisar..." />
      </Stack>
    </FormProvider>
  );
}
