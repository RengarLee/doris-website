"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[500540],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),y=i,m=p["".concat(c,".").concat(y)]||p[y]||d[y]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=y;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},244884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(58168),i=(n(296540),n(15680));const a={title:"day_ceil",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-functions/date-time-functions/day-ceil",id:"version-2.1/sql-manual/sql-functions/date-time-functions/day-ceil",title:"day_ceil",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/date-time-functions/day-ceil.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/day-ceil",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/date-time-functions/day-ceil",draft:!1,tags:[],version:"2.1",frontMatter:{title:"day_ceil",language:"en"},sidebar:"docs",previous:{title:"hour_ceil",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/date-time-functions/hour-ceil"},next:{title:"month_ceil",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/date-time-functions/month-ceil"}},c={},s=[{value:"day_ceil",id:"day_ceil",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practices",id:"best-practices",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"day_ceil"},"day_ceil"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Syntax")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"DATETIME DAY_CEIL(DATETIME datetime)\nDATETIME DAY_CEIL(DATETIME datetime, DATETIME origin)\nDATETIME DAY_CEIL(DATETIME datetime, INT period)\nDATETIME DAY_CEIL(DATETIME datetime, INT period, DATETIME origin)\n")),(0,i.yg)("p",null,"Convert the date to the nearest rounding up time of the specified time interval period."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"datetime: a valid date expression."),(0,i.yg)("li",{parentName:"ul"},"period: specifies how many days each cycle consists of."),(0,i.yg)("li",{parentName:"ul"},"origin: starting from 0001-01-01T00:00:00.")),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select day_ceil(\"2023-07-13 22:28:18\", 5);\n+-----------------------------------------------------------+\n| day_ceil(cast('2023-07-13 22:28:18' as DATETIMEV2(0)), 5) |\n+-----------------------------------------------------------+\n| 2023-07-17 00:00:00                                       |\n+-----------------------------------------------------------+\n1 row in set (0.01 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"Keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"DAY_CEIL, DAY, CEIL\n")),(0,i.yg)("h3",{id:"best-practices"},"Best Practices"),(0,i.yg)("p",null,"See also ",(0,i.yg)("a",{parentName:"p",href:"./date_ceil"},"date_ceil")))}d.isMDXComponent=!0}}]);