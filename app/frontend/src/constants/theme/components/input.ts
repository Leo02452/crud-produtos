import { ComponentStyleConfig } from '@chakra-ui/react';

const Input: ComponentStyleConfig = {
  defaultProps: {
    variant: 'outline',
  },
  variants: {
    outline: () => ({
      field: {
        borderWidth: '1px',
        borderColor: 'gray.300',
        _focus: {
          shadow: 'outline',
          borderColor: 'accent.500',
        },
        '::placeholder': {
          color: 'gray.300',
        },
      },
    }),
  },
};

export default Input;
