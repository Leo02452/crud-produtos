import {
  Button,
  Flex,
  HStack,
  Spacer,
  Stack,
  useDisclosure
} from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { IProduct } from '../application/dto-and-entities/product';
import ProductCard from '../components/cards/product.card';
import CreateProductModal from '../components/modals/create-product.modal';
import useAuth from '../hooks/contexts/auth.context-hook';
import useGetAllProducts from '../hooks/queries/get-products.query-hook';

export default function Products() {
  const { isAuthenticated } = useAuth();
  const createProductModalControl = useDisclosure();

  const { data } = useGetAllProducts();

  return (
    <Flex
      width="100vw"
      height="100vh"
      flexDirection="column"
      alignItems="center"
      backgroundColor="main.500"
    >
      <CreateProductModal
        isOpen={createProductModalControl.isOpen}
        onClose={createProductModalControl.onClose}
      />
        {isAuthenticated && (
          <Button onClick={createProductModalControl.onOpen} color="secundary">
            Criar novo produto
          </Button>
        )
        }
      <Stack width="90%" flexDirection="row" flexGrow={1} spacing={8} p={4}>
        {data?.map((product: IProduct) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))
        }
      </Stack>
    </Flex>
  );
}
