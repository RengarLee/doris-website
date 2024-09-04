"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[706717],{15680:(e,r,a)=>{a.d(r,{xA:()=>c,yg:()=>h});var o=a(296540);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function n(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?n(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,o,t=function(e,r){if(null==e)return{};var a,o,t={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var m=o.createContext({}),l=function(e){var r=o.useContext(m),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},c=function(e){var r=l(e.components);return o.createElement(m.Provider,{value:r},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var a=e.components,t=e.mdxType,n=e.originalType,m=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=l(a),d=t,h=y["".concat(m,".").concat(d)]||y[d]||u[d]||n;return a?o.createElement(h,i(i({ref:r},c),{},{components:a})):o.createElement(h,i({ref:r},c))}));function h(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var n=a.length,i=new Array(n);i[0]=d;var s={};for(var m in r)hasOwnProperty.call(r,m)&&(s[m]=r[m]);s.originalType=e,s[y]="string"==typeof e?e:t,i[1]=s;for(var l=2;l<n;l++)i[l]=a[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},22835:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=a(58168),t=(a(296540),a(15680));const n={title:"Memory Tracker",language:"zh-CN"},i=void 0,s={unversionedId:"admin-manual/memory-management/memory-feature/memory-tracker",id:"version-2.1/admin-manual/memory-management/memory-feature/memory-tracker",title:"Memory Tracker",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/admin-manual/memory-management/memory-feature/memory-tracker.md",sourceDirName:"admin-manual/memory-management/memory-feature",slug:"/admin-manual/memory-management/memory-feature/memory-tracker",permalink:"/docs/2.1/admin-manual/memory-management/memory-feature/memory-tracker",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Memory Tracker",language:"zh-CN"},sidebar:"docs",previous:{title:"Heap Profile Memory Analysis",permalink:"/docs/2.1/admin-manual/memory-management/memory-analysis/heap-profile-memory-analysis"},next:{title:"Memory Control Strategy",permalink:"/docs/2.1/admin-manual/memory-management/memory-feature/memory-control-strategy"}},m={},l=[{value:"Memory Tracking Principle",id:"memory-tracking-principle",level:2},{value:"Memory Tracker Structure",id:"memory-tracker-structure",level:2},{value:"Memory Tracker Statistics Missing",id:"memory-tracker-statistics-missing",level:2},{value:"Memory Tracker Statistics Missing Phenomenon",id:"memory-tracker-statistics-missing-phenomenon",level:3},{value:"Memory Tracker Statistics Missing Analysis",id:"memory-tracker-statistics-missing-analysis",level:3},{value:"Reasons for missing Memory Tracker statistics",id:"reasons-for-missing-memory-tracker-statistics",level:3},{value:"Doris 2.1 and later",id:"doris-21-and-later",level:4},{value:"Before Doris 2.1",id:"before-doris-21",level:4}],c={toc:l},y="wrapper";function u(e){let{components:r,...n}=e;return(0,t.yg)(y,(0,o.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Doris BE uses Memory Tracker to record process memory usage, including memory used in the life cycle of tasks such as query, load, compaction, schema change, and various caches. It supports real-time viewing of web pages and prints them to BE logs when memory-related errors are reported, which is used for memory analysis and troubleshooting of memory problems."),(0,t.yg)("p",null,"The viewing methods of Memory Tracker, the reasons for excessive memory usage represented by different Memory Trackers, and the analysis methods for reducing their memory usage have been introduced in ",(0,t.yg)("a",{parentName:"p",href:"/docs/2.1/admin-manual/memory-management/overview"},"Overview")," in conjunction with the Doris BE memory structure. This article only introduces the principles, structure, and some common problems of Memory Tracker."),(0,t.yg)("h2",{id:"memory-tracking-principle"},"Memory Tracking Principle"),(0,t.yg)("p",null,"Memory Tracker relies on Doris Allocator to track each application and release of memory. For an introduction to Doris Allocator, refer to ",(0,t.yg)("a",{parentName:"p",href:"/docs/2.1/admin-manual/memory-management/memory-feature/memory-control-strategy"},"Memory Control Strategy"),"."),(0,t.yg)("p",null,"Process memory: Doris BE will periodically obtain Doris BE process memory from the system and is compatible with Cgroup."),(0,t.yg)("p",null,"Task memory: Each query, load, compaction and other tasks will create its own unique Memory Tracker when initialized, and put the Memory Tracker into TLS (Thread Local Storage) during execution. Doris's main memory data structures are inherited from Allocator. Allocator will record each application and release of memory in TLS's Memory Tracker."),(0,t.yg)("p",null,"Operator memory: Different execution operators of tasks will also create their own Memory Trakcer, such as Join/Agg/Sink, etc., which support manual memory tracking or put it into TLS and recorded by ",(0,t.yg)("inlineCode",{parentName:"p"},"Doris Allocator")," for execution logic control and analysis of memory usage of different operators in Query Profile."),(0,t.yg)("p",null,"Global memory: Global memory mainly includes Cache and metadata, which are shared between different tasks. Each Cache has its own unique Memory Tracker, which is tracked by ",(0,t.yg)("inlineCode",{parentName:"p"},"Doris Allocator")," or manually; metadata memory is not fully counted at present, and more analysis depends on various metadata Counters counted by Metrics and Bvar."),(0,t.yg)("p",null,"Among them, the Doris BE process memory is taken from the operating system and can be considered completely accurate. Due to implementation limitations, the memory tracked by other Memory Trackers is usually only a subset of the real memory, resulting in the sum of all Memory Trackers being less than the physical memory of the Doris BE process in most cases. There are certain omissions, but the memory recorded by Memory Tracker is more reliable in most cases and can be used for memory analysis with confidence. In addition, Memory Tracker actually tracks virtual memory, not the physical memory that is usually more concerned, and there are certain errors between them."),(0,t.yg)("h2",{id:"memory-tracker-structure"},"Memory Tracker Structure"),(0,t.yg)("p",null,"Based on the usage, Memory Tracker is divided into two categories. The first category, Memory Tracker Limiter, is unique in each query, load, Compaction and other tasks and global Cache, TabletMeta, and is used to observe and control memory usage; the second category, Memory Tracker, is mainly used to track memory hotspots during query execution, such as HashTable in Join/Aggregation/Sort/window functions, serialized intermediate data, etc., to analyze the memory usage of different operators in the query, and for memory control of load data flushing."),(0,t.yg)("p",null,"The parent-child relationship between the two is only used for snapshot printing, and is associated with the label name, which is equivalent to a soft link. It does not rely on the parent-child relationship for simultaneous consumption, and the life cycle does not affect each other, reducing the cost of understanding and use. All memory trackers are stored in a set of maps, and provide methods such as printing snapshots of all memory tracker types, printing snapshots of tasks such as query/load/compaction, obtaining the group of queries/loads that currently use the most memory, and obtaining the group of queries/loads that currently use the most excessive memory."),(0,t.yg)("p",null,(0,t.yg)("img",{alt:"Memory Tracker Implement",src:a(217954).A,width:"1080",height:"897"})),(0,t.yg)("h2",{id:"memory-tracker-statistics-missing"},"Memory Tracker Statistics Missing"),(0,t.yg)("p",null,"The phenomenon of Memory Tracker Statistics Missing is different in versions before and after Doris 2.1."),(0,t.yg)("h3",{id:"memory-tracker-statistics-missing-phenomenon"},"Memory Tracker Statistics Missing Phenomenon"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"There are two phenomena of Memory Tracker Statistics Missing after Doris 2.1.")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"The difference between ",(0,t.yg)("inlineCode",{parentName:"p"},"Label=process resident memory")," Memory Tracker and ",(0,t.yg)("inlineCode",{parentName:"p"},"Label=sum of all trackers")," Memory Tracker is too large.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"The value of Orphan Memory Tracker is too large."))),(0,t.yg)("ol",{start:2},(0,t.yg)("li",{parentName:"ol"},"Before Doris 2.1, the value of Orphan Memory Tracker is too large, which means that the Memory Tracker statistics are missing.")),(0,t.yg)("h3",{id:"memory-tracker-statistics-missing-analysis"},"Memory Tracker Statistics Missing Analysis"),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"In versions prior to Doris 2.1.5, if Memory Tracker statistics are missing or BE process memory does not decrease, please refer to ",(0,t.yg)("a",{parentName:"p",href:"/docs/2.1/admin-manual/memory-management/memory-analysis/doris-cache-memory-analysis"},"Cache Memory Analysis")," to analyze SegmentCache memory usage, and try to close Segment Cache before continuing the test.")),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"In versions prior to Doris 2.1.5, Segment Cache Memory Tacker is inaccurate. This is because some Index memory statistics, including Primary Key Index, are inaccurate, resulting in Segment Cache memory not being effectively limited, often occupying too much memory, especially in large wide tables with hundreds or thousands of columns. Refer to ",(0,t.yg)("a",{parentName:"p",href:"/docs/2.1/admin-manual/memory-management/memory-analysis/metadata-memory-analysis"},"Metadata Memory Analysis")," If you find that ",(0,t.yg)("inlineCode",{parentName:"p"},'doris_be_cache_usage{name="SegmentCache"}')," in Doris BE Metrics is not large, but ",(0,t.yg)("inlineCode",{parentName:"p"},"doris_column_reader_num")," in Doris BE Bvar is large, you need to suspect the memory usage of Segment Cache. If you see ",(0,t.yg)("inlineCode",{parentName:"p"},"Segment")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"ColumnReader")," fields in the call stack with a large memory usage in Heap Profile, it can be basically confirmed that Segment Cache occupies a large amount of memory.")),(0,t.yg)("p",null,"If the above phenomenon is observed, if the cluster can be easily restarted and the phenomenon can be reproduced, refer to ",(0,t.yg)("a",{parentName:"p",href:"/docs/2.1/admin-manual/memory-management/memory-analysis/heap-profile-memory-analysis"},"Heap Profile Memory Analysis")," to use Jemalloc Heap Profile to analyze process memory."),(0,t.yg)("p",null,"Otherwise, you can first refer to ",(0,t.yg)("a",{parentName:"p",href:"/docs/2.1/admin-manual/memory-management/memory-analysis/metadata-memory-analysis"},"Metadata Memory Analysis")," to analyze the metadata memory of Doris BE."),(0,t.yg)("h3",{id:"reasons-for-missing-memory-tracker-statistics"},"Reasons for missing Memory Tracker statistics"),(0,t.yg)("p",null,"The following introduces the reasons for missing Memory Tracker statistics, which involve the implementation of Memory Tracker and usually do not need to be paid attention to."),(0,t.yg)("h4",{id:"doris-21-and-later"},"Doris 2.1 and later"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"The difference between ",(0,t.yg)("inlineCode",{parentName:"li"},"Label=process resident memory")," Memory Tracker and ",(0,t.yg)("inlineCode",{parentName:"li"},"Label=sum of all trackers")," Memory Tracker is too large.")),(0,t.yg)("p",null,"If the value of ",(0,t.yg)("inlineCode",{parentName:"p"},"Label=sum of all trackers")," Memory Tracker accounts for more than 70% of ",(0,t.yg)("inlineCode",{parentName:"p"},"Label=process resident memory")," Memory Tracker, it usually means that Memory Tracker has counted most of the memory of the Doris BE process, and usually only needs to analyze Memory Tracker to locate the memory location."),(0,t.yg)("p",null,"If the value of ",(0,t.yg)("inlineCode",{parentName:"p"},"Label=sum of all trackers")," Memory Tracker accounts for less than 70% of ",(0,t.yg)("inlineCode",{parentName:"p"},"Label=process resident memory")," Memory Tracker, it means that Memory Tracker statistics are missing, and Memory Tracker may not be able to accurately locate the memory location."),(0,t.yg)("p",null,"The difference between ",(0,t.yg)("inlineCode",{parentName:"p"},"Label=process resident memory")," Memory Tracker and ",(0,t.yg)("inlineCode",{parentName:"p"},"Label=sum of all trackers")," Memory Tracker is the memory not allocated by ",(0,t.yg)("inlineCode",{parentName:"p"},"Doris Allocator"),". The main memory data structures of Doris are inherited from ",(0,t.yg)("inlineCode",{parentName:"p"},"Doris Allocator"),", but there is still a part of memory not allocated by ",(0,t.yg)("inlineCode",{parentName:"p"},"Doris Allocator"),", including metadata memory, RPC memory, etc., which may also be a memory leak. In this case, in addition to analyzing the Memory Tracker with a large memory value, it is usually necessary to pay attention to whether the metadata memory is reasonable and whether there is a memory leak."),(0,t.yg)("ol",{start:2},(0,t.yg)("li",{parentName:"ol"},"Orphan Memory Tracker value is too large")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"MemTrackerLimiter Label=Orphan, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n")),(0,t.yg)("p",null,"Orphan Memory Tracker is the default Memory Tracker. Positive or negative values \u200b\u200bmean that the memory allocated by Doris Allocator is not accurately tracked. The larger the value, the lower the credibility of the overall statistical results of Memory Tracker. Its statistical value comes from two sources:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"If the Memory Tracker is not bound to TLS when the thread starts, Doris Allocator will record the memory to Orphan Memory Tracker by default, which means that this part of the memory is unknown. For the principle of Doris Allocator recording memory, please refer to the above ","[Memory Tracking Principle]",".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"If the value of the Memory Tracker of a task such as Query or Load is not equal to 0 when it is destroyed, it usually means that this part of the memory has not been released. The remaining memory will be recorded in the Orphan Memory Tracker, which is equivalent to letting the remaining memory continue to be tracked by the Orphan Memory Tracker. This ensures that the sum of the Orphan Memory Tracker and other Memory Trackers is equal to all the memory allocated by Doris Allocator."))),(0,t.yg)("p",null,"Ideally, the value of the Orphan Memory Tracker is expected to be close to 0. So we hope that all threads will attach a Memory Tracker other than Orphan at the beginning, such as Query or Load Memory Tracker. And all Query or Load Memory Trackers are equal to 0 when they are destroyed, which means that the memory used during the execution of Query or Load has been released when it is destroyed."),(0,t.yg)("p",null,"If the Orphan Memory Tracker is not equal to 0 and has a large value, it means that a large amount of unknown memory has not been released, or a large amount of memory has not been released after the query and load are executed."),(0,t.yg)("h4",{id:"before-doris-21"},"Before Doris 2.1"),(0,t.yg)("p",null,"Before Doris 2.1, all unknown memory was counted in the ",(0,t.yg)("inlineCode",{parentName:"p"},"Label=Orphan")," Memory Tracker, so a large value of the Orphan Memory Tracker means that the Memory Tracker statistics are missing."))}u.isMDXComponent=!0},217954:(e,r,a)=>{a.d(r,{A:()=>o});const o=a.p+"assets/images/memory-tracker-implement-5c548eff5415a15a098dfd931e60a99f.png"}}]);