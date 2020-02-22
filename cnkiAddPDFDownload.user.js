// ==UserScript==
// @name         CNKI-PDF下载
// @namespace    http://*.gxlib.org/KCMS/detail/detail.aspx?*
// @version      0.1
// @description  显示 CNKI-PDF 下载按钮
// @author       Ericwyn (github.com/Ericwyn)
// @match        *.gxlib.org/KCMS/detail/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addPDFDownload = function(){
        if(document.getElementById("DownLoadParts") != undefined) {
            if(document.getElementById("DownLoadParts").outerHTML.indexOf("PDF下载") >= 0) {
                return
            }
            let inner = document.getElementById("DownLoadParts").children[0].outerHTML
            if(inner.indexOf("dflag=nhdown")>0 && inner.indexOf("整本下载")>0 ){
                inner = inner.replace("dflag=nhdown","dflag=pdfdown")
                inner = inner.replace("整本下载","PDF全文下载")
                document.getElementById("DownLoadParts").innerHTML += inner
            }
        }
    }
    window.addPDFDownload();
})();
