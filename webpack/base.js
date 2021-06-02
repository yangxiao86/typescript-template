/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const config = require('../config.json');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');


let publicPath = '';

switch(process.env.NODE_ENV){
    case "stage":
    case "dev":
        publicPath = "stage";
        break;
    case "prod":
        publicPath = "prod";
        break;
}

module.exports = {
    mode: 'development',//production,development
    devtool: 'source-map',
    entry: {},
    target: ['web', 'es5'],
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                test: /\.(frag|vert|glsl|css)$/,
                use: [
                    {
                        loader: 'raw-loader',
                        options: {}
                    }
                ]
            },
            {
                test: /\.(mp3|svg|png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            }
        ]
    },
    resolve: {
        fallback: {
            fs: false
        },
        extensions: ['.ts', '.js'],
        plugins: [new TsconfigPathsPlugin({/* options: see below */ })]
    },
    externals: {
        // '@vf.js/launcher': '@vf.js/launcher',
        // externalsType: 'window'
    },
    output: {
        filename: '[name].js',
        library: ['yangxiao', 'template'],
        // libraryTarget: "umd",
        path: path.resolve(__dirname, `../dist/`),
    },
    plugins: [
        // new webpack.ProgressPlugin((percentage, message, ...args) => {
        //     // e.g. Output each progress message directly to the console:
        //     console.info(percentage, message, ...args);
        // }),
        new webpack.DefinePlugin({
            "process.env.publicPath":JSON.stringify(publicPath),
            // "process.env.NODE_ENV":JSON.stringify(nodeENV),
            "BUILD.TIME": JSON.stringify(new Date().toString()),
        })
    ],
};

console.log(`当前编译包为：${config.buildPackageName},如需改变可设置config.json`);
config.buildPackageName.forEach(element => {
    module.exports.entry[element.toLocaleLowerCase()] = path.resolve(__dirname, '../src/index.ts');
});