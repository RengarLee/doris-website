"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[374107],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>y});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},S=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),S=r,y=m["".concat(o,".").concat(S)]||m[S]||u[S]||l;return a?n.createElement(y,s(s({ref:t},c),{},{components:a})):n.createElement(y,s({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=S;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}S.displayName="MDXCreateElement"},31995:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(58168),r=(a(296540),a(15680));const l={title:"SHOW-REPLICA-STATUS",language:"zh-CN"},s=void 0,i={unversionedId:"sql-manual/sql-statements/Database-Administration-Statements/SHOW-REPLICA-STATUS",id:"version-2.1/sql-manual/sql-statements/Database-Administration-Statements/SHOW-REPLICA-STATUS",title:"SHOW-REPLICA-STATUS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/Database-Administration-Statements/SHOW-REPLICA-STATUS.md",sourceDirName:"sql-manual/sql-statements/Database-Administration-Statements",slug:"/sql-manual/sql-statements/Database-Administration-Statements/SHOW-REPLICA-STATUS",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Database-Administration-Statements/SHOW-REPLICA-STATUS",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-REPLICA-STATUS",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-REPLICA-DISTRIBUTION",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Database-Administration-Statements/SHOW-REPLICA-DISTRIBUTION"},next:{title:"ADMIN-REPAIR-TABLE",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-REPAIR-TABLE"}},o={},p=[{value:"SHOW-REPLICA-STATUS",id:"show-replica-status",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-replica-status"},"SHOW-REPLICA-STATUS"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW REPLICA STATUS"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u4e00\u4e2a\u8868\u6216\u5206\u533a\u7684\u526f\u672c\u72b6\u6001\u4fe1\u606f\u3002"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW REPLICA STATUS FROM [db_name.]tbl_name [PARTITION (p1, ...)]\n[where_clause];\n")),(0,r.yg)("p",null,"\u8bf4\u660e"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"where_clause:\nWHERE STATUS ","[!]",'= "replica_status"')),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"replica_status:\nOK:                         replica \u5904\u4e8e\u5065\u5eb7\u72b6\u6001\nDEAD:                     replica \u6240\u5728 Backend \u4e0d\u53ef\u7528\nVERSION_ERROR:  replica \u6570\u636e\u7248\u672c\u6709\u7f3a\u5931\nSCHEMA_ERROR:   replica \u7684 schema hash \u4e0d\u6b63\u786e\nMISSING:                 replica \u4e0d\u5b58\u5728"))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u67e5\u770b\u8868\u5168\u90e8\u7684\u526f\u672c\u72b6\u6001"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW REPLICA STATUS FROM db1.tbl1;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u67e5\u770b\u8868\u67d0\u4e2a\u5206\u533a\u72b6\u6001\u4e3a VERSION_ERROR \u7684\u526f\u672c"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW REPLICA STATUS FROM tbl1 PARTITION (p1, p2)\nWHERE STATUS = "VERSION_ERROR";\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u67e5\u770b\u8868\u6240\u6709\u72b6\u6001\u4e0d\u5065\u5eb7\u7684\u526f\u672c"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW REPLICA STATUS FROM tbl1\nWHERE STATUS != "OK";\n')))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, REPLICA, STATUS\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);