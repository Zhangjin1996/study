/*
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-05-06 17:38:21
 * @LastEditors: ZJ
 * @LastEditTime: 2021-05-06 17:43:31
 */
class RemoveCommentsPlugin {
    apply (compiler) {
        compiler.hooks.emit.tap('RemoveCommentsPlugin', compilation => {
            // compilation => 可以理解为此次打包的上下文
            for (const name in compilation.assets) {
               if (name.endsWith('.js')) {
                   const contents = compilation.assets[name].source();
                   const noComments = contents.replace(/\/\*{2,}\/\s?/g, '');
                   compilation.assets[name] = {
                       source: () => noComments,
                       size: () => noComments.length
                   }
               }
            }
        })
    }
}

module.exports = RemoveCommentsPlugin;