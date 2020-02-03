const rehypePrism = require('@mapbox/rehype-prism');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    hastPlugins: [rehypePrism],
  },
});

const assetPrefix = process.env['ASSETS_PREFIX'] || '/';
const basePath = process.env['BASE_PATH'] || '';
const onIpfs = process.env.ON_IPFS || 'no';

const ipfsCid = process.env.IPFS_CID || 'QmZkzXEuC2QXt6u7AoKjA1HTKenB3XLaJLsBq83LpwkdtL';
const assetsIpfsCid =
  process.env.ASSETS_IPFS_CID || 'QmVa2eNDbVihmTNXshFnHLLjVz9uGUWHkMfsaNoXt83TKc';
console.log(`assetPrefix: [${assetPrefix}]  basePath: [${basePath}] `);
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'tsx'],
  assetPrefix: assetPrefix,
  basePath: basePath,
  experimental: {
    basePath: basePath,
  },
  exportTrailingSlash: !onIpfs === 'no',
  env: {
    ASSETS_PREFIX: assetPrefix,
    BASE_PATH: basePath,
    ON_IPFS: onIpfs,
    VERSION: process.env.VERSION || '0.0.0',
    BUILD_NUMBER: process.env.BUILD_NUMBER || '1',
    SHA: process.env.SHA || '2f4f3014d6c21acb1dca65d3cd9e2f072c8cd7ea',
    IPFS_CID: ipfsCid,
    ASSETS_IPFS_CID: assetsIpfsCid,
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
