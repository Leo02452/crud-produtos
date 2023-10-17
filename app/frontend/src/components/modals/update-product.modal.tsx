import { useCallback } from 'react';

import {
  Button,
  HStack,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { UilTrash } from '@iconscout/react-unicons';
import {
  IProduct,
  IProductDTO,
} from '../../application/dto-and-entities/product';
import useDeleteProduct from '../../hooks/mutations/delete-product.mutation-hook';

import useUpdateProduct from '../../hooks/mutations/update-product.mutation-hook';

import UpdateProductForm from '../forms/update-product/update-product.form.component';
import { UpdateProductFormID } from '../forms/update-product/update-product.form.constants';

export type UpdateProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  product: IProduct;
};

export default function UpdateProductModal({
  isOpen,
  onClose,
  product,
}: UpdateProductModalProps) {
  const deleteProduct = useDeleteProduct({ onClose });
  const updateProduct = useUpdateProduct({ onClose });

  const onUpdate = useCallback(
    async (dto: IProductDTO) => {
      try {
        await updateProduct.mutateAsync({
          id: product.id,
          ...dto,
        });
      } catch (error) {
        console.error(error);
      }
    },
    [updateProduct, product.id],
  );

  const onDelete = useCallback(async () => {
    try {
      await deleteProduct.mutateAsync(product.id);
    } catch (error) {
      console.error(error);
    }
  }, [deleteProduct, product.id]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text>Editar ou excluir produto</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <UpdateProductForm onSubmit={onUpdate} product={product} />
        </ModalBody>
        <ModalFooter>
          <HStack>
            <Button
              colorScheme="red"
              onClick={onDelete}
              isLoading={deleteProduct.isLoading}
              rightIcon={<Icon as={UilTrash} />}
            >
              Deletar
            </Button>
            <Button
              form={UpdateProductFormID}
              type="submit"
              isLoading={updateProduct.isLoading}
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
