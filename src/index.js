/*
 * @Description:
 * @Date: 2022-03-30 10:41:03
 * @LastEditTime: 2022-03-30 17:00:20
 */
require("./a.css"); // 在这里引入css文件，不能在模板html文件中引入
require("./b.less");
const obj = require("./a");

const fn = () => {
  console.log(1);
};
