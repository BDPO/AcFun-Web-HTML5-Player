AcFun 官方 HTML5 播放器
===========

[2018年12月17日，官方H5播放器 开始灰度测试，少量用户陆续获得测试资格](https://www.acfun.cn/a/ac4791331)<br>
[2018年12月25日，官方H5播放器 对全部用户开放，就连 白石桑 也用上了H5播放器](https://www.acfun.cn/a/ac4812676)<br>
[2019年01月25日，官方H5播放器 更新了一些功能，详见新版H5食用手册 by 白石桑](https://www.acfun.cn/a/ac4897169)<br>

#### 一个装B播放器，送给缺B乐的各位<br>[AcFun-HTML5-Player by esterTion github地址](https://github.com/esterTion/AcFun-HTML5-Player)

现目前有很多人开发的插件<br>
[AcFun HTML5播放器 - 源码](https://greasyfork.org/zh-CN/scripts/27195/code)<br>
还有一些工具详见[BoomFun传送门](https://boomfun.work/page/tool.html)

### 2019年5月初追记：
AC官方设置了 [m.acfun.cn](https://m.acfun.cn/) 以及其下所有网址<br>
在 PC浏览器UA下 会强制跳转主站www.acfun.cn，<b>本项目就此失效！</b>

-----------

#### 原项目名：Mobile-Skip，现已搁置
总体思路参考了这个脚本中关于URL转换的[代码](https://github.com/zhihaofans/Acfun/blob/master/acfun.tv/acfun2aixifan/acfun2aixifan.js#L29)，感谢原作者<p>
原理：在www.acfun.cn/v/ac* 域名下使PC网页版环境跳转至移动端m.acfun.cn/v/?ac=* 从而实现H5播放<br>
实际上调用的仍是主站自身H5播放器，因为AC技术限制了H5清晰度，仍依赖于低清mp4，所以视频比较模糊

-----------
  
### 2019年6月10号追记，以下代码已失效！

##### 现增加 反向链接版，是下面代码的反向代码<br>顾名思义 就是由移动端反向跳转到PC版

    javascript:window.open("http://www.acfun.cn/v/ac" + document.URL.split("=")[1]);void(0)
    
##### 手动点击版，以下方法已失效<br>请自行复制以下完整代码，并加入收藏
正向链接版，顾名思义<br>就是由www.acfun.cn/v/ac* 跳转到m.acfun.cn/v/?ac=*
<br>最早公开发布于 https://adnmb.com/t/11375512?r=11376137

    javascript:(function(){window.location.href = window.location.href.replace(/^http://www.\acfun.cn/v/ac/, 'http://m.\acfun.cn/v/?ac=');})();
    
