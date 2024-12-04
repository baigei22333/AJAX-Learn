/**
 * 目标： 在node.js 环境的代码中，应该使用绝对路径
 *  原因：代码的相对路径是以终端所在文件夹为起点，而不是 VsCode 资源管理器
 *  容易造成目标文件找不到错误
 * 
 */
const fs = require('fs')
// 1. 引入 path  模块对象
const path = require('path')

// 2. 配合path.join() 配合 __dirname 组成目标文件绝对路径
// console.log(__dirname);


path.join('')
fs.readFile(path.join(__dirname, '../test.txt'), (err, data) => {
    if (err) console.log(err);
    // data 是 buffer 16 进制数据流对象
    // .toString() 转换成字符串
    else console.log(data.toString());

})