"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[969356],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,g=p["".concat(o,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},472107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const l={title:"ICEBERG_META",language:"zh-CN"},i=void 0,s={unversionedId:"sql-manual/sql-functions/table-valued-functions/iceberg-meta",id:"version-2.1/sql-manual/sql-functions/table-valued-functions/iceberg-meta",title:"ICEBERG_META",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/table-valued-functions/iceberg-meta.md",sourceDirName:"sql-manual/sql-functions/table-valued-functions",slug:"/sql-manual/sql-functions/table-valued-functions/iceberg-meta",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/table-valued-functions/iceberg-meta",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ICEBERG_META",language:"zh-CN"},sidebar:"docs",previous:{title:"QUERY",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/table-valued-functions/query"},next:{title:"BACKENDS",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/table-valued-functions/backends"}},o={},c=[{value:"iceberg_meta",id:"iceberg_meta",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Prac",id:"best-prac",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"iceberg_meta"},"iceberg_meta"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"iceberg_meta"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("p",null,"iceberg_meta \u8868\u51fd\u6570\uff08table-valued-function,tvf\uff09\uff0c\u53ef\u4ee5\u7528\u4e8e\u8bfb\u53d6 iceberg \u8868\u7684\u5404\u7c7b\u5143\u6570\u636e\u4fe1\u606f\uff0c\u5982\u64cd\u4f5c\u5386\u53f2\u3001\u751f\u6210\u7684\u5feb\u7167\u3001\u6587\u4ef6\u5143\u6570\u636e\u7b49\u3002"),(0,r.yg)("h4",{id:"syntax"},"syntax"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'iceberg_meta(\n  "table" = "ctl.db.tbl", \n  "query_type" = "snapshots"\n  ...\n  );\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,r.yg)("p",null,"iceberg_meta \u8868\u51fd\u6570 tvf \u4e2d\u7684\u6bcf\u4e00\u4e2a\u53c2\u6570\u90fd\u662f\u4e00\u4e2a ",(0,r.yg)("inlineCode",{parentName:"p"},'"key"="value"')," \u5bf9\u3002\n\u76f8\u5173\u53c2\u6570\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"table"),"\uff1a (\u5fc5\u586b) \u5b8c\u6574\u7684\u8868\u540d\uff0c\u9700\u8981\u6309\u7167\u76ee\u5f55\u540d\u3002\u5e93\u540d\u3002\u8868\u540d\u7684\u683c\u5f0f\uff0c\u586b\u5199\u9700\u8981\u67e5\u770b\u7684 iceberg \u8868\u540d\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"query_type"),"\uff1a (\u5fc5\u586b) \u60f3\u8981\u67e5\u770b\u7684\u5143\u6570\u636e\u7c7b\u578b\uff0c\u76ee\u524d\u4ec5\u652f\u6301 snapshots\u3002")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("p",null,"\u8bfb\u53d6\u5e76\u8bbf\u95ee iceberg \u8868\u683c\u5f0f\u7684 snapshots \u5143\u6570\u636e\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'select * from iceberg_meta("table" = "ctl.db.tbl", "query_type" = "snapshots");\n\n')),(0,r.yg)("p",null,"\u53ef\u4ee5\u914d\u5408",(0,r.yg)("inlineCode",{parentName:"p"},"desc function"),"\u4f7f\u7528"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'desc function iceberg_meta("table" = "ctl.db.tbl", "query_type" = "snapshots");\n')),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"iceberg_meta, table-valued-function, tvf\n")),(0,r.yg)("h3",{id:"best-prac"},"Best Prac"),(0,r.yg)("p",null,"\u67e5\u770b iceberg \u8868\u7684 snapshots"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'select * from iceberg_meta("table" = "iceberg_ctl.test_db.test_tbl", "query_type" = "snapshots");\n+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n|      committed_at      |  snapshot_id   |   parent_id   | operation |   manifest_list   |            summary           |\n+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n|  2022-09-20 11:14:29   |  64123452344   |       -1      |  append   | hdfs:/path/to/m1  | {"flink.job-id":"xxm1", ...} |\n|  2022-09-21 10:36:35   |  98865735822   |  64123452344  | overwrite | hdfs:/path/to/m2  | {"flink.job-id":"xxm2", ...} |\n|  2022-09-21 21:44:11   |  51232845315   |  98865735822  | overwrite | hdfs:/path/to/m3  | {"flink.job-id":"xxm3", ...} |\n+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n')),(0,r.yg)("p",null,"\u6839\u636e snapshot_id \u5b57\u6bb5\u7b5b\u9009"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'select * from iceberg_meta("table" = "iceberg_ctl.test_db.test_tbl", "query_type" = "snapshots") \nwhere snapshot_id = 98865735822;\n+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n|      committed_at      |  snapshot_id   |   parent_id   | operation |   manifest_list   |            summary           |\n+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n|  2022-09-21 10:36:35   |  98865735822   |  64123452344  | overwrite | hdfs:/path/to/m2  | {"flink.job-id":"xxm2", ...} |\n+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n')))}m.isMDXComponent=!0}}]);