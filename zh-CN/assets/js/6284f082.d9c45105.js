"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[549691],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>m});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),i=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=i(e.components);return a.createElement(u.Provider,{value:n},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),y=i(t),d=r,m=y["".concat(u,".").concat(d)]||y[d]||p[d]||l;return t?a.createElement(m,o(o({ref:n},s),{},{components:t})):a.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c[y]="string"==typeof e?e:r,o[1]=c;for(var i=2;i<l;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},396848:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var a=t(58168),r=(t(296540),t(15680));const l={title:"QUERY",language:"zh-CN"},o=void 0,c={unversionedId:"sql-manual/sql-functions/table-valued-functions/query",id:"version-3.0/sql-manual/sql-functions/table-valued-functions/query",title:"QUERY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/table-valued-functions/query.md",sourceDirName:"sql-manual/sql-functions/table-valued-functions",slug:"/sql-manual/sql-functions/table-valued-functions/query",permalink:"/zh-CN/docs/sql-manual/sql-functions/table-valued-functions/query",draft:!1,tags:[],version:"3.0",frontMatter:{title:"QUERY",language:"zh-CN"},sidebar:"docs",previous:{title:"LOCAL",permalink:"/zh-CN/docs/sql-manual/sql-functions/table-valued-functions/local"},next:{title:"ICEBERG_META",permalink:"/zh-CN/docs/sql-manual/sql-functions/table-valued-functions/iceberg-meta"}},u={},i=[{value:"query",id:"query",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Prac",id:"best-prac",level:3}],s={toc:i},y="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(y,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"query"},"query"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"query"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("p",null,"query \u8868\u51fd\u6570\uff08table-valued-function,tvf\uff09\uff0c\u53ef\u7528\u4e8e\u5c06\u67e5\u8be2\u8bed\u53e5\u76f4\u63a5\u900f\u4f20\u5230\u67d0\u4e2a catalog \u8fdb\u884c\u6570\u636e\u67e5\u8be2"),(0,r.yg)("admonition",{title:"note",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Doris 2.1.3 \u7248\u672c\u5f00\u59cb\u652f\u6301\uff0c\u5f53\u524d\u4ec5\u652f\u6301\u900f\u4f20\u67e5\u8be2 jdbc catalog\u3002\n\u9700\u8981\u5148\u5728 Doris \u4e2d\u521b\u5efa\u5bf9\u5e94\u7684 catalog\u3002")),(0,r.yg)("h4",{id:"syntax"},"syntax"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'query(\n  "catalog" = "catalog_name", \n  "query" = "select * from db_name.table_name where condition"\n  );\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,r.yg)("p",null,"query\u8868\u51fd\u6570 tvf\u4e2d\u7684\u6bcf\u4e00\u4e2a\u53c2\u6570\u90fd\u662f\u4e00\u4e2a ",(0,r.yg)("inlineCode",{parentName:"p"},'"key"="value"')," \u5bf9\u3002\n\u76f8\u5173\u53c2\u6570\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"catalog"),"\uff1a (\u5fc5\u586b) catalog\u540d\u79f0\uff0c\u9700\u8981\u6309\u7167catalog\u7684\u540d\u79f0\u586b\u5199\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"query"),"\uff1a (\u5fc5\u586b) \u9700\u8981\u6267\u884c\u7684\u67e5\u8be2\u8bed\u53e5\u3002")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("p",null,"\u4f7f\u7528 query \u51fd\u6570\u67e5\u8be2 jdbc \u6570\u636e\u6e90\u4e2d\u7684\u8868"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'select * from query("catalog" = "jdbc", "query" = "select * from db_name.table_name where condition");\n')),(0,r.yg)("p",null,"\u53ef\u4ee5\u914d\u5408",(0,r.yg)("inlineCode",{parentName:"p"},"desc function"),"\u4f7f\u7528"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'desc function query("catalog" = "jdbc", "query" = "select * from db_name.table_name where condition");\n')),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"query, table-valued-function, tvf\n")),(0,r.yg)("h3",{id:"best-prac"},"Best Prac"),(0,r.yg)("p",null,"\u900f\u4f20\u67e5\u8be2 jdbc catalog \u6570\u636e\u6e90\u4e2d\u7684\u8868"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'select * from query("catalog" = "jdbc", "query" = "select * from test.student");\n+------+---------+\n| id   | name    |\n+------+---------+\n| 1    | alice   |\n| 2    | bob     |\n| 3    | jack    |\n+------+---------+\nselect * from query("catalog" = "jdbc", "query" = "select * from test.score");\n+------+---------+\n| id   | score   |\n+------+---------+\n| 1    | 100     |\n| 2    | 90      |\n| 3    | 80      |\n+------+---------+\n')),(0,r.yg)("p",null,"\u900f\u4f20\u5173\u8054\u67e5\u8be2 jdbc catalog \u6570\u636e\u6e90\u4e2d\u7684\u8868"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'select * from query("catalog" = "jdbc", "query" = "select a.id, a.name, b.score from test.student a join test.score b on a.id = b.id");\n+------+---------+---------+\n| id   | name    | score   |\n+------+---------+---------+\n| 1    | alice   | 100     |\n| 2    | bob     | 90      |\n| 3    | jack    | 80      |\n+------+---------+---------+\n')))}p.isMDXComponent=!0}}]);