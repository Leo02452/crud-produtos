import { ChakraTheme, extendTheme } from '@chakra-ui/react';

// Foundations
import Colors from './foundations/colors';
import FontSizes from './foundations/font-sizes';
import Fonts from './foundations/fonts';

// Components
import Button from './components/button';
import Heading from './components/heading';
import Input from './components/input';

export const CustomTheme: Partial<ChakraTheme> = {
  colors: Colors,
  fontSizes: FontSizes,
  fonts: Fonts,
  components: {
    Button,
    Heading,
    Input,
  },
} as const;

const Theme = extendTheme(CustomTheme);

export default Theme;
