// ==UserScript==
// @name         新版 CNKI-PDF 下载
// @namespace    cnki.pdf.download.new
// @version      0.1
// @description  帮助下载pdf
// @author       Ericwyn.chen@gmail.com
// @match        *.gxlib.org.cn/*
// @match        *.cnki.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let doms = document.getElementsByTagName("li");
    let liIndex ;
    for(let i=0;i<doms.length;i++){
        let li = doms[i];
        // console.log(li.innerText)
        if(li.innerText == "整本下载"){
            let parent = li.parentElement;
            let newLi = li.outerHTML;
            liIndex = li;
            newLi = newLi.replace("整本下载","PDF整本下载(插件)")
            newLi = newLi.replace("dflag=nhdown","dflag=pdfdown")
            console.log(parent)
            console.log(newLi)
            parent.innerHTML += '<li>'+newLi+'</li>';
            //  liIndex = li;
        }
    }
})();
