"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[898305],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),g=a,f=u["".concat(s,".").concat(g)]||u[g]||y[g]||o;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},608933:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const o={title:"TOPN_ARRAY",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-functions/aggregate-functions/topn-array",id:"version-3.0/sql-manual/sql-functions/aggregate-functions/topn-array",title:"TOPN_ARRAY",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/aggregate-functions/topn-array.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/topn-array",permalink:"/docs/sql-manual/sql-functions/aggregate-functions/topn-array",draft:!1,tags:[],version:"3.0",frontMatter:{title:"TOPN_ARRAY",language:"en"},sidebar:"docs",previous:{title:"TOPN",permalink:"/docs/sql-manual/sql-functions/aggregate-functions/topn"},next:{title:"TOPN_WEIGHTED",permalink:"/docs/sql-manual/sql-functions/aggregate-functions/topn-weighted"}},s={},c=[{value:"TOPN_ARRAY",id:"topn_array",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"topn_array"},"TOPN_ARRAY"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ARRAY<T> topn_array(expr, INT top_num[, INT space_expand_rate])")),(0,a.yg)("p",null,"The topn function uses the Space-Saving algorithm to calculate the top_num frequent items in expr,\nand return an array about the top n nums, which is an approximation"),(0,a.yg)("p",null,"The space_expand_rate parameter is optional and is used to set the number of counters used in the Space-Saving algorithm"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"counter numbers = top_num * space_expand_rate\n")),(0,a.yg)("p",null,"The higher value of space_expand_rate, the more accurate result will be. The default value is 50"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select topn_array(k3,3) from baseall;\n+--------------------------+\n| topn_array(`k3`, 3)      |\n+--------------------------+\n| [3021, 2147483647, 5014] |\n+--------------------------+\n1 row in set (0.02 sec)\n\nmysql> select topn_array(k3,3,100) from baseall;\n+--------------------------+\n| topn_array(`k3`, 3, 100) |\n+--------------------------+\n| [3021, 2147483647, 5014] |\n+--------------------------+\n1 row in set (0.02 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"TOPN, TOPN_ARRAY"))}y.isMDXComponent=!0}}]);