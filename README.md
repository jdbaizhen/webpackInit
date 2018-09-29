# webpackInit
webapck4.0搭建前端环境
配置详解
1.文件目录
    webpack.common.js 公共配置
    webpack.dev.js    开发配置
    webpack.prod.js   生产配置
    package.json      依赖包
2.文件解读
    #package.json
    1) sideEffects: 配置项为数组，在打包时用来删除没有用到的代码/函数
    2) scripts:
        (1) start: --open：打开浏览器 --config webpack.dev.js：使用开发配置
        (2) build: 打包 --optimize-minimize 压缩并删除无用代码，和sideEffects搭配使用 --config webpack.prod.js：使用生产配置

    #webpack.commom.js
    1) entry: 配置项目入口，可配置为多入口
    2) CleanWebpackPlugin: 打包前清空dist文件夹
    3) HtmlWebpackPlugin: 配置项目模板html文件
    4) output: 配置打包后的文件名以及打包后文件所属文件夹，本项目为根目录dist文件夹
        (1) filename: 使用hash命名可以使下次打包完成后部署在线上的是一个新的js文件，浏览器不会访问到之前缓存的js文件

    #webpack.dev.js
    1) mode: 配置开发环境
    2) devtool: 配置为inline-source-map,方便debug
    3) devServer: 开发时使用的webpack虚拟服务
        (1) contentBase: 服务地址
        (2) hot: 开启热加载，和HotModuleReplacementPlugin插件配合使用
        (3)
    4) NamedModulesPlugin: 查看要修补(patch)的依赖

    #webpack.prod.js
    1) mode: 配置生产环境
    2) devtool: 生产环境下忽略警告和报错，提升性能

3.懒加载配置
    可以提升性能，按需加载
    实例：https://www.webpackjs.com/guides/lazy-loading/
    button.addEventListener('click', e => {
        import(/* webpackChunkName: "print" */ './print').then(module => {
            var print = module.default;
            console.log(print);
            print();
        })
    })
    点击按钮的时候import引入print.js，这样子的代码会将print.js单独打包