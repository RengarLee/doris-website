"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[458602],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>d});var a=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=c(n),y=i,d=s["".concat(p,".").concat(y)]||s[y]||u[y]||r;return n?a.createElement(d,l(l({ref:t},m),{},{components:n})):a.createElement(d,l({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},530018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(58168),i=(n(296540),n(15680));const r={title:"\u67e5\u770b Compaction \u72b6\u6001",language:"zh-CN"},l=void 0,o={unversionedId:"admin-manual/be/compaction-status",id:"admin-manual/be/compaction-status",title:"\u67e5\u770b Compaction \u72b6\u6001",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/be/compaction-status.md",sourceDirName:"admin-manual/be",slug:"/admin-manual/be/compaction-status",permalink:"/zh-CN/docs/dev/admin-manual/be/compaction-status",draft:!1,tags:[],version:"current",frontMatter:{title:"\u67e5\u770b Compaction \u72b6\u6001",language:"zh-CN"},sidebar:"docs",previous:{title:"\u91cd\u7f6e\u8fde\u63a5\u7f13\u5b58",permalink:"/zh-CN/docs/dev/admin-manual/be/reset-rpc-channel"},next:{title:"\u89e6\u53d1 Compaction",permalink:"/zh-CN/docs/dev/admin-manual/be/compaction-run"}},p={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"\u6574\u4f53 Compaction \u72b6\u6001",id:"\u6574\u4f53-compaction-\u72b6\u6001",level:3},{value:"\u6307\u5b9a tablet \u7684 Compaction \u72b6\u6001",id:"\u6307\u5b9a-tablet-\u7684-compaction-\u72b6\u6001",level:3},{value:"Examples",id:"examples",level:2}],m={toc:c},s="wrapper";function u(e){let{components:t,...n}=e;return(0,i.yg)(s,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"request"},"Request"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"GET /api/compaction/run_status"),"\n",(0,i.yg)("inlineCode",{parentName:"p"},"GET /api/compaction/show?tablet_id={int}")),(0,i.yg)("h2",{id:"description"},"Description"),(0,i.yg)("p",null,"\u7528\u4e8e\u67e5\u770b\u67d0\u4e2a BE \u8282\u70b9\u603b\u4f53\u7684 compaction \u72b6\u6001\uff0c\u6216\u8005\u6307\u5b9a tablet \u7684 compaction \u72b6\u6001\u3002"),(0,i.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"tablet_id")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"tablet \u7684 id")))),(0,i.yg)("h2",{id:"request-body"},"Request body"),(0,i.yg)("p",null,"\u65e0"),(0,i.yg)("h2",{id:"response"},"Response"),(0,i.yg)("h3",{id:"\u6574\u4f53-compaction-\u72b6\u6001"},"\u6574\u4f53 Compaction \u72b6\u6001"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'{\n  "CumulativeCompaction": {\n         "/home/disk1" : [10001, 10002],\n         "/home/disk2" : [10003]\n  },\n  "BaseCompaction": {\n         "/home/disk1" : [10001, 10002],\n         "/home/disk2" : [10003]\n  }\n}\n')),(0,i.yg)("p",null,"\u8be5\u7ed3\u6784\u8868\u793a\u67d0\u4e2a\u6570\u636e\u76ee\u5f55\u4e0b\uff0c\u6b63\u5728\u6267\u884c compaction \u4efb\u52a1\u7684 tablet \u7684 id\uff0c\u4ee5\u53ca compaction \u7684\u7c7b\u578b\u3002"),(0,i.yg)("h3",{id:"\u6307\u5b9a-tablet-\u7684-compaction-\u72b6\u6001"},"\u6307\u5b9a tablet \u7684 Compaction \u72b6\u6001"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "cumulative policy type": "SIZE_BASED",\n    "cumulative point": 50,\n    "last cumulative failure time": "2019-12-16 18:13:43.224",\n    "last base failure time": "2019-12-16 18:13:23.320",\n    "last cumu success time": ,\n    "last base success time": "2019-12-16 18:11:50.780",\n    "rowsets": [\n        "[0-48] 10 DATA OVERLAPPING 574.00 MB",\n        "[49-49] 2 DATA OVERLAPPING 574.00 B",\n        "[50-50] 0 DELETE NONOVERLAPPING 574.00 B",\n        "[51-51] 5 DATA OVERLAPPING 574.00 B"\n    ],\n    "missing_rowsets": [],\n    "stale version path": [\n        {\n            "path id": "2",\n            "last create time": "2019-12-16 18:11:15.110 +0800",\n            "path list": "2-> [0-24] -> [25-48]"\n        }, \n        {\n            "path id": "1",\n            "last create time": "2019-12-16 18:13:15.110 +0800",\n            "path list": "1-> [25-40] -> [40-48]"\n        }\n    ]\n}\n')),(0,i.yg)("p",null,"\u7ed3\u679c\u8bf4\u660e\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"cumulative policy type\uff1a\u5f53\u524d tablet \u6240\u4f7f\u7528\u7684 cumulative compaction \u7b56\u7565\u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"cumulative point\uff1abase \u548c cumulative compaction \u7684\u7248\u672c\u5206\u754c\u7ebf\u3002\u5728 point\uff08\u4e0d\u542b\uff09\u4e4b\u524d\u7684\u7248\u672c\u7531 base compaction \u5904\u7406\u3002point\uff08\u542b\uff09\u4e4b\u540e\u7684\u7248\u672c\u7531 cumulative compaction \u5904\u7406\u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"last cumulative failure time\uff1a\u4e0a\u4e00\u6b21\u5c1d\u8bd5 cumulative compaction \u5931\u8d25\u7684\u65f6\u95f4\u3002\u9ed8\u8ba4 10min \u540e\u624d\u4f1a\u518d\u6b21\u5c1d\u8bd5\u5bf9\u8be5 tablet \u505a cumulative compaction\u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"last base failure time\uff1a\u4e0a\u4e00\u6b21\u5c1d\u8bd5 base compaction \u5931\u8d25\u7684\u65f6\u95f4\u3002\u9ed8\u8ba4 10min \u540e\u624d\u4f1a\u518d\u6b21\u5c1d\u8bd5\u5bf9\u8be5 tablet \u505a base compaction\u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"rowsets\uff1a\u8be5 tablet \u5f53\u524d\u7684 rowset \u96c6\u5408\u3002\u5982 ","[0-48]"," \u8868\u793a 0-48 \u7248\u672c\u3002\u7b2c\u4e8c\u4f4d\u6570\u5b57\u8868\u793a\u8be5\u7248\u672c\u4e2d segment \u7684\u6570\u91cf\u3002",(0,i.yg)("inlineCode",{parentName:"p"},"DELETE")," \u8868\u793a delete \u7248\u672c\u3002",(0,i.yg)("inlineCode",{parentName:"p"},"DATA")," \u8868\u793a\u6570\u636e\u7248\u672c\u3002",(0,i.yg)("inlineCode",{parentName:"p"},"OVERLAPPING")," \u548c ",(0,i.yg)("inlineCode",{parentName:"p"},"NONOVERLAPPING")," \u8868\u793a segment \u6570\u636e\u662f\u5426\u91cd\u53e0\u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"missing_rowsets: \u7f3a\u5931\u7684\u7248\u672c\u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"stale version path\uff1a\u8be5 table \u5f53\u524d\u88ab\u5408\u5e76 rowset \u96c6\u5408\u7684\u5408\u5e76\u7248\u672c\u8def\u5f84\uff0c\u8be5\u7ed3\u6784\u662f\u4e00\u4e2a\u6570\u7ec4\u7ed3\u6784\uff0c\u6bcf\u4e2a\u5143\u7d20\u8868\u793a\u4e00\u4e2a\u5408\u5e76\u8def\u5f84\u3002\u6bcf\u4e2a\u5143\u7d20\u4e2d\u5305\u542b\u4e86\u4e09\u4e2a\u5c5e\u6027\uff1apath id \u8868\u793a\u7248\u672c\u8def\u5f84 id\uff0clast create time \u8868\u793a\u5f53\u524d\u8def\u5f84\u4e0a\u6700\u8fd1\u7684 rowset \u521b\u5efa\u65f6\u95f4\uff0c\u9ed8\u8ba4\u5728\u8fd9\u4e2a\u65f6\u95f4\u534a\u4e2a\u5c0f\u65f6\u4e4b\u540e\u8fd9\u6761\u8def\u5f84\u4e0a\u7684\u6240\u6709 rowset \u4f1a\u88ab\u8fc7\u671f\u5220\u9664\u3002"))),(0,i.yg)("h2",{id:"examples"},"Examples"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"curl http://192.168.10.24:8040/api/compaction/show?tablet_id=10015\n")))}u.isMDXComponent=!0}}]);