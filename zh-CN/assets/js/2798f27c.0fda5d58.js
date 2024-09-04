"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[115823],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},E="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),E=c(n),m=a,y=E["".concat(o,".").concat(m)]||E[m]||u[m]||l;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[E]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},429508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"PAUSE-MATERIALIZED-VIEW",language:"zh-CN"},i=void 0,s={unversionedId:"sql-manual/sql-statements/Utility-Statements/PAUSE-MATERIALIZED-VIEW",id:"version-3.0/sql-manual/sql-statements/Utility-Statements/PAUSE-MATERIALIZED-VIEW",title:"PAUSE-MATERIALIZED-VIEW",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/Utility-Statements/PAUSE-MATERIALIZED-VIEW.md",sourceDirName:"sql-manual/sql-statements/Utility-Statements",slug:"/sql-manual/sql-statements/Utility-Statements/PAUSE-MATERIALIZED-VIEW",permalink:"/zh-CN/docs/sql-manual/sql-statements/Utility-Statements/PAUSE-MATERIALIZED-VIEW",draft:!1,tags:[],version:"3.0",frontMatter:{title:"PAUSE-MATERIALIZED-VIEW",language:"zh-CN"},sidebar:"docs",previous:{title:"CANCEL-MATERIALIZED-VIEW-TASK",permalink:"/zh-CN/docs/sql-manual/sql-statements/Utility-Statements/CANCEL-MATERIALIZED-VIEW-TASK"},next:{title:"REFRESH-MATERIALIZED-VIEW",permalink:"/zh-CN/docs/sql-manual/sql-statements/Utility-Statements/REFRESH-MATERIALIZED-VIEW"}},o={},c=[{value:"PAUSE-MATERIALIZED-VIEW",id:"pause-materialized-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},E="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(E,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"pause-materialized-view"},"PAUSE-MATERIALIZED-VIEW"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"PAUSE MATERIALIZED VIEW"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u6682\u505c\u7269\u5316\u89c6\u56fe\u7684\u5b9a\u65f6\u8c03\u5ea6"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"PAUSE MATERIALIZED VIEW JOB ON mvName=multipartIdentifier\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u6682\u505c\u7269\u5316\u89c6\u56femv1\u7684\u5b9a\u65f6\u8c03\u5ea6"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"PAUSE MATERIALIZED VIEW JOB ON mv1;\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"PAUSE, MATERIALIZED, VIEW\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);