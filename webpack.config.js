module.exports = {
  // existing config
  resolve: {
    fallback: {
      global: require.resolve('global'),
      buffer: require.resolve('buffer/'),
      process: require.resolve('process/browser'),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
  ],
};