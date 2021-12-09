/*
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-12-06 16:15:37
 * @LastEditors: ZJ
 * @LastEditTime: 2021-12-07 15:15:29
 */
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  mysql: {
    enable: true,
    package: 'egg-mysql',
  }
};
