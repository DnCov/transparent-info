const rehypePrism = require('@mapbox/rehype-prism');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    hastPlugins: [rehypePrism],
  },
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'tsx'],
  assetPrefix: '/ipns/Qmd3HzpnpSsLeUQF2mJEXn24a1yYo2LTaQyoq4mwxkse1Z/',
});
