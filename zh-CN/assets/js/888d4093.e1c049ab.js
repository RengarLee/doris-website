"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[724327],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),y=a,d=m["".concat(l,".").concat(y)]||m[y]||u[y]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},940076:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(58168),a=(n(296540),n(15680));const i={title:"BITMAP_EMPTY",language:"zh-CN"},o=void 0,p={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap-empty",id:"version-3.0/sql-manual/sql-functions/bitmap-functions/bitmap-empty",title:"BITMAP_EMPTY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/bitmap-functions/bitmap-empty.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap-empty",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap-empty",draft:!1,tags:[],version:"3.0",frontMatter:{title:"BITMAP_EMPTY",language:"zh-CN"},sidebar:"docs",previous:{title:"BITMAP_FROM_ARRAY",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap-from-array"},next:{title:"BITMAP_OR",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap-or"}},l={},s=[{value:"bitmap_empty",id:"bitmap_empty",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"bitmap_empty"},"bitmap_empty"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BITMAP BITMAP_EMPTY()")),(0,a.yg)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u7a7abitmap\u3002\u4e3b\u8981\u7528\u4e8e insert \u6216 stream load \u65f6\u586b\u5145\u9ed8\u8ba4\u503c\u3002\u4f8b\u5982"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'cat data | curl --location-trusted -u user:passwd -T - -H "columns: dt,page,v1,v2=bitmap_empty()"   http://host:8410/api/test/testDb/_stream_load\n')),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select bitmap_count(bitmap_empty());\n+------------------------------+\n| bitmap_count(bitmap_empty()) |\n+------------------------------+\n|                            0 |\n+------------------------------+\n\nmysql> select bitmap_to_string(bitmap_empty());\n+----------------------------------+\n| bitmap_to_string(bitmap_empty()) |\n+----------------------------------+\n|                                  |\n+----------------------------------+\n\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"BITMAP_EMPTY,BITMAP\n")))}u.isMDXComponent=!0}}]);