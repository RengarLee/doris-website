"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[508529],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>m});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),y=a,m=c["".concat(s,".").concat(y)]||c[y]||g[y]||l;return r?t.createElement(m,o(o({ref:n},u),{},{components:r})):t.createElement(m,o({ref:n},u))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=y;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},137662:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var t=r(58168),a=(r(296540),r(15680));const l={title:"Release 2.0.6",language:"zh-CN"},o=void 0,i={unversionedId:"releasenotes/v2.0/release-2.0.6",id:"version-3.0/releasenotes/v2.0/release-2.0.6",title:"Release 2.0.6",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/releasenotes/v2.0/release-2.0.6.md",sourceDirName:"releasenotes/v2.0",slug:"/releasenotes/v2.0/release-2.0.6",permalink:"/zh-CN/docs/releasenotes/v2.0/release-2.0.6",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Release 2.0.6",language:"zh-CN"},sidebar:"releasenotes",previous:{title:"Release 2.0.7",permalink:"/zh-CN/docs/releasenotes/v2.0/release-2.0.7"},next:{title:"Release 2.0.5",permalink:"/zh-CN/docs/releasenotes/v2.0/release-2.0.5"}},s={},p=[{value:"\u884c\u4e3a\u53d8\u66f4",id:"\u884c\u4e3a\u53d8\u66f4",level:2},{value:"\u65b0\u529f\u80fd",id:"\u65b0\u529f\u80fd",level:2},{value:"\u6539\u8fdb\u548c\u4f18\u5316",id:"\u6539\u8fdb\u548c\u4f18\u5316",level:2},{value:"\u81f4\u8c22",id:"\u81f4\u8c22",level:2}],u={toc:p},c="wrapper";function g(e){let{components:n,...r}=e;return(0,a.yg)(c,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u4eb2\u7231\u7684\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\uff0c",(0,a.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"Apache Doris 2.0.6")," \u7248\u672c\u5df2\u4e8e 2024 \u5e74 3 \u6708 12 \u65e5\u6b63\u5f0f\u4e0e\u5927\u5bb6\u89c1\u9762\u3002\u672c\u6b21\u7248\u672c\u4e2d\uff0c\u6709 51 \u4f4d\u8d21\u732e\u8005\u63d0\u4ea4\u4e86\u7ea6 114 \u4e2a\u529f\u80fd\u6539\u8fdb\u4ee5\u53ca\u95ee\u9898\u4fee\u590d\uff0c\u8fdb\u4e00\u6b65\u63d0\u5347\u4e86\u7cfb\u7edf\u7684\u7a33\u5b9a\u6027\u548c\u6027\u80fd\uff0c\u6b22\u8fce\u5927\u5bb6\u4e0b\u8f7d\u4f53\u9a8c\u3002"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u5b98\u7f51\u4e0b\u8f7d\uff1a")," ",(0,a.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"https://doris.apache.org/download/")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"GitHub \u4e0b\u8f7d\uff1a")," ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/releases"},"https://github.com/apache/doris/releases")),(0,a.yg)("h2",{id:"\u884c\u4e3a\u53d8\u66f4"},"\u884c\u4e3a\u53d8\u66f4"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u65e0")),(0,a.yg)("h2",{id:"\u65b0\u529f\u80fd"},"\u65b0\u529f\u80fd"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u81ea\u52a8\u9009\u62e9\u7269\u5316\u89c6\u56fe\u65f6\u652f\u6301\u5339\u914d\u5e26\u522b\u540d\u7684\u51fd\u6570"),(0,a.yg)("li",{parentName:"ul"},"\u589e\u52a0\u5b89\u5168\u4e0b\u7ebf\u4e00\u4e2a tablet \u526f\u672c\u7684\u547d\u4ee4"),(0,a.yg)("li",{parentName:"ul"},"\u5916\u8868\u7edf\u8ba1\u4fe1\u606f\u589e\u52a0\u884c\u6570\u7edf\u8ba1\u7f13\u5b58"),(0,a.yg)("li",{parentName:"ul"},"\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u652f\u6301 Rollup")),(0,a.yg)("h2",{id:"\u6539\u8fdb\u548c\u4f18\u5316"},"\u6539\u8fdb\u548c\u4f18\u5316"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u4f7f\u7528 protobuf \u7a33\u5b9a\u5e8f\u5217\u5316\u51cf\u5c11 Tablet Schema \u7f13\u5b58\u5185\u5b58\u5360\u7528"),(0,a.yg)("li",{parentName:"ul"},"\u63d0\u5347 ",(0,a.yg)("inlineCode",{parentName:"li"},"show column stats")," \u7684\u6027\u80fd"),(0,a.yg)("li",{parentName:"ul"},"\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u548c\u4f18\u5316\u5668\u652f\u6301 Iceberg \u548c Paimon \u7684\u884c\u6570\u4f30\u8ba1"),(0,a.yg)("li",{parentName:"ul"},"JDBC Catalog\u652f\u6301\u8bfb\u53d6 SQL Server \u7684 Timestamp \u7c7b\u578b")),(0,a.yg)("h2",{id:"\u81f4\u8c22"},"\u81f4\u8c22"),(0,a.yg)("p",null,"\u6700\u540e\uff0c\u8877\u5fc3\u611f\u8c22 51 \u4f4d\u5f00\u53d1\u8005\u4e3a Apache Doris 2.0.6 \u7248\u672c\u505a\u51fa\u4e86\u91cd\u8981\u8d21\u732e:"),(0,a.yg)("p",null,"924060929, AshinGau, BePPPower, BiteTheDDDDt, CalvinKirs, cambyzju, deardeng, DongLiang-0, eldenmoon, englefly, feelshana, feiniaofeiafei, felixwluo, HappenLee, hust-hhb, iwanttobepowerful, ixzc, JackDrogon, Jibing-Li, KassieZ, larshelge, liaoxin01, LiBinfeng-01, liutang123, luennng, morningman, morrySnow, mrhhsg, qidaye, starocean999, TangSiyang2001, wangbo, wsjz, wuwenchi, xiaokang, XieJiann, xuwei0912, xy720, xzj7019, yiguolei, yujun777, Yukang-Lian, Yulei-Yang, zclllyybb, zddr, zhangstar333, zhannngchen, zhiqiang-hhhh, zy-kkk, zzzxl1993"))}g.isMDXComponent=!0}}]);