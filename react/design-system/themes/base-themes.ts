import { ThemeOptions, createTheme } from '@mui/material/styles';

/**
 * Get radius in px depending on design system value
 * @param radius
 * @returns radius in px
 */
export const radius = (radius: 0 | 1 | 2 | 3 | 4 | 5): string => {
  const radiuses = [0, 4, 8, 16, 24, 32];
  return radiuses[radius] + 'px';
};

export const createFibaTheme = (theme: ThemeOptions) =>
  createTheme({
    ...theme,
    spacing: [0, 4, 8, 16, 24, 32, 40, 48, 64, 80, 96, 128, 160],
  });
export const hopsTheme = createFibaTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#D6EA54',
    },
    secondary: {
      main: '#92FFDE',
    },
    tertiary: {
      main: '#FF3A6A',
    },
    background: {
      default: '#111720',
      paper: '#2E333B',
    },
  },
});

export const createEventTheme = (theme: ThemeOptions) =>
  createFibaTheme({
    ...theme,
    spacing: [0, 4, 8, 16, 24, 32, 40, 48, 64, 80, 96, 128, 160],
  });
export const eventTheme = createEventTheme({
  customToken: '50%',
  palette: {
    mode: 'light',
    primary: {
      main: '#FF2D00',
    },
    secondary: {
      main: '#0926D6',
    },
    tertiary: {
      main: '#FFBE00',
    },
    background: {
      default: '#E8E8F0',
      paper: '#ffffff',
    },
  },
});
