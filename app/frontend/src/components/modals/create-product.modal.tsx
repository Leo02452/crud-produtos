import { useCallback } from 'react';

import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { IProductDTO } from '../../application/dto-and-entities/product';

import useCreateProduct from '../../hooks/mutations/create-product.mutation-hook';

import CreateProductForm from '../forms/create-product/create-product.form.component';
import { CreateProductFormID } from '../forms/create-product/create-product.form.constants';

export type CreateProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CreateProductModal({
  isOpen,
  onClose,
}: CreateProductModalProps) {
  const createProduct = useCreateProduct({ onClose });

  const onCreate = useCallback(
    async (dto: IProductDTO) => {
      createProduct.mutateAsync(dto);
    },
    [createProduct],
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text>Novo produto</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <CreateProductForm onSubmit={onCreate} />
        </ModalBody>
        <ModalFooter>
          <HStack>
            <Button colorScheme="red" onClick={onClose}>
              Cancelar
            </Button>
            <Button
              form={CreateProductFormID}
              type="submit"
              isLoading={createProduct.isLoading}
              color="secundary"
            >
              Salvar
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
