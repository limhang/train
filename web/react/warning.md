#项目注意事项&重要技术问题
##项目注意事项
-- 公共方法都在 react_v_0.1/lib/func.js 中编写

##重要技术问题
- 路由问题 要设计好 便于后期扩展
- 滚动滑动插件 这个必须要好使  移动端使用 大部分基于这个功能
- 需要在 请求头 里面 添加 以下字段 没有就填空

    > token （用于是否登陆验证）

    > secret_key（用于连接授权加密验证）

    > channel (andriod)

##请勿把 react_v_0.1/app/config/app.jsx 配置文件加入到 git版本中

- cp react_v_0.1/app/config/app.example.jsx react_v_0.1/app/config/app.jsx



