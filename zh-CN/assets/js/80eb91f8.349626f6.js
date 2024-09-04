"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[142494],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",E={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,y=m["".concat(o,".").concat(u)]||m[u]||E[u]||l;return n?a.createElement(y,i(i({ref:t},c),{},{components:n})):a.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},261728:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>E,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(58168),r=(n(296540),n(15680));const l={title:"CREATE-TABLE-AS-SELECT",language:"zh-CN"},i=void 0,s={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT",id:"version-2.1/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT",title:"CREATE-TABLE-AS-SELECT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Create",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT",draft:!1,tags:[],version:"2.1",frontMatter:{title:"CREATE-TABLE-AS-SELECT",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-TABLE-LIKE",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE-LIKE"},next:{title:"CREATE-INDEX",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-INDEX"}},o={},p=[{value:"CREATE-TABLE-AS-SELECT",id:"create-table-as-select",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function E(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"create-table-as-select"},"CREATE-TABLE-AS-SELECT"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"CREATE TABLE AS SELECT"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u901a\u8fc7 Select \u8bed\u53e5\u8fd4\u56de\u7ed3\u679c\u521b\u5efa\u8868\u7ed3\u6784\uff0c\u540c\u65f6\u5bfc\u5165\u6570\u636e"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_name [( column_name_list )]\n    opt_engine:engineName\n    opt_keys:keys\n    opt_comment:tableComment\n    opt_partition:partition\n    opt_distribution:distribution\n    opt_rollup:index\n    opt_properties:tblProperties\n    opt_ext_properties:extProperties\n    KW_AS query_stmt:query_def\n")),(0,r.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u7528\u6237\u9700\u8981\u62e5\u6709\u6765\u6e90\u8868\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"SELECT"),"\u6743\u9650\u548c\u76ee\u6807\u5e93\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"CREATE"),"\u6743\u9650"),(0,r.yg)("li",{parentName:"ul"},"\u521b\u5efa\u8868\u6210\u529f\u540e\uff0c\u4f1a\u8fdb\u884c\u6570\u636e\u5bfc\u5165\uff0c\u5982\u679c\u5bfc\u5165\u5931\u8d25\uff0c\u5c06\u4f1a\u5220\u9664\u8868"),(0,r.yg)("li",{parentName:"ul"},"\u53ef\u4ee5\u81ea\u884c\u6307\u5b9a key type\uff0c\u9ed8\u8ba4\u4e3a",(0,r.yg)("inlineCode",{parentName:"li"},"Duplicate Key")),(0,r.yg)("li",{parentName:"ul"},"\u6240\u6709\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u5217 (varchar/var/string) \u90fd\u4f1a\u88ab\u521b\u5efa\u4e3a string \u7c7b\u578b\u3002\u8be5\u529f\u80fd\u81ea Apache Doris  1.2 \u7248\u672c\u8d77\u652f\u6301\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u5982\u679c\u521b\u5efa\u7684\u6765\u6e90\u4e3a\u5916\u90e8\u8868\uff0c\u5e76\u4e14\u7b2c\u4e00\u5217\u4e3a String \u7c7b\u578b\uff0c\u5219\u4f1a\u81ea\u52a8\u5c06\u7b2c\u4e00\u5217\u8bbe\u7f6e\u4e3a VARCHAR(65533)\u3002\u56e0\u4e3a Doris \u5185\u90e8\u8868\uff0c\u4e0d\u5141\u8bb8 String \u5217\u4f5c\u4e3a\u7b2c\u4e00\u5217\u3002\u8be5\u529f\u80fd\u81ea Apache Doris  1.2 \u7248\u672c\u8d77\u652f\u6301")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4f7f\u7528 select \u8bed\u53e5\u4e2d\u7684\u5b57\u6bb5\u540d"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'create table `test`.`select_varchar` \nPROPERTIES("replication_num" = "1") \nas select * from `test`.`varchar_table`\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u81ea\u5b9a\u4e49\u5b57\u6bb5\u540d (\u9700\u8981\u4e0e\u8fd4\u56de\u7ed3\u679c\u5b57\u6bb5\u6570\u91cf\u4e00\u81f4)"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'create table `test`.`select_name`(user, testname, userstatus) \nPROPERTIES("replication_num" = "1") \nas select vt.userId, vt.username, jt.status \nfrom `test`.`varchar_table` vt join \n`test`.`join_table` jt on vt.userId=jt.userId\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6307\u5b9a\u8868\u6a21\u578b\u3001\u5206\u533a\u3001\u5206\u6876"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE t_user(dt, id, name)\nENGINE=OLAP\nUNIQUE KEY(dt, id)\nCOMMENT "OLAP"\nPARTITION BY RANGE(dt)\n(\n   FROM ("2020-01-01") TO ("2021-12-31") INTERVAL 1 YEAR\n)\nDISTRIBUTED BY HASH(id) BUCKETS 1\nPROPERTIES("replication_num"="1")\nAS SELECT cast(\'2020-05-20\' as date) as dt, 1 as id, \'Tom\' as name;\n')))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CREATE, TABLE, AS, SELECT\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}E.isMDXComponent=!0}}]);