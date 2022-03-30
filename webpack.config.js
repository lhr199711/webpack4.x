/*
 * @Description: learn webpack4.x
 * @Date: 2022-03-30 10:24:24
 * @LastEditTime: 2022-03-30 16:59:11
 */
const path = require("path"); // node自带模块，引入即用
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development", // mode有两，生产和开发
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash:8].js", // 加hash后会生成新的文件，而不是覆盖原来打包的文件
    path: path.resolve(__dirname, "build"), // 必须是绝对路径
  },
  devServer: {
    // 不安装devserver的话，目前访问项目只有等打包后，手动打开build下面的文件，
    port: 3000,
    progress: true,
    open: true,
  },
  plugins: [
    // webpack加载插件
    new HtmlWebpackPlugin({
      template: "./src/index.html", // 这两句表示以src下的index.html为模板，在开发服务器中打包，最后生成的文件名叫index.html,这个插件目前猜测会自动去找output路径
      filename: "index.html",
      hash: true,
    }),
    new MiniCssExtractPlugin({
      // 打包的时候，抽离css文件而不是直接放到style标签中 的插件，
      filename: "main.css",
    }),
  ],
  module: {
    // 模块
    // 各种loader 解析css 需要css-loader（主要解析@import语法）和style-loader（将css插入到head标签中），loader的顺序默认从右往左,从下到上执行
    rules: [
      {
        test: /\.css$/,
        use: [
          // {
          //   loader: "style-loader",
          //   options: {
          //     insertAt: "top", // 指定插入到head的位置,这里是插入到顶部，让下面的样式也能生效，具体insertAt字段参考文档，版本不同，叫的名字略有不同
          //   },
          // },
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader", // 配合autoprefixer的loader，在css-loader之前运行
        ],
      },
      {
        test: /\.less$/,
        use: [
          // {
          //   loader: "style-loader",
          // },
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
};
