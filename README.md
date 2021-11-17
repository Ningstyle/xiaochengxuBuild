## 微信小程序+iview weapp项目底层封装（api,function,utils），开箱即用
#####东晓医生小程序前端文件及配置说明
#### 1、文件目录
##### 文件目录包含api、css、dist、images、pages、scripts、utils
- api文件下fetch.js为小程序请求封装文件  
-   api文件下api.js为后台接口封装文件  
- css文件下为小程序全局默认样式文件  
- dist文件下为iview weapp的组件文件  
- images文件下为项目图片资源存放文件  
- pages文件下为小程序主要页面及脚本文件存放目录  
- scripts文件为项目本地公用数据及方法存放目录  
- utils文件下为项目使用到的公用方法存放目录  

#### 2、配置文件 
- configData.js文件是项目本地数据配置文件  
- weMethod.js文件是项目小程序常用方法配置封装文件  

#### 3、项目说明
##### 项目开发过程中建议使用HbuiderX作为开发工具，实时预览微信开发工具，所有开发人员不要在微信开发工具上提交上传文件（该上传目标是微信服务器），工作结束后各自上传至阿里code仓库，由指定人员构建上传微信服务
##### 使用git开发协助工具，统一在develop分支开发，创建本地分支避免频繁冲突，由指定人员进行代码合并
##### 项目统一使用iview weapp和weui作为公用组件
