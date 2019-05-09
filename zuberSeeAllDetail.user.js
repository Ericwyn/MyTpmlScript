// ==UserScript==
// @name         zuber 查看详情
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  无需登录，可在浏览器直接查看 zuber 租房的房间详情
// @author       Ericwyn
// @match        *://mobile.zuber.im/bed/*
// @run-at       document-body
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function(){
        var dom = document.getElementsByClassName("des_msg")[0];
        dom.remove();
        document.getElementsByClassName("room_des_text_wrap")[0].style.removeProperty("height")
        document.getElementsByClassName("room_des_text_wrap")[0].style.setProperty("margin-bottom","100px");
    }, 1000);
})();