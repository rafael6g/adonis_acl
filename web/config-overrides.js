const {addBabelPlugin, override} = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathPrefix: '~',
      rootPathSuffix: 'src',
    },
  ]),
);

// const {injectBabelPlugin} = require('react-app-rewired');

// const rootImport = [
//   'root-import',
//   {
//     rootPathPrefix: '~',
//     rootPathSuffix: 'src',
//   },
// ];

// module.exports = (config) => injectBabelPlugin(rootImport, config);
