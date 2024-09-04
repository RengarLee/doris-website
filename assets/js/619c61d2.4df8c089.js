"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[911933],{15680:(e,a,n)=>{n.d(a,{xA:()=>p,yg:()=>d});var r=n(296540);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function m(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=r.createContext({}),s=function(e){var a=r.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=s(e.components);return r.createElement(l.Provider,{value:a},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),c=s(n),u=t,d=c["".concat(l,".").concat(u)]||c[u]||y[u]||o;return n?r.createElement(d,i(i({ref:a},p),{},{components:n})):r.createElement(d,i({ref:a},p))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=u;var m={};for(var l in a)hasOwnProperty.call(a,l)&&(m[l]=a[l]);m.originalType=e,m[c]="string"==typeof e?e:t,i[1]=m;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},414207:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>m,toc:()=>s});var r=n(58168),t=(n(296540),n(15680));const o={title:"Heap Profile Memory Analysis",language:"zh-CN"},i=void 0,m={unversionedId:"admin-manual/memory-management/memory-analysis/heap-profile-memory-analysis",id:"admin-manual/memory-management/memory-analysis/heap-profile-memory-analysis",title:"Heap Profile Memory Analysis",description:"\x3c!--",source:"@site/docs/admin-manual/memory-management/memory-analysis/heap-profile-memory-analysis.md",sourceDirName:"admin-manual/memory-management/memory-analysis",slug:"/admin-manual/memory-management/memory-analysis/heap-profile-memory-analysis",permalink:"/docs/dev/admin-manual/memory-management/memory-analysis/heap-profile-memory-analysis",draft:!1,tags:[],version:"current",frontMatter:{title:"Heap Profile Memory Analysis",language:"zh-CN"},sidebar:"docs",previous:{title:"Memory Log Analysis",permalink:"/docs/dev/admin-manual/memory-management/memory-analysis/memory-log-analysis"},next:{title:"Memory Tracker",permalink:"/docs/dev/admin-manual/memory-management/memory-feature/memory-tracker"}},l={},s=[],p={toc:s},c="wrapper";function y(e){let{components:a,...n}=e;return(0,t.yg)(c,(0,r.A)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Heap Profile supports real-time viewing of process memory usage and call stacks, so this usually requires some understanding of the code. Doris uses Jemalloc as the default Allocator. For the usage of Jemalloc Heap Profile, refer to ",(0,t.yg)("a",{parentName:"p",href:"https://doris.apache.org/community/developer-guide/debug-tool/?_highlight=debug#jemalloc-1"},"Jemalloc Heap Profile"),". It should be noted that Heap Profile records virtual memory. You need to modify the configuration and restart the Doris BE process, and the phenomenon can be reproduced."),(0,t.yg)("p",null,"If you see the ",(0,t.yg)("inlineCode",{parentName:"p"},"Segment"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"TabletSchema"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"ColumnReader")," fields in the call stack with a large memory share of Heap Profile, it means that the metadata occupies a large amount of memory."),(0,t.yg)("p",null,"If the BE memory does not decrease when the cluster is idle after running for a period of time, then you can see fields such as ",(0,t.yg)("inlineCode",{parentName:"p"},"Agg"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"Join"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"Filter"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"Sort"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"Scan")," in the call stack with a large memory share in the Heap Profile. If the BE process memory monitoring in the corresponding time period shows a continuous upward trend, then there is reason to suspect that there is a memory leak. Continue to analyze the code based on the call stack."),(0,t.yg)("p",null,"If you see fields such as ",(0,t.yg)("inlineCode",{parentName:"p"},"Agg"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"Join"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"Filter"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"Sort"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"Scan")," in the call stack with a large memory share in the Heap Profile during task execution on the cluster, and the memory is released normally after the task is completed, it means that most of the memory is used by the running tasks and there is no leak. If the value of ",(0,t.yg)("inlineCode",{parentName:"p"},"Label=query, Type=overview")," Memory Tracker accounts for a smaller proportion of the total memory than the memory call stack containing the above fields in the Heap Profile, it means that the statistics of ",(0,t.yg)("inlineCode",{parentName:"p"},"Label=query, Type=overview")," Memory Tracker are inaccurate, and you can provide timely feedback in the community."))}y.isMDXComponent=!0}}]);