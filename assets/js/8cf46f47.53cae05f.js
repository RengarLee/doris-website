"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[750581],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),y=p(t),m=a,d=y["".concat(s,".").concat(m)]||y[m]||u[m]||i;return t?r.createElement(d,l(l({ref:n},c),{},{components:t})):r.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[y]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},979412:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=t(58168),a=(t(296540),t(15680));const i={title:"REPLACE_EMPTY",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-functions/string-functions/replace-empty",id:"version-3.0/sql-manual/sql-functions/string-functions/replace-empty",title:"REPLACE_EMPTY",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/string-functions/replace-empty.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/replace-empty",permalink:"/docs/sql-manual/sql-functions/string-functions/replace-empty",draft:!1,tags:[],version:"3.0",frontMatter:{title:"REPLACE_EMPTY",language:"en"},sidebar:"docs",previous:{title:"REPLACE",permalink:"/docs/sql-manual/sql-functions/string-functions/replace"},next:{title:"STRLEFT",permalink:"/docs/sql-manual/sql-functions/string-functions/strleft"}},s={},p=[{value:"replace_empty",id:"replace_empty",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},y="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(y,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"replace_empty"},"replace_empty"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,"Since 2.1.5"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR REPLACE_EMPTY (VARCHAR str, VARCHAR old, VARCHAR new)")),(0,a.yg)("p",null,"Replace all ",(0,a.yg)("inlineCode",{parentName:"p"},"old")," substrings in ",(0,a.yg)("inlineCode",{parentName:"p"},"str")," string with ",(0,a.yg)("inlineCode",{parentName:"p"},"new")," string."),(0,a.yg)("p",null,"Unlike the ",(0,a.yg)("inlineCode",{parentName:"p"},"REPLACE()")," function, when ",(0,a.yg)("inlineCode",{parentName:"p"},"old")," is an empty string, the ",(0,a.yg)("inlineCode",{parentName:"p"},"new")," string is inserted before each character of the ",(0,a.yg)("inlineCode",{parentName:"p"},"str")," string and at the end of the ",(0,a.yg)("inlineCode",{parentName:"p"},"str")," string."),(0,a.yg)("p",null,"Other than that, the other behaviors are exactly the same as the ",(0,a.yg)("inlineCode",{parentName:"p"},"REPLACE()")," function."),(0,a.yg)("p",null,"This function is mainly used for compatibility with Presto and Trino, and its behavior is exactly the same as the ",(0,a.yg)("inlineCode",{parentName:"p"},"REPLACE()")," function in Presto and Trino."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select replace_empty(\"http://www.baidu.com:9090\", \"9090\", \"\");\n+------------------------------------------------------+\n| replace('http://www.baidu.com:9090', '9090', '') |\n+------------------------------------------------------+\n| http://www.baidu.com:                                |\n+------------------------------------------------------+\n\nmysql> select replace_empty(\"abc\", '', 'xyz');\n+---------------------------------+\n| replace_empty('abc', '', 'xyz') |\n+---------------------------------+\n| xyzaxyzbxyzcxyz                 |\n+---------------------------------+\n\nmysql> select replace_empty(\"\", \"\", \"xyz\");\n+------------------------------+\n| replace_empty('', '', 'xyz') |\n+------------------------------+\n| xyz                          |\n+------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"REPLACE_EMPTY\n")))}u.isMDXComponent=!0}}]);