/*
 * @Author: web_XL
 * @Date: 2019-09-01 16:48:41
 * @Last Modified by: web_XL
 * @Last Modified time: 2019-09-02 00:04:48
 */
// command+shift+G
//：sudo brew services start nginx

// 关闭nginx服务

//     ：sudo brew services stop nginx

// 另外几个比较方便的指令

// 重新加载nginx

//     ：nginx -s reload

// 停止nginx

//     ：nginx -s stop
// 配置nginx域名转发

// .配置本定host映射，否则无法解析出域名ip
// sudo vi / etc / hosts
// 输入 E，进入编辑；进入编辑界面后，
// 输入  i   进行插入；
// 完成插入后按ESC键，
// 再输入  :wq  进行保存