"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[89507],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>g});var a=r(296540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function m(e,n){if(null==e)return{};var r,a,i=function(e,n){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var t=a.createContext({}),y=function(e){var n=a.useContext(t),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=y(e.components);return a.createElement(t.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,t=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),s=y(r),d=i,g=s["".concat(t,".").concat(d)]||s[d]||u[d]||o;return r?a.createElement(g,l(l({ref:n},p),{},{components:r})):a.createElement(g,l({ref:n},p))}));function g(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=d;var m={};for(var t in n)hasOwnProperty.call(n,t)&&(m[t]=n[t]);m.originalType=e,m[s]="string"==typeof e?e:i,l[1]=m;for(var y=2;y<o;y++)l[y]=r[y];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},204657:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>m,toc:()=>y});var a=r(58168),i=(r(296540),r(15680));const o={title:"\u67e5\u8be2\u5185\u5b58\u5206\u6790",language:"zh-CN"},l=void 0,m={unversionedId:"admin-manual/memory-management/memory-analysis/query-memory-analysis",id:"version-2.1/admin-manual/memory-management/memory-analysis/query-memory-analysis",title:"\u67e5\u8be2\u5185\u5b58\u5206\u6790",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/memory-management/memory-analysis/query-memory-analysis.md",sourceDirName:"admin-manual/memory-management/memory-analysis",slug:"/admin-manual/memory-management/memory-analysis/query-memory-analysis",permalink:"/zh-CN/docs/2.1/admin-manual/memory-management/memory-analysis/query-memory-analysis",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u67e5\u8be2\u5185\u5b58\u5206\u6790",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5143\u6570\u636e\u5185\u5b58\u5206\u6790",permalink:"/zh-CN/docs/2.1/admin-manual/memory-management/memory-analysis/metadata-memory-analysis"},next:{title:"\u5bfc\u5165\u5185\u5b58\u5206\u6790",permalink:"/zh-CN/docs/2.1/admin-manual/memory-management/memory-analysis/load-memory-analysis"}},t={},y=[{value:"\u67e5\u8be2\u5185\u5b58\u67e5\u770b",id:"\u67e5\u8be2\u5185\u5b58\u67e5\u770b",level:2},{value:"\u4f7f\u7528 Query Profile \u5206\u6790\u67e5\u8be2\u5185\u5b58\u4f7f\u7528",id:"\u4f7f\u7528-query-profile-\u5206\u6790\u67e5\u8be2\u5185\u5b58\u4f7f\u7528",level:2},{value:"\u4f7f\u7528 Heap Profile \u5206\u6790\u67e5\u8be2\u5185\u5b58\u4f7f\u7528",id:"\u4f7f\u7528-heap-profile-\u5206\u6790\u67e5\u8be2\u5185\u5b58\u4f7f\u7528",level:2}],p={toc:y},s="wrapper";function u(e){let{components:n,...r}=e;return(0,i.yg)(s,(0,a.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"\u901a\u5e38\u5148\u4f7f\u7528 Query Profile \u5206\u6790\u67e5\u8be2\u5185\u5b58\u4f7f\u7528\uff0c\u5982\u679c Query Profile \u4e2d\u7edf\u8ba1\u7684\u5404\u4e2a\u7b97\u5b50\uff08Operator\uff09\u5185\u5b58\u4e4b\u548c\u8fdc\u5c0f\u4e8e Query Memory Trcker \u7edf\u8ba1\u5230\u7684\u5185\u5b58\uff0c\u8bf4\u660e Query Profile \u7edf\u8ba1\u5230\u7684\u7b97\u5b50\u5185\u5b58\u4e0e\u5b9e\u9645\u4f7f\u7528\u7684\u5185\u5b58\u76f8\u5dee\u8f83\u5927\uff0c\u90a3\u4e48\u5f80\u5f80\u8fd8\u9700\u8981\u4f7f\u7528 Heap Profile \u8fdb\u4e00\u6b65\u5206\u6790\u3002\u5982\u679c Query \u56e0\u4e3a\u5185\u5b58\u8d85\u9650\u88ab Cancel\uff0c\u65e0\u6cd5\u6267\u884c\u5b8c\u6210\uff0c\u6b64\u65f6 Query Profile \u4e0d\u5b8c\u6574\uff0c\u53ef\u80fd\u65e0\u6cd5\u51c6\u786e\u5206\u6790\uff0c\u901a\u5e38\u76f4\u63a5\u4f7f\u7528 Heap Profile \u5206\u6790 Query \u5185\u5b58\u4f7f\u7528\u3002"),(0,i.yg)("h2",{id:"\u67e5\u8be2\u5185\u5b58\u67e5\u770b"},"\u67e5\u8be2\u5185\u5b58\u67e5\u770b"),(0,i.yg)("p",null,"\u5982\u679c\u4efb\u4f55\u5730\u65b9\u770b\u5230 ",(0,i.yg)("inlineCode",{parentName:"p"},"Label=query, Type=overview")," Memory Tracker \u7684\u503c\u8f83\u5927\uff0c\u8bf4\u660e\u67e5\u8be2\u5185\u5b58\u4f7f\u7528\u591a\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"MemTrackerLimiter Label=query, Type=overview, Limit=-1.00 B(-1 B), Used=83.32 MB(87369024 B), Peak=88.33 MB(92616000 B)\n")),(0,i.yg)("p",null,"\u5982\u679c\u4f60\u5df2\u77e5\u8981\u5206\u6790\u7684\u67e5\u8be2\uff0c\u90a3\u4e48\u8df3\u8fc7\u672c\u8282\u7ee7\u7eed\u540e\u9762\u7684\u5206\u6790\uff0c\u5426\u5219\u53ef\u4ee5\u53c2\u8003\u4e0b\u9762\u7684\u65b9\u6cd5\u5b9a\u4f4d\u5927\u5185\u5b58\u67e5\u8be2\u3002"),(0,i.yg)("p",null,"\u9996\u5148\u5b9a\u4f4d\u5927\u5185\u5b58\u67e5\u8be2\u7684 QueryID\uff0c\u5728 BE web \u9875\u9762 ",(0,i.yg)("inlineCode",{parentName:"p"},"http://{be_host}:{be_web_server_port}/mem_tracker?type=query")," \u4e2d\u6309\u7167 ",(0,i.yg)("inlineCode",{parentName:"p"},"Current Consumption")," \u6392\u5e8f\u53ef\u4ee5\u770b\u5230\u5b9e\u65f6\u7684\u5927\u5185\u5b58\u67e5\u8be2\uff0c\u5728 ",(0,i.yg)("inlineCode",{parentName:"p"},"label")," \u4e2d\u53ef\u4ee5\u627e\u5230 QueryID\u3002"),(0,i.yg)("p",null,"\u5f53\u62a5\u9519\u8fdb\u7a0b\u5185\u5b58\u8d85\u9650\u6216\u53ef\u7528\u5185\u5b58\u4e0d\u8db3\u65f6\uff0c\u5728 ",(0,i.yg)("inlineCode",{parentName:"p"},"be.INFO")," \u65e5\u5fd7\u4e2d ",(0,i.yg)("inlineCode",{parentName:"p"},"Memory Tracker Summary")," \u4e0b\u534a\u90e8\u5206\u5305\u542b\u5185\u5b58\u4f7f\u7528 TOP 10 \u7684\u4efb\u52a1\uff08\u67e5\u8be2/\u5bfc\u5165/Compaction\u7b49\uff09\u7684 Memory Tracker\uff0c\u683c\u5f0f\u4e3a ",(0,i.yg)("inlineCode",{parentName:"p"},"MemTrackerLimiter Label=Query#Id=xxx, Type=query"),"\uff0c\u901a\u5e38\u5728 TOP 10 \u7684\u4efb\u52a1\u4e2d\u5c31\u80fd\u5b9a\u4f4d\u5230\u5927\u5185\u5b58\u67e5\u8be2\u7684 QueryID\u3002"),(0,i.yg)("p",null,"\u5386\u53f2\u67e5\u8be2\u7684\u5185\u5b58\u7edf\u8ba1\u7ed3\u679c\u53ef\u4ee5\u67e5\u770b",(0,i.yg)("inlineCode",{parentName:"p"},"fe/log/fe.audit.log"),"\u4e2d\u6bcf\u4e2a\u67e5\u8be2\u7684",(0,i.yg)("inlineCode",{parentName:"p"},"peakMemoryBytes"),"\uff0c\u6216\u8005\u5728",(0,i.yg)("inlineCode",{parentName:"p"},"be/log/be.INFO"),"\u4e2d\u641c\u7d22",(0,i.yg)("inlineCode",{parentName:"p"},"Deregister query/load memory tracker, queryId"),"\u67e5\u770b\u5355\u4e2aBE\u4e0a\u6bcf\u4e2a\u67e5\u8be2\u7684\u5185\u5b58\u5cf0\u503c\u3002"),(0,i.yg)("h2",{id:"\u4f7f\u7528-query-profile-\u5206\u6790\u67e5\u8be2\u5185\u5b58\u4f7f\u7528"},"\u4f7f\u7528 Query Profile \u5206\u6790\u67e5\u8be2\u5185\u5b58\u4f7f\u7528"),(0,i.yg)("p",null,"\u4f9d\u636e QueryID \u5728 ",(0,i.yg)("inlineCode",{parentName:"p"},"fe/log/fe.audit.log")," \u4e2d\u627e\u5230\u5305\u62ec SQL \u5728\u5185\u7684\u67e5\u8be2\u4fe1\u606f\uff0c",(0,i.yg)("inlineCode",{parentName:"p"},"explain SQL")," \u5f97\u5230\u67e5\u8be2\u8ba1\u5212\uff0c",(0,i.yg)("inlineCode",{parentName:"p"},"set enable_profile=true"),"\u540e\u6267\u884c SQL \u5f97\u5230\u67e5\u8be2\u7684 Query Profile\uff0c\u6709\u5173 Query Profile \u7684\u8be6\u7ec6\u4ecb\u7ecd\u53c2\u8003\u6587\u6863 ",(0,i.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.1/query/query-analysis/query-profile"},"Query Profile"),"\uff0c\u8fd9\u91cc\u53ea\u4ecb\u7ecd Query Profile \u4e2d\u5185\u5b58\u76f8\u5173\u7684\u5185\u5bb9\uff0c\u5e76\u636e\u6b64\u5b9a\u4f4d\u4f7f\u7528\u5927\u91cf\u5185\u5b58\u7684 Operator \u548c\u6570\u636e\u7ed3\u6784\u3002"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"\u5b9a\u4f4d\u4f7f\u7528\u5927\u91cf\u5185\u5b58\u7684 Operator \u6216\u5185\u5b58\u6570\u636e\u7ed3\u6784")),(0,i.yg)("p",null,"Query Profile \u5206\u4e3a\u4e24\u90e8\u5206:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"MergedProfile")," ")),(0,i.yg)("p",null,"MergedProfile \u662f Query \u6240\u6709 Instance Profile \u7684\u805a\u5408\u7ed3\u679c\uff0c\u5176\u4e2d\u80fd\u770b\u5230\u6bcf\u4e2a Fragment \u7684\u6bcf\u4e2a Pipeline \u7684\u6bcf\u4e2a Operator(\u7b97\u5b50) \u5728\u6240\u6709 Instance \u4e0a\u5185\u5b58\u4f7f\u7528\u7684 sum\u3001avg\u3001max\u3001min\uff0c\u5305\u62ec Operator \u7684\u5cf0\u503c\u5185\u5b58 ",(0,i.yg)("inlineCode",{parentName:"p"},"PeakMemoryUsage")," \u4ee5\u53ca ",(0,i.yg)("inlineCode",{parentName:"p"},"HashTable"),"\u3001",(0,i.yg)("inlineCode",{parentName:"p"},"Arena")," \u7b49\u4e3b\u8981\u5185\u5b58\u6570\u636e\u7ed3\u6784\u7684\u5cf0\u503c\u5185\u5b58\uff0c\u636e\u6b64\u5b9a\u4f4d\u5230\u4f7f\u7528\u4e86\u5927\u91cf\u5185\u5b58\u7684 Operator \u548c \u6570\u636e\u7ed3\u6784\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"MergedProfile  \n          Fragments:\n              Fragment  0:\n                  Pipeline  :  0(instance_num=1):\n                      RESULT_SINK_OPERATOR  (id=0):\n                            -  MemoryUsage:  sum  ,  avg  ,  max  ,  min  \n                          EXCHANGE_OPERATOR  (id=20):\n                                -  MemoryUsage:  sum  ,  avg  ,  max  ,  min  \n                                    -  PeakMemoryUsage:  sum  1.16  KB,  avg  1.16  KB,  max  1.16  KB,  min  1.16  KB\n              Fragment  1:\n                  Pipeline  :  1(instance_num=12):\n                      AGGREGATION_SINK_OPERATOR  (id=18  ,  nereids_id=1532):\n                            -  MemoryUsage:  sum  ,  avg  ,  max  ,  min  \n                                -  HashTable:  sum  96.00  B,  avg  8.00  B,  max  24.00  B,  min  0.00  \n                                -  PeakMemoryUsage:  sum  1.58  MB,  avg  134.67  KB,  max  404.02  KB,  min  0.00  \n                                -  SerializeKeyArena:  sum  1.58  MB,  avg  134.67  KB,  max  404.00  KB,  min  0.00  \n                          EXCHANGE_OPERATOR  (id=17):\n                                -  MemoryUsage:  sum  ,  avg  ,  max  ,  min  \n                                    -  PeakMemoryUsage:  sum  2.25  KB,  avg  192.00  B,  max  768.00  B,  min  0.00\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Execution  Profile"))),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"Execution  Profile")," \u662f Query \u5177\u4f53\u6bcf\u4e2a Instance Profile \u7684\u7ed3\u679c\uff0c\u901a\u5e38\u4f9d\u636e ",(0,i.yg)("inlineCode",{parentName:"p"},"MergedProfile")," \u5b9a\u4f4d\u5230\u4f7f\u7528\u4e86\u5927\u91cf\u5185\u5b58\u7684 Operator \u548c\u6570\u636e\u7ed3\u6784\u540e\uff0c\u5373\u53ef\u4f9d\u636e ",(0,i.yg)("inlineCode",{parentName:"p"},"explain SQL")," \u540e\u7684\u67e5\u8be2\u8ba1\u5212\u5206\u6790\u5176\u5185\u5b58\u4f7f\u7528\u7684\u539f\u56e0\uff0c\u5982\u679c\u4e00\u4e9b\u573a\u666f\u4e0b\u9700\u8981\u5206\u6790 Query \u5728\u67d0\u4e00\u4e2a BE \u7ed3\u70b9\u6216\u67d0\u4e00\u4e2a Instance \u7684\u5185\u5b58\u503c\uff0c\u53ef\u4ee5\u4f9d\u636e ",(0,i.yg)("inlineCode",{parentName:"p"},"Execution  Profile")," \u8fdb\u4e00\u6b65\u5b9a\u4f4d\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"Execution  Profile  36ca4f8b97834449-acae910fbee8c670:(ExecTime:  48sec201ms)\n    Fragments:\n        Fragment  0:\n            Fragment  Level  Profile:    (host=TNetworkAddress(hostname:10.16.10.8,  port:9013)):(ExecTime:  48sec111ms)\n            Pipeline  :1    (host=TNetworkAddress(hostname:10.16.10.8,  port:9013)):\n                PipelineTask  (index=80):(ExecTime:  6sec267ms)\n                DATA_STREAM_SINK_OPERATOR  (id=17,dst_id=17):(ExecTime:  1.634ms)\n                -  MemoryUsage:  \n                    -  PeakMemoryUsage:  1.50  KB\n                STREAMING_AGGREGATION_OPERATOR  (id=16  ,  nereids_id=1526):(ExecTime:  41.269ms)\n                    -  MemoryUsage:  \n                        -  HashTable:  168.00  B\n                        -  PeakMemoryUsage:  404.16  KB\n                        -  SerializeKeyArena:  404.00  KB\n                HASH_JOIN_OPERATOR  (id=15  ,  nereids_id=1520):(ExecTime:  6sec150ms)\n                        -  MemoryUsage:  \n                            -  PeakMemoryUsage:  3.22  KB\n                            -  ProbeKeyArena:  3.22  KB\n                    LOCAL_EXCHANGE_OPERATOR  (PASSTHROUGH)  (id=-12):(ExecTime:  67.950ms)\n                            -  MemoryUsage:  \n                                -  PeakMemoryUsage:  1.41  MB\n")),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"HASH_JOIN_SINK_OPERATOR")," \u5185\u5b58\u5360\u7528\u591a")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"HASH_JOIN_SINK_OPERATOR  (id=12  ,  nereids_id=1304):(ExecTime:  1min14sec)\n    -  JoinType:  INNER_JOIN\n    -  BroadcastJoin:  true\n    -  BuildRows:  600.030257M  (600030257)\n    -  InputRows:  600.030256M  (600030256)\n    -  MemoryUsage:  \n        -  BuildBlocks:  15.65  GB\n        -  BuildKeyArena:  0.00  \n        -  HashTable:  6.24  GB\n        -  PeakMemoryUsage:  21.89 GB\n")),(0,i.yg)("p",null,"\u53ef\u89c1\u4e3b\u8981\u4f7f\u7528\u5185\u5b58\u7684 Hash Join Build \u9636\u6bb5\u7684 ",(0,i.yg)("inlineCode",{parentName:"p"},"BuildBlocks")," \u548c ",(0,i.yg)("inlineCode",{parentName:"p"},"HashTable"),"\uff0c\u901a\u5e38 Hash Join \u7684 Build \u9636\u6bb5\u4f7f\u7528\u5185\u5b58\u592a\u591a\uff0c\u9996\u5148\u786e\u8ba4 Join Reorder \u987a\u5e8f\u662f\u5426\u5408\u7406\uff0c\u901a\u5e38\u6b63\u786e\u7684\u987a\u5e8f\u662f\u5c0f\u8868\u7528\u4e8e Hash Join Build\uff0c\u5927\u8868\u7528\u4e8e Hash Join Probe\uff0c\u8fd9\u6837\u53ef\u4ee5\u6700\u5c0f\u5316 Hash Join \u6574\u4f53\u7684\u5185\u5b58\u4f7f\u7528\uff0c\u5e76\u901a\u5e38\u5177\u6709\u66f4\u597d\u7684\u6027\u80fd\u3002"),(0,i.yg)("p",null,"\u4e3a\u4e86\u786e\u8ba4 Join Reorder \u987a\u5e8f\u662f\u5426\u5408\u7406\uff0c\u6211\u4eec\u627e\u5230 id=12 \u7684 ",(0,i.yg)("inlineCode",{parentName:"p"},"HASH_JOIN_OPERATOR")," \u7684 profile\uff0c\u53ef\u4ee5\u770b\u5230 ",(0,i.yg)("inlineCode",{parentName:"p"},"ProbeRows")," \u53ea\u6709 196240 \u884c\uff0c\u6240\u4ee5\u8fd9\u4e2a Hash Join Reorder \u6b63\u786e\u7684\u987a\u5e8f\u5e94\u8be5\u4ea4\u6362\u5de6\u8868\u548c\u53f3\u8868\u7684\u4f4d\u7f6e\uff0c\u53ef\u4ee5 ",(0,i.yg)("inlineCode",{parentName:"p"},"set disable_join_reorder=true")," \u5173\u95ed Join Reorder \u5e76\u624b\u52a8\u6307\u5b9a\u5de6\u8868\u548c\u53f3\u8868\u7684\u987a\u5e8f\u540e\u6267\u884c Query \u9a8c\u8bc1\uff0c\u8fdb\u4e00\u6b65\u53ef\u53c2\u8003\u67e5\u8be2\u4f18\u5316\u5668\u4e2d Join Reorder \u76f8\u5173\u7684\u6587\u6863\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"HASH_JOIN_OPERATOR  (id=12  ,  nereids_id=1304):(ExecTime:  8sec223ms)\n    -  BlocksProduced:  227\n    -  MemoryUsage:  \n        -  PeakMemoryUsage:  0.00  \n        -  ProbeKeyArena:  0.00  \n    -  ProbeRows:  196.24K  (196240)\n    -  RowsProduced:  786.22K  (786220)\n")),(0,i.yg)("h2",{id:"\u4f7f\u7528-heap-profile-\u5206\u6790\u67e5\u8be2\u5185\u5b58\u4f7f\u7528"},"\u4f7f\u7528 Heap Profile \u5206\u6790\u67e5\u8be2\u5185\u5b58\u4f7f\u7528"),(0,i.yg)("p",null,"\u5982\u679c\u4e0a\u9762\u4f7f\u7528 Query Profile \u65e0\u6cd5\u51c6\u786e\u5b9a\u4f4d\u5185\u5b58\u7684\u4f7f\u7528\u4f4d\u7f6e\uff0c\u82e5\u96c6\u7fa4\u65b9\u4fbf\u91cd\u542f\uff0c\u5e76\u4e14\u73b0\u8c61\u53ef\u4ee5\u88ab\u590d\u73b0\uff0c\u53c2\u8003 ",(0,i.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.1/admin-manual/memory-management/memory-analysis/heap-profile-memory-analysis"},"Heap Profile \u5185\u5b58\u5206\u6790")," \u5206\u6790 Query \u5185\u5b58\u3002"),(0,i.yg)("p",null,"\u5728 Query \u6267\u884c\u524d Dump \u4e00\u6b21 Heap Profile\uff0c\u5728 Query \u6267\u884c\u8fc7\u7a0b\u4e2d\u518d Dump \u4e00\u6b21 Heap Profile\uff0c\u901a\u8fc7\u4f7f\u7528 ",(0,i.yg)("inlineCode",{parentName:"p"},"jeprof --dot lib/doris_be --base=heap_dump_file_1 heap_dump_file_2")," \u5bf9\u6bd4\u4e24\u4e2a Heap Profile \u4e4b\u95f4\u7684\u5185\u5b58\u53d8\u5316\uff0c\u53ef\u4ee5\u5f97\u51fa\u4ee3\u7801\u4e2d\u7684\u6bcf\u4e2a\u51fd\u6570\u5728 Query \u6267\u884c\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u7684\u5185\u5b58\u5360\u6bd4\uff0c\u5bf9\u7167\u4ee3\u7801\u5373\u53ef\u5b9a\u4f4d\u5185\u5b58\u4f7f\u7528\u4f4d\u7f6e\uff0c\u56e0\u4e3a Query \u6267\u884c\u8fc7\u7a0b\u4e2d\u5185\u5b58\u5b9e\u65f6\u53d8\u5316\uff0c\u6240\u4ee5\u53ef\u80fd\u9700\u8981\u5728 Query \u6267\u884c\u8fc7\u7a0b\u4e2d\u591a\u6b21 Dump Heap Profile \u5e76\u5bf9\u6bd4\u5206\u6790\u3002"))}u.isMDXComponent=!0}}]);