/* eslint-disable */
const { useBabelRc, override, addWebpackAlias } = require('customize-cra');
const addLessLoader = require('customize-cra-less-loader');
const path = require('path');

module.exports = override(useBabelRc());
/* eslint-enable */
module.exports = override(
    addLessLoader({
        cssLoaderOptions: {
            sourceMap : true,
            modules   : {
                localIdentName: '[hash:base64:8]',
            },
        },
        lessLoaderOptions: {
            lessOptions: {
                strictMath: true,
            },
        },
    }),
/*     addWebpackAlias({
        react               : path.resolve(__dirname, './node_modules/react'),
        'react-dom'         : path.resolve(__dirname, './node_modules/react-dom'),
        'styled-components' : path.resolve(__dirname, './node_modules/styled-components'),
    }), */
);
