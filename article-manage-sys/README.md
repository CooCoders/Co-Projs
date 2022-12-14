## README

Node.js 服务器案例

### 所需依赖

- express
- cors
- mysql
- bcryptjs  -- 密码加密
- joi 第三方数据验证模块
- @escook/express-joi 自动表单数据验证
- jsonwebtoken   -- 生成 token
- express-jwt -- 解析 token
- multer - 解析`multipart/form-data`数据

### 项目目录结构

- router：存放路由模块，只存放用户请求和处理函数之间的映射关系
- router_handler：存放路由处理函数，存放每个路由对应的处理函数



### 密码加密

为保证安全，使用 bcryptjs 对密码及逆行加密，其优点在于：

- 加密之后的密码，无法被逆向破解
- 同一明文密码多次加密，得到的加密结果不相同，保证安全

使用的方法为 ：

```
bcrypt.hashSync(明文密码， 随机盐长度(10))
```



### 优化表单数据验证

数据验证原则：前端验证为辅，后端数据验证为主，后端永远不要相信前端提交过来的任何内容

推荐使用第三方的数据验证模块，提高验证效率以及可维护性

注意 `@hapi/joi`的安装现在已经变更为 `npm i joi`

搭配全局错误中间件使用，注意全局错误级别中间件要放在所有路由之后



