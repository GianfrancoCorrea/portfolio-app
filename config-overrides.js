/* eslint-disable */
const { useBabelRc, override } = require('customize-cra');
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
);
