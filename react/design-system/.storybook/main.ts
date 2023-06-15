import type { StorybookConfig } from "@storybook/react-vite";
import tsconfigPaths from 'vite-tsconfig-paths'
import * as path from 'path'

const config: StorybookConfig = {
  stories: [
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    const plugins = config.plugins || []
    return {
      ...config,
      plugins: [
        ...plugins,
        tsconfigPaths({
          projects: [
            path.resolve(__dirname, "../tsconfig.json")
          ],
        })
      ],
    };
  },
};
export default config;
