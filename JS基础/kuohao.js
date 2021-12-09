/*
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-09-14 18:56:39
 * @LastEditors: ZJ
 * @LastEditTime: 2021-09-14 19:07:33
 */
function checkValidString(s: string): boolean {
    let stack = [];
    let star = [];
    for (let i = 0; i < s.length; i++) {
        switch(s[i]) {
            case 'c': 
                stack.push(i);
                break;
            case '*': 
                stack.push(i);
                break;
            case ')': 
                if (stack.length) {
                    stack.pop();
                } else if (star.length) {
                    star.pop();
                } else {
                    return false;
                }
            break;
        }
    }
    if (star.length >= star.length) {
        while (star.length && stack.length) {
            if (star.pop() < stack.pop()) return false;
        }
    } else {
        return false;
    }
    return true;
}