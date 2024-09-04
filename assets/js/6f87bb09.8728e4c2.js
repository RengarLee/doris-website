"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[703613],{15680:(e,a,r)=>{r.d(a,{xA:()=>y,yg:()=>u});var n=r(296540);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function m(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=n.createContext({}),s=function(e){var a=n.useContext(i),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},y=function(e){var a=s(e.components);return n.createElement(i.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,y=m(e,["components","mdxType","originalType","parentName"]),d=s(r),p=t,u=d["".concat(i,".").concat(p)]||d[p]||c[p]||o;return r?n.createElement(u,l(l({ref:a},y),{},{components:r})):n.createElement(u,l({ref:a},y))}));function u(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=r.length,l=new Array(o);l[0]=p;var m={};for(var i in a)hasOwnProperty.call(a,i)&&(m[i]=a[i]);m.originalType=e,m[d]="string"==typeof e?e:t,l[1]=m;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},399686:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>s});var n=r(58168),t=(r(296540),r(15680));const o={title:"Load Memory Analysis",language:"zh-CN"},l=void 0,m={unversionedId:"admin-manual/memory-management/memory-analysis/load-memory-analysis",id:"version-2.1/admin-manual/memory-management/memory-analysis/load-memory-analysis",title:"Load Memory Analysis",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/admin-manual/memory-management/memory-analysis/load-memory-analysis.md",sourceDirName:"admin-manual/memory-management/memory-analysis",slug:"/admin-manual/memory-management/memory-analysis/load-memory-analysis",permalink:"/docs/2.1/admin-manual/memory-management/memory-analysis/load-memory-analysis",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Load Memory Analysis",language:"zh-CN"},sidebar:"docs",previous:{title:"Query Memory Analysis",permalink:"/docs/2.1/admin-manual/memory-management/memory-analysis/query-memory-analysis"},next:{title:"Query error Process Memory Not Enough",permalink:"/docs/2.1/admin-manual/memory-management/memory-analysis/query-cancelled-after-process-memory-exceeded"}},i={},s=[{value:"Load memory view",id:"load-memory-view",level:2},{value:"Load Memory Analysis",id:"load-memory-analysis",level:2}],y={toc:s},d="wrapper";function c(e){let{components:a,...r}=e;return(0,t.yg)(d,(0,n.A)({},y,r,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Doris data load is divided into two stages: fragment reading and channel writing. The execution logic of fragment and query fragment is the same, but Stream Load usually has only Scan Operator. Channel mainly writes data to the temporary data structure Memtable, and then Delta Writer compresses the data and writes it to the file."),(0,t.yg)("h2",{id:"load-memory-view"},"Load memory view"),(0,t.yg)("p",null,"If you see a large value of ",(0,t.yg)("inlineCode",{parentName:"p"},"Label=load, Type=overview")," Memory Tracker anywhere, it means that the load memory is used a lot."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"MemTrackerLimiter Label=load, Type=overview, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n")),(0,t.yg)("p",null,"The memory load by Doris is divided into two parts. The first part is the memory used by fragment execution, and the second part is the memory used in the construction and flushing process of MemTable."),(0,t.yg)("p",null,"The Memory Tracker with ",(0,t.yg)("inlineCode",{parentName:"p"},"Label=AllMemTableMemory, Parent Label=DetailsTrackerSet")," found in the BE web page ",(0,t.yg)("inlineCode",{parentName:"p"},"http://{be_host}:{be_web_server_port}/mem_tracker?type=global")," is the memory used by all load tasks to construct and flush ",(0,t.yg)("inlineCode",{parentName:"p"},"MemTable")," on this BE node. When the error process memory exceeds the limit or the available memory is insufficient, this Memory Tracker can also be found in the ",(0,t.yg)("inlineCode",{parentName:"p"},"Memory Tracker Summary")," in the ",(0,t.yg)("inlineCode",{parentName:"p"},"be.INFO")," log."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"MemTracker Label=AllMemTableMemory, Parent Label=DetailsTrackerSet, Used=25.08 MB(26303456 B), Peak=25.08 MB(26303456 B)\n")),(0,t.yg)("h2",{id:"load-memory-analysis"},"Load Memory Analysis"),(0,t.yg)("p",null,"If the value of `",(0,t.yg)("inlineCode",{parentName:"p"},"Label=AllMemTableMemory")," is small, the main memory used by the load task is the execution fragment. The analysis method is the same as ",(0,t.yg)("a",{parentName:"p",href:"/docs/2.1/admin-manual/memory-management/memory-analysis/query-memory-analysis"},"Query Memory Analysis"),", so it will not be repeated here."),(0,t.yg)("p",null,"If the value of ",(0,t.yg)("inlineCode",{parentName:"p"},"Label=AllMemTableMemory")," is large, MemTable may not be flushed in time. You can consider reducing the values \u200b\u200bof ",(0,t.yg)("inlineCode",{parentName:"p"},"load_process_max_memory_limit_percent")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"load_process_soft_mem_limit_percent")," in ",(0,t.yg)("inlineCode",{parentName:"p"},"be.conf"),". This can make MemTable flush more frequently, so that fewer MemTables are cached in memory, but the number of files written will increase. If too many small files are written, the pressure of compaction will increase. If compaction is not timely, the metadata memory will increase, the query will slow down, and even the load will report an error after the number of files exceeds the limit."),(0,t.yg)("p",null,"During the load execution process, check the BE web page ",(0,t.yg)("inlineCode",{parentName:"p"},"/mem_tracker?type=load"),". According to the values \u200b\u200bof the two groups of memory trackers ",(0,t.yg)("inlineCode",{parentName:"p"},"Label=MemTableManualInsert")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"Label=MemTableHookFlush"),", you can locate ",(0,t.yg)("inlineCode",{parentName:"p"},"LoadID")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"TabletID")," with large ",(0,t.yg)("inlineCode",{parentName:"p"},"MemTable")," memory usage."))}c.isMDXComponent=!0}}]);