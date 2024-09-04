"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[31771],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>p});var n=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),l=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},d=function(e){var a=l(e.components);return n.createElement(s.Provider,{value:a},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),y=l(t),u=r,p=y["".concat(s,".").concat(u)]||y[u]||c[u]||o;return t?n.createElement(p,m(m({ref:a},d),{},{components:t})):n.createElement(p,m({ref:a},d))}));function p(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,m=new Array(o);m[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[y]="string"==typeof e?e:r,m[1]=i;for(var l=2;l<o;l++)m[l]=t[l];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},519647:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>m,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(58168),r=(t(296540),t(15680));const o={title:"Metadata Memory Analysis",language:"zh-CN"},m=void 0,i={unversionedId:"admin-manual/memory-management/memory-analysis/metadata-memory-analysis",id:"version-3.0/admin-manual/memory-management/memory-analysis/metadata-memory-analysis",title:"Metadata Memory Analysis",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/admin-manual/memory-management/memory-analysis/metadata-memory-analysis.md",sourceDirName:"admin-manual/memory-management/memory-analysis",slug:"/admin-manual/memory-management/memory-analysis/metadata-memory-analysis",permalink:"/docs/admin-manual/memory-management/memory-analysis/metadata-memory-analysis",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Metadata Memory Analysis",language:"zh-CN"},sidebar:"docs",previous:{title:"Cache Memory Analysis",permalink:"/docs/admin-manual/memory-management/memory-analysis/doris-cache-memory-analysis"},next:{title:"Query Memory Analysis",permalink:"/docs/admin-manual/memory-management/memory-analysis/query-memory-analysis"}},s={},l=[{value:"Metadata Viewing Method",id:"metadata-viewing-method",level:2},{value:"Doris BE Bvar",id:"doris-be-bvar",level:3},{value:"Doris BE Metrics",id:"doris-be-metrics",level:3},{value:"Use Heap Profile to analyze metadata memory",id:"use-heap-profile-to-analyze-metadata-memory",level:3}],d={toc:l},y="wrapper";function c(e){let{components:a,...t}=e;return(0,r.yg)(y,(0,n.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The metadata of Doris BE in memory includes data structures such as ",(0,r.yg)("inlineCode",{parentName:"p"},"Tablet"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Rowset"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Segment"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"TabletSchema"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"ColumnReader"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"PrimaryKeyIndex"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"BloomFilterIndex"),". For more information about Doris BE metadata, refer to the document ",(0,r.yg)("a",{parentName:"p",href:"https://blog.csdn.net/ucanuup_/article/details/115004829"},"Analysis of Doris Storage Structure Design"),"."),(0,r.yg)("h2",{id:"metadata-viewing-method"},"Metadata Viewing Method"),(0,r.yg)("p",null,"Currently, Memory Tracker does not accurately count the metadata memory size of Doris BE. You can estimate the metadata memory size by viewing some counters in Doris BE Bvar and Doris BE Metrics, or use Heap Profile for further analysis."),(0,r.yg)("h3",{id:"doris-be-bvar"},"Doris BE Bvar"),(0,r.yg)("p",null,"You can see some metadata-related indicators counted by Bvar on the web page ",(0,r.yg)("inlineCode",{parentName:"p"},"http://http://{be_host}:{brpc_port}/vars"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"- `doris_total_tablet_num`: The number of all tablets.\n- `doris_total_rowset_num`: The number of all rowsets.\n- `doris_total_segment_num`: The number of all open segments.\n- `doris_total_tablet_schema_num`: The number of all tablet schemas.\n- `tablet_schema_cache_count`: The number of cached tablet schemas.\n- `tablet_meta_schema_columns_count`: The number of columns in all tablet schemas.\n- `tablet_schema_cache_columns_count`: The number of cached columns in a tablet schema.\n- `doris_column_reader_num`: The number of open column readers.\n- `doris_column_reader_memory_bytes`: the number of bytes occupied by the opened Column Reader.\n- `doris_ordinal_index_memory_bytes`: the number of bytes occupied by the opened Ordinal Index.\n- `doris_zone_map_memory_bytes`: the number of bytes occupied by the opened ZoneMap Index.\n- `doris_short_key_index_memory_bytes`: the number of bytes occupied by the opened Short Key Index.\n- `doris_pk/index_reader_bytes`: the cumulative number of bytes occupied by the Primary Key Index Reader. This is not a real-time statistical value and is expected to be fixed.\n- `doris_pk/index_reader_pages`: Same as above, the cumulative value of the statistics.\n- `doris_pk/index_reader_cached_pages`: Same as above, the cumulative value of the statistics.\n- `doris_pk/index_reader_pagindex_reader_pk_pageses`: Same as above, cumulative value of statistics.\n- `doris_primary_key_index_memory_bytes`: Same as above, cumulative value of statistics.\n")),(0,r.yg)("h3",{id:"doris-be-metrics"},"Doris BE Metrics"),(0,r.yg)("p",null,"Web page ",(0,r.yg)("inlineCode",{parentName:"p"},"http://http://{be_host}:{be_web_server_port}/metrics")," can see some metadata indicators in BE process memory monitoring (Metrics). Among them, Metadata Cache related indicators refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/admin-manual/memory-management/memory-analysis/doris-cache-memory-analysis"},"Doris Cache Memory Analysis"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"- `doris_be_all_rowsets_num`: The number of all Rowsets.\n- `doris_be_all_segments_num`: The number of all Segments.\n")),(0,r.yg)("h3",{id:"use-heap-profile-to-analyze-metadata-memory"},"Use Heap Profile to analyze metadata memory"),(0,r.yg)("p",null,"If the memory location cannot be accurately located using Doris BE Bvar and Metrics above, if the cluster can be easily restarted and the phenomenon can be reproduced, refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/admin-manual/memory-management/memory-analysis/heap-profile-memory-analysis"},"Heap Profile Memory Analysis")," to analyze Metadata memory."),(0,r.yg)("p",null,"After the phenomenon is reproduced, if you see the ",(0,r.yg)("inlineCode",{parentName:"p"},"Tablet"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Segment"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"TabletSchema"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"ColumnReader")," fields in the call stack with a large memory usage in Heap Profile, it can be basically confirmed that metadata occupies a large amount of memory."))}c.isMDXComponent=!0}}]);