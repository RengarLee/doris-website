"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[263960],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),y=r,d=m["".concat(s,".").concat(y)]||m[y]||u[y]||l;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},177141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(296540),n(15680));const l={title:"DROP-TABLE",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-TABLE",id:"sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-TABLE",title:"DROP-TABLE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-TABLE.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Drop",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-TABLE",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-TABLE",draft:!1,tags:[],version:"current",frontMatter:{title:"DROP-TABLE",language:"zh-CN"},sidebar:"docs",previous:{title:"DROP-DATABASE",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-DATABASE"},next:{title:"DROP-INDEX",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-INDEX"}},s={},p=[{value:"DROP-TABLE",id:"drop-table",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"drop-table"},"DROP-TABLE"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"DROP TABLE"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5220\u9664 Table\u3002\n\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE [IF EXISTS] [db_name.]table_name [FORCE];\n")),(0,r.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u6267\u884c ",(0,r.yg)("inlineCode",{parentName:"li"},"DROP TABLE")," \u4e00\u6bb5\u65f6\u95f4\u5185\uff0c\u53ef\u4ee5\u901a\u8fc7 RECOVER \u8bed\u53e5\u6062\u590d\u88ab\u5220\u9664\u7684\u8868\u3002\u8be6\u89c1 ",(0,r.yg)("a",{parentName:"li",href:"../../../../sql-manual/sql-reference/Database-Administration-Statements/RECOVER"},"RECOVER")," \u8bed\u53e5\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u5982\u679c\u6267\u884c ",(0,r.yg)("inlineCode",{parentName:"li"},"DROP TABLE FORCE"),"\uff0c\u5219\u7cfb\u7edf\u4e0d\u4f1a\u68c0\u67e5\u8be5\u8868\u662f\u5426\u5b58\u5728\u672a\u5b8c\u6210\u7684\u4e8b\u52a1\uff0c\u8868\u5c06\u76f4\u63a5\u88ab\u5220\u9664\u5e76\u4e14\u4e0d\u80fd\u88ab\u6062\u590d\uff0c\u4e00\u822c\u4e0d\u5efa\u8bae\u6267\u884c\u6b64\u64cd\u4f5c\u3002")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5220\u9664\u4e00\u4e2a Table"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE my_table;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5982\u679c\u5b58\u5728\uff0c\u5220\u9664\u6307\u5b9a Database \u7684 Table"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE IF EXISTS example_db.my_table;\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"DROP, TABLE\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);