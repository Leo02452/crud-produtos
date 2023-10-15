import { Box, Spacer, Text } from '@chakra-ui/react';
import { IProduct } from '../../application/dto-and-entities/product';

export type IProductCardProps = {
  product: IProduct;
  onProductClick: (product: IProduct) => void;
};

export default function ProductCard({
  product,
  onProductClick,
}: IProductCardProps) {
  return (
    <Box
      _hover={{ bg: 'gray.100' }}
      onClick={() => onProductClick(product)}
      transition="all 0.2s ease-in-out"
      cursor="pointer"
      border="1px"
      borderColor="main.500"
      boxShadow="md"
      boxSize={48}
      rounded="xl"
      p={4}
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
    >
      <Text fontSize={20} mb={2}>
        {product.name}
      </Text>
      <Text fontSize={12} mb={4}>
        {product.description}
      </Text>
      <Spacer />
      <Text fontSize={20}>
        R$
        {product.price}
      </Text>
    </Box>
  );
}
