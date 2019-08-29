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
