import { darken, lighten } from 'polished';

export const MainColor = '#ececec';
export const SecundaryColor = '#13121e';
export const AccentColor = '#12e497';

const Colors = {
  main: {
    100: lighten(0.4, MainColor),
    200: lighten(0.3, MainColor),
    300: lighten(0.2, MainColor),
    400: lighten(0.1, MainColor),
    500: MainColor,
    600: darken(0.1, MainColor),
    700: darken(0.2, MainColor),
    800: darken(0.3, MainColor),
    900: darken(0.4, MainColor),
  },
  secundary: {
    100: lighten(0.4, SecundaryColor),
    200: lighten(0.3, SecundaryColor),
    300: lighten(0.2, SecundaryColor),
    400: lighten(0.1, SecundaryColor),
    500: SecundaryColor,
    600: darken(0.1, SecundaryColor),
    700: darken(0.2, SecundaryColor),
    800: darken(0.3, SecundaryColor),
    900: darken(0.4, SecundaryColor),
  },
  accent: {
    100: lighten(0.4, AccentColor),
    200: lighten(0.3, AccentColor),
    300: lighten(0.2, AccentColor),
    400: lighten(0.1, AccentColor),
    500: AccentColor,
    600: darken(0.1, AccentColor),
    700: darken(0.2, AccentColor),
    800: darken(0.3, AccentColor),
    900: darken(0.4, AccentColor),
  },
} as const;

export default Colors;
