"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[111587],{15680:(e,t,r)=>{r.d(t,{xA:()=>i,yg:()=>y});var a=r(296540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,y=p["".concat(u,".").concat(d)]||p[d]||m[d]||s;return r?a.createElement(y,o(o({ref:t},i),{},{components:r})):a.createElement(y,o({ref:t},i))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<s;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},779393:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=r(58168),n=(r(296540),r(15680));const s={title:"\u534a\u7ed3\u6784\u5316\u7c7b\u578b\u6982\u89c8",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-data-types/semi-structured/semi-structured-overview",id:"version-2.1/sql-manual/sql-data-types/semi-structured/semi-structured-overview",title:"\u534a\u7ed3\u6784\u5316\u7c7b\u578b\u6982\u89c8",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-data-types/semi-structured/semi-structured-overview.md",sourceDirName:"sql-manual/sql-data-types/semi-structured",slug:"/sql-manual/sql-data-types/semi-structured/semi-structured-overview",permalink:"/zh-CN/docs/2.1/sql-manual/sql-data-types/semi-structured/semi-structured-overview",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u534a\u7ed3\u6784\u5316\u7c7b\u578b\u6982\u89c8",language:"zh-CN"},sidebar:"docs",previous:{title:"STRING",permalink:"/zh-CN/docs/2.1/sql-manual/sql-data-types/string-type/STRING"},next:{title:"ARRAY",permalink:"/zh-CN/docs/2.1/sql-manual/sql-data-types/semi-structured/ARRAY"}},u={},c=[],i={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,a.A)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"\u9488\u5bf9 JSON \u534a\u7ed3\u6784\u5316\u6570\u636e\uff0c\u652f\u6301 3 \u7c7b\u4e0d\u540c\u573a\u666f\u7684\u534a\u7ed3\u6784\u5316\u6570\u636e\u7c7b\u578b\uff1a"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u652f\u6301\u5d4c\u5957\u7684\u56fa\u5b9a schema\uff0c\u9002\u5408\u5206\u6790\u7684\u6570\u636e\u7c7b\u578b ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"/zh-CN/docs/2.1/sql-manual/sql-data-types/semi-structured/ARRAY"},"ARRAY"),"\u3001 ",(0,n.yg)("a",{parentName:"strong",href:"/zh-CN/docs/2.1/sql-manual/sql-data-types/semi-structured/MAP"},"MAP")," ",(0,n.yg)("a",{parentName:"strong",href:"/zh-CN/docs/2.1/sql-manual/sql-data-types/semi-structured/STRUCT"},"STRUCT")),"\uff1a\u5e38\u7528\u4e8e\u7528\u6237\u884c\u4e3a\u548c\u753b\u50cf\u5206\u6790\uff0c\u6e56\u4ed3\u4e00\u4f53\u67e5\u8be2\u6570\u636e\u6e56\u4e2d Parquet \u7b49\u683c\u5f0f\u7684\u6570\u636e\u7b49\u573a\u666f\u3002\u7531\u4e8e schema \u76f8\u5bf9\u56fa\u5b9a\uff0c\u6ca1\u6709\u52a8\u6001 schema \u63a8\u65ad\u7684\u5f00\u9500\uff0c\u5199\u5165\u548c\u5206\u6790\u6027\u80fd\u5f88\u9ad8\u3002")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u652f\u6301\u5d4c\u5957\u7684\u4e0d\u56fa\u5b9a schema\uff0c\u9002\u5408\u5206\u6790\u7684\u6570\u636e\u7c7b\u578b ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"/zh-CN/docs/2.1/sql-manual/sql-data-types/semi-structured/VARIANT"},"VARIANT")),"\uff1a\u5e38\u7528\u4e8e Log, Trace, IoT \u7b49\u5206\u6790\u573a\u666f\uff0cschema \u7075\u6d3b\u53ef\u4ee5\u5199\u5165\u4efb\u4f55\u5408\u6cd5\u7684 JSON \u6570\u636e\uff0c\u5e76\u81ea\u52a8\u5c55\u5f00\u6210\u5b50\u5217\u91c7\u7528\u5217\u5f0f\u5b58\u50a8\uff0c\u5b58\u50a8\u538b\u7f29\u7387\u9ad8\uff0c\u805a\u5408 \u8fc7\u6ee4 \u6392\u5e8f\u7b49\u5206\u6790\u6027\u80fd\u5f88\u597d\u3002")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u652f\u6301\u5d4c\u5957\u7684\u4e0d\u56fa\u5b9a schema\uff0c\u9002\u5408\u70b9\u67e5\u7684\u6570\u636e\u7c7b\u578b ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"/zh-CN/docs/2.1/sql-manual/sql-data-types/semi-structured/JSON"},"JSON")),"\uff1a\u5e38\u7528\u4e8e\u9ad8\u5e76\u53d1\u70b9\u67e5\u573a\u666f\uff0cschema \u7075\u6d3b\u53ef\u4ee5\u5199\u5165\u4efb\u4f55\u5408\u6cd5\u7684 JSON \u6570\u636e\uff0c\u91c7\u7528\u4e8c\u8fdb\u5236\u683c\u5f0f\u5b58\u50a8\uff0c\u63d0\u53d6\u5b57\u6bb5\u7684\u6027\u80fd\u6bd4\u666e\u901a JSON String \u5feb 2 \u500d\u4ee5\u4e0a\u3002"))))}m.isMDXComponent=!0}}]);