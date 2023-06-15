// @ts-check
/**
 * @typedef {import('next').NextConfig} NextConfig
 * @typedef {import('webpack').Configuration} WebpackConfig
 * @typedef {import('next/dist/server/config-shared').WebpackConfigContext} WebpackConfigContext
 * @typedef {(config: WebpackConfig, context: WebpackConfigContext) => any} NextWebpackConfig
 * @typedef {import("./src/lib/__generated/graphql.types").SiteQuery} SiteQuery
 */
const nextConfig = async () => {
  const output = /** @type {NextConfig['output']} */ (process.env.NEXT_OUTPUT_MODE);
  const slug = process.env.CONTENTFUL_SITE_SLUG || '';
  /** @type {NextConfig} nextConfig */
  const nextConfig = {
    output,
    env: {
      CONTENTFUL_SITE_SLUG: slug,
      CONTENTFUL_LOCALES: ['en-US', 'de-DE'].join(',')
    },
    /**
     *
     * @param {import('webpack').Configuration} config
     * @param {import('next/dist/server/config-shared').WebpackConfigContext} _context
     * @returns {import('webpack').Configuration}
     */
    webpack: (config, _context) => {
      if (process.env.NEXT_OUTPUT_MODE !== 'export' || !config.module) {
        return config;
      }
      config.module.rules?.push({
        test: /src\/app\/api/,
        loader: 'ignore-loader',
      });
      return config;
    },
  };
  return nextConfig;
};

module.exports = nextConfig;
