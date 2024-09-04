"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[450562],{15680:(e,a,n)=>{n.d(a,{xA:()=>y,yg:()=>h});var r=n(296540);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function m(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=r.createContext({}),s=function(e){var a=r.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},y=function(e){var a=s(e.components);return r.createElement(i.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,y=m(e,["components","mdxType","originalType","parentName"]),c=s(n),u=t,h=c["".concat(i,".").concat(u)]||c[u]||d[u]||o;return n?r.createElement(h,l(l({ref:a},y),{},{components:n})):r.createElement(h,l({ref:a},y))}));function h(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,l=new Array(o);l[0]=u;var m={};for(var i in a)hasOwnProperty.call(a,i)&&(m[i]=a[i]);m.originalType=e,m[c]="string"==typeof e?e:t,l[1]=m;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},150125:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>m,toc:()=>s});var r=n(58168),t=(n(296540),n(15680));const o={title:"Global Memory Analysis",language:"zh-CN"},l=void 0,m={unversionedId:"admin-manual/memory-management/memory-analysis/global-memory-analysis",id:"version-3.0/admin-manual/memory-management/memory-analysis/global-memory-analysis",title:"Global Memory Analysis",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/admin-manual/memory-management/memory-analysis/global-memory-analysis.md",sourceDirName:"admin-manual/memory-management/memory-analysis",slug:"/admin-manual/memory-management/memory-analysis/global-memory-analysis",permalink:"/docs/admin-manual/memory-management/memory-analysis/global-memory-analysis",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Global Memory Analysis",language:"zh-CN"},sidebar:"docs",previous:{title:"Jemalloc Memory Analysis",permalink:"/docs/admin-manual/memory-management/memory-analysis/jemalloc-memory-analysis"},next:{title:"Cache Memory Analysis",permalink:"/docs/admin-manual/memory-management/memory-analysis/doris-cache-memory-analysis"}},i={},s=[{value:"Global Memory View Method",id:"global-memory-view-method",level:2},{value:"Global Memory occupies a lot",id:"global-memory-occupies-a-lot",level:2},{value:"Cache analysis method",id:"cache-analysis-method",level:3},{value:"Metadata analysis method",id:"metadata-analysis-method",level:3},{value:"Orphan analysis method",id:"orphan-analysis-method",level:3}],y={toc:s},c="wrapper";function d(e){let{components:a,...n}=e;return(0,t.yg)(c,(0,r.A)({},y,n,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"GLobal Memory is Doris's globally shared memory, mainly including Cache and Metadata."),(0,t.yg)("h2",{id:"global-memory-view-method"},"Global Memory View Method"),(0,t.yg)("p",null,"The web page ",(0,t.yg)("inlineCode",{parentName:"p"},"http://{be_host}:{be_web_server_port}/mem_tracker?type=global")," displays all Memory Trackers of ",(0,t.yg)("inlineCode",{parentName:"p"},"type=global"),"."),(0,t.yg)("p",null,(0,t.yg)("img",{parentName:"p",src:"https://github.com/apache/doris/assets/13197424/e0b4a327-5bfb-4dfd-9e1e-bf58a482a456",alt:"image"})),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"- Orphan: Collects memory that does not know where it belongs, and ideally it is expected to be equal to 0.\n- DataPageCache\\[size\\](AllocByAllocator): The size of the data Page cache.\n- IndexPageCache\\[size\\](AllocByAllocator): The size of the index cache of the data Page.\n- PKIndexPageCache\\[size\\](AllocByAllocator): Primary key index of data Page.\n- DetailsTrackerSet: Contains some memory that is not currently tracked accurately. These memories will not be counted in Global memory, including some Cache and metadata memory, etc. By default, only Memory Trackers with Peak Consumption not equal to 0 are displayed, mainly including the following:\n- SegmentCache[size]: Caches the memory size of the opened Segment, such as index information.\n- SchemaCache[number]: Caches the number of entries of Rowset Schema.\n- TabletSchemaCache[number]: Caches the number of entries of Tablet Schema.\n- TabletMeta(experimental): Memory size of all Tablet Schema.\n- CreateTabletRRIdxCache[number]: Caches the number of entries of create tabelt index.\n- PageNoCache: If page cache is turned off, this Memory Trakcer will track the sum of all page memory used by all Queries.\n- IOBufBlockMemory: The total IOBuf memory used by BRPC.\n- PointQueryLookupConnectionCache[number]: The number of cached Point Query Lookup Connection entries.\n- AllMemTableMemory: The total Memtable memory of all loads cached in memory waiting to be flushed.\n- MowTabletVersionCache[number]: The number of cached Mow Tablet Version entries.\n- MowDeleteBitmapAggCache[size]: The cached Mow DeleteBitmap memory size.\n- SegCompaction: The total memory allocated from `Doris Allocator` by all SegCompaction tasks.\n- PointQueryExecutor: Some memory shared by all Point Queries.\n- BlockCompression: Some memory used in the decompression process shared by all Queries.\n- RowIdStorageReader: All Multiget Data requests use memory in RowIdStorageReader.\n- SubcolumnsTree: Some memory used by Point Query in SubcolumnsTree.\n- S3FileBuffer: Memory allocated by the File Buffer when reading S3.\n")),(0,t.yg)("p",null,"Some of the Memory Tracker tags have suffixes, which mean:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"[size]")," means that the Cache Tracker records the memory size.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"[number]")," means that the Cache Tracker records the number of cached entries, which is usually because the memory cannot be accurately counted at present.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"(AllocByAllocator)")," means that the Tracker value is tracked by Doris Allocator.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"(experimental)")," means that this Memory Tracker is still experimental and the value may not be accurate."))),(0,t.yg)("h2",{id:"global-memory-occupies-a-lot"},"Global Memory occupies a lot"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"MemTrackerLimiter Label=global, Type=overview, Limit=-1.00 B(-1 B), Used=199.37 MB(209053204 B), Peak=199.37 MB(209053204 B)\n")),(0,t.yg)("p",null,"The value of Global Memory Tracker ",(0,t.yg)("inlineCode",{parentName:"p"},"Label=global, Type=overview")," is equal to the sum of all Memory Trackers with ",(0,t.yg)("inlineCode",{parentName:"p"},"Type=global")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"Parent Label != DetailsTrackerSet"),", mainly including Cache and metadata, which are shared between different tasks."),(0,t.yg)("h3",{id:"cache-analysis-method"},"Cache analysis method"),(0,t.yg)("p",null,"Refer to ",(0,t.yg)("a",{parentName:"p",href:"/docs/admin-manual/memory-management/memory-analysis/doris-cache-memory-analysis"},"Doris Cache Memory Analysis")),(0,t.yg)("h3",{id:"metadata-analysis-method"},"Metadata analysis method"),(0,t.yg)("p",null,"Refer to ",(0,t.yg)("a",{parentName:"p",href:"/docs/admin-manual/memory-management/memory-analysis/metadata-memory-analysis"},"Metadata Memory Analysis")),(0,t.yg)("h3",{id:"orphan-analysis-method"},"Orphan analysis method"),(0,t.yg)("p",null,"If the Orphan Memory Tracker value is too large, it means that the Memory Tracker statistics are missing. Refer to the analysis in ","[Memory Tracker Statistics Missing]"," in ",(0,t.yg)("a",{parentName:"p",href:"/docs/admin-manual/memory-management/memory-feature/memory-tracker"},"Memory Tracker"),"."))}d.isMDXComponent=!0}}]);