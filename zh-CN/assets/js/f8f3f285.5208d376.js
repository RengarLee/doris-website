"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[189441],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>y});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},O=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),O=r,y=m["".concat(s,".").concat(O)]||m[O]||u[O]||l;return a?n.createElement(y,o(o({ref:t},c),{},{components:a})):n.createElement(y,o({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=O;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}O.displayName="MDXCreateElement"},606034:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(58168),r=(a(296540),a(15680));const l={title:"SHOW-PARTITIONS",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-PARTITIONS",id:"version-3.0/sql-manual/sql-statements/Show-Statements/SHOW-PARTITIONS",title:"SHOW-PARTITIONS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/Show-Statements/SHOW-PARTITIONS.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-PARTITIONS",permalink:"/zh-CN/docs/sql-manual/sql-statements/Show-Statements/SHOW-PARTITIONS",draft:!1,tags:[],version:"3.0",frontMatter:{title:"SHOW-PARTITIONS",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-WORKLOAD-GROUPS",permalink:"/zh-CN/docs/sql-manual/sql-statements/Show-Statements/SHOW-WORKLOAD-GROUPS"},next:{title:"SHOW-FRONTENDS",permalink:"/zh-CN/docs/sql-manual/sql-statements/Show-Statements/SHOW-FRONTENDS"}},s={},p=[{value:"SHOW-PARTITIONS",id:"show-partitions",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-partitions"},"SHOW-PARTITIONS"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW PARTITIONS"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u5206\u533a\u4fe1\u606f\u3002\u652f\u6301 Internal catalog \u548c Hive Catalog"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"}," SHOW [TEMPORARY] PARTITIONS FROM [db_name.]table_name [WHERE] [ORDER BY] [LIMIT];\n")),(0,r.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,r.yg)("p",null,"\u5bf9\u4e8e Internal catalog\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u652f\u6301 PartitionId,PartitionName,State,Buckets,ReplicationNum,LastConsistencyCheckTime \u7b49\u5217\u7684\u8fc7\u6ee4"),(0,r.yg)("li",{parentName:"ol"},"TEMPORARY \u6307\u5b9a\u5217\u51fa\u4e34\u65f6\u5206\u533a")),(0,r.yg)("p",null,"\u5bf9\u4e8e Hive Catalog\uff1a\n\u652f\u6301\u8fd4\u56de\u6240\u6709\u5206\u533a\uff0c\u5305\u62ec\u591a\u7ea7\u5206\u533a"),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c55\u793a\u6307\u5b9a db \u4e0b\u6307\u5b9a\u8868\u7684\u6240\u6709\u975e\u4e34\u65f6\u5206\u533a\u4fe1\u606f"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW PARTITIONS FROM example_db.table_name;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c55\u793a\u6307\u5b9a db \u4e0b\u6307\u5b9a\u8868\u7684\u6240\u6709\u4e34\u65f6\u5206\u533a\u4fe1"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW TEMPORARY PARTITIONS FROM example_db.table_name;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c55\u793a\u6307\u5b9a db \u4e0b\u6307\u5b9a\u8868\u7684\u6307\u5b9a\u975e\u4e34\u65f6\u5206\u533a\u7684\u4fe1\u606f"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},' SHOW PARTITIONS FROM example_db.table_name WHERE PartitionName = "p1";\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c55\u793a\u6307\u5b9a db \u4e0b\u6307\u5b9a\u8868\u7684\u6700\u65b0\u975e\u4e34\u65f6\u5206\u533a\u7684\u4fe1\u606f"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW PARTITIONS FROM example_db.table_name ORDER BY PartitionId DESC LIMIT 1;\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, PARTITIONS\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);