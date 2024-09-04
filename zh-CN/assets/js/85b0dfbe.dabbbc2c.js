"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[760717],{15680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>E});var n=t(296540);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),m=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=m(e.components);return n.createElement(o.Provider,{value:a},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=m(t),g=l,E=u["".concat(o,".").concat(g)]||u[g]||y[g]||r;return t?n.createElement(E,i(i({ref:a},s),{},{components:t})):n.createElement(E,i({ref:a},s))}));function E(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=g;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[u]="string"==typeof e?e:l,i[1]=p;for(var m=2;m<r;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},218810:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var n=t(58168),l=(t(296540),t(15680));const r={title:"SHOW ALTER TABLE MATERIALIZED VIEW",language:"zh-CN"},i=void 0,p={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW",id:"version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW",title:"SHOW ALTER TABLE MATERIALIZED VIEW",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW ALTER TABLE MATERIALIZED VIEW",language:"zh-CN"},sidebar:"docs",previous:{title:"OUTFILE",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Data-Manipulation-Statements/OUTFILE"},next:{title:"SHOW-ALTER",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-ALTER"}},o={},m=[{value:"SHOW ALTER TABLE MATERIALIZED VIEW",id:"show-alter-table-materialized-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:m},u="wrapper";function y(e){let{components:a,...t}=e;return(0,l.yg)(u,(0,n.A)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"show-alter-table-materialized-view"},"SHOW ALTER TABLE MATERIALIZED VIEW"),(0,l.yg)("h3",{id:"name"},"Name"),(0,l.yg)("p",null,"SHOW ALTER TABLE MATERIALIZED VIEW"),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("p",null,"\u8be5\u547d\u4ee4\u7528\u4e8e\u67e5\u770b\u901a\u8fc7 ",(0,l.yg)("a",{parentName:"p",href:"../../sql-reference/Data-Definition-Statements/Create/CREATE-MATERIALIZED-VIEW.md"},"CREATE-MATERIALIZED-VIEW")," \u8bed\u53e5\u63d0\u4ea4\u7684\u521b\u5efa\u7269\u5316\u89c6\u56fe\u4f5c\u4e1a\u7684\u6267\u884c\u60c5\u51b5\u3002"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u8be5\u8bed\u53e5\u7b49\u540c\u4e8e ",(0,l.yg)("inlineCode",{parentName:"p"},"SHOW ALTER TABLE ROLLUP"),";")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW ALTER TABLE MATERIALIZED VIEW\n[FROM database]\n[WHERE]\n[ORDER BY]\n[LIMIT OFFSET]\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"database\uff1a\u67e5\u770b\u6307\u5b9a\u6570\u636e\u5e93\u4e0b\u7684\u4f5c\u4e1a\u3002\u5982\u4e0d\u6307\u5b9a\uff0c\u4f7f\u7528\u5f53\u524d\u6570\u636e\u5e93\u3002"),(0,l.yg)("li",{parentName:"ul"},"WHERE\uff1a\u53ef\u4ee5\u5bf9\u7ed3\u679c\u5217\u8fdb\u884c\u7b5b\u9009\uff0c\u76ee\u524d\u4ec5\u652f\u6301\u5bf9\u4ee5\u4e0b\u5217\u8fdb\u884c\u7b5b\u9009\uff1a",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"TableName\uff1a\u4ec5\u652f\u6301\u7b49\u503c\u7b5b\u9009\u3002"),(0,l.yg)("li",{parentName:"ul"},"State\uff1a\u4ec5\u652f\u6301\u7b49\u503c\u7b5b\u9009\u3002"),(0,l.yg)("li",{parentName:"ul"},"Createtime/FinishTime\uff1a\u652f\u6301 =\uff0c>=\uff0c<=\uff0c>\uff0c<\uff0c!="))),(0,l.yg)("li",{parentName:"ul"},"ORDER BY\uff1a\u53ef\u4ee5\u5bf9\u7ed3\u679c\u96c6\u6309\u4efb\u610f\u5217\u8fdb\u884c\u6392\u5e8f\u3002"),(0,l.yg)("li",{parentName:"ul"},"LIMIT\uff1a\u914d\u5408 ORDER BY \u8fdb\u884c\u7ffb\u9875\u67e5\u8be2\u3002")),(0,l.yg)("p",null,"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show alter table materialized view\\G\n*************************** 1. row ***************************\n          JobId: 11001\n      TableName: tbl1\n     CreateTime: 2020-12-23 10:41:00\n     FinishTime: NULL\n  BaseIndexName: tbl1\nRollupIndexName: r1\n       RollupId: 11002\n  TransactionId: 5070\n          State: WAITING_TXN\n            Msg:\n       Progress: NULL\n        Timeout: 86400\n1 row in set (0.00 sec)\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"JobId"),"\uff1a\u4f5c\u4e1a\u552f\u4e00ID\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"TableName"),"\uff1a\u57fa\u8868\u540d\u79f0")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"CreateTime/FinishTime"),"\uff1a\u4f5c\u4e1a\u521b\u5efa\u65f6\u95f4\u548c\u7ed3\u675f\u65f6\u95f4\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"BaseIndexName/RollupIndexName"),"\uff1a\u57fa\u8868\u540d\u79f0\u548c\u7269\u5316\u89c6\u56fe\u540d\u79f0\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"RollupId"),"\uff1a\u7269\u5316\u89c6\u56fe\u7684\u552f\u4e00 ID\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"TransactionId"),"\uff1a\u89c1 State \u5b57\u6bb5\u8bf4\u660e\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"State"),"\uff1a\u4f5c\u4e1a\u72b6\u6001\u3002"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"PENDING\uff1a\u4f5c\u4e1a\u51c6\u5907\u4e2d\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"WAITING_TXN\uff1a"),(0,l.yg)("p",{parentName:"li"},"\u5728\u6b63\u5f0f\u5f00\u59cb\u4ea7\u751f\u7269\u5316\u89c6\u56fe\u6570\u636e\u524d\uff0c\u4f1a\u7b49\u5f85\u5f53\u524d\u8fd9\u4e2a\u8868\u4e0a\u7684\u6b63\u5728\u8fd0\u884c\u7684\u5bfc\u5165\u4e8b\u52a1\u5b8c\u6210\u3002\u800c ",(0,l.yg)("inlineCode",{parentName:"p"},"TransactionId")," \u5b57\u6bb5\u5c31\u662f\u5f53\u524d\u6b63\u5728\u7b49\u5f85\u7684\u4e8b\u52a1ID\u3002\u5f53\u8fd9\u4e2aID\u4e4b\u524d\u7684\u5bfc\u5165\u90fd\u5b8c\u6210\u540e\uff0c\u5c31\u4f1a\u5b9e\u9645\u5f00\u59cb\u4f5c\u4e1a\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"RUNNING\uff1a\u4f5c\u4e1a\u8fd0\u884c\u4e2d\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"FINISHED\uff1a\u4f5c\u4e1a\u8fd0\u884c\u6210\u529f\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"CANCELLED\uff1a\u4f5c\u4e1a\u8fd0\u884c\u5931\u8d25\u3002")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"Msg"),"\uff1a\u9519\u8bef\u4fe1\u606f")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"Progress"),"\uff1a\u4f5c\u4e1a\u8fdb\u5ea6\u3002\u8fd9\u91cc\u7684\u8fdb\u5ea6\u8868\u793a ",(0,l.yg)("inlineCode",{parentName:"p"},"\u5df2\u5b8c\u6210\u7684tablet\u6570\u91cf/\u603btablet\u6570\u91cf"),"\u3002\u521b\u5efa\u7269\u5316\u89c6\u56fe\u662f\u6309 tablet \u7c92\u5ea6\u8fdb\u884c\u7684\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"Timeout"),"\uff1a\u4f5c\u4e1a\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\u3002"))),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u67e5\u770b\u6570\u636e\u5e93 example_db \u4e0b\u7684\u7269\u5316\u89c6\u56fe\u4f5c\u4e1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW ALTER TABLE MATERIALIZED VIEW FROM example_db;\n")))),(0,l.yg)("h3",{id:"keywords"},"Keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"SHOW, ALTER, TABLE, MATERIALIZED, VIEW\n")),(0,l.yg)("h3",{id:"best-practice"},"Best Practice"))}y.isMDXComponent=!0}}]);