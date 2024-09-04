"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[231951],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>f});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},954844:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=t(58168),o=(t(296540),t(15680));const l={title:"Outer \u7ec4\u5408\u5668",language:"zh-CN"},a=void 0,i={unversionedId:"sql-manual/sql-functions/table-functions/explode-numbers-outer",id:"version-2.1/sql-manual/sql-functions/table-functions/explode-numbers-outer",title:"Outer \u7ec4\u5408\u5668",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/table-functions/explode-numbers-outer.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/explode-numbers-outer",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/table-functions/explode-numbers-outer",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Outer \u7ec4\u5408\u5668",language:"zh-CN"},sidebar:"docs",previous:{title:"EXPLODE_NUMBERS",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/table-functions/explode-numbers"},next:{title:"S3",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/table-valued-functions/s3"}},s={},u=[{value:"outer\u7ec4\u5408\u5668",id:"outer\u7ec4\u5408\u5668",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"outer\u7ec4\u5408\u5668"},"outer\u7ec4\u5408\u5668"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("p",null,"\u5728table function\u7684\u51fd\u6570\u540d\u540e\u9762\u6dfb\u52a0",(0,o.yg)("inlineCode",{parentName:"p"},"_outer"),"\u540e\u7f00\u4f7f\u5f97\u51fd\u6570\u884c\u4e3a\u4ece",(0,o.yg)("inlineCode",{parentName:"p"},"non-outer"),"\u53d8\u4e3a",(0,o.yg)("inlineCode",{parentName:"p"},"outer"),",\u5728\u8868\u51fd\u6570\u751f\u62100\u884c\u6570\u636e\u65f6\u6dfb\u52a0\u4e00\u884c",(0,o.yg)("inlineCode",{parentName:"p"},"Null"),"\u6570\u636e\u3002"),(0,o.yg)("h4",{id:"syntax"},"syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"explode_numbers(INT x)")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select e1 from (select 1 k1) as t lateral view explode_numbers(0) tmp1 as e1;\nEmpty set\n\nmysql> select e1 from (select 1 k1) as t lateral view explode_numbers_outer(0) tmp1 as e1;\n+------+\n| e1   |\n+------+\n| NULL |\n+------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"outer\n")))}d.isMDXComponent=!0}}]);