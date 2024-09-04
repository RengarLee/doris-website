"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[985449],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),y=o,m=p["".concat(l,".").concat(y)]||p[y]||d[y]||a;return t?r.createElement(m,s(s({ref:n},u),{},{components:t})):r.createElement(m,s({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=y;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},309194:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(58168),o=(t(296540),t(15680));const a={title:"ASSERT_TRUE",language:"en"},s=void 0,i={unversionedId:"sql-manual/sql-functions/conditional-functions/assert-true",id:"version-3.0/sql-manual/sql-functions/conditional-functions/assert-true",title:"ASSERT_TRUE",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/conditional-functions/assert-true.md",sourceDirName:"sql-manual/sql-functions/conditional-functions",slug:"/sql-manual/sql-functions/conditional-functions/assert-true",permalink:"/docs/sql-manual/sql-functions/conditional-functions/assert-true",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ASSERT_TRUE",language:"en"},sidebar:"docs",previous:{title:"BIT_SHIFT_RIGHT",permalink:"/docs/sql-manual/sql-functions/bitwise-functions/bitshiftright"},next:{title:"CASE",permalink:"/docs/sql-manual/sql-functions/conditional-functions/case"}},l={},c=[{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h3",{id:"description"},"Description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"BOOLEAN assert_true(BOOLEAN condition, VarcharLiteral errmsg)")),(0,o.yg)("p",null,"When ",(0,o.yg)("inlineCode",{parentName:"p"},"condition")," is ",(0,o.yg)("inlineCode",{parentName:"p"},"true"),", return ",(0,o.yg)("inlineCode",{parentName:"p"},"true"),". Otherwise throws an error with message ",(0,o.yg)("inlineCode",{parentName:"p"},"errmsg"),".\n",(0,o.yg)("inlineCode",{parentName:"p"},"errmsg")," could only be Literal."),(0,o.yg)("h3",{id:"example"},"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> select assert_true(1, "wrong");\n+------------------------------------------+\n| assert_true(cast(1 as BOOLEAN), \'wrong\') |\n+------------------------------------------+\n|                                        1 |\n+------------------------------------------+\n1 row in set (0.12 sec)\n\nmysql> select assert_true(1, nullable("wrong"));\nERROR 1105 (HY000): errCode = 2, detailMessage = assert_true only accept constant for 2nd argument\nmysql> select assert_true(0, "wrong");\nERROR 1105 (HY000): errCode = 2, detailMessage = (10.16.10.8)[INVALID_ARGUMENT][E33] wrong\nmysql> select assert_true(null, "wrong");\nERROR 1105 (HY000): errCode = 2, detailMessage = (10.16.10.8)[INVALID_ARGUMENT][E33] wrong\n')),(0,o.yg)("h3",{id:"keywords"},"Keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"ASSERT_TRUE, ASSERT, TRUE\n")))}d.isMDXComponent=!0}}]);