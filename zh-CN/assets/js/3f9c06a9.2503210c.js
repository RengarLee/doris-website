"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[988260],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=i,y=d["".concat(a,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(y,s(s({ref:n},u),{},{components:t})):r.createElement(y,s({ref:n},u))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=f;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[d]="string"==typeof e?e:i,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},811854:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(58168),i=(t(296540),t(15680));const o={title:"CASE",language:"zh-CN"},s=void 0,l={unversionedId:"sql-manual/sql-functions/conditional-functions/case",id:"version-3.0/sql-manual/sql-functions/conditional-functions/case",title:"CASE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/conditional-functions/case.md",sourceDirName:"sql-manual/sql-functions/conditional-functions",slug:"/sql-manual/sql-functions/conditional-functions/case",permalink:"/zh-CN/docs/sql-manual/sql-functions/conditional-functions/case",draft:!1,tags:[],version:"3.0",frontMatter:{title:"CASE",language:"zh-CN"},sidebar:"docs",previous:{title:"ASSERT_TRUE",permalink:"/zh-CN/docs/sql-manual/sql-functions/conditional-functions/assert-true"},next:{title:"COALESCE",permalink:"/zh-CN/docs/sql-manual/sql-functions/conditional-functions/coalesce"}},a={},c=[{value:"case",id:"case",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,i.yg)(d,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"case"},"case"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"CASE expression\n    WHEN condition1 THEN result1\n    [WHEN condition2 THEN result2]\n    ...\n    [WHEN conditionN THEN resultN]\n    [ELSE result]\nEND\n")),(0,i.yg)("p",null,"OR"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"CASE WHEN condition1 THEN result1\n    [WHEN condition2 THEN result2]\n    ...\n    [WHEN conditionN THEN resultN]\n    [ELSE result]\nEND\n")),(0,i.yg)("p",null,"\u5c06\u8868\u8fbe\u5f0f\u548c\u591a\u4e2a\u53ef\u80fd\u7684\u503c\u8fdb\u884c\u6bd4\u8f83\uff0c\u5f53\u5339\u914d\u65f6\u8fd4\u56de\u76f8\u5e94\u7684\u7ed3\u679c"),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select user_id, case user_id when 1 then 'user_id = 1' when 2 then 'user_id = 2' else 'user_id not exist' end test_case from test;\n+---------+-------------+\n| user_id | test_case   |\n+---------+-------------+\n| 1       | user_id = 1 |\n| 2       | user_id = 2 |\n+---------+-------------+\n \nmysql> select user_id, case when user_id = 1 then 'user_id = 1' when user_id = 2 then 'user_id = 2' else 'user_id not exist' end test_case from test;\n+---------+-------------+\n| user_id | test_case   |\n+---------+-------------+\n| 1       | user_id = 1 |\n| 2       | user_id = 2 |\n+---------+-------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("p",null,"CASE"))}p.isMDXComponent=!0}}]);