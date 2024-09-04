"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[572689],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var l=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=l.createContext({}),s=function(e){var n=l.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return l.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},f=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(t),f=r,y=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return t?l.createElement(y,o(o({ref:n},c),{},{components:t})):l.createElement(y,o({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=f;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u[p]="string"==typeof e?e:r,o[1]=u;for(var s=2;s<a;s++)o[s]=t[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}f.displayName="MDXCreateElement"},653157:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var l=t(58168),r=(t(296540),t(15680));const a={title:"NULLABLE",language:"zh-CN"},o=void 0,u={unversionedId:"sql-manual/sql-functions/debug-functions/nullable",id:"sql-manual/sql-functions/debug-functions/nullable",title:"NULLABLE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/debug-functions/nullable.md",sourceDirName:"sql-manual/sql-functions/debug-functions",slug:"/sql-manual/sql-functions/debug-functions/nullable",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/debug-functions/nullable",draft:!1,tags:[],version:"current",frontMatter:{title:"NULLABLE",language:"zh-CN"},sidebar:"docs",previous:{title:"NON_NULLABLE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/debug-functions/non-nullable"},next:{title:"SLEEP",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/debug-functions/sleep"}},i={},s=[{value:"nullable",id:"nullable",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,l.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"nullable"},"nullable"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"\u4ec5\u4f9b\u5f00\u53d1\u8005\u8c03\u8bd5\u7528\uff0c\u8bf7\u52ff\u5728\u751f\u4ea7\u73af\u5883\u624b\u52a8\u8c03\u7528\u8be5\u51fd\u6570\u3002")),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"T nullable(T expr)")),(0,r.yg)("p",null,"\u8f6c\u6362 ",(0,r.yg)("inlineCode",{parentName:"p"},"expr")," \u4e3a nullable \u5c5e\u6027\uff0c\u82e5 ",(0,r.yg)("inlineCode",{parentName:"p"},"expr")," \u5df2\u7ecf\u662f nullable \u7684\uff0c\u5219\u4e3a\u5176\u672c\u8eab\u3002"),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select k1, nullable(k1), nullable(1) from test_nullable_functions order by k1;\n+------+--------------+-------------+\n| k1   | nullable(k1) | nullable(1) |\n+------+--------------+-------------+\n| NULL |         NULL |           1 |\n|    1 |            1 |           1 |\n|    2 |            2 |           1 |\n|    3 |            3 |           1 |\n|    4 |            4 |           1 |\n+------+--------------+-------------+\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"nullable\n")))}d.isMDXComponent=!0}}]);