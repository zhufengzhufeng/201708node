## 文件模块
- 必须以./ 方式引用

## 第三方模块
- 必须下载

### 全局第三方模块(在命令行)
- taobao源 cnpm源
- mac用户全局安装时需要加sudo
```
npm install nrm -g
nrm ls 查看所有源
nrm use taobao 使用taobao源
nrm test 测网速
npm root -g 查看全局安装位置
npm config list 查看配置列表
```

- http-server
```
npm install http-server -g
http-server 选择需要启动服务的文件夹执行即可
```


### 本地第三方模块(在项目中使用)
- 进入文件夹在初始化
- 初始化package.json(记录安装的依赖有哪些)
- 项目依赖(开发上线都需要)
```
npm install jquery@3.2.1
```

- 开发依赖(只在开发时使用)
```
npm install less --save-dev
npm uninstall less --save-dev
```

