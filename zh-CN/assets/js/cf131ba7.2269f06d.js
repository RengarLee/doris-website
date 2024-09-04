"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[464613],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>y});var t=a(296540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),g=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=g(e.components);return t.createElement(o.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=g(a),u=r,y=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return a?t.createElement(y,l(l({ref:n},c),{},{components:a})):t.createElement(y,l({ref:n},c))}));function y(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var g=2;g<i;g++)l[g]=a[g];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},628824:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>g});var t=a(58168),r=(a(296540),a(15680));const i={title:"\u4f7f\u7528 Doris \u548c Iceberg",language:"zh-CN"},l=void 0,s={unversionedId:"gettingStarted/tutorials/building-lakehouse/doris-iceberg",id:"version-3.0/gettingStarted/tutorials/building-lakehouse/doris-iceberg",title:"\u4f7f\u7528 Doris \u548c Iceberg",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/gettingStarted/tutorials/building-lakehouse/doris-iceberg.md",sourceDirName:"gettingStarted/tutorials/building-lakehouse",slug:"/gettingStarted/tutorials/building-lakehouse/doris-iceberg",permalink:"/zh-CN/docs/gettingStarted/tutorials/building-lakehouse/doris-iceberg",draft:!1,tags:[],version:"3.0",frontMatter:{title:"\u4f7f\u7528 Doris \u548c Iceberg",language:"zh-CN"},sidebar:"get-starting",previous:{title:"\u4f7f\u7528 Doris \u548c Paimon",permalink:"/zh-CN/docs/gettingStarted/tutorials/building-lakehouse/doris-paimon"},next:{title:"\u6784\u5efa\u65e5\u5fd7\u5b58\u50a8\u4e0e\u5206\u6790\u5e73\u53f0",permalink:"/zh-CN/docs/gettingStarted/tutorials/log-storage-analysis"}},o={},g=[{value:"Apache Doris &amp; Iceberg",id:"apache-doris--iceberg",level:2},{value:"\u4f7f\u7528\u6307\u5357",id:"\u4f7f\u7528\u6307\u5357",level:2},{value:"01 \u73af\u5883\u51c6\u5907",id:"01-\u73af\u5883\u51c6\u5907",level:3},{value:"02 \u73af\u5883\u90e8\u7f72",id:"02-\u73af\u5883\u90e8\u7f72",level:3},{value:"03 \u521b\u5efa Iceberg \u8868",id:"03-\u521b\u5efa-iceberg-\u8868",level:3},{value:"04 \u6570\u636e\u5199\u5165",id:"04-\u6570\u636e\u5199\u5165",level:3},{value:"05 \u6570\u636e\u67e5\u8be2",id:"05-\u6570\u636e\u67e5\u8be2",level:3},{value:"06 Time Travel",id:"06-time-travel",level:3}],c={toc:g},p="wrapper";function d(e){let{components:n,...i}=e;return(0,r.yg)(p,(0,t.A)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u4f5c\u4e3a\u4e00\u79cd\u5168\u65b0\u7684\u5f00\u653e\u5f0f\u7684\u6570\u636e\u7ba1\u7406\u67b6\u6784\uff0c\u6e56\u4ed3\u4e00\u4f53\uff08Data Lakehouse\uff09\u878d\u5408\u4e86\u6570\u636e\u4ed3\u5e93\u7684\u9ad8\u6027\u80fd\u3001\u5b9e\u65f6\u6027\u4ee5\u53ca\u6570\u636e\u6e56\u7684\u4f4e\u6210\u672c\u3001\u7075\u6d3b\u6027\u7b49\u4f18\u52bf\uff0c\u5e2e\u52a9\u7528\u6237\u66f4\u52a0\u4fbf\u6377\u5730\u6ee1\u8db3\u5404\u79cd\u6570\u636e\u5904\u7406\u5206\u6790\u7684\u9700\u6c42\uff0c\u5728\u4f01\u4e1a\u7684\u5927\u6570\u636e\u4f53\u7cfb\u4e2d\u5df2\u7ecf\u5f97\u5230\u8d8a\u6765\u8d8a\u591a\u7684\u5e94\u7528\u3002"),(0,r.yg)("p",null,"\u5728\u8fc7\u53bb\u591a\u4e2a\u7248\u672c\u4e2d\uff0cApache Doris \u6301\u7eed\u52a0\u6df1\u4e0e\u6570\u636e\u6e56\u7684\u878d\u5408\uff0c\u5f53\u524d\u5df2\u6f14\u8fdb\u51fa\u4e00\u5957\u6210\u719f\u7684\u6e56\u4ed3\u4e00\u4f53\u89e3\u51b3\u65b9\u6848\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u81ea 0.15 \u7248\u672c\u8d77\uff0cApache Doris \u5f15\u5165 Hive \u548c Iceberg \u5916\u90e8\u8868\uff0c\u5c1d\u8bd5\u5728 Apache Iceberg \u4e4b\u4e0a\u63a2\u7d22\u4e0e\u6570\u636e\u6e56\u7684\u80fd\u529b\u7ed3\u5408\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u81ea 1.2 \u7248\u672c\u8d77\uff0cApache Doris \u6b63\u5f0f\u5f15\u5165 Multi-Catalog \u529f\u80fd\uff0c\u5b9e\u73b0\u4e86\u591a\u79cd\u6570\u636e\u6e90\u7684\u81ea\u52a8\u5143\u6570\u636e\u6620\u5c04\u548c\u6570\u636e\u8bbf\u95ee\u3001\u5e76\u5bf9\u5916\u90e8\u6570\u636e\u8bfb\u53d6\u548c\u67e5\u8be2\u6267\u884c\u7b49\u65b9\u9762\u505a\u4e86\u8bf8\u591a\u6027\u80fd\u4f18\u5316\uff0c\u5b8c\u5168\u5177\u5907\u4e86\u6784\u5efa\u6781\u901f\u6613\u7528 Lakehouse \u67b6\u6784\u7684\u80fd\u529b\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u5728 2.1 \u7248\u672c\u4e2d\uff0cApache Doris \u6e56\u4ed3\u4e00\u4f53\u67b6\u6784\u5f97\u5230\u5168\u9762\u52a0\u5f3a\uff0c\u4e0d\u4ec5\u589e\u5f3a\u4e86\u4e3b\u6d41\u6570\u636e\u6e56\u683c\u5f0f\uff08Hudi\u3001Iceberg\u3001Paimon \u7b49\uff09\u7684\u8bfb\u53d6\u548c\u5199\u5165\u80fd\u529b\uff0c\u8fd8\u5f15\u5165\u4e86\u591a SQL \u65b9\u8a00\u517c\u5bb9\u3001\u53ef\u4ece\u539f\u6709\u7cfb\u7edf\u65e0\u7f1d\u5207\u6362\u81f3 Apache Doris\u3002\u5728\u6570\u636e\u79d1\u5b66\u53ca\u5927\u89c4\u6a21\u6570\u636e\u8bfb\u53d6\u573a\u666f\u4e0a\uff0cDoris \u96c6\u6210\u4e86 Arrow Flight \u9ad8\u901f\u8bfb\u53d6\u63a5\u53e3\uff0c\u4f7f\u5f97\u6570\u636e\u4f20\u8f93\u6548\u7387\u5b9e\u73b0 100 \u500d\u7684\u63d0\u5347\u3002")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"\u4f7f\u7528 Doris \u548c Iceberg \u6784\u5efa Lakehouse",src:a(763995).A,width:"2560",height:"1280"})),(0,r.yg)("h2",{id:"apache-doris--iceberg"},"Apache Doris & Iceberg"),(0,r.yg)("p",null,"Apache Iceberg \u662f\u4e00\u79cd\u5f00\u6e90\u3001\u9ad8\u6027\u80fd\u3001\u9ad8\u53ef\u9760\u7684\u6570\u636e\u6e56\u8868\u683c\u5f0f\uff0c\u53ef\u5b9e\u73b0\u8d85\u5927\u89c4\u6a21\u6570\u636e\u7684\u5206\u6790\u4e0e\u7ba1\u7406\u3002\u5b83\u652f\u6301 Apache Doris \u5728\u5185\u7684\u591a\u79cd\u4e3b\u6d41\u67e5\u8be2\u5f15\u64ce\uff0c\u517c\u5bb9 HDFS \u4ee5\u53ca\u5404\u79cd\u5bf9\u8c61\u4e91\u5b58\u50a8\uff0c\u5177\u5907 ACID\u3001Schema \u6f14\u8fdb\u3001\u9ad8\u7ea7\u8fc7\u6ee4\u3001\u9690\u85cf\u5206\u533a\u548c\u5206\u533a\u5e03\u5c40\u6f14\u8fdb\u7b49\u7279\u6027\uff0c\u53ef\u786e\u4fdd\u9ad8\u6027\u80fd\u67e5\u8be2\u4ee5\u53ca\u6570\u636e\u7684\u53ef\u9760\u6027\u53ca\u4e00\u81f4\u6027\uff0c\u5176\u65f6\u95f4\u65c5\u884c\u548c\u7248\u672c\u56de\u6eda\u529f\u80fd\u4e5f\u4e3a\u6570\u636e\u7ba1\u7406\u5e26\u6765\u8f83\u9ad8\u7684\u7075\u6d3b\u6027\u3002"),(0,r.yg)("p",null,"Apache Doris \u5bf9 Iceberg \u591a\u9879\u6838\u5fc3\u7279\u6027\u63d0\u4f9b\u4e86\u539f\u751f\u652f\u6301\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u652f\u6301 Hive Metastore\u3001Hadoop\u3001REST\u3001Glue\u3001Google Dataproc Metastore\u3001DLF \u7b49\u591a\u79cd Iceberg Catalog \u7c7b\u578b\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u539f\u751f\u652f\u6301 Iceberg V1/V2 \u8868\u683c\u5f0f\uff0c\u4ee5\u53ca  Position Delete\u3001Equality Delete \u6587\u4ef6\u7684\u8bfb\u53d6\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u652f\u6301\u901a\u8fc7\u8868\u51fd\u6570\u67e5\u8be2 Iceberg \u8868\u5feb\u7167\u5386\u53f2\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u652f\u6301\u65f6\u95f4\u65c5\u884c\uff08Time Travel\uff09\u529f\u80fd\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u539f\u751f\u652f\u6301 Iceberg \u8868\u5f15\u64ce\u3002\u53ef\u4ee5\u901a\u8fc7 Apache Doris \u76f4\u63a5\u521b\u5efa\u3001\u7ba1\u7406\u4ee5\u53ca\u5c06\u6570\u636e\u5199\u5165\u5230 Iceberg \u8868\u3002\u652f\u6301\u5b8c\u5584\u7684\u5206\u533a Transform \u51fd\u6570\uff0c\u4ece\u800c\u63d0\u4f9b\u9690\u85cf\u5206\u533a\u548c\u5206\u533a\u5e03\u5c40\u6f14\u8fdb\u7b49\u80fd\u529b\u3002")),(0,r.yg)("p",null,"\u7528\u6237\u53ef\u4ee5\u57fa\u4e8e Apache Doris + Apache Iceberg \u5feb\u901f\u6784\u5efa\u9ad8\u6548\u7684\u6e56\u4ed3\u4e00\u4f53\u89e3\u51b3\u65b9\u6848\uff0c\u4ee5\u7075\u6d3b\u5e94\u5bf9\u5b9e\u65f6\u6570\u636e\u5206\u6790\u4e0e\u5904\u7406\u7684\u5404\u79cd\u9700\u6c42\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u901a\u8fc7 Doris \u9ad8\u6027\u80fd\u67e5\u8be2\u5f15\u64ce\u5bf9 Iceberg \u8868\u6570\u636e\u548c\u5176\u4ed6\u6570\u636e\u6e90\u8fdb\u884c\u5173\u8054\u6570\u636e\u5206\u6790\uff0c\u6784\u5efa",(0,r.yg)("strong",{parentName:"li"},"\u7edf\u4e00\u7684\u8054\u90a6\u6570\u636e\u5206\u6790\u5e73\u53f0"),"\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u901a\u8fc7 Doris \u76f4\u63a5\u7ba1\u7406\u548c\u6784\u5efa Iceberg \u8868\uff0c\u5728 Doris \u4e2d\u5b8c\u6210\u5bf9\u6570\u636e\u7684\u6e05\u6d17\u3001\u52a0\u5de5\u5e76\u5199\u5165\u5230 Iceberg \u8868\uff0c\u6784\u5efa",(0,r.yg)("strong",{parentName:"li"},"\u7edf\u4e00\u7684\u6e56\u4ed3\u6570\u636e\u5904\u7406\u5e73\u53f0"),"\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u901a\u8fc7 Iceberg \u8868\u5f15\u64ce\uff0c\u5c06 Doris \u6570\u636e\u5171\u4eab\u7ed9\u5176\u4ed6\u4e0a\u4e0b\u6e38\u7cfb\u7edf\u505a\u8fdb\u4e00\u6b65\u5904\u7406\uff0c\u6784\u5efa",(0,r.yg)("strong",{parentName:"li"},"\u7edf\u4e00\u7684\u5f00\u653e\u6570\u636e\u5b58\u50a8\u5e73\u53f0"),"\u3002")),(0,r.yg)("p",null,"\u672a\u6765\uff0cApache Iceberg \u5c06\u4f5c\u4e3a Apache Doris \u7684\u539f\u751f\u8868\u5f15\u64ce\u4e4b\u4e00\uff0c\u63d0\u4f9b\u66f4\u52a0\u5b8c\u5584\u7684\u6e56\u683c\u5f0f\u6570\u636e\u7684\u5206\u6790\u3001\u7ba1\u7406\u529f\u80fd\u3002Apache Doris \u4e5f\u5c06\u9010\u6b65\u652f\u6301\u5305\u62ec Update/Delete/Merge\u3001\u5199\u56de\u65f6\u6392\u5e8f\u3001\u589e\u91cf\u6570\u636e\u8bfb\u53d6\u3001\u5143\u6570\u636e\u7ba1\u7406\u7b49 Apache Iceberg \u66f4\u591a\u9ad8\u7ea7\u7279\u6027\uff0c\u5171\u540c\u6784\u5efa\u7edf\u4e00\u3001\u9ad8\u6027\u80fd\u3001\u5b9e\u65f6\u7684\u6e56\u4ed3\u5e73\u53f0\u3002"),(0,r.yg)("p",null,"\u5173\u4e8e\u66f4\u591a\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/lakehouse/datalake-analytics/iceberg"},"Iceberg Catalog")),(0,r.yg)("h2",{id:"\u4f7f\u7528\u6307\u5357"},"\u4f7f\u7528\u6307\u5357"),(0,r.yg)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u8bb2\u89e3\u5982\u4f55\u5728 Docker \u73af\u5883\u4e0b\u5feb\u901f\u642d\u5efa Apache Doris + Apache Iceberg \u6d4b\u8bd5 & \u6f14\u793a\u73af\u5883\uff0c\u5e76\u5c55\u793a\u5404\u529f\u80fd\u7684\u4f7f\u7528\u64cd\u4f5c\u3002"),(0,r.yg)("p",null,"\u672c\u6587\u6d89\u53ca\u6240\u6709\u811a\u672c\u548c\u4ee3\u7801\u53ef\u4ee5\u4ece\u8be5\u5730\u5740\u83b7\u53d6\uff1a",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/samples/datalake/iceberg_and_paimon"},"https://github.com/apache/doris/tree/master/samples/datalake/iceberg_and_paimon")),(0,r.yg)("h3",{id:"01-\u73af\u5883\u51c6\u5907"},"01 \u73af\u5883\u51c6\u5907"),(0,r.yg)("p",null,"\u672c\u6587\u793a\u4f8b\u91c7\u7528 Docker Compose \u90e8\u7f72\uff0c\u7ec4\u4ef6\u53ca\u7248\u672c\u53f7\u5982\u4e0b\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u7ec4\u4ef6\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Apache Doris"),(0,r.yg)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4 2.1.5\uff0c\u53ef\u4fee\u6539")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Apache Iceberg"),(0,r.yg)("td",{parentName:"tr",align:null},"1.4.3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MinIO"),(0,r.yg)("td",{parentName:"tr",align:null},"RELEASE.2024-04-29T09-56-05Z")))),(0,r.yg)("h3",{id:"02-\u73af\u5883\u90e8\u7f72"},"02 \u73af\u5883\u90e8\u7f72"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u542f\u52a8\u6240\u6709\u7ec4\u4ef6"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"bash ./start_all.sh"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u542f\u52a8\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u811a\u672c\uff0c\u767b\u9646 Doris \u547d\u4ee4\u884c\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- login doris\nbash ./start_doris_client.sh\n")))),(0,r.yg)("h3",{id:"03-\u521b\u5efa-iceberg-\u8868"},"03 \u521b\u5efa Iceberg \u8868"),(0,r.yg)("p",null,"\u9996\u5148\u767b\u9646 Doris \u547d\u4ee4\u884c\u540e\uff0cDoris \u96c6\u7fa4\u4e2d\u5df2\u7ecf\u521b\u5efa\u4e86\u540d\u4e3a Iceberg \u7684 Catalog\uff08\u53ef\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW CATALOGS"),"/",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW CREATE CATALOG iceberg")," \u67e5\u770b\uff09\u3002\u4ee5\u4e0b\u4e3a\u8be5 Catalog \u7684\u521b\u5efa\u8bed\u53e5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'-- \u5df2\u521b\u5efa\uff0c\u65e0\u9700\u6267\u884c\nCREATE CATALOG `iceberg` PROPERTIES (\n    "type" = "iceberg",\n    "iceberg.catalog.type" = "rest",\n    "warehouse" = "s3://warehouse/",\n    "uri" = "http://rest:8181",\n    "s3.access_key" = "admin",\n    "s3.secret_key" = "password",\n    "s3.endpoint" = "http://minio:9000"\n);\n')),(0,r.yg)("p",null,"\u5728 Iceberg Catalog \u521b\u5efa\u6570\u636e\u5e93\u548c Iceberg \u8868\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> SWITCH iceberg;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> CREATE DATABASE nyc;\nQuery OK, 0 rows affected (0.12 sec)\n\nmysql> CREATE TABLE iceberg.nyc.taxis\n       (\n           vendor_id BIGINT,\n           trip_id BIGINT,\n           trip_distance FLOAT,\n           fare_amount DOUBLE,\n           store_and_fwd_flag STRING,\n           ts DATETIME\n       )\n       PARTITION BY LIST (vendor_id, DAY(ts)) ()\n       PROPERTIES (\n           "compression-codec" = "zstd",\n           "write-format" = "parquet"\n       );\nQuery OK, 0 rows affected (0.15 sec)\n')),(0,r.yg)("h3",{id:"04-\u6570\u636e\u5199\u5165"},"04 \u6570\u636e\u5199\u5165"),(0,r.yg)("p",null,"\u5411 Iceberg \u8868\u4e2d\u63d2\u5165\u6570\u636e\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> INSERT INTO iceberg.nyc.taxis\n       VALUES\n        (1, 1000371, 1.8, 15.32, 'N', '2024-01-01 9:15:23'),\n        (2, 1000372, 2.5, 22.15, 'N', '2024-01-02 12:10:11'),\n        (2, 1000373, 0.9, 9.01, 'N', '2024-01-01 3:25:15'),\n        (1, 1000374, 8.4, 42.13, 'Y', '2024-01-03 7:12:33');\nQuery OK, 4 rows affected (1.61 sec)\n{'status':'COMMITTED', 'txnId':'10085'}\n")),(0,r.yg)("p",null,"\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"CREATE TABLE AS SELECT")," \u6765\u521b\u5efa\u4e00\u5f20 Iceberg \u8868\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> CREATE TABLE iceberg.nyc.taxis2 AS SELECT * FROM iceberg.nyc.taxis;\nQuery OK, 6 rows affected (0.25 sec)\n{'status':'COMMITTED', 'txnId':'10088'}\n")),(0,r.yg)("h3",{id:"05-\u6570\u636e\u67e5\u8be2"},"05 \u6570\u636e\u67e5\u8be2"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u7b80\u5355\u67e5\u8be2"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT * FROM iceberg.nyc.taxis;\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         1 | 1000374 |           8.4 |       42.13 | Y                  | 2024-01-03 07:12:33.000000 |\n|         1 | 1000371 |           1.8 |       15.32 | N                  | 2024-01-01 09:15:23.000000 |\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n|         2 | 1000372 |           2.5 |       22.15 | N                  | 2024-01-02 12:10:11.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n4 rows in set (0.37 sec)\n\nmysql> SELECT * FROM iceberg.nyc.taxis2;\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         1 | 1000374 |           8.4 |       42.13 | Y                  | 2024-01-03 07:12:33.000000 |\n|         1 | 1000371 |           1.8 |       15.32 | N                  | 2024-01-01 09:15:23.000000 |\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n|         2 | 1000372 |           2.5 |       22.15 | N                  | 2024-01-02 12:10:11.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n4 rows in set (0.35 sec)\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5206\u533a\u526a\u88c1"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT * FROM iceberg.nyc.taxis where vendor_id = 2 and ts >= '2024-01-01' and ts < '2024-01-02';\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n1 row in set (0.06 sec)\n\nmysql> EXPLAIN VERBOSE SELECT * FROM iceberg.nyc.taxis where vendor_id = 2 and ts >= '2024-01-01' and ts < '2024-01-02';\n                                                                                                                                                             \n....                                                                                                                                                                                  \n|   0:VICEBERG_SCAN_NODE(71)                                                                                                                                                          \n|      table: taxis                                                                                                                                                                   \n|      predicates: (ts[#5] < '2024-01-02 00:00:00'), (vendor_id[#0] = 2), (ts[#5] >= '2024-01-01 00:00:00')                                                                           \n|      inputSplitNum=1, totalFileSize=3539, scanRanges=1                                                                                                                              \n|      partition=1/0                                                                                                                                                                  \n|      backends:                                                                                                                                                                      \n|        10002                                                                                                                                                                        \n|          s3://warehouse/wh/nyc/taxis/data/vendor_id=2/ts_day=2024-01-01/40e6ca404efa4a44-b888f23546d3a69c_5708e229-2f3d-4b68-a66b-44298a9d9815-0.zstd.parquet start: 0 length: 3539 \n|      cardinality=6, numNodes=1                                                                                                                                                      \n|      pushdown agg=NONE                                                                                                                                                              \n|      icebergPredicatePushdown=                                                                                                                                                      \n|           ref(name=\"ts\") < 1704153600000000                                                                                                                                         \n|           ref(name=\"vendor_id\") == 2                                                                                                                                                \n|           ref(name=\"ts\") >= 1704067200000000                                                                                                                                        \n....\n")),(0,r.yg)("p",{parentName:"li"},"\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"EXPLAIN VERBOSE")," \u8bed\u53e5\u7684\u7ed3\u679c\u53ef\u77e5\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"vendor_id = 2 and ts >= '2024-01-01' and ts < '2024-01-02'")," \u8c13\u8bcd\u6761\u4ef6\uff0c\u6700\u7ec8\u53ea\u547d\u4e2d\u4e00\u4e2a\u5206\u533a\uff08",(0,r.yg)("inlineCode",{parentName:"p"},"partition=1/0"),"\uff09\u3002"),(0,r.yg)("p",{parentName:"li"},"\u540c\u65f6\u4e5f\u53ef\u77e5\uff0c\u56e0\u4e3a\u5728\u5efa\u8868\u65f6\u6307\u5b9a\u4e86\u5206\u533a Transform \u51fd\u6570 ",(0,r.yg)("inlineCode",{parentName:"p"},"DAY(ts)"),"\uff0c\u539f\u59cb\u6570\u636e\u4e2d\u7684\u7684\u503c ",(0,r.yg)("inlineCode",{parentName:"p"},"2024-01-01 03:25:15.000000")," \u4f1a\u88ab\u8f6c\u6362\u6210\u6587\u4ef6\u76ee\u5f55\u4e2d\u7684\u5206\u533a\u4fe1\u606f ",(0,r.yg)("inlineCode",{parentName:"p"},"ts_day=2024-01-01"),"\u3002"))),(0,r.yg)("h3",{id:"06-time-travel"},"06 Time Travel"),(0,r.yg)("p",null,"\u6211\u4eec\u5148\u518d\u6b21\u63d2\u5165\u51e0\u884c\u6570\u636e\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO iceberg.nyc.taxis VALUES (1, 1000375, 8.8, 55.55, 'Y', '2024-01-01 8:10:22'), (3, 1000376, 7.4, 32.35, 'N', '2024-01-02  1:14:45');\nQuery OK, 2 rows affected (0.17 sec)\n{'status':'COMMITTED', 'txnId':'10086'}\n\nmysql> SELECT * FROM iceberg.nyc.taxis;\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         3 | 1000376 |           7.4 |       32.35 | N                  | 2024-01-02 01:14:45.000000 |\n|         2 | 1000372 |           2.5 |       22.15 | N                  | 2024-01-02 12:10:11.000000 |\n|         1 | 1000374 |           8.4 |       42.13 | Y                  | 2024-01-03 07:12:33.000000 |\n|         1 | 1000371 |           1.8 |       15.32 | N                  | 2024-01-01 09:15:23.000000 |\n|         1 | 1000375 |           8.8 |       55.55 | Y                  | 2024-01-01 08:10:22.000000 |\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n6 rows in set (0.11 sec)\n")),(0,r.yg)("p",null,"\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"iceberg_meta")," \u8868\u51fd\u6570\u67e5\u8be2\u8868\u7684\u5feb\u7167\u4fe1\u606f\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> select * from iceberg_meta("table" = "iceberg.nyc.taxis", "query_type" = "snapshots");\n+---------------------+---------------------+---------------------+-----------+-----------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| committed_at        | snapshot_id         | parent_id           | operation | manifest_list                                                                                             | summary                                                                                                                                                                                                                                                        |\n+---------------------+---------------------+---------------------+-----------+-----------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| 2024-07-29 03:38:22 | 8483933166442433486 |                  -1 | append    | s3://warehouse/wh/nyc/taxis/metadata/snap-8483933166442433486-1-5f7b7736-8022-4ba1-9db2-51ae7553be4d.avro | {"added-data-files":"4","added-records":"4","added-files-size":"14156","changed-partition-count":"4","total-records":"4","total-files-size":"14156","total-data-files":"4","total-delete-files":"0","total-position-deletes":"0","total-equality-deletes":"0"} |\n| 2024-07-29 03:40:23 | 4726331391239920914 | 8483933166442433486 | append    | s3://warehouse/wh/nyc/taxis/metadata/snap-4726331391239920914-1-6aa3d142-6c9c-4553-9c04-08ad4d49a4ea.avro | {"added-data-files":"2","added-records":"2","added-files-size":"7078","changed-partition-count":"2","total-records":"6","total-files-size":"21234","total-data-files":"6","total-delete-files":"0","total-position-deletes":"0","total-equality-deletes":"0"}  |\n+---------------------+---------------------+---------------------+-----------+-----------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n2 rows in set (0.07 sec)\n')),(0,r.yg)("p",null,"\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"FOR VERSION AS OF")," \u8bed\u53e5\u67e5\u8be2\u6307\u5b9a\u5feb\u7167\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT * FROM iceberg.nyc.taxis FOR VERSION AS OF 8483933166442433486;\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         1 | 1000371 |           1.8 |       15.32 | N                  | 2024-01-01 09:15:23.000000 |\n|         1 | 1000374 |           8.4 |       42.13 | Y                  | 2024-01-03 07:12:33.000000 |\n|         2 | 1000372 |           2.5 |       22.15 | N                  | 2024-01-02 12:10:11.000000 |\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n4 rows in set (0.05 sec)\n\nmysql> SELECT * FROM iceberg.nyc.taxis FOR VERSION AS OF 4726331391239920914;\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         1 | 1000374 |           8.4 |       42.13 | Y                  | 2024-01-03 07:12:33.000000 |\n|         1 | 1000375 |           8.8 |       55.55 | Y                  | 2024-01-01 08:10:22.000000 |\n|         3 | 1000376 |           7.4 |       32.35 | N                  | 2024-01-02 01:14:45.000000 |\n|         2 | 1000372 |           2.5 |       22.15 | N                  | 2024-01-02 12:10:11.000000 |\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n|         1 | 1000371 |           1.8 |       15.32 | N                  | 2024-01-01 09:15:23.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n6 rows in set (0.04 sec)\n")),(0,r.yg)("p",null,"\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"FOR TIME AS OF")," \u8bed\u53e5\u67e5\u8be2\u6307\u5b9a\u5feb\u7167\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> SELECT * FROM iceberg.nyc.taxis FOR TIME AS OF "2024-07-29 03:38:23";\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         1 | 1000374 |           8.4 |       42.13 | Y                  | 2024-01-03 07:12:33.000000 |\n|         1 | 1000371 |           1.8 |       15.32 | N                  | 2024-01-01 09:15:23.000000 |\n|         2 | 1000372 |           2.5 |       22.15 | N                  | 2024-01-02 12:10:11.000000 |\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n4 rows in set (0.04 sec)\n\nmysql> SELECT * FROM iceberg.nyc.taxis FOR TIME AS OF "2024-07-29 03:40:22";\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n|         1 | 1000374 |           8.4 |       42.13 | Y                  | 2024-01-03 07:12:33.000000 |\n|         2 | 1000372 |           2.5 |       22.15 | N                  | 2024-01-02 12:10:11.000000 |\n|         1 | 1000371 |           1.8 |       15.32 | N                  | 2024-01-01 09:15:23.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n4 rows in set (0.05 sec)\n')))}d.isMDXComponent=!0},763995:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/lakehouse-architecture-for-doris-and-iceberg-f68e6dce7852461952c5bf7ba5efae25.png"}}]);