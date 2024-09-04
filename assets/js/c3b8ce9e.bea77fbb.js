"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[967261],{15680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>d});var r=a(296540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function m(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=r.createContext({}),s=function(e){var n=r.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),y=s(a),u=t,d=y["".concat(l,".").concat(u)]||y[u]||c[u]||o;return a?r.createElement(d,i(i({ref:n},p),{},{components:a})):r.createElement(d,i({ref:n},p))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=u;var m={};for(var l in n)hasOwnProperty.call(n,l)&&(m[l]=n[l]);m.originalType=e,m[y]="string"==typeof e?e:t,i[1]=m;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},525680:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>s});var r=a(58168),t=(a(296540),a(15680));const o={title:"Heap Profile Memory Analysis",language:"zh-CN"},i=void 0,m={unversionedId:"admin-manual/memory-management/memory-analysis/heap-profile-memory-analysis",id:"version-3.0/admin-manual/memory-management/memory-analysis/heap-profile-memory-analysis",title:"Heap Profile Memory Analysis",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/admin-manual/memory-management/memory-analysis/heap-profile-memory-analysis.md",sourceDirName:"admin-manual/memory-management/memory-analysis",slug:"/admin-manual/memory-management/memory-analysis/heap-profile-memory-analysis",permalink:"/docs/admin-manual/memory-management/memory-analysis/heap-profile-memory-analysis",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Heap Profile Memory Analysis",language:"zh-CN"},sidebar:"docs",previous:{title:"Memory Log Analysis",permalink:"/docs/admin-manual/memory-management/memory-analysis/memory-log-analysis"},next:{title:"Memory Tracker",permalink:"/docs/admin-manual/memory-management/memory-feature/memory-tracker"}},l={},s=[],p={toc:s},y="wrapper";function c(e){let{components:n,...a}=e;return(0,t.yg)(y,(0,r.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Heap Profile supports real-time viewing of process memory usage and call stacks, so this usually requires some understanding of the code. Doris uses Jemalloc as the default Allocator. For the usage of Jemalloc Heap Profile, refer to ",(0,t.yg)("a",{parentName:"p",href:"https://doris.apache.org/community/developer-guide/debug-tool/?_highlight=debug#jemalloc-1"},"Jemalloc Heap Profile"),". It should be noted that Heap Profile records virtual memory. You need to modify the configuration and restart the Doris BE process, and the phenomenon can be reproduced."),(0,t.yg)("p",null,"If you see the ",(0,t.yg)("inlineCode",{parentName:"p"},"Segment"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"TabletSchema"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"ColumnReader")," fields in the call stack with a large memory share of Heap Profile, it means that the metadata occupies a large amount of memory."),(0,t.yg)("p",null,"If the BE memory does not decrease when the cluster is idle after running for a period of time, then you can see fields such as ",(0,t.yg)("inlineCode",{parentName:"p"},"Agg"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"Join"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"Filter"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"Sort"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"Scan")," in the call stack with a large memory share in the Heap Profile. If the BE process memory monitoring in the corresponding time period shows a continuous upward trend, then there is reason to suspect that there is a memory leak. Continue to analyze the code based on the call stack."),(0,t.yg)("p",null,"If you see fields such as ",(0,t.yg)("inlineCode",{parentName:"p"},"Agg"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"Join"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"Filter"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"Sort"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"Scan")," in the call stack with a large memory share in the Heap Profile during task execution on the cluster, and the memory is released normally after the task is completed, it means that most of the memory is used by the running tasks and there is no leak. If the value of ",(0,t.yg)("inlineCode",{parentName:"p"},"Label=query, Type=overview")," Memory Tracker accounts for a smaller proportion of the total memory than the memory call stack containing the above fields in the Heap Profile, it means that the statistics of ",(0,t.yg)("inlineCode",{parentName:"p"},"Label=query, Type=overview")," Memory Tracker are inaccurate, and you can provide timely feedback in the community."))}c.isMDXComponent=!0}}]);