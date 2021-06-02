/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const baseConfig = require('./base');
const config = require('../config.json');
const fs = require('fs');

config.buildPackageName.forEach(element => {
    const testPath = path.resolve(__dirname, '../packages/') + '/' + element + '/test/index.ts';
    if (!fs.existsSync(testPath)) {
        console.error('\nerror 缺少测试目录与文件:' + testPath + "\n");
        process.exit(1);
    }
    baseConfig.entry[element.toLocaleLowerCase()] = testPath
    console.log(`当前编译项目: ${element}/test/index.ts`);
});
baseConfig.output.filename = 'test.js';
module.exports = baseConfig;