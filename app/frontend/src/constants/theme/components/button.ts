import { ComponentStyleConfig } from '@chakra-ui/react';

const Button: ComponentStyleConfig = {
  defaultProps: {
    variant: 'solid',
    colorScheme: 'accent',
  },
  variants: {
    ghost: {
      _active: {
        bg: 'gray.100',
      },
    },
  },
};

export default Button;
