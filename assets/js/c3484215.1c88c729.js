"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[637821],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>f});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),y=c(r),d=a,f=y["".concat(s,".").concat(d)]||y[d]||u[d]||l;return r?t.createElement(f,i(i({ref:n},p),{},{components:r})):t.createElement(f,i({ref:n},p))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[y]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},698686:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=r(58168),a=(r(296540),r(15680));const l={title:"ARRAY_SPLIT",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array-split",id:"version-3.0/sql-manual/sql-functions/array-functions/array-split",title:"ARRAY_SPLIT",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/array-functions/array-split.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-split",permalink:"/docs/sql-manual/sql-functions/array-functions/array-split",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ARRAY_SPLIT",language:"en"},sidebar:"docs",previous:{title:"ARRAY_SORTBY",permalink:"/docs/sql-manual/sql-functions/array-functions/array-sortby"},next:{title:"ARRAY_REVERSE_SPLIT",permalink:"/docs/sql-manual/sql-functions/array-functions/array-reverse-split"}},s={},c=[{value:"array_split",id:"array_split",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},y="wrapper";function u(e){let{components:n,...r}=e;return(0,a.yg)(y,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_split"},"array_split"),(0,a.yg)("p",null,"array_split"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"ARRAY<ARRAY<T>> array_split(ARRAY<T> arg, Array<Boolean> cond)\nARRAY<ARRAY<T>> array_split(lambda, ARRAY<T0> arg0...)\n")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"pass in two ",(0,a.yg)("inlineCode",{parentName:"li"},"ARRAY")," of equal length, the second of which is an ",(0,a.yg)("inlineCode",{parentName:"li"},"Array<Boolean>"),", and split the ",(0,a.yg)("inlineCode",{parentName:"li"},"arg")," according to the split point to the left of the position in the ",(0,a.yg)("inlineCode",{parentName:"li"},"cond")," where ",(0,a.yg)("inlineCode",{parentName:"li"},"true")," is found."),(0,a.yg)("li",{parentName:"ol"},"Higher-order functions, passed a lambda expression and at least one ",(0,a.yg)("inlineCode",{parentName:"li"},"ARRAY arg0"),", split ",(0,a.yg)("inlineCode",{parentName:"li"},"arg0")," by the left-hand side of the ",(0,a.yg)("inlineCode",{parentName:"li"},"true")," position in the ",(0,a.yg)("inlineCode",{parentName:"li"},"Array<Boolean>")," result of the lambda expression operation.")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select array_split([1,2,3,4,5], [1,0,1,0,0]);\n+-----------------------------------------------------------------------+\n| array_split([1, 2, 3, 4, 5], cast([1, 0, 1, 0, 0] as ARRAY<BOOLEAN>)) |\n+-----------------------------------------------------------------------+\n| [[1, 2], [3, 4, 5]]                                                   |\n+-----------------------------------------------------------------------+\n1 row in set (0.09 sec)\n\nmysql> select array_split((x,y)->y, [1,2,3,4,5], [1,0,0,0,0]);\n+----------------------------------------------------------------------------------------------------------------+\n| array_split([1, 2, 3, 4, 5], cast(array_map((x, y) -> y, [1, 2, 3, 4, 5], [1, 0, 0, 0, 0]) as ARRAY<BOOLEAN>)) |\n+----------------------------------------------------------------------------------------------------------------+\n| [[1, 2, 3, 4, 5]]                                                                                              |\n+----------------------------------------------------------------------------------------------------------------+\n1 row in set (0.13 sec)\n\nmysql> select array_split((x,y)->(y+1), ['a', 'b', 'c', 'd'], [-1, -1, 0, -1]);\n+--------------------------------------------------------------------------------------------------------------------------------+\n| array_split(['a', 'b', 'c', 'd'], cast(array_map((x, y) -> (y + 1), ['a', 'b', 'c', 'd'], [-1, -1, 0, -1]) as ARRAY<BOOLEAN>)) |\n+--------------------------------------------------------------------------------------------------------------------------------+\n| [[\"a\", \"b\"], [\"c\", \"d\"]]                                                                                                       |\n+--------------------------------------------------------------------------------------------------------------------------------+\n1 row in set (0.12 sec)\n\nmysql> select array_split(x->(year(x)>2013),[\"2020-12-12\", \"2013-12-12\", \"2015-12-12\", null]);\n+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| array_split(['2020-12-12', '2013-12-12', '2015-12-12', NULL], array_map(x -> (year(cast(x as DATEV2)) > 2013), ['2020-12-12', '2013-12-12', '2015-12-12', NULL])) |\n+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| [[\"2020-12-12\", \"2013-12-12\"], [\"2015-12-12\"], [null]]                                                                                                            |\n+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n1 row in set (0.14 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY, SPLIT, ARRAY_SPLIT"))}u.isMDXComponent=!0}}]);