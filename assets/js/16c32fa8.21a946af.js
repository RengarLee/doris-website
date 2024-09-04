"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[728911],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>y});var a=t(296540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=a.createContext({}),u=function(e){var r=a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return a.createElement(o.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),g=n,y=c["".concat(o,".").concat(g)]||c[g]||d[g]||s;return t?a.createElement(y,i(i({ref:r},p),{},{components:t})):a.createElement(y,i({ref:r},p))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=g;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<s;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},636453:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=t(58168),n=(t(296540),t(15680));const s={title:"Release 1.2.8",language:"en"},i=void 0,l={unversionedId:"releasenotes/v1.2/release-1.2.8",id:"version-2.1/releasenotes/v1.2/release-1.2.8",title:"Release 1.2.8",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/releasenotes/v1.2/release-1.2.8.md",sourceDirName:"releasenotes/v1.2",slug:"/releasenotes/v1.2/release-1.2.8",permalink:"/docs/2.1/releasenotes/v1.2/release-1.2.8",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Release 1.2.8",language:"en"},sidebar:"releasenotes",previous:{title:"Release 2.0.0",permalink:"/docs/2.1/releasenotes/v2.0/release-2.0.0"},next:{title:"Release 1.2.7",permalink:"/docs/2.1/releasenotes/v1.2/release-1.2.7"}},o={},u=[{value:"Bug Fixes",id:"bug-fixes",level:2}],p={toc:u},c="wrapper";function d(e){let{components:r,...t}=e;return(0,n.yg)(c,(0,a.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Quick Download\uff1a")," ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"https://doris.apache.org/download/")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"GitHub\uff1a")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/releases"},"https://github.com/apache/doris/releases")),(0,n.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Fixed several issues with query execution."),(0,n.yg)("li",{parentName:"ul"},"Fixed several issues with Spark Load."),(0,n.yg)("li",{parentName:"ul"},"Fixed several issues with Parquet Reader."),(0,n.yg)("li",{parentName:"ul"},"Fixed several issues with Orc Reader."),(0,n.yg)("li",{parentName:"ul"},'Fixed Broker "FileSystem closed" problem.'),(0,n.yg)("li",{parentName:"ul"},"Fixed several issues with Broker Load."),(0,n.yg)("li",{parentName:"ul"},"Fixed several issues with CTAS execution."),(0,n.yg)("li",{parentName:"ul"},"Fixed several issues with backup and restore."),(0,n.yg)("li",{parentName:"ul"},'Added "Catalog" column in audit log.'),(0,n.yg)("li",{parentName:"ul"},"Optimized the metadata cache of Iceberg Catalog."),(0,n.yg)("li",{parentName:"ul"},"Fixed several issues with outfile/export feature."),(0,n.yg)("li",{parentName:"ul"},'Fixed an issue with "replayEraseTable" edit log causing FE start to fail.'),(0,n.yg)("li",{parentName:"ul"},"Fixed some security issues.")))}d.isMDXComponent=!0}}]);