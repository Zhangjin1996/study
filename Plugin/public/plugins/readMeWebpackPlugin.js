/*
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-05-06 17:09:27
 * @LastEditors: ZJ
 * @LastEditTime: 2021-05-06 17:47:53
 */
class ReadmeWebpackPlugin {
    apply(compiler) {
        compiler.hooks.emit.tapAsync('ReadmeWebpackPlugin', (compilation, callback) => {
            // console.log(compilation.assets)
            const content = '这是需要写的readme文件'
            compilation.assets['readme.txt'] = {
                source: () => { return content },
                size: () => { return content.length }
            }
            callback()
        })
    }
}

module.exports = ReadmeWebpackPlugin;