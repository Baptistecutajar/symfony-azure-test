import type { Preview } from "@storybook/react";
import { CssBaseline } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import {hopsTheme, eventTheme} from '../themes/base-themes';
import { UiThemeProvider } from '../themes/provider';

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      hops: hopsTheme,
      event: eventTheme
    },
    defaultTheme: 'event',
    Provider: UiThemeProvider,
    GlobalStyles: CssBaseline,
  })
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
