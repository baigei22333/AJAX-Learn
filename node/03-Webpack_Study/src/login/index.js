/**
 * 目标1：体验 webpack 打包过程
 */

// 1.1 准备项目和源代码
import { checkCode, checkPhone } from '../utils/check.js'
console.log(checkPhone('13313311324'));
console.log(checkCode('111'));
// 1.2 准备 webpack 打包环境
// 1.3 运行自定义命令打包观察效果 (npm run 自定义命令)

/**
 * 目标2: 修改webpack 打包入口和出口
 *  2.1 项目根目录,新建 webpack.config.js 配置文件
 *  2.2 导出配置对象,配置入口,出口文件路径
 *  2.3 重新打包观察
 */

/**
 * 目标3: 用户登录 - 长度判断 案例
 *  3.1 准备用户登录页面
 *  3.2 编写核心 JS 逻辑代码
 *  3.3 打包并手动复制网页到 dist 下,引入打包后的 js,运行
 */

// 3.2 编写核心 JS 逻辑代码
document.querySelector('.btn').addEventListener('click', () => {
    const phone = document.querySelector('.login-form [name=mobile]').value
    const code = document.querySelector('.login-form [name=code]').value

    if (!checkPhone(phone)) {
        console.log('手机号长度必须是11位');
        return
    }

    if (!checkCode(code)) {
        console.log('验证码长度必须是6位');
        return
    }

    console.log('提及到服务器登录...');

})

/**
 * 目标4: 使用 html-webpack-plugin 插件生成html 网页文件,并引入打包后的其它资源
 *  4.1 下载 html-webpack-plugin 本地软件包
 *  4.2 配置 webpack.config.js 让 Webpack 拥有插件功能
 *  4.3 重新打包观察效果
 */

/**
 * 目标5: 打包 css 代码
 *  5.1 准备 css 代码,并引入到 js 中
 *  5.2 下载 css-loader 和 style-loader 本地软件包
 *  5.3 配置 webpack.config.js 让 Webpack 拥有该加载器
 *  5.4 打包后观察效果
 */

// 5.1 准备 css 代码,并引入到js 中
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

/**
 * 目标6：优化-提取 css 代码到单独的 css 文件中去
 *  6.1 下载 mini-css-extract-plugin 本地软件包
 *  6.2 配置 webpack.config.js 让 webpack 拥有该插件功能
 *  6.3 打包后观察效果
 */

/**
 * 目标7：优化-压缩 css 代码
 *  7.1 下载 css-minimizer-webpack-plugin 本地软件包
 *  7.2 配置 webpack.config.js 让 webpack 拥有该插件功能
 *  7.3 打包后观察效果
 */


/**
 * 目标8：打包 less 代码
 *  8.1 新建 less 代码（设置背景图）并引入到 src/login/index.js 中
 *  8.2 下载 less 和 less-loader 插件
 *  8.3 配置 webpack.config.js 让 webpack 拥有该功能
 *  8.4 打包后观察效果
 */
// 8.1 新建 less 代码（设置背景图）并引入到 src/login/index.js 中
import './index.less'

/**
 * 目标9：打包资源模块（图片）
 *  9.1 创建 img 标签并动态添加到页面，配置 webpack.config.js
 *  9.2 打包后观察效果
 */

// 注意：js 中引入本地图片资源要用 import 方式(如果是网络图片http地址，字符串可以直接写)
import imgObj from './assets/logo.png'

const theImg = document.createElement('img')
theImg.src = imgObj

document.querySelector('.login-wrap').appendChild(theImg)