# demo_and_item
demo and item that I have done;

存放自己以前学新的一些技术写过的一些较为完善的 demo 或者 项目。
* 个人项目，非商业用途
* 记录自己的成长
* 审视自己的代码，在一段时间候回来看自己以前写的代码，是否能够改进，看自己跟以前的自己成长了多少。

## ToyReact 简单实现react
JSX+vdom+组件化

## computer-graphics 可视化学习
* html + css 
* svg
* canvas
* webGl

## 豆瓣租房信息爬虫筛选
找租房，因为想要定向找某个小区的租房信息，但豆瓣的搜索能力比较一般，不能高效的帮我筛选我想看的小区招租贴，所以就把相关关键字的帖子爬下来，过滤看。

http://localhost:3000/?pagenum=0&count=20
* 参数：
	* 页码
	* 过滤的页数

## pushMsg 消息管理系统
这个本意是做数据库的课程设计，本着学习和使用新东西的精神，根据自己平时看nba的习惯，做了一个关于nba的消息推送系统
* 记录：
  	* 初次开发周期： 2016-11-01 ~ 2016-12-25
 
*  过程
	1. 了解爬虫，学习使用superagent+cheerio的简单爬虫爬取虎扑网站的数据。
	2. 进行数据库设计
	3. 学习了解 mssql 连接sql server数据库，并通过node.js操作数据库
	4. 通过逻辑，数据，视图数据的划分，封装相关数据库操作接口，并将爬虫爬到的数据经过处理存储到sql server中
	5. 通过promise进行异步操作，通过generator和co库编写“同步”的后台接口。
	6. 根据需求逻辑进行前端页面的开发和对接。
	7. 初步完成一些基本需求，时间原因，到了课设答辩时间，后续完善和补充系统功能。

* 相关技术和框架：  
  	* koa+node爬虫+sql server2014
  
* 说明：这个练手项目还有许多地方需要完善，因此暂时不存在在这个库中，有兴趣的同学可查看我的pushMsg库
  
## teacherANDpupil h5页面
* 记录：
  	* 初次开发周期：2016-09-09 ~ 09-13
	* 演示地址：https://rawgit.com/wxx2258/demo_and_item/master/teacherANDpupil/dist/index.html
* 过程
	1. 总结适配方案
	2. 进行切图
	3. 编写demo

* 相关技术和框架：
	* 固定viewport，通过媒体查询修改html的font-size进行适配
	* 移动web框架，zepto.js
  	* Css3
	* html5摇一摇原生接口
  
## web-Dragon_Ball h5页面
* 记录：
	* 初次开发周期：2016-09-02 ~ 09-07 

* 过程
	1. 学习适配,了解相关移动web性能优化手段
	2. 编写项目
* 相关技术和框架：
	* 手淘h5适配框架flexible
	* 移动web框架，zepto.js
	* Css3
