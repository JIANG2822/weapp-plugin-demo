const path = require('path');

const resolve = p => path.resolve(__dirname, '../', p);

module.exports = {
  alias: {
    src: resolve('src')
  }
};
