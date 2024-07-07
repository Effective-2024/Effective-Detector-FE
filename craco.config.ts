/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@lib': path.resolve(__dirname, 'src/lib'),
      '@router': path.resolve(__dirname, 'src/router'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    },
  },
};

export {};
