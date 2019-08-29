# Http
Http 相关

### 跨域
##### 跨域的时候 自定义的头 是要服务端设置过得 以及方法除了 post get head其他方法是要设置过得
##### methods除了 post get head
##### content-type text/palin  multipart/form-data application/x-www-form-urlencoded
##### 其他都要进行 cors 预请求
##### link img script src 是允许跨域的
##### 缓存相关
```
if (etag === '77') {
    res.writeHead(304, {
      // 'Content-Type': 'text/plain'
      'Content-Type': 'text/javascript',
      'Cache-Control': 'max-age=2000',
      'Last-Modified': '123',
      'Etag': '77'

    })
    res.end('123')
  } else {
    res.writeHead(200, {
      // 'Content-Type': 'text/plain'
      'Content-Type': 'text/javascript',
      'Cache-Control': 'max-age=2000',
      'Last-Modified': '123',
      'Etag': '77'

    })
  }
  // max-age 如果只设置这个头 依然会去请求  那么在有效期内 直接使用缓存 忽略服务端的返回 也就不会304 显示的是200 请求时间为0

  // no-store 会忽略请求头中 滚缓存相关的信息 发送全新的请求
  // If - Modified - Since: 123
  // // If - None - Match: 77

  // no-cache 客户端可以缓存 但是要去服务端验证 与下面的头配合
  // 验证之后直接 304 那以前的缓存
  // If - Modified - Since: 123
  // // If - None - Match: 77
```

##### 文件上传 压缩
```
application/x-www-form-urlencoded key =>value 形式

multipart/form-data POST 
    走body
    文件要通过二进制 传输 不能通过字符串 要另外拆出来 所以要用 multipart/form-data
    多部分的 表单数据

let server = http.createServer((request, response) => {
  let res = fs.readFileSync('./index.html')
  response.writeHead(200, {
    'Content-Type': 'text/html', // 返回的内容格式
    'Content-Encoding': 'gzip' // 内容的编码方式
  })
  // response.end(res)
  response.end(zlib.gzipSync(res))

})
```
##### 301 302
######  302临时重定向
######  301永久重定向
######  会导致浏览器对这个请求 结果缓存
######  之后访问该地址  
######  直接跳转那本地缓存 虽然请求到了服务器但是会忽略其结果  
######  用户不清除缓存 服务端怎么改变都没用  
######  所以301 是非常慎重的

######  302临时重定向 每次通过服务端 返回头  Location 决定重定向位置
