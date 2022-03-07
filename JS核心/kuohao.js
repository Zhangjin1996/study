/*
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-09-14 18:56:39
 * @LastEditors: ZJ
 * @LastEditTime: 2021-12-31 16:30:37
 */
// 有效的括号题目
let isValid = function(s) {
    let sl = s.length
    if (sl % 2 !== 0) return false
    let leftToRight = {
        "{": "}", 
        "[": "]",
        "(": ")",
    }
    // 建立一个反向的value -> key映射表
    let rightToLeft = createReverse(leftToRight)
    // 用来匹配左右括号的栈
    let stack = []

    for (let i = 0; i < s.length; i++) {
        let bracket = s[i]
        // 左括号 放进栈中
        if (leftToRight[bracket]) {
            stack.push(bracket)
        } else {
            let needLeftBracket = rightToLeft[bracket]
            if (!needLeftBracket) {
                return false
            }

            // 栈中取出最后一个括号  如果不是需要的那个左括号  就失败
            if (!needLeftBracket) {
                return false
            }

            // 栈中取出最后一个括号  如果不是需要的那个左括号 就失败
            let lastBracket = stack.pop()
            if (needLeftBracket !== lastBracket) {
                return false
            }
        }
    }
}