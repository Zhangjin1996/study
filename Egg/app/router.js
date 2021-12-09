/*
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-12-06 16:15:37
 * @LastEditors: ZJ
 * @LastEditTime: 2021-12-07 15:10:03
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user/list', controller.user.list);
  router.get('/user/find', controller.user.find);
};
