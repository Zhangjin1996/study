/*
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-12-06 18:32:50
 * @LastEditors: ZJ
 * @LastEditTime: 2021-12-07 15:29:39
 */
const Controller = require('egg').Controller;

class UserController extends Controller {
   async list () {
       const { ctx } = this;
       try {
           const userList = await ctx.service.user.searchAll();
           console.log('userList', userList);
           ctx.body = {
               success: true,
               data: userList
           };
       } catch (err) {
           ctx.body = {
               success: false,
               err
           };
       }
   }
   async find () {
       const { ctx } = this;
       try {
        if (!ctx.query.id)
        throw new Error('缺少参数')
        const userList = await ctx.service.user.find(ctx.query.id);
        ctx.body = {
            success: true,
            data: userList
        };
       } catch (err) {
        ctx.body = {
            success: false,
            err
        };
       }
   }
}

module.exports = UserController;