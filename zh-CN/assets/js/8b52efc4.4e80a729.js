"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[498368],{15680:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>f});var t=n(296540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||y[d]||o;return n?t.createElement(f,l(l({ref:r},u),{},{components:n})):t.createElement(f,l({ref:r},u))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},514586:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var t=n(58168),a=(n(296540),n(15680));const o={title:"ARRAY_PRODUCT",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-functions/array-functions/array-product",id:"version-2.1/sql-manual/sql-functions/array-functions/array-product",title:"ARRAY_PRODUCT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/array-functions/array-product.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-product",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/array-functions/array-product",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ARRAY_PRODUCT",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_EXCEPT",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/array-functions/array-except"},next:{title:"ARRAY_INTERSECT",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/array-functions/array-intersect"}},c={},s=[{value:"array_product",id:"array_product",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function y(e){let{components:r,...n}=e;return(0,a.yg)(p,(0,t.A)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_product"},"array_product"),(0,a.yg)("p",null,"array_product"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"T array_product(ARRAY<T> arr)")),(0,a.yg)("p",null,"\u8fd4\u56de\u6570\u7ec4\u4e2d\u6240\u6709\u5143\u7d20\u7684\u4e58\u79ef\uff0c\u6570\u7ec4\u4e2d\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"NULL"),"\u503c\u4f1a\u88ab\u8df3\u8fc7\u3002\u7a7a\u6570\u7ec4\u4ee5\u53ca\u5143\u7d20\u5168\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"NULL"),"\u503c\u7684\u6570\u7ec4\uff0c\u7ed3\u679c\u8fd4\u56de",(0,a.yg)("inlineCode",{parentName:"p"},"NULL"),"\u503c\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"mysql> create table array_type_table(k1 INT, k2 Array<int>) duplicate key (k1)\n    -> distributed by hash(k1) buckets 1 properties('replication_num' = '1');\nmysql> insert into array_type_table values (0, []), (1, [NULL]), (2, [1, 2, 3]), (3, [1, NULL, 3]);\nmysql> select k2, array_product(k2) from array_type_table;\n+--------------+---------------------+\n| k2           | array_product(`k2`) |\n+--------------+---------------------+\n| []           |                NULL |\n| [NULL]       |                NULL |\n| [1, 2, 3]    |                   6 |\n| [1, NULL, 3] |                   3 |\n+--------------+---------------------+\n4 rows in set (0.01 sec)\n\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY,PRODUCT,ARRAY_PRODUCT"))}y.isMDXComponent=!0}}]);