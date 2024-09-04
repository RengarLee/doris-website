"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[452102],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,d=p["".concat(s,".").concat(f)]||p[f]||y[f]||i;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},440638:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const i={title:"CHAR",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/char",id:"version-2.1/sql-manual/sql-functions/string-functions/char",title:"CHAR",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/string-functions/char.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/char",permalink:"/docs/2.1/sql-manual/sql-functions/string-functions/char",draft:!1,tags:[],version:"2.1",frontMatter:{title:"CHAR",language:"en"},sidebar:"docs",previous:{title:"REVERSE",permalink:"/docs/2.1/sql-manual/sql-functions/string-functions/reverse"},next:{title:"CONCAT",permalink:"/docs/2.1/sql-manual/sql-functions/string-functions/concat"}},s={},c=[{value:"function char",id:"function-char",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{title:"Tips",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"This feature is supported since the Apache Doris 1.2 version")),(0,a.yg)("h2",{id:"function-char"},"function char"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR char(INT,..., [USING charset_name])")),(0,a.yg)("p",null,"Interprets each argument as an integer and returns a string consisting of the characters given by the code values of those integers. ",(0,a.yg)("inlineCode",{parentName:"p"},"NULL")," values are skipped."),(0,a.yg)("p",null,"If the result string is illegal for the given character set, the result from ",(0,a.yg)("inlineCode",{parentName:"p"},"CHAR()")," becomes ",(0,a.yg)("inlineCode",{parentName:"p"},"NULL"),"."),(0,a.yg)("p",null,"Arguments larger than ",(0,a.yg)("inlineCode",{parentName:"p"},"255")," are converted into multiple result bytes. For example, ",(0,a.yg)("inlineCode",{parentName:"p"},"char(15049882)")," is equivalent to ",(0,a.yg)("inlineCode",{parentName:"p"},"char(229, 164, 154)"),"."),(0,a.yg)("p",null,"Currently only ",(0,a.yg)("inlineCode",{parentName:"p"},"utf8")," is supported for ",(0,a.yg)("inlineCode",{parentName:"p"},"charset_name"),"."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select char(68, 111, 114, 105, 115);\n+--------------------------------------+\n| char('utf8', 68, 111, 114, 105, 115) |\n+--------------------------------------+\n| Doris                                |\n+--------------------------------------+\n\nmysql> select char(15049882, 15179199, 14989469);\n+--------------------------------------------+\n| char('utf8', 15049882, 15179199, 14989469) |\n+--------------------------------------------+\n| \u591a\u777f\u4e1d                                     |\n+--------------------------------------------+\n\nmysql> select char(255);\n+-------------------+\n| char('utf8', 255) |\n+-------------------+\n| NULL              |\n+-------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"CHAR\n")))}y.isMDXComponent=!0}}]);