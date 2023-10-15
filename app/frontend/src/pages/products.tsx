/* eslint-disable prettier/prettier */
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
import UpdateProductModal from '../components/modals/update-product.modal';
import useAuth from '../hooks/contexts/auth.context-hook';
import useGetAllProducts from '../hooks/queries/get-products.query-hook';
import SearchQueryForm from '../components/forms/search-query/search-query.form.component';
import useGetFilteredProducts from '../hooks/queries/get-filtered-products.query-hook';
import { SearchQueryFormFields } from '../components/forms/search-query/search-query.form.types';

export default function Products() {
  const [productSearchQuery, setProductSearchQuery] = useState<SearchQueryFormFields>(
    { search: '' },
  );

  const { isAuthenticated } = useAuth();
  const createProductModalControl = useDisclosure();
  const updateProductModalControl = useDisclosure();

  const { data } = useGetAllProducts();
  const filteredProductsList = useGetFilteredProducts(productSearchQuery);

  const [productSelected, setProductSelected] = useState<IProduct | null>(null);

  const onOpenProductModal = useCallback(
    (product: IProduct) => {
      setProductSelected(product);
      updateProductModalControl.onOpen();
    },
    [updateProductModalControl],
  );

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
      {productSelected && isAuthenticated && (
        <UpdateProductModal
          isOpen={updateProductModalControl.isOpen}
          onClose={updateProductModalControl.onClose}
          product={productSelected}
        />
      )}
      <HStack width="90%" p={4}>
        <SearchQueryForm onUpdate={setProductSearchQuery} />
        <Spacer />
        {isAuthenticated && (
          <Button onClick={createProductModalControl.onOpen} color="secundary">
            Criar novo produto
          </Button>
        )}
      </HStack>
      <Stack width="90%" flexDirection="row" flexGrow={1} spacing={8} p={4}>
        {productSearchQuery.search !== '' ? (
          filteredProductsList.data?.map((product: IProduct) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={onOpenProductModal}
            />
          ))
        ) : (
          data?.map((product: IProduct) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={onOpenProductModal}
            />
          ))
        )
        }
      </Stack>
    </Flex>
  );
}
