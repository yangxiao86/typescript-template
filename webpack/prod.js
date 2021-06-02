/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const baseConfig = require('./base');
const package = require('../package.json');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const FileManagerPlugin = require('filemanager-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

const outPath = '../dist';


if(!fs.existsSync(path.join(__dirname, outPath))) {
    fs.mkdirSync(path.join(__dirname, outPath));
}

baseConfig.optimization = {
    minimize: true,
    minimizer: [
        new TerserPlugin({
            extractComments: {
                condition: true,
                filename: (fileData) => {
                    return `${fileData.filename}.LICENSE.txt${fileData.query}`;
                },
                banner: () => {
                    return `[base] \n Compiled ${new Date()} \n https://www.xinfangke.com`;
                },
            },
        }),
    ],
},

baseConfig.mode = 'production';
baseConfig.devtool = undefined;
baseConfig.output.filename = '[name]_'+package.version.replace(/\./g,'_')+'.min.js';
//baseConfig.output.filename = '[name]_[contenthash].min.js';




baseConfig.plugins.push(new CleanWebpackPlugin());

baseConfig.plugins.push(new FileManagerPlugin({
    events:{
        onEnd: {
            copy: [
                // { source: path.join(__dirname, '../index.html'), destination:  path.join(__dirname, `${outPath}/index.html`) },
                { source: path.join(__dirname, '../assets/'), destination:  path.join(__dirname, `${outPath}/assets/`) },
            ]
        },
    },
}));

module.exports = baseConfig