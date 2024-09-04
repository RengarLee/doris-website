"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[905836],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var r=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(y,a(a({ref:t},s),{},{components:n})):r.createElement(y,a({ref:t},s))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:i,a[1]=o;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},470998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(58168),i=(n(296540),n(15680));const l={title:"hour_ceil",language:"zh-CN"},a=void 0,o={unversionedId:"sql-manual/sql-functions/date-time-functions/hour-ceil",id:"version-3.0/sql-manual/sql-functions/date-time-functions/hour-ceil",title:"hour_ceil",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/date-time-functions/hour-ceil.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/hour-ceil",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/hour-ceil",draft:!1,tags:[],version:"3.0",frontMatter:{title:"hour_ceil",language:"zh-CN"},sidebar:"docs",previous:{title:"minute_ceil",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/minute-ceil"},next:{title:"day_ceil",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/day-ceil"}},c={},u=[{value:"hour_ceil",id:"hour_ceil",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"hour_ceil"},"hour_ceil"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"DATETIME HOUR_CEIL(DATETIME datetime)\nDATETIME HOUR_CEIL(DATETIME datetime, DATETIME origin)\nDATETIME HOUR_CEIL(DATETIME datetime, INT period)\nDATETIME HOUR_CEIL(DATETIME datetime, INT period, DATETIME origin)\n")),(0,i.yg)("p",null,"\u5c06\u65e5\u671f\u8f6c\u5316\u4e3a\u6307\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u5468\u671f\u7684\u6700\u8fd1\u4e0a\u53d6\u6574\u65f6\u523b\u3002"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"datetime\uff1a\u53c2\u6570\u662f\u5408\u6cd5\u7684\u65e5\u671f\u8868\u8fbe\u5f0f\u3002"),(0,i.yg)("li",{parentName:"ul"},"period\uff1a\u53c2\u6570\u662f\u6307\u5b9a\u6bcf\u4e2a\u5468\u671f\u6709\u591a\u5c11\u5c0f\u65f6\u7ec4\u6210\u3002"),(0,i.yg)("li",{parentName:"ul"},"origin\uff1a\u5f00\u59cb\u7684\u65f6\u95f4\u8d77\u70b9\uff0c\u5982\u679c\u4e0d\u586b\uff0c\u9ed8\u8ba4\u662f 0001-01-01T00:00:00\u3002")),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select hour_ceil(\"2023-07-13 22:28:18\", 5);\n+------------------------------------------------------------+\n| hour_ceil(cast('2023-07-13 22:28:18' as DATETIMEV2(0)), 5) |\n+------------------------------------------------------------+\n| 2023-07-14 02:00:00                                        |\n+------------------------------------------------------------+\n1 row in set (0.03 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"HOUR_CEIL, HOUR, CEIL\n")),(0,i.yg)("h3",{id:"best-practice"},"Best Practice"),(0,i.yg)("p",null,"\u8fd8\u53ef\u53c2\u9605 ",(0,i.yg)("a",{parentName:"p",href:"./date_ceil"},"date_ceil")))}d.isMDXComponent=!0}}]);