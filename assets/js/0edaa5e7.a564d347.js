"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[752845],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>f});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||y[d]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},560214:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(58168),a=(r(296540),r(15680));const i={title:"Overview",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-data-types/ip/ip-overview",id:"version-3.0/sql-manual/sql-data-types/ip/ip-overview",title:"Overview",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-data-types/ip/ip-overview.md",sourceDirName:"sql-manual/sql-data-types/ip",slug:"/sql-manual/sql-data-types/ip/ip-overview",permalink:"/docs/sql-manual/sql-data-types/ip/ip-overview",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Overview",language:"en"},sidebar:"docs",previous:{title:"AGG_STATE",permalink:"/docs/sql-manual/sql-data-types/aggregate/AGG-STATE"},next:{title:"IPV4",permalink:"/docs/sql-manual/sql-data-types/ip/IPV4"}},l={},p=[],c={toc:p},u="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"IP data types store IP addresses in a binary format, which is faster and more space-efficient for querying compared to storing them as strings. There are two supported IP data types:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("a",{parentName:"strong",href:"/docs/sql-manual/sql-data-types/ip/IPV4"},"IPv4")),": It stores IPv4 addresses as a 4-byte binary value. It is used in conjunction with the ",(0,a.yg)("inlineCode",{parentName:"li"},"ipv4_*")," family of functions."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("a",{parentName:"strong",href:"/docs/sql-manual/sql-data-types/ip/IPV6"},"IPv6")),": It stores IPv6 addresses as a 16-byte binary value. It is used in conjunction with the ",(0,a.yg)("inlineCode",{parentName:"li"},"ipv6_*")," family of functions.")))}y.isMDXComponent=!0}}]);