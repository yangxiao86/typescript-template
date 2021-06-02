const path = require('path');
const baseConfig = require('./base');
const webpack = require('webpack')
baseConfig.mode = 'development';
module.exports = baseConfig
//global