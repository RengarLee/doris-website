"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[940598],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},523109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const i={title:"TIME",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-data-types/date-time/TIME",id:"version-2.1/sql-manual/sql-data-types/date-time/TIME",title:"TIME",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-data-types/date-time/TIME.md",sourceDirName:"sql-manual/sql-data-types/date-time",slug:"/sql-manual/sql-data-types/date-time/TIME",permalink:"/docs/2.1/sql-manual/sql-data-types/date-time/TIME",draft:!1,tags:[],version:"2.1",frontMatter:{title:"TIME",language:"en"},sidebar:"docs",previous:{title:"DATE",permalink:"/docs/2.1/sql-manual/sql-data-types/date-time/DATE"},next:{title:"DATETIME",permalink:"/docs/2.1/sql-manual/sql-data-types/date-time/DATETIME"}},s={},c=[{value:"TIME",id:"time",level:2},{value:"name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"time"},"TIME"),(0,a.yg)("h3",{id:"name"},"name"),(0,a.yg)("p",null,"TIME"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"TIME type\nTime type, can appear as a query result, does not support table storage for the time being. The storage range is ",(0,a.yg)("inlineCode",{parentName:"p"},"[-838:59:59, 838:59:59]"),".\nCurrently in Doris, the correctness of TIME as a result of calculations is guaranteed (e.g., functions such as ",(0,a.yg)("inlineCode",{parentName:"p"},"timediff"),"), but ",(0,a.yg)("strong",{parentName:"p"},"manual CAST generation of the TIME type is not recommended"),".\nThe calculation of TIME type in constant folding is prohibited."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select timediff('2020-01-01 12:05:03', '2020-01-01 08:02:15');\n+------------------------------------------------------------------------------------------------------+\n| timediff(cast('2020-01-01 12:05:03' as DATETIMEV2(0)), cast('2020-01-01 08:02:15' as DATETIMEV2(0))) |\n+------------------------------------------------------------------------------------------------------+\n| 04:02:48                                                                                             |\n+------------------------------------------------------------------------------------------------------+\n1 row in set (0.12 sec)\n\nmysql> select timediff('2020-01-01', '2000-01-01');\n+------------------------------------------------------------------------------------+\n| timediff(cast('2020-01-01' as DATETIMEV2(0)), cast('2000-01-01' as DATETIMEV2(0))) |\n+------------------------------------------------------------------------------------+\n| 838:59:59                                                                          |\n+------------------------------------------------------------------------------------+\n1 row in set (0.11 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"TIME\n")))}u.isMDXComponent=!0}}]);