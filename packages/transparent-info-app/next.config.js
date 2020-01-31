const rehypePrism = require('@mapbox/rehype-prism');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    hastPlugins: [rehypePrism],
  },
});

const assetPrefix = process.env['ASSETS_PREFIX'] || '/';
const basePath = process.env['BASE_PATH'] || '';
const onIpfs = process.env['ON_IPFS'];

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'tsx'],
  assetPrefix: assetPrefix,
  basePath: basePath,
  experimental: {
    basePath: basePath,
  },
  exportTrailingSlash: true,
  env: {
    ASSETS_PREFIX: assetPrefix,
    BASE_PATH: basePath,
    ON_IPFS: onIpfs,
  },
  exportPathMap: async function(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      ...defaultPathMap,
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/p/hello-nextjs': { page: '/post', query: { title: 'hello- i am from query' } },
    };
  },

  // assetPrefix: '/ipns/Qmd3HzpnpSsLeUQF2mJEXn24a1yYo2LTaQyoq4mwxkse1Z/',
});
