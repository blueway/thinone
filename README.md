# thinone

一个使用thinkjs+typescript ,加上B-Jui后端ui框架，加上mui移动端框架的开发模板。

## Screenshots
![图片1](http://blueswu.gitee.io/myhome/thinoneimages/screenshot1.png)
![图片2](http://blueswu.gitee.io/myhome/thinoneimages/screenshot2.png)
![图片3](http://blueswu.gitee.io/myhome/thinoneimages/screenshot3.png)
## Install dependencies

```
npm install
```

## Start server

- config mysql
> import  sql/thinone.sql  
  login account:  admin test123

```
npm start
```
- production
```
node production.js
```

- cron
[参考文档配置](https://thinkjs.org/zh-cn/doc/3.0/crontab.html)

## Access address
- admin back end: http://127.0.0.1:8360/
- mobile mui example : http://127.0.0.1:8360/static/mob/index.html
- mobile front end : http://127.0.0.1:8360/mob/index
- api jwt handler : http://127.0.0.1:8360/api/token
* want to close  all tabs? : the right mouse button 

## Deploy with pm2

Use pm2 to deploy app on production enviroment.

```
pm2 startOrReload pm2.json
```


## TODO
- [x] user login action
- [x] user model control
- [x] authority management
- [x] mobile info flow content show
- [x] rest api jwt
- [x] charts and cron events handlers 
- [x] pc front end page
- [ ] crud handler  modularization
- [ ] try to add mongodb and redis cache

