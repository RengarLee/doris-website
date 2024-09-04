"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[516485],{15680:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>d});var t=n(296540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),c=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(i.Provider,{value:r},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=c(n),f=a,d=y["".concat(i,".").concat(f)]||y[f]||p[f]||o;return n?t.createElement(d,s(s({ref:r},u),{},{components:n})):t.createElement(d,s({ref:r},u))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[y]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},510761:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(58168),a=(n(296540),n(15680));const o={title:"ARRAY_REVERSE_SORT",language:"en"},s=void 0,l={unversionedId:"sql-manual/sql-functions/array-functions/array-reverse-sort",id:"version-3.0/sql-manual/sql-functions/array-functions/array-reverse-sort",title:"ARRAY_REVERSE_SORT",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/array-functions/array-reverse-sort.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-reverse-sort",permalink:"/docs/sql-manual/sql-functions/array-functions/array-reverse-sort",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ARRAY_REVERSE_SORT",language:"en"},sidebar:"docs",previous:{title:"ARRAY_SORT",permalink:"/docs/sql-manual/sql-functions/array-functions/array-sort"},next:{title:"ARRAY_SORTBY",permalink:"/docs/sql-manual/sql-functions/array-functions/array-sortby"}},i={},c=[{value:"array_reverse_sort",id:"array_reverse_sort",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},y="wrapper";function p(e){let{components:r,...n}=e;return(0,a.yg)(y,(0,t.A)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_reverse_sort"},"array_reverse_sort"),(0,a.yg)("p",null,"array_reverse_sort"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ARRAY<T> array_reverse_sort(ARRAY<T> arr)")),(0,a.yg)("p",null,"Return the array which has been sorted in descending order. Return NULL for NULL input.\nIf the element of array is NULL, it will be placed in the last of the sorted array."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-mysql>",metastring:"select k1, k2, array_reverse_sort(k2) from array_test;",select:!0,"k1,":!0,"k2,":!0,"array_reverse_sort(k2)":!0,from:!0,"array_test;":!0},"+------+-----------------------------+-----------------------------+\n| k1   | k2                          | array_reverse_sort(`k2`)    |\n+------+-----------------------------+-----------------------------+\n|  1   | [1, 2, 3, 4, 5]             | [5, 4, 3, 2, 1]             |\n|  2   | [6, 7, 8]                   | [8, 7, 6]                   |\n|  3   | []                          | []                          |\n|  4   | NULL                        | NULL                        |\n|  5   | [1, 2, 3, 4, 5, 4, 3, 2, 1] | [5, 4, 4, 3, 3, 2, 2, 1, 1] |\n|  6   | [1, 2, 3, NULL]             | [3, 2, 1, NULL]             |\n|  7   | [1, 2, 3, NULL, NULL]       | [3, 2, 1, NULL, NULL]       |\n|  8   | [1, 1, 2, NULL, NULL]       | [2, 1, 1, NULL, NULL]       |\n|  9   | [1, NULL, 1, 2, NULL, NULL] | [2, 1, 1, NULL, NULL, NULL] |\n+------+-----------------------------+-----------------------------+\n\nmysql> select k1, k2, array_reverse_sort(k2) from array_test01;\n+------+------------------------------------------+------------------------------------------+\n| k1   | k2                                       | array_reverse_sort(`k2`)                 |\n+------+------------------------------------------+------------------------------------------+\n|  1   | ['a', 'b', 'c', 'd', 'e']                | ['e', 'd', 'c', 'b', 'a']                |\n|  2   | ['f', 'g', 'h']                          | ['h', 'g', 'f']                          |\n|  3   | ['']                                     | ['']                                     |\n|  3   | [NULL]                                   | [NULL]                                   |\n|  5   | ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c'] | ['e', 'd', 'c', 'c', 'b', 'b', 'a', 'a'] |\n|  6   | NULL                                     | NULL                                     |\n|  7   | ['a', 'b', NULL]                         | ['b', 'a', NULL]                         |\n|  8   | ['a', 'b', NULL, NULL]                   | ['b', 'a', NULL, NULL]                  |\n+------+------------------------------------------+------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY, SORT, REVERSE, ARRAY_SORT, ARRAY_REVERSE_SORT"))}p.isMDXComponent=!0}}]);