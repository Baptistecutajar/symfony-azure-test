import { PaletteColorOptions } from '@mui/material/styles';

// ====== Various Tokens =====
interface AugmentedTheme {
  linkComponent: React.FC;
  customToken: string;
}

// ====== CUSTOM PALETTES =====
declare module '@mui/material/styles' {
  interface Theme extends AugmentedTheme {}
  // allow configuration using `createTheme`
  interface ThemeOptions extends Partial<AugmentedTheme> {}

  interface AugmentedPalette {
    tertiary: PaletteColorOptions;
  }
  interface Palette extends AugmentedPalette {}
  interface PaletteOptions extends AugmentedPalette {}
}

declare module '@mui/material' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}
