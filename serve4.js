/*
 * @Author: web_XL
 * @Date: 2019-08-29 23:31:21
 * @Last Modified by: web_XL
 * @Last Modified time: 2019-08-29 23:41:51
 */
// 301永久重定向 302临时重定向
// 302临时重定向
// 301永久重定向
// 会导致浏览器对这个请求 结果缓存
// 之后访问该地址  
// 直接跳转那本地缓存 虽然请求到了服务器但是会忽略其结果  
// 用户不清除缓存 服务端怎么改变都没用  
// 所以301 是非常慎重的

// 302临时重定向 每次通过服务端 返回头  Location 决定重定向位置
/*
 * @Author: web_XL 
 * @Date: 2019-08-24 22:41:35 
 * @Last Modified by: web_XL
 * @Last Modified time: 2019-08-29 22:32:07
 */

const http = require('http')
const fs = require('fs')

const serve = http.createServer(function (req, res) {
  // console.log(req)
  console.log('请求了', req.url)

  if (req.url === '/') {
    res.writeHead(301, {
      "Location": '/new'
    })
    res.end('')
  }

  if (req.url === '/new') {
    let html = fs.readFileSync('./index.html', 'utf8')
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.end(html)
  }

})
serve.listen('8887')
console.log('serve on listening 8887')