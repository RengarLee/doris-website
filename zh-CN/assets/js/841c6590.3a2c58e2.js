"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[638755],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>g});var n=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),c=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(o.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=r,g=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return t?n.createElement(g,l(l({ref:a},u),{},{components:t})):n.createElement(g,l({ref:a},u))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},185573:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(58168),r=(t(296540),t(15680));const i={title:"\u4f7f\u7528 Doris \u548c Hudi",language:"zh-CN"},l=void 0,s={unversionedId:"gettingStarted/tutorials/building-lakehouse/doris-hudi",id:"version-1.2/gettingStarted/tutorials/building-lakehouse/doris-hudi",title:"\u4f7f\u7528 Doris \u548c Hudi",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/gettingStarted/tutorials/building-lakehouse/doris-hudi.md",sourceDirName:"gettingStarted/tutorials/building-lakehouse",slug:"/gettingStarted/tutorials/building-lakehouse/doris-hudi",permalink:"/zh-CN/docs/1.2/gettingStarted/tutorials/building-lakehouse/doris-hudi",draft:!1,tags:[],version:"1.2",frontMatter:{title:"\u4f7f\u7528 Doris \u548c Hudi",language:"zh-CN"},sidebar:"get-starting",previous:{title:"\u5feb\u901f\u4f53\u9a8c",permalink:"/zh-CN/docs/1.2/gettingStarted/quick-start"},next:{title:"\u4f7f\u7528 Doris \u548c Paimon",permalink:"/zh-CN/docs/1.2/gettingStarted/tutorials/building-lakehouse/doris-paimon"}},o={},c=[{value:"Apache Doris &amp; Hudi",id:"apache-doris--hudi",level:2},{value:"\u4f7f\u7528\u6307\u5357",id:"\u4f7f\u7528\u6307\u5357",level:2},{value:"01 \u73af\u5883\u51c6\u5907",id:"01-\u73af\u5883\u51c6\u5907",level:3},{value:"02 \u73af\u5883\u90e8\u7f72",id:"02-\u73af\u5883\u90e8\u7f72",level:3},{value:"03 \u6570\u636e\u51c6\u5907",id:"03-\u6570\u636e\u51c6\u5907",level:3},{value:"04 \u6570\u636e\u67e5\u8be2",id:"04-\u6570\u636e\u67e5\u8be2",level:3},{value:"05 Incremental Read",id:"05-incremental-read",level:3},{value:"06 TimeTravel",id:"06-timetravel",level:3},{value:"\u67e5\u8be2\u4f18\u5316",id:"\u67e5\u8be2\u4f18\u5316",level:2}],u={toc:c},p="wrapper";function m(e){let{components:a,...i}=e;return(0,r.yg)(p,(0,n.A)({},u,i,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u4f5c\u4e3a\u4e00\u79cd\u5168\u65b0\u7684\u5f00\u653e\u5f0f\u7684\u6570\u636e\u7ba1\u7406\u67b6\u6784\uff0c\u6e56\u4ed3\u4e00\u4f53\uff08Data Lakehouse\uff09\u878d\u5408\u4e86\u6570\u636e\u4ed3\u5e93\u7684\u9ad8\u6027\u80fd\u3001\u5b9e\u65f6\u6027\u4ee5\u53ca\u6570\u636e\u6e56\u7684\u4f4e\u6210\u672c\u3001\u7075\u6d3b\u6027\u7b49\u4f18\u52bf\uff0c\u5e2e\u52a9\u7528\u6237\u66f4\u52a0\u4fbf\u6377\u5730\u6ee1\u8db3\u5404\u79cd\u6570\u636e\u5904\u7406\u5206\u6790\u7684\u9700\u6c42\uff0c\u5728\u4f01\u4e1a\u7684\u5927\u6570\u636e\u4f53\u7cfb\u4e2d\u5df2\u7ecf\u5f97\u5230\u8d8a\u6765\u8d8a\u591a\u7684\u5e94\u7528\u3002"),(0,r.yg)("p",null,"\u5728\u8fc7\u53bb\u591a\u4e2a\u7248\u672c\u4e2d\uff0cApache Doris \u6301\u7eed\u52a0\u6df1\u4e0e\u6570\u636e\u6e56\u7684\u878d\u5408\uff0c\u5f53\u524d\u5df2\u6f14\u8fdb\u51fa\u4e00\u5957\u6210\u719f\u7684\u6e56\u4ed3\u4e00\u4f53\u89e3\u51b3\u65b9\u6848\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u81ea 0.15 \u7248\u672c\u8d77\uff0cApache Doris \u5f15\u5165 Hive \u548c Iceberg \u5916\u90e8\u8868\uff0c\u5c1d\u8bd5\u5728 Apache Iceberg \u4e4b\u4e0a\u63a2\u7d22\u4e0e\u6570\u636e\u6e56\u7684\u80fd\u529b\u7ed3\u5408\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u81ea 1.2 \u7248\u672c\u8d77\uff0cApache Doris \u6b63\u5f0f\u5f15\u5165 Multi-Catalog \u529f\u80fd\uff0c\u5b9e\u73b0\u4e86\u591a\u79cd\u6570\u636e\u6e90\u7684\u81ea\u52a8\u5143\u6570\u636e\u6620\u5c04\u548c\u6570\u636e\u8bbf\u95ee\u3001\u5e76\u5bf9\u5916\u90e8\u6570\u636e\u8bfb\u53d6\u548c\u67e5\u8be2\u6267\u884c\u7b49\u65b9\u9762\u505a\u4e86\u8bf8\u591a\u6027\u80fd\u4f18\u5316\uff0c\u5b8c\u5168\u5177\u5907\u4e86\u6784\u5efa\u6781\u901f\u6613\u7528 Lakehouse \u67b6\u6784\u7684\u80fd\u529b\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u5728 2.1 \u7248\u672c\u4e2d\uff0cApache Doris \u6e56\u4ed3\u4e00\u4f53\u67b6\u6784\u5f97\u5230\u5168\u9762\u52a0\u5f3a\uff0c\u4e0d\u4ec5\u589e\u5f3a\u4e86\u4e3b\u6d41\u6570\u636e\u6e56\u683c\u5f0f\uff08Hudi\u3001Iceberg\u3001Paimon \u7b49\uff09\u7684\u8bfb\u53d6\u548c\u5199\u5165\u80fd\u529b\uff0c\u8fd8\u5f15\u5165\u4e86\u591a SQL \u65b9\u8a00\u517c\u5bb9\u3001\u53ef\u4ece\u539f\u6709\u7cfb\u7edf\u65e0\u7f1d\u5207\u6362\u81f3 Apache Doris\u3002\u5728\u6570\u636e\u79d1\u5b66\u53ca\u5927\u89c4\u6a21\u6570\u636e\u8bfb\u53d6\u573a\u666f\u4e0a\uff0cDoris \u96c6\u6210\u4e86 Arrow Flight \u9ad8\u901f\u8bfb\u53d6\u63a5\u53e3\uff0c\u4f7f\u5f97\u6570\u636e\u4f20\u8f93\u6548\u7387\u5b9e\u73b0 100 \u500d\u7684\u63d0\u5347\u3002")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"\u4f7f\u7528 Doris \u548c Hudi \u6784\u5efa Lakehouse",src:t(507726).A,width:"2560",height:"1280"})),(0,r.yg)("h2",{id:"apache-doris--hudi"},"Apache Doris & Hudi"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://hudi.apache.org/"},"Apache Hudi")," \u662f\u76ee\u524d\u6700\u4e3b\u6d41\u7684\u5f00\u653e\u6570\u636e\u6e56\u683c\u5f0f\u4e4b\u4e00\uff0c\u4e5f\u662f\u4e8b\u52a1\u6027\u7684\u6570\u636e\u6e56\u7ba1\u7406\u5e73\u53f0\uff0c\u652f\u6301\u5305\u62ec Apache Doris \u5728\u5185\u7684\u591a\u79cd\u4e3b\u6d41\u67e5\u8be2\u5f15\u64ce\u3002"),(0,r.yg)("p",null,"Apache Doris \u540c\u6837\u5bf9 Apache Hudi \u6570\u636e\u8868\u7684\u8bfb\u53d6\u80fd\u529b\u8fdb\u884c\u4e86\u589e\u5f3a\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u652f\u6301 Copy on Write Table\uff1aSnapshot Query"),(0,r.yg)("li",{parentName:"ul"},"\u652f\u6301 Merge on Read Table\uff1aSnapshot Queries, Read Optimized Queries"),(0,r.yg)("li",{parentName:"ul"},"\u652f\u6301 Time Travel"),(0,r.yg)("li",{parentName:"ul"},"\u652f\u6301 Incremental Read")),(0,r.yg)("p",null,"\u51ed\u501f Apache Doris \u7684\u9ad8\u6027\u80fd\u67e5\u8be2\u6267\u884c\u4ee5\u53ca Apache Hudi \u7684\u5b9e\u65f6\u6570\u636e\u7ba1\u7406\u80fd\u529b\uff0c\u53ef\u4ee5\u5b9e\u73b0\u9ad8\u6548\u3001\u7075\u6d3b\u3001\u4f4e\u6210\u672c\u7684\u6570\u636e\u67e5\u8be2\u548c\u5206\u6790\uff0c\u540c\u65f6\u4e5f\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u6570\u636e\u56de\u6eaf\u3001\u5ba1\u8ba1\u548c\u589e\u91cf\u5904\u7406\u529f\u80fd\uff0c\u5f53\u524d\u57fa\u4e8e Apache Doris \u548c Apache Hudi \u7684\u7ec4\u5408\u5df2\u7ecf\u5728\u591a\u4e2a\u793e\u533a\u7528\u6237\u7684\u771f\u5b9e\u4e1a\u52a1\u573a\u666f\u4e2d\u5f97\u5230\u9a8c\u8bc1\u548c\u63a8\u5e7f\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5b9e\u65f6\u6570\u636e\u5206\u6790\u4e0e\u5904\u7406\uff1a\u6bd4\u5982\u91d1\u878d\u884c\u4e1a\u4ea4\u6613\u5206\u6790\u3001\u5e7f\u544a\u884c\u4e1a\u5b9e\u65f6\u70b9\u51fb\u6d41\u5206\u6790\u3001\u7535\u5546\u884c\u4e1a\u7528\u6237\u884c\u4e3a\u5206\u6790\u7b49\u5e38\u89c1\u573a\u666f\u4e0b\uff0c\u90fd\u8981\u6c42\u5b9e\u65f6\u7684\u6570\u636e\u66f4\u65b0\u53ca\u67e5\u8be2\u5206\u6790\u3002Hudi \u80fd\u591f\u5b9e\u73b0\u5bf9\u6570\u636e\u7684\u5b9e\u65f6\u66f4\u65b0\u548c\u7ba1\u7406\uff0c\u5e76\u4fdd\u8bc1\u6570\u636e\u7684\u4e00\u81f4\u6027\u548c\u53ef\u9760\u6027\uff0cDoris \u5219\u80fd\u591f\u5b9e\u65f6\u9ad8\u6548\u5904\u7406\u5927\u89c4\u6a21\u6570\u636e\u67e5\u8be2\u8bf7\u6c42\uff0c\u4e8c\u8005\u7ed3\u5408\u80fd\u591f\u5145\u5206\u6ee1\u8db3\u5b9e\u65f6\u6570\u636e\u5206\u6790\u4e0e\u5904\u7406\u7684\u9700\u6c42\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u6570\u636e\u56de\u6eaf\u4e0e\u5ba1\u8ba1\uff1a\u5bf9\u4e8e\u91d1\u878d\u3001\u533b\u7597\u7b49\u5bf9\u6570\u636e\u5b89\u5168\u548c\u51c6\u786e\u6027\u8981\u6c42\u6781\u9ad8\u7684\u884c\u4e1a\u6765\u8bf4\uff0c\u6570\u636e\u56de\u6eaf\u548c\u5ba1\u8ba1\u662f\u975e\u5e38\u91cd\u8981\u7684\u529f\u80fd\u3002Hudi \u63d0\u4f9b\u4e86\u65f6\u95f4\u65c5\u884c\uff08Time Travel\uff09\u529f\u80fd\uff0c\u5141\u8bb8\u7528\u6237\u67e5\u770b\u5386\u53f2\u6570\u636e\u72b6\u6001\uff0c\u7ed3\u5408 Apache Doris \u9ad8\u6548\u67e5\u8be2\u80fd\u529b\uff0c\u53ef\u5feb\u901f\u67e5\u627e\u5206\u6790\u4efb\u4f55\u65f6\u95f4\u70b9\u7684\u6570\u636e\uff0c\u5b9e\u73b0\u7cbe\u786e\u7684\u56de\u6eaf\u548c\u5ba1\u8ba1\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u589e\u91cf\u6570\u636e\u8bfb\u53d6\u4e0e\u5206\u6790\uff1a\u5728\u8fdb\u884c\u5927\u6570\u636e\u5206\u6790\u65f6\u5f80\u5f80\u9762\u4e34\u7740\u6570\u636e\u89c4\u6a21\u5e9e\u5927\u3001\u66f4\u65b0\u9891\u7e41\u7684\u95ee\u9898\uff0cHudi \u652f\u6301\u589e\u91cf\u6570\u636e\u8bfb\u53d6\uff0c\u8fd9\u4f7f\u5f97\u7528\u6237\u53ef\u4ee5\u53ea\u9700\u5904\u7406\u53d8\u5316\u7684\u6570\u636e\uff0c\u4e0d\u5fc5\u8fdb\u884c\u5168\u91cf\u6570\u636e\u66f4\u65b0\uff1b\u540c\u65f6 Apache Doris \u7684 Incremental Read \u529f\u80fd\u4e5f\u53ef\u4f7f\u8fd9\u4e00\u8fc7\u7a0b\u66f4\u52a0\u9ad8\u6548\uff0c\u663e\u8457\u63d0\u5347\u4e86\u6570\u636e\u5904\u7406\u548c\u5206\u6790\u7684\u6548\u7387\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u8de8\u6570\u636e\u6e90\u8054\u90a6\u67e5\u8be2\uff1a\u8bb8\u591a\u4f01\u4e1a\u6570\u636e\u6765\u6e90\u590d\u6742\uff0c\u6570\u636e\u53ef\u80fd\u5b58\u50a8\u5728\u4e0d\u540c\u7684\u6570\u636e\u5e93\u4e2d\u3002Doris \u7684 Multi-Catalog \u529f\u80fd\u652f\u6301\u591a\u79cd\u6570\u636e\u6e90\u7684\u81ea\u52a8\u6620\u5c04\u4e0e\u540c\u6b65\uff0c\u652f\u6301\u8de8\u6570\u636e\u6e90\u7684\u8054\u90a6\u67e5\u8be2\u3002\u8fd9\u5bf9\u4e8e\u9700\u8981\u4ece\u591a\u4e2a\u6570\u636e\u6e90\u4e2d\u83b7\u53d6\u548c\u6574\u5408\u6570\u636e\u8fdb\u884c\u5206\u6790\u7684\u4f01\u4e1a\u6765\u8bf4\uff0c\u6781\u5927\u5730\u7f29\u77ed\u4e86\u6570\u636e\u6d41\u8f6c\u8def\u5f84\uff0c\u63d0\u5347\u4e86\u5de5\u4f5c\u6548\u7387\u3002")),(0,r.yg)("p",null,"\u672c\u6587\u5c06\u5728 Docker \u73af\u5883\u4e0b\uff0c\u4e3a\u8bfb\u8005\u4ecb\u7ecd\u5982\u4f55\u5feb\u901f\u642d\u5efa Apache Doris + Apache Hudi \u7684\u6d4b\u8bd5\u53ca\u6f14\u793a\u73af\u5883\uff0c\u5e76\u5bf9\u5404\u529f\u80fd\u64cd\u4f5c\u8fdb\u884c\u6f14\u793a\uff0c\u5e2e\u52a9\u8bfb\u8005\u5feb\u901f\u5165\u95e8\u3002"),(0,r.yg)("p",null,"\u5173\u4e8e\u66f4\u591a\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"../../../lakehouse/datalake-analytics/hudi"},"Hudi Catalog")),(0,r.yg)("h2",{id:"\u4f7f\u7528\u6307\u5357"},"\u4f7f\u7528\u6307\u5357"),(0,r.yg)("p",null,"\u672c\u6587\u6d89\u53ca\u6240\u6709\u811a\u672c\u548c\u4ee3\u7801\u53ef\u4ee5\u4ece\u8be5\u5730\u5740\u83b7\u53d6\uff1a",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/samples/datalake/hudi"},"https://github.com/apache/doris/tree/master/samples/datalake/hudi")),(0,r.yg)("h3",{id:"01-\u73af\u5883\u51c6\u5907"},"01 \u73af\u5883\u51c6\u5907"),(0,r.yg)("p",null,"\u672c\u6587\u793a\u4f8b\u91c7\u7528 Docker Compose \u90e8\u7f72\uff0c\u7ec4\u4ef6\u53ca\u7248\u672c\u53f7\u5982\u4e0b\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u7ec4\u4ef6\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Apache Doris"),(0,r.yg)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4 2.1.4\uff0c\u53ef\u4fee\u6539")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Apache Hudi"),(0,r.yg)("td",{parentName:"tr",align:null},"0.14")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Apache Spark"),(0,r.yg)("td",{parentName:"tr",align:null},"3.4.2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Apache Hive"),(0,r.yg)("td",{parentName:"tr",align:null},"2.1.3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MinIO"),(0,r.yg)("td",{parentName:"tr",align:null},"2022-05-26T05-48-41Z")))),(0,r.yg)("h3",{id:"02-\u73af\u5883\u90e8\u7f72"},"02 \u73af\u5883\u90e8\u7f72"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u521b\u5efa Docker \u7f51\u7edc"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"sudo docker network create -d bridge hudi-net"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u542f\u52a8\u6240\u6709\u7ec4\u4ef6"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"sudo ./start-hudi-compose.sh")),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"\u6ce8\uff1a\u542f\u52a8\u524d\uff0c\u53ef\u5c06 ",(0,r.yg)("inlineCode",{parentName:"p"},"start-hudi-compose.sh")," \u4e2d\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"DORIS_PACKAGE")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"DORIS_DOWNLOAD_URL")," \u4fee\u6539\u6210\u9700\u8981\u7684 Doris \u7248\u672c\u3002\u5efa\u8bae\u4f7f\u7528 2.1.4 \u6216\u66f4\u9ad8\u7248\u672c\u3002"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u542f\u52a8\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u811a\u672c\uff0c\u767b\u9646 Spark \u547d\u4ee4\u884c\u6216 Doris \u547d\u4ee4\u884c\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- Doris\nsudo ./login-spark.sh\n\n-- Spark\nsudo ./login-doris.sh\n")))),(0,r.yg)("h3",{id:"03-\u6570\u636e\u51c6\u5907"},"03 \u6570\u636e\u51c6\u5907"),(0,r.yg)("p",null,"\u63a5\u4e0b\u6765\u5148\u901a\u8fc7 Spark \u751f\u6210 Hudi \u7684\u6570\u636e\u3002\u5982\u4e0b\u65b9\u4ee3\u7801\u6240\u793a\uff0c\u96c6\u7fa4\u4e2d\u5df2\u7ecf\u5305\u542b\u4e00\u5f20\u540d\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"customer")," \u7684 Hive \u8868\uff0c\u53ef\u4ee5\u901a\u8fc7\u8fd9\u5f20 Hive \u8868\uff0c\u521b\u5efa\u4e00\u4e2a Hudi \u8868\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- ./login-spark.sh\nspark-sql> use default;\n\n-- create a COW table\nspark-sql> CREATE TABLE customer_cow\nUSING hudi\nTBLPROPERTIES (\n  type = 'cow',\n  primaryKey = 'c_custkey',\n  preCombineField = 'c_name'\n)\nPARTITIONED BY (c_nationkey)\nAS SELECT * FROM customer;\n\n-- create a MOR table\nspark-sql> CREATE TABLE customer_mor\nUSING hudi\nTBLPROPERTIES (\n  type = 'mor',\n  primaryKey = 'c_custkey',\n  preCombineField = 'c_name'\n)\nPARTITIONED BY (c_nationkey)\nAS SELECT * FROM customer;\n")),(0,r.yg)("h3",{id:"04-\u6570\u636e\u67e5\u8be2"},"04 \u6570\u636e\u67e5\u8be2"),(0,r.yg)("p",null,"\u5982\u4e0b\u6240\u793a\uff0cDoris \u96c6\u7fa4\u4e2d\u5df2\u7ecf\u521b\u5efa\u4e86\u540d\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"hudi")," \u7684 Catalog\uff08\u53ef\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW CATALOGS")," \u67e5\u770b\uff09\u3002\u4ee5\u4e0b\u4e3a\u8be5 Catalog \u7684\u521b\u5efa\u8bed\u53e5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'-- \u5df2\u7ecf\u521b\u5efa\uff0c\u65e0\u9700\u518d\u6b21\u6267\u884c\nCREATE CATALOG `hive` PROPERTIES (\n    "type"="hms",\n    \'hive.metastore.uris\' = \'thrift://hive-metastore:9083\',\n    "s3.access_key" = "minio",\n    "s3.secret_key" = "minio123",\n    "s3.endpoint" = "http://minio:9000",\n    "s3.region" = "us-east-1",\n    "use_path_style" = "true"\n);\n')),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u624b\u52a8\u5237\u65b0\u8be5 Catalog\uff0c\u5bf9\u521b\u5efa\u7684 Hudi \u8868\u8fdb\u884c\u540c\u6b65\uff1a "),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- ./login-doris.sh\ndoris> REFRESH CATALOG hive;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4f7f\u7528 Spark \u64cd\u4f5c Hudi \u4e2d\u7684\u6570\u636e\uff0c\u90fd\u53ef\u4ee5\u5728 Doris \u4e2d\u5b9e\u65f6\u53ef\u89c1\uff0c\u4e0d\u9700\u8981\u518d\u6b21\u5237\u65b0 Catalog\u3002\u6211\u4eec\u901a\u8fc7 Spark \u5206\u522b\u7ed9 COW \u548c MOR \u8868\u63d2\u5165\u4e00\u884c\u6570\u636e\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'spark-sql> insert into customer_cow values (100, "Customer#000000100", "jD2xZzi", "25-430-914-2194", 3471.59, "BUILDING", "cial ideas. final, furious requests", 25);\nspark-sql> insert into customer_mor values (100, "Customer#000000100", "jD2xZzi", "25-430-914-2194", 3471.59, "BUILDING", "cial ideas. final, furious requests", 25);\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u901a\u8fc7 Doris \u53ef\u4ee5\u76f4\u63a5\u67e5\u8be2\u5230\u6700\u65b0\u63d2\u5165\u7684\u6570\u636e\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"doris> use hive.default;\ndoris> select * from customer_cow where c_custkey = 100;\ndoris> select * from customer_mor where c_custkey = 100;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u518d\u901a\u8fc7 Spark \u63d2\u5165 c_custkey=32 \u5df2\u7ecf\u5b58\u5728\u7684\u6570\u636e\uff0c\u5373\u8986\u76d6\u5df2\u6709\u6570\u636e\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'spark-sql> insert into customer_cow values (32, "Customer#000000032_update", "jD2xZzi", "25-430-914-2194", 3471.59, "BUILDING", "cial ideas. final, furious requests", 15);\nspark-sql> insert into customer_mor values (32, "Customer#000000032_update", "jD2xZzi", "25-430-914-2194", 3471.59, "BUILDING", "cial ideas. final, furious requests", 15);\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u901a\u8fc7 Doris \u53ef\u4ee5\u67e5\u8be2\u66f4\u65b0\u540e\u7684\u6570\u636e\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"doris> select * from customer_cow where c_custkey = 32;\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\n| c_custkey | c_name                    | c_address | c_phone         | c_acctbal | c_mktsegment | c_comment                           | c_nationkey |\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\n|        32 | Customer#000000032_update | jD2xZzi   | 25-430-914-2194 |   3471.59 | BUILDING     | cial ideas. final, furious requests |          15 |\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\ndoris> select * from customer_mor where c_custkey = 32;\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\n| c_custkey | c_name                    | c_address | c_phone         | c_acctbal | c_mktsegment | c_comment                           | c_nationkey |\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\n|        32 | Customer#000000032_update | jD2xZzi   | 25-430-914-2194 |   3471.59 | BUILDING     | cial ideas. final, furious requests |          15 |\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\n")))),(0,r.yg)("h3",{id:"05-incremental-read"},"05 Incremental Read"),(0,r.yg)("p",null,"Incremental Read \u662f Hudi \u63d0\u4f9b\u7684\u529f\u80fd\u7279\u6027\u4e4b\u4e00\uff0c\u901a\u8fc7 Incremental Read\uff0c\u7528\u6237\u53ef\u4ee5\u83b7\u53d6\u6307\u5b9a\u65f6\u95f4\u8303\u56f4\u7684\u589e\u91cf\u6570\u636e\uff0c\u4ece\u800c\u5b9e\u73b0\u5bf9\u6570\u636e\u7684\u589e\u91cf\u5904\u7406\u3002\u5bf9\u6b64\uff0cDoris \u53ef\u5bf9\u63d2\u5165 ",(0,r.yg)("inlineCode",{parentName:"p"},"c_custkey=100")," \u540e\u7684\u53d8\u66f4\u6570\u636e\u8fdb\u884c\u67e5\u8be2\u3002\u5982\u4e0b\u6240\u793a\uff0c\u6211\u4eec\u63d2\u5165\u4e86\u4e00\u6761 ",(0,r.yg)("inlineCode",{parentName:"p"},"c_custkey=32")," \u7684\u6570\u636e\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"doris> select * from customer_cow@incr('beginTime'='20240603015018572');\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\n| c_custkey | c_name                    | c_address | c_phone         | c_acctbal | c_mktsegment | c_comment                           | c_nationkey |\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\n|        32 | Customer#000000032_update | jD2xZzi   | 25-430-914-2194 |   3471.59 | BUILDING     | cial ideas. final, furious requests |          15 |\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\nspark-sql> select * from hudi_table_changes('customer_cow', 'latest_state', '20240603015018572');\n\ndoris> select * from customer_mor@incr('beginTime'='20240603015058442');\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\n| c_custkey | c_name                    | c_address | c_phone         | c_acctbal | c_mktsegment | c_comment                           | c_nationkey |\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\n|        32 | Customer#000000032_update | jD2xZzi   | 25-430-914-2194 |   3471.59 | BUILDING     | cial ideas. final, furious requests |          15 |\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\nspark-sql> select * from hudi_table_changes('customer_mor', 'latest_state', '20240603015058442');\n")),(0,r.yg)("h3",{id:"06-timetravel"},"06 TimeTravel"),(0,r.yg)("p",null,"Doris \u652f\u6301\u67e5\u8be2\u6307\u5b9a\u5feb\u7167\u7248\u672c\u7684 Hudi \u6570\u636e\uff0c\u4ece\u800c\u5b9e\u73b0\u5bf9\u6570\u636e\u7684 Time Travel \u529f\u80fd\u3002\u9996\u5148\uff0c\u53ef\u4ee5\u901a\u8fc7 Spark \u67e5\u8be2\u4e24\u5f20 Hudi \u8868\u7684\u63d0\u4ea4\u5386\u53f2\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"spark-sql> call show_commits(table => 'customer_cow', limit => 10);\n20240603033556094        20240603033558249        commit        448833        0        1        1        183        0        0\n20240603015444737        20240603015446588        commit        450238        0        1        1        202        1        0\n20240603015018572        20240603015020503        commit        436692        1        0        1        1        0        0\n20240603013858098        20240603013907467        commit        44902033        100        0        25        18751        0        0\n\nspark-sql> call show_commits(table => 'customer_mor', limit => 10);\n20240603033745977        20240603033748021        deltacommit        1240        0        1        1        0        0        0\n20240603015451860        20240603015453539        deltacommit        1434        0        1        1        1        1        0\n20240603015058442        20240603015100120        deltacommit        436691        1        0        1        1        0        0\n20240603013918515        20240603013922961        deltacommit        44904040        100        0        25        18751        0        0\n")),(0,r.yg)("p",null,"\u63a5\u7740\uff0c\u53ef\u901a\u8fc7 Doris \u6267\u884c ",(0,r.yg)("inlineCode",{parentName:"p"},"c_custkey=32")," \uff0c\u67e5\u8be2\u6570\u636e\u63d2\u5165\u4e4b\u524d\u7684\u6570\u636e\u5feb\u7167\u3002\u5982\u4e0b\u53ef\u770b\u5230 ",(0,r.yg)("inlineCode",{parentName:"p"},"c_custkey=32")," \u7684\u6570\u636e\u8fd8\u672a\u66f4\u65b0\uff1a"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6ce8\uff1aTime Travel \u8bed\u6cd5\u6682\u65f6\u4e0d\u652f\u6301\u65b0\u4f18\u5316\u5668\uff0c\u9700\u8981\u5148\u6267\u884c set enable_nereids_planner=false;\u5173\u95ed\u65b0\u4f18\u5316\u5668\uff0c\u8be5\u95ee\u9898\u5c06\u4f1a\u5728\u540e\u7eed\u7248\u672c\u4e2d\u4fee\u590d\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"doris> select * from customer_cow for time as of '20240603015018572' where c_custkey = 32 or c_custkey = 100;\n+-----------+--------------------+---------------------------------------+-----------------+-----------+--------------+--------------------------------------------------+-------------+\n| c_custkey | c_name             | c_address                             | c_phone         | c_acctbal | c_mktsegment | c_comment                                        | c_nationkey |\n+-----------+--------------------+---------------------------------------+-----------------+-----------+--------------+--------------------------------------------------+-------------+\n|        32 | Customer#000000032 | jD2xZzi UmId,DCtNBLXKj9q0Tlp2iQ6ZcO3J | 25-430-914-2194 |   3471.53 | BUILDING     | cial ideas. final, furious requests across the e |          15 |\n|       100 | Customer#000000100 | jD2xZzi                               | 25-430-914-2194 |   3471.59 | BUILDING     | cial ideas. final, furious requests              |          25 |\n+-----------+--------------------+---------------------------------------+-----------------+-----------+--------------+--------------------------------------------------+-------------+\n-- compare with spark-sql\nspark-sql> select * from customer_mor timestamp as of '20240603015018572' where c_custkey = 32 or c_custkey = 100;\n\ndoris> select * from customer_mor for time as of '20240603015058442' where c_custkey = 32 or c_custkey = 100;\n+-----------+--------------------+---------------------------------------+-----------------+-----------+--------------+--------------------------------------------------+-------------+\n| c_custkey | c_name             | c_address                             | c_phone         | c_acctbal | c_mktsegment | c_comment                                        | c_nationkey |\n+-----------+--------------------+---------------------------------------+-----------------+-----------+--------------+--------------------------------------------------+-------------+\n|       100 | Customer#000000100 | jD2xZzi                               | 25-430-914-2194 |   3471.59 | BUILDING     | cial ideas. final, furious requests              |          25 |\n|        32 | Customer#000000032 | jD2xZzi UmId,DCtNBLXKj9q0Tlp2iQ6ZcO3J | 25-430-914-2194 |   3471.53 | BUILDING     | cial ideas. final, furious requests across the e |          15 |\n+-----------+--------------------+---------------------------------------+-----------------+-----------+--------------+--------------------------------------------------+-------------+\nspark-sql> select * from customer_mor timestamp as of '20240603015058442' where c_custkey = 32 or c_custkey = 100;\n")),(0,r.yg)("h2",{id:"\u67e5\u8be2\u4f18\u5316"},"\u67e5\u8be2\u4f18\u5316"),(0,r.yg)("p",null,"Apache Hudi \u4e2d\u7684\u6570\u636e\u5927\u81f4\u53ef\u4ee5\u5206\u4e3a\u4e24\u7c7b \u2014\u2014 \u57fa\u7ebf\u6570\u636e\u548c\u589e\u91cf\u6570\u636e\u3002\u57fa\u7ebf\u6570\u636e\u901a\u5e38\u662f\u5df2\u7ecf\u7ecf\u8fc7\u5408\u5e76\u7684 Parquet \u6587\u4ef6\uff0c\u800c\u589e\u91cf\u6570\u636e\u662f\u6307\u7531 INSERT\u3001UPDATE \u6216 DELETE \u4ea7\u751f\u7684\u6570\u636e\u589e\u91cf\u3002\u57fa\u7ebf\u6570\u636e\u53ef\u4ee5\u76f4\u63a5\u8bfb\u53d6\uff0c\u589e\u91cf\u6570\u636e\u9700\u8981\u901a\u8fc7 Merge on Read \u7684\u65b9\u5f0f\u8fdb\u884c\u8bfb\u53d6\u3002"),(0,r.yg)("p",null,"\u5bf9\u4e8e Hudi COW \u8868\u7684\u67e5\u8be2\u6216\u8005 MOR \u8868\u7684 Read Optimized \u67e5\u8be2\u800c\u8a00\uff0c\u5176\u6570\u636e\u90fd\u5c5e\u4e8e\u57fa\u7ebf\u6570\u636e\uff0c\u53ef\u76f4\u63a5\u901a\u8fc7 Doris \u539f\u751f\u7684 Parquet Reader \u8bfb\u53d6\u6570\u636e\u6587\u4ef6\uff0c\u4e14\u53ef\u83b7\u5f97\u6781\u901f\u7684\u67e5\u8be2\u54cd\u5e94\u3002\u800c\u5bf9\u4e8e\u589e\u91cf\u6570\u636e\uff0cDoris \u9700\u8981\u901a\u8fc7 JNI \u8c03\u7528 Hudi \u7684 Java SDK \u8fdb\u884c\u8bbf\u95ee\u3002\u4e3a\u4e86\u8fbe\u5230\u6700\u4f18\u7684\u67e5\u8be2\u6027\u80fd\uff0cApache Doris \u5728\u67e5\u8be2\u65f6\uff0c\u4f1a\u5c06\u4e00\u4e2a\u67e5\u8be2\u4e2d\u7684\u6570\u636e\u5206\u4e3a\u57fa\u7ebf\u548c\u589e\u91cf\u6570\u636e\u4e24\u90e8\u5206\uff0c\u5e76\u5206\u522b\u4f7f\u7528\u4e0a\u8ff0\u65b9\u5f0f\u8fdb\u884c\u8bfb\u53d6\u3002"),(0,r.yg)("p",null,"\u4e3a\u9a8c\u8bc1\u8be5\u4f18\u5316\u601d\u8def\uff0c\u6211\u4eec\u901a\u8fc7 EXPLAIN \u8bed\u53e5\u6765\u67e5\u770b\u4e00\u4e2a\u4e0b\u65b9\u793a\u4f8b\u7684\u67e5\u8be2\u4e2d\uff0c\u5206\u522b\u6709\u591a\u5c11\u57fa\u7ebf\u6570\u636e\u548c\u589e\u91cf\u6570\u636e\u3002\u5bf9\u4e8e COW \u8868\u6765\u8bf4\uff0c\u6240\u6709 101 \u4e2a\u6570\u636e\u5206\u7247\u5747\u4e3a\u662f\u57fa\u7ebf\u6570\u636e\uff08",(0,r.yg)("inlineCode",{parentName:"p"},"hudiNativeReadSplits=101/101"),"\uff09\uff0c\u56e0\u6b64 COW \u8868\u5168\u90e8\u53ef\u76f4\u63a5\u901a\u8fc7  Doris  Parquet Reader \u8fdb\u884c\u8bfb\u53d6\uff0c\u56e0\u6b64\u53ef\u83b7\u5f97\u6700\u4f73\u7684\u67e5\u8be2\u6027\u80fd\u3002\u5bf9\u4e8e ROW \u8868\uff0c\u5927\u90e8\u5206\u6570\u636e\u5206\u7247\u662f\u57fa\u7ebf\u6570\u636e\uff08",(0,r.yg)("inlineCode",{parentName:"p"},"hudiNativeReadSplits=100/101"),"\uff09\uff0c\u4e00\u4e2a\u5206\u7247\u6570\u4e3a\u589e\u91cf\u6570\u636e\uff0c\u57fa\u672c\u4e5f\u80fd\u591f\u83b7\u5f97\u8f83\u597d\u7684\u67e5\u8be2\u6027\u80fd\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- COW table is read natively\ndoris> explain select * from customer_cow where c_custkey = 32;\n|   0:VHUDI_SCAN_NODE(68)                                        |\n|      table: customer_cow                                       |\n|      predicates: (c_custkey[#5] = 32)                          |\n|      inputSplitNum=101, totalFileSize=45338886, scanRanges=101 |\n|      partition=26/26                                           |\n|      cardinality=1, numNodes=1                                 |\n|      pushdown agg=NONE                                         |\n|      hudiNativeReadSplits=101/101                              |\n\n-- MOR table: because only the base file contains `c_custkey = 32` that is updated, 100 splits are read natively, while the split with log file is read by JNI.\ndoris> explain select * from customer_mor where c_custkey = 32;\n|   0:VHUDI_SCAN_NODE(68)                                        |\n|      table: customer_mor                                       |\n|      predicates: (c_custkey[#5] = 32)                          |\n|      inputSplitNum=101, totalFileSize=45340731, scanRanges=101 |\n|      partition=26/26                                           |\n|      cardinality=1, numNodes=1                                 |\n|      pushdown agg=NONE                                         |\n|      hudiNativeReadSplits=100/101                              |\n")),(0,r.yg)("p",null,"\u53ef\u4ee5\u901a\u8fc7 Spark \u8fdb\u884c\u4e00\u4e9b\u5220\u9664\u64cd\u4f5c\uff0c\u8fdb\u4e00\u6b65\u89c2\u5bdf Hudi \u57fa\u7ebf\u6570\u636e\u548c\u589e\u91cf\u6570\u636e\u7684\u53d8\u5316\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- Use delete statement to see more differences\nspark-sql> delete from customer_cow where c_custkey = 64;\ndoris> explain select * from customer_cow where c_custkey = 64;\n\nspark-sql> delete from customer_mor where c_custkey = 64;\ndoris> explain select * from customer_mor where c_custkey = 64;\n")),(0,r.yg)("p",null,"\u6b64\u5916\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5206\u533a\u6761\u4ef6\u8fdb\u884c\u5206\u533a\u88c1\u526a\uff0c\u4ece\u800c\u8fdb\u4e00\u6b65\u51cf\u5c11\u6570\u636e\u91cf\uff0c\u4ee5\u63d0\u5347\u67e5\u8be2\u901f\u5ea6\u3002\u5982\u4e0b\u793a\u4f8b\u4e2d\uff0c\u901a\u8fc7\u5206\u533a\u6761\u4ef6 ",(0,r.yg)("inlineCode",{parentName:"p"},"c_nationkey=15")," \u8fdb\u884c\u5206\u533a\u88c1\u51cf\uff0c\u4f7f\u5f97\u67e5\u8be2\u8bf7\u6c42\u53ea\u9700\u8981\u8bbf\u95ee\u4e00\u4e2a\u5206\u533a\uff08",(0,r.yg)("inlineCode",{parentName:"p"},"partition=1/26"),"\uff09\u7684\u6570\u636e\u5373\u53ef\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- customer_xxx is partitioned by c_nationkey, we can use the partition column to prune data\ndoris> explain select * from customer_mor where c_custkey = 64 and c_nationkey = 15;\n|   0:VHUDI_SCAN_NODE(68)                                        |\n|      table: customer_mor                                       |\n|      predicates: (c_custkey[#5] = 64), (c_nationkey[#12] = 15) |\n|      inputSplitNum=4, totalFileSize=1798186, scanRanges=4      |\n|      partition=1/26                                            |\n|      cardinality=1, numNodes=1                                 |\n|      pushdown agg=NONE                                         |\n|      hudiNativeReadSplits=3/4                                  |\n")))}m.isMDXComponent=!0},507726:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/lakehouse-architecture-for-doris-and-hudi-d456941968fdb7115f91bf70b919b62a.png"}}]);