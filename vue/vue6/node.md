## 安装
```
npm init -y
npm install vue bootstrap vue-router axios
```

## 路由
- 不同的url返回不同的结果
- vue的路由(spa)spa中只有一个首页,切换url地址显示不同的组件
- 切换路径但是页面仍然是以前的那个
    - hash #
    - pushState 没井号 (在开发的时候会产生404),如果上线时会使用这种方式,可以依赖服务端解决404问题
    - mode模式 默认模式就是hash的方式,如果mode:'history' h5的api