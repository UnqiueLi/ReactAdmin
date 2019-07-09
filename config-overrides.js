const { override, fixBabelImports, addLessLoader } = require('customize-cra')
    
module.exports = override(
    // 针对antd实现按需打包,根据import来打包(使用babel-plugin-import)
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true, //自动打包相关文件
    }),
    //使用less loader对源码的覆盖，重新指定，自定义样式
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@primary-color':'#1da57a'
        }
    })
)