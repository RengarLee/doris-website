"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[930586],{15680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>y});var n=t(296540);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=n.createContext({}),m=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=m(e.components);return n.createElement(p.Provider,{value:a},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(t),c=l,y=d["".concat(p,".").concat(c)]||d[c]||g[c]||r;return t?n.createElement(y,i(i({ref:a},s),{},{components:t})):n.createElement(y,i({ref:a},s))}));function y(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=c;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},447284:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var n=t(58168),l=(t(296540),t(15680));const r={title:"Tablet \u672c\u5730\u8c03\u8bd5",language:"zh-CN"},i=void 0,o={unversionedId:"admin-manual/maint-monitor/tablet-local-debug",id:"version-3.0/admin-manual/maint-monitor/tablet-local-debug",title:"Tablet \u672c\u5730\u8c03\u8bd5",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/maint-monitor/tablet-local-debug.md",sourceDirName:"admin-manual/maint-monitor",slug:"/admin-manual/maint-monitor/tablet-local-debug",permalink:"/zh-CN/docs/admin-manual/maint-monitor/tablet-local-debug",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Tablet \u672c\u5730\u8c03\u8bd5",language:"zh-CN"},sidebar:"docs",previous:{title:"\u76d1\u63a7\u548c\u62a5\u8b66",permalink:"/zh-CN/docs/admin-manual/maint-monitor/monitor-alert"},next:{title:"\u5143\u6570\u636e\u8fd0\u7ef4",permalink:"/zh-CN/docs/admin-manual/maint-monitor/metadata-operation"}},p={},m=[{value:"1. \u83b7\u53d6\u6709\u95ee\u9898\u7684 Tablet \u7684\u4fe1\u606f",id:"1-\u83b7\u53d6\u6709\u95ee\u9898\u7684-tablet-\u7684\u4fe1\u606f",level:2},{value:"2. \u672c\u5730\u52a0\u8f7d Tablet",id:"2-\u672c\u5730\u52a0\u8f7d-tablet",level:2}],s={toc:m},d="wrapper";function g(e){let{components:a,...t}=e;return(0,l.yg)(d,(0,n.A)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Doris \u7ebf\u4e0a\u8fd0\u884c\u8fc7\u7a0b\u4e2d\uff0c\u56e0\u4e3a\u5404\u79cd\u539f\u56e0\uff0c\u53ef\u80fd\u51fa\u73b0\u5404\u79cd\u5404\u6837\u7684 bug\u3002\u4f8b\u5982\uff1a\u526f\u672c\u4e0d\u4e00\u81f4\uff0c\u6570\u636e\u5b58\u5728\u7248\u672c diff \u7b49\u3002"),(0,l.yg)("p",null,"\u8fd9\u65f6\u5019\u9700\u8981\u5c06\u7ebf\u4e0a\u7684 tablet \u7684\u526f\u672c\u6570\u636e\u62f7\u8d1d\u5230\u672c\u5730\u73af\u5883\u8fdb\u884c\u590d\u73b0\uff0c\u7136\u540e\u8fdb\u884c\u95ee\u9898\u5b9a\u4f4d\u3002"),(0,l.yg)("h2",{id:"1-\u83b7\u53d6\u6709\u95ee\u9898\u7684-tablet-\u7684\u4fe1\u606f"},"1. \u83b7\u53d6\u6709\u95ee\u9898\u7684 Tablet \u7684\u4fe1\u606f"),(0,l.yg)("p",null,"\u53ef\u4ee5\u901a\u8fc7 BE \u65e5\u5fd7\u786e\u8ba4 tablet id\uff0c\u7136\u540e\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u83b7\u53d6\u4fe1\u606f\uff08\u5047\u8bbe tablet id \u4e3a 10020\uff09\u3002"),(0,l.yg)("p",null,"\u83b7\u53d6 tablet \u6240\u5728\u7684 DbId/TableId/PartitionId \u7b49\u4fe1\u606f\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show tablet 10020\\G\n*************************** 1. row ***************************\n       DbName: default_cluster:db1\n    TableName: tbl1\nPartitionName: tbl1\n    IndexName: tbl1\n         DbId: 10004\n      TableId: 10016\n  PartitionId: 10015\n      IndexId: 10017\n       IsSync: true\n        Order: 1\n    DetailCmd: SHOW PROC '/dbs/10004/10016/partitions/10015/10017/10020';\n")),(0,l.yg)("p",null,"\u6267\u884c\u4e0a\u4e00\u6b65\u4e2d\u7684 ",(0,l.yg)("inlineCode",{parentName:"p"},"DetailCmd")," \u83b7\u53d6 BackendId/SchemaHash \u7b49\u4fe1\u606f\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql>  SHOW PROC '/dbs/10004/10016/partitions/10015/10017/10020'\\G\n*************************** 1. row ***************************\n        ReplicaId: 10021\n        BackendId: 10003\n          Version: 3\nLstSuccessVersion: 3\n LstFailedVersion: -1\n    LstFailedTime: NULL\n       SchemaHash: 785778507\n    LocalDataSize: 780\n   RemoteDataSize: 0\n         RowCount: 2\n            State: NORMAL\n            IsBad: false\n     VersionCount: 3\n         PathHash: 7390150550643804973\n          MetaUrl: http://192.168.10.1:8040/api/meta/header/10020\n CompactionStatus: http://192.168.10.1:8040/api/compaction/show?tablet_id=10020\n")),(0,l.yg)("p",null,"\u521b\u5efa tablet \u5feb\u7167\u5e76\u83b7\u53d6\u5efa\u8868\u8bed\u53e5"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> admin copy tablet 10020 properties("backend_id" = "10003", "version" = "2")\\G\n*************************** 1. row ***************************\n         TabletId: 10020\n        BackendId: 10003\n               Ip: 192.168.10.1\n             Path: /path/to/be/storage/snapshot/20220830101353.2.3600\nExpirationMinutes: 60\n  CreateTableStmt: CREATE TABLE `tbl1` (\n  `k1` int(11) NULL,\n  `k2` int(11) NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`k1`, `k2`)\nDISTRIBUTED BY HASH(k1) BUCKETS 1\nPROPERTIES (\n"replication_num" = "1",\n"version_info" = "2"\n);\n')),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"admin copy tablet")," \u547d\u4ee4\u53ef\u4ee5\u4e3a\u6307\u5b9a\u7684 tablet \u751f\u6210\u5bf9\u5e94\u526f\u672c\u548c\u7248\u672c\u7684\u5feb\u7167\u6587\u4ef6\u3002\u5feb\u7167\u6587\u4ef6\u5b58\u50a8\u5728 ",(0,l.yg)("inlineCode",{parentName:"p"},"Ip")," \u5b57\u6bb5\u6240\u793a\u8282\u70b9\u7684 ",(0,l.yg)("inlineCode",{parentName:"p"},"Path")," \u76ee\u5f55\u4e0b\u3002"),(0,l.yg)("p",null,"\u8be5\u76ee\u4e0b\u4f1a\u6709\u4e00\u4e2a tablet id \u547d\u540d\u7684\u76ee\u5f55\uff0c\u5c06\u8fd9\u4e2a\u76ee\u5f55\u6574\u4f53\u6253\u5305\u540e\u5907\u7528\u3002\uff08\u6ce8\u610f\uff0c\u8be5\u76ee\u5f55\u6700\u591a\u4fdd\u7559 60 \u5206\u949f\uff0c\u4e4b\u540e\u4f1a\u81ea\u52a8\u5220\u9664\uff09\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/be/storage/snapshot/20220830101353.2.3600\ntar czf 10020.tar.gz 10020/\n")),(0,l.yg)("p",null,"\u8be5\u547d\u4ee4\u8fd8\u4f1a\u540c\u65f6\u751f\u6210\u8fd9\u4e2a tablet \u5bf9\u5e94\u7684\u5efa\u8868\u8bed\u53e5\u3002\u6ce8\u610f\uff0c\u8fd9\u4e2a\u5efa\u8868\u8bed\u53e5\u5e76\u4e0d\u662f\u539f\u59cb\u7684\u5efa\u8868\u8bed\u53e5\uff0c\u4ed6\u7684\u5206\u6876\u6570\u548c\u526f\u672c\u6570\u90fd\u662f 1\uff0c\u5e76\u4e14\u6307\u5b9a\u4e86 ",(0,l.yg)("inlineCode",{parentName:"p"},"versionInfo")," \u5b57\u6bb5\u3002\u8be5\u5efa\u8868\u8bed\u53e5\u662f\u7528\u4e8e\u4e4b\u540e\u5728\u672c\u5730\u52a0\u8f7d tablet \u65f6\u4f7f\u7528\u7684\u3002"),(0,l.yg)("p",null,"\u81f3\u6b64\uff0c\u6211\u4eec\u5df2\u7ecf\u83b7\u53d6\u5230\u6240\u6709\u5fc5\u8981\u7684\u4fe1\u606f\uff0c\u6e05\u5355\u5982\u4e0b\uff1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u6253\u5305\u597d\u7684 tablet \u6570\u636e\uff0c\u5982 10020.tar.gz\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5efa\u8868\u8bed\u53e5\u3002"))),(0,l.yg)("h2",{id:"2-\u672c\u5730\u52a0\u8f7d-tablet"},"2. \u672c\u5730\u52a0\u8f7d Tablet"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u642d\u5efa\u672c\u5730\u8c03\u8bd5\u73af\u5883"),(0,l.yg)("p",{parentName:"li"},"\u5728\u672c\u5730\u90e8\u7f72\u4e00\u4e2a\u5355\u8282\u70b9\u7684 Doris \u96c6\u7fa4\uff081FE\u30011BE\uff09\uff0c\u90e8\u7f72\u7248\u672c\u548c\u7ebf\u4e0a\u96c6\u7fa4\u4fdd\u6301\u4e00\u81f4\u3002\u5982\u7ebf\u4e0a\u90e8\u7f72\u7684\u7248\u672c\u662f DORIS-1.1.1, \u672c\u5730\u73af\u5883\u4e5f\u540c\u6837\u90e8\u7f72 DORIS-1.1.1 \u7684\u7248\u672c\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5efa\u8868"),(0,l.yg)("p",{parentName:"li"},"\u4f7f\u7528\u4e0a\u4e00\u6b65\u4e2d\u5f97\u5230\u7684\u5efa\u8868\u8bed\u53e5\uff0c\u5728\u672c\u5730\u73af\u5883\u4e2d\u521b\u5efa\u4e00\u5f20\u8868\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u83b7\u53d6\u65b0\u5efa\u7684\u8868\u7684 tablet \u7684\u4fe1\u606f"),(0,l.yg)("p",{parentName:"li"},"\u56e0\u4e3a\u65b0\u5efa\u8868\u7684\u5206\u6876\u6570\u548c\u526f\u672c\u6570\u90fd\u4e3a 1\uff0c\u6240\u4ee5\u53ea\u4f1a\u6709\u4e00\u4e2a\u4e00\u526f\u672c\u7684 tablet\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show tablets from tbl1\\G\n*************************** 1. row ***************************\n               TabletId: 10017\n              ReplicaId: 10018\n              BackendId: 10003\n             SchemaHash: 44622287\n                Version: 1\n      LstSuccessVersion: 1\n       LstFailedVersion: -1\n          LstFailedTime: NULL\n          LocalDataSize: 0\n         RemoteDataSize: 0\n               RowCount: 0\n                  State: NORMAL\nLstConsistencyCheckTime: NULL\n           CheckVersion: -1\n           VersionCount: -1\n               PathHash: 7390150550643804973\n                MetaUrl: http://192.168.10.1:8040/api/meta/header/10017\n       CompactionStatus: http://192.168.10.1:8040/api/compaction/show?tablet_id=10017\n")),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show tablet 10017\\G\n*************************** 1. row ***************************\n       DbName: default_cluster:db1\n    TableName: tbl1\nPartitionName: tbl1\n    IndexName: tbl1\n         DbId: 10004\n      TableId: 10015\n  PartitionId: 10014\n      IndexId: 10016\n       IsSync: true\n        Order: 0\n    DetailCmd: SHOW PROC '/dbs/10004/10015/partitions/10014/10016/10017';\n")),(0,l.yg)("p",{parentName:"li"},"\u8fd9\u91cc\u6211\u4eec\u8981\u8bb0\u5f55\u5982\u4e0b\u4fe1\u606f\uff1a"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"TableId")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"PartitionId")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"TabletId")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"SchemaHash"))),(0,l.yg)("p",{parentName:"li"},"\u540c\u65f6\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u5230\u8c03\u8bd5\u73af\u5883 BE \u8282\u70b9\u7684\u6570\u636e\u76ee\u5f55\u4e0b\uff0c\u786e\u8ba4\u65b0\u7684 tablet \u6240\u5728\u7684 shard id\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/storage/data/*/10017 && pwd\n")),(0,l.yg)("p",{parentName:"li"},"\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u8fdb\u5165 10017 \u8fd9\u4e2a tablet \u6240\u5728\u76ee\u5f55\u5e76\u5c55\u793a\u8def\u5f84\u3002\u8fd9\u91cc\u6211\u4eec\u4f1a\u770b\u5230\u7c7b\u4f3c\u5982\u4e0b\u7684\u8def\u5f84\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"/path/to/storage/data/0/10017\n")),(0,l.yg)("p",{parentName:"li"},"\u5176\u4e2d ",(0,l.yg)("inlineCode",{parentName:"p"},"0")," \u65e2\u662f shard id\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4fee\u6539 Tablet \u6570\u636e"),(0,l.yg)("p",{parentName:"li"},"\u89e3\u538b\u7b2c\u4e00\u6b65\u4e2d\u83b7\u53d6\u5230\u7684 tablet \u6570\u636e\u5305\u3002\u7f16\u8f91\u5668\u6253\u5f00\u5176\u4e2d\u7684 10017.hdr.json \u6587\u4ef6\uff0c\u5e76\u4fee\u6539\u4ee5\u4e0b\u5b57\u6bb5\u4e3a\u4e0a\u4e00\u6b65\u4e2d\u83b7\u53d6\u5230\u7684\u4fe1\u606f\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre"},'"table_id":10015\n"partition_id":10014\n"tablet_id":10017\n"schema_hash":44622287\n"shard_id":0\n'))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u52a0\u8f7d\u65b0 tablet"),(0,l.yg)("p",{parentName:"li"},"\u9996\u5148\uff0c\u505c\u6b62\u8c03\u8bd5\u73af\u5883\u7684 BE \u8fdb\u7a0b\uff08./bin/stop_be.sh\uff09\u3002\u7136\u540e\u5c06 10017.hdr.json \u6587\u4ef6\u540c\u7ea7\u76ee\u5f55\u6240\u5728\u7684\u6240\u6709 .dat \u6587\u4ef6\uff0c\u62f7\u8d1d\u5230 ",(0,l.yg)("inlineCode",{parentName:"p"},"/path/to/storage/data/0/10017/44622287")," \u76ee\u5f55\u4e0b\u3002\u8fd9\u4e2a\u76ee\u5f55\u65e2\u662f\u5728\u7b2c 3 \u6b65\u4e2d\uff0c\u6211\u4eec\u83b7\u53d6\u5230\u7684\u8c03\u8bd5\u73af\u5883 tablet \u6240\u5728\u76ee\u5f55\u3002",(0,l.yg)("inlineCode",{parentName:"p"},"10017/44622287")," \u5206\u522b\u662f tablet id \u548c schema hash\u3002"),(0,l.yg)("p",{parentName:"li"},"\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"meta_tool")," \u5de5\u5177\u5220\u9664\u539f\u6765\u7684 tablet meta\u3002\u8be5\u5de5\u5177\u4f4d\u4e8e ",(0,l.yg)("inlineCode",{parentName:"p"},"be/lib")," \u76ee\u5f55\u4e0b\u3002"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"./lib/meta_tool --root_path=/path/to/storage --operation=delete_meta --tablet_id=10017 --schema_hash=44622287\n")),(0,l.yg)("p",{parentName:"li"},"\u5176\u4e2d ",(0,l.yg)("inlineCode",{parentName:"p"},"/path/to/storage")," \u4e3a BE \u7684\u6570\u636e\u6839\u76ee\u5f55\u3002\u5982\u5220\u9664\u6210\u529f\uff0c\u4f1a\u51fa\u73b0 delete successfully \u65e5\u5fd7\u3002"),(0,l.yg)("p",{parentName:"li"},"\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"meta_tool")," \u5de5\u5177\u52a0\u8f7d\u65b0\u7684 tablet meta\u3002"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"./lib/meta_tool --root_path=/path/to/storage --operation=load_meta --json_meta_path=/path/to/10017.hdr.json\n")),(0,l.yg)("p",{parentName:"li"},"\u5982\u52a0\u8f7d\u6210\u529f\uff0c\u4f1a\u51fa\u73b0 load successfully \u65e5\u5fd7\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u9a8c\u8bc1"),(0,l.yg)("p",{parentName:"li"},"\u91cd\u65b0\u542f\u52a8\u8c03\u8bd5\u73af\u5883\u7684 BE \u8fdb\u7a0b (./bin/start_be.sh)\u3002\u5bf9\u8868\u8fdb\u884c\u67e5\u8be2\uff0c\u5982\u679c\u6b63\u786e\uff0c\u5219\u53ef\u4ee5\u67e5\u8be2\u51fa\u52a0\u8f7d\u7684 tablet \u7684\u6570\u636e\uff0c\u6216\u590d\u73b0\u7ebf\u4e0a\u95ee\u9898\u3002"))))}g.isMDXComponent=!0}}]);