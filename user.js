// ==UserScript==
// @name        AcFun强制调用HTML5播放器【已失效】
// @description 因acfun主站升级，此文件已失效！！！

// @description 自动跳转至手机页面，以调用AC本站H5播放器
// @description 开启后是自动强制的，所以不用时请自行关闭或禁用

// @description 
// @author      补档PO
// @version     1.02
// @include     http://www.acfun.cn/v/ac*

// ==/UserScript==
window.location.href = window.location.href.replace(/^http:\/\/www.\acfun\.cn\/v\/ac/, 'http:\/\/m.\acfun\.cn\/v\/?ac=');
