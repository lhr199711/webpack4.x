/*
 * @Description:
 * @Date: 2022-03-30 10:41:03
 * @LastEditTime: 2022-03-31 10:03:34
 */
require("./a.css"); // 在这里引入css文件，不能在模板html文件中引入
require("./b.less");

import test from "./test.png";

const img = new Image();
img.src = test;

document.body.appendChild(img);
