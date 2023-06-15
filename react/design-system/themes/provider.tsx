import ThemeProvider, { ThemeProviderProps } from '@mui/material/styles/ThemeProvider';
import { DefaultTheme } from '@mui/system';

export const UiThemeProvider = (props: ThemeProviderProps<DefaultTheme>) => {
  const { children, ...rest } = props;
  return <ThemeProvider {...rest}>{children}</ThemeProvider>;
};
