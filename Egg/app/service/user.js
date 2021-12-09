/*
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-12-06 18:32:00
 * @LastEditors: ZJ
 * @LastEditTime: 2021-12-07 15:30:35
 */
const Service = require('egg').Service;

class UserService extends Service {
    async searchAll() {
        const users = await this.app.mysql.select('Tab_User_Info');
        return { users };
    }

    async find(id) {
        const user = await this.app.mysql.get('Tab_User_Info', { id });
        return { User };
    }
}

module.exports = UserService;