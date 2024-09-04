"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[905974],{15680:(e,a,r)=>{r.d(a,{xA:()=>y,yg:()=>u});var n=r(296540);function l(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function t(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?t(Object(r),!0).forEach((function(a){l(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,n,l=function(e,a){if(null==e)return{};var r,n,l={},t=Object.keys(e);for(n=0;n<t.length;n++)r=t[n],a.indexOf(r)>=0||(l[r]=e[r]);return l}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)r=t[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var m=n.createContext({}),c=function(e){var a=n.useContext(m),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},y=function(e){var a=c(e.components);return n.createElement(m.Provider,{value:a},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var r=e.components,l=e.mdxType,t=e.originalType,m=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),p=c(r),g=l,u=p["".concat(m,".").concat(g)]||p[g]||s[g]||t;return r?n.createElement(u,o(o({ref:a},y),{},{components:r})):n.createElement(u,o({ref:a},y))}));function u(e,a){var r=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var t=r.length,o=new Array(t);o[0]=g;var i={};for(var m in a)hasOwnProperty.call(a,m)&&(i[m]=a[m]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<t;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},338187:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>m,contentTitle:()=>o,default:()=>s,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var n=r(58168),l=(r(296540),r(15680));const t={title:"\u5185\u5b58\u63a7\u5236\u7b56\u7565",language:"zh-CN"},o=void 0,i={unversionedId:"admin-manual/memory-management/memory-feature/memory-control-strategy",id:"version-2.1/admin-manual/memory-management/memory-feature/memory-control-strategy",title:"\u5185\u5b58\u63a7\u5236\u7b56\u7565",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/memory-management/memory-feature/memory-control-strategy.md",sourceDirName:"admin-manual/memory-management/memory-feature",slug:"/admin-manual/memory-management/memory-feature/memory-control-strategy",permalink:"/zh-CN/docs/2.1/admin-manual/memory-management/memory-feature/memory-control-strategy",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u5185\u5b58\u63a7\u5236\u7b56\u7565",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5185\u5b58\u8ddf\u8e2a\u5668",permalink:"/zh-CN/docs/2.1/admin-manual/memory-management/memory-feature/memory-tracker"},next:{title:"FE \u65e5\u5fd7\u7ba1\u7406",permalink:"/zh-CN/docs/2.1/admin-manual/log-management/fe-log"}},m={},c=[{value:"Doris Allocator",id:"doris-allocator",level:2},{value:"Arena",id:"arena",level:3},{value:"HashTable",id:"hashtable",level:3},{value:"PODArray",id:"podarray",level:3},{value:"\u5185\u5b58\u590d\u7528",id:"\u5185\u5b58\u590d\u7528",level:3},{value:"\u5185\u5b58 GC",id:"\u5185\u5b58-gc",level:2},{value:"\u5185\u5b58\u9650\u5236\u548c\u6c34\u4f4d\u7ebf\u8ba1\u7b97\u65b9\u6cd5",id:"\u5185\u5b58\u9650\u5236\u548c\u6c34\u4f4d\u7ebf\u8ba1\u7b97\u65b9\u6cd5",level:2},{value:"\u7cfb\u7edf\u5269\u4f59\u53ef\u7528\u5185\u5b58\u8ba1\u7b97",id:"\u7cfb\u7edf\u5269\u4f59\u53ef\u7528\u5185\u5b58\u8ba1\u7b97",level:2}],y={toc:c},p="wrapper";function s(e){let{components:a,...t}=e;return(0,l.yg)(p,(0,n.A)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Doris Allocator \u4f5c\u4e3a\u7cfb\u7edf\u4e2d\u5927\u5757\u5185\u5b58\u7533\u8bf7\u7684\u7edf\u4e00\u5165\u53e3\uff0c\u5728\u5408\u9002\u7684\u65f6\u673a\u5e72\u9884\u9650\u5236\u5185\u5b58\u5206\u914d\u7684\u8fc7\u7a0b\uff0c\u786e\u4fdd\u5185\u5b58\u7533\u8bf7\u7684\u9ad8\u6548\u53ef\u63a7\u3002"),(0,l.yg)("p",null,"Doris MemoryArbitrator \u4f5c\u4e3a\u5185\u5b58\u4ef2\u88c1\u5668\uff0c\u5b9e\u65f6\u76d1\u63a7 Doris BE \u8fdb\u7a0b\u7684\u5185\u5b58\u4f7f\u7528\uff0c\u5e76\u5b9a\u65f6\u66f4\u65b0\u5185\u5b58\u72b6\u6001\u548c\u6536\u96c6\u5185\u5b58\u76f8\u5173\u7edf\u8ba1\u4fe1\u606f\u7684\u5feb\u7167\u3002"),(0,l.yg)("p",null,"Doris MemoryReclamation \u4f5c\u4e3a\u5185\u5b58\u56de\u6536\u5668\uff0c\u5728\u53ef\u7528\u5185\u5b58\u4e0d\u8db3\u65f6\u89e6\u53d1\u5185\u5b58 GC \u56de\u6536\u90e8\u5206\u5185\u5b58\uff0c\u4fdd\u8bc1\u96c6\u7fa4\u4e0a\u5927\u90e8\u5206\u4efb\u52a1\u6267\u884c\u7684\u7a33\u5b9a\u6027\u3002"),(0,l.yg)("h2",{id:"doris-allocator"},"Doris Allocator"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Memory Management Overview",src:r(824961).A,width:"1080",height:"500"})),(0,l.yg)("p",null,"Allocator\u4ece\u7cfb\u7edf\u7533\u8bf7\u5185\u5b58\uff0c\u5e76\u5728\u7533\u8bf7\u8fc7\u7a0b\u4e2d\u4f7f\u7528 MemTracker \u8ddf\u8e2a\u5185\u5b58\u7533\u8bf7\u548c\u91ca\u653e\u7684\u5927\u5c0f\uff0c\u6267\u884c\u7b97\u5b50\u6240\u9700\u6279\u91cf\u7533\u8bf7\u7684\u5927\u5185\u5b58\u5c06\u4ea4\u7531\u4e0d\u540c\u7684\u6570\u636e\u7ed3\u6784\u7ba1\u7406\u3002"),(0,l.yg)("p",null,"\u67e5\u8be2\u6267\u884c\u8fc7\u7a0b\u4e2d\u5927\u5757\u5185\u5b58\u7684\u5206\u914d\u4e3b\u8981\u4f7f\u7528 Arena\u3001HashTable\u3001PODArray \u8fd9\u4e09\u4e2a\u6570\u636e\u7ed3\u6784\u7ba1\u7406\uff0cAllocator \u4f5c\u4e3a Arena\u3001PODArray\u3001HashTable \u7684\u7edf\u4e00\u5185\u5b58\u63a5\u53e3\uff0c\u5b9e\u73b0\u5185\u5b58\u7edf\u4e00\u7ba1\u7406\u548c\u5c40\u90e8\u7684\u5185\u5b58\u590d\u7528\u3002"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Memory Allocator",src:r(338493).A,width:"1080",height:"670"})),(0,l.yg)("p",null,"Allocator \u4f7f\u7528\u901a\u7528\u5185\u5b58\u5206\u914d\u5668\u7533\u8bf7\u5185\u5b58\uff0c\u5728 Jemalloc \u548c TCMalloc \u7684\u9009\u62e9\u4e0a\uff0cDoris \u4e4b\u524d\u5728\u9ad8\u5e76\u53d1\u6d4b\u8bd5\u65f6 TCMalloc \u4e2d CentralFreeList \u7684 Spin Lock \u80fd\u5360\u5230\u67e5\u8be2\u603b\u8017\u65f6\u7684 40%\uff0c\u867d\u7136\u5173\u95ed aggressive memory decommit \u80fd\u6709\u6548\u63d0\u5347\u6027\u80fd\uff0c\u4f46\u8fd9\u4f1a\u6d6a\u8d39\u975e\u5e38\u591a\u7684\u5185\u5b58\uff0c\u4e3a\u6b64\u4e0d\u5f97\u4e0d\u5355\u72ec\u7528\u4e00\u4e2a\u7ebf\u7a0b\u5b9a\u671f\u56de\u6536 TCMalloc \u7684\u7f13\u5b58\u3002Jemalloc \u5728\u9ad8\u5e76\u53d1\u4e0b\u6027\u80fd\u4f18\u4e8e TCMalloc \u4e14\u6210\u719f\u7a33\u5b9a\uff0c\u5728 Doris 1.2.2 \u7248\u672c\u4e2d\u5207\u6362\u4e3a Jemalloc\uff0c\u8c03\u4f18\u540e\u5728\u5927\u591a\u6570\u573a\u666f\u4e0b\u6027\u80fd\u548c TCMalloc \u6301\u5e73\uff0c\u5e76\u4f7f\u7528\u66f4\u5c11\u7684\u5185\u5b58\uff0c\u9ad8\u5e76\u53d1\u573a\u666f\u7684\u6027\u80fd\u4e5f\u6709\u660e\u663e\u63d0\u5347\u3002"),(0,l.yg)("h3",{id:"arena"},"Arena"),(0,l.yg)("p",null,"Arena \u662f\u4e00\u4e2a\u5185\u5b58\u6c60\uff0c\u7ef4\u62a4\u4e00\u4e2a\u5185\u5b58\u5757\u5217\u8868\uff0c\u5e76\u4ece\u4e2d\u5206\u914d\u5185\u5b58\u4ee5\u54cd\u5e94 alloc \u8bf7\u6c42\uff0c\u4ece\u800c\u51cf\u5c11\u4ece\u7cfb\u7edf\u7533\u8bf7\u5185\u5b58\u7684\u6b21\u6570\u4ee5\u63d0\u5347\u6027\u80fd\uff0c\u5185\u5b58\u5757\u88ab\u79f0\u4e3a Chunk\uff0c\u5728\u5185\u5b58\u6c60\u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\u5185\u5b58\u5728\uff0c\u5728\u6790\u6784\u65f6\u7edf\u4e00\u91ca\u653e\uff0c\u8fd9\u901a\u5e38\u548c\u67e5\u8be2\u751f\u547d\u5468\u671f\u76f8\u540c\uff0c\u5e76\u652f\u6301\u5185\u5b58\u5bf9\u9f50\uff0c\u4e3b\u8981\u7528\u4e8e\u4fdd\u5b58 Shuffle \u8fc7\u7a0b\u4e2d\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316\u6570\u636e\u3001HashTable \u4e2d\u5e8f\u5217\u5316 Key \u7b49\u3002"),(0,l.yg)("p",null,"Chunk \u521d\u59cb 4096 \u5b57\u8282\uff0c\u5185\u90e8\u4f7f\u7528\u6e38\u6807\u8bb0\u5f55\u5206\u914d\u8fc7\u7684\u5185\u5b58\u4f4d\u7f6e\uff0c\u5982\u679c\u5f53\u524d Chunk \u5269\u4f59\u5927\u5c0f\u65e0\u6cd5\u6ee1\u8db3\u5f53\u524d\u5185\u5b58\u7533\u8bf7\uff0c\u5219\u7533\u8bf7\u4e00\u4e2a\u65b0\u7684 Chunk \u6dfb\u52a0\u5230\u5217\u8868\u4e2d\uff0c\u4e3a\u51cf\u5c11\u4ece\u7cfb\u7edf\u7533\u8bf7\u5185\u5b58\u7684\u6b21\u6570\uff0c\u5728\u5f53\u524d Chunk \u5c0f\u4e8e 128M \u65f6\uff0c\u6bcf\u6b21\u65b0\u7533\u8bf7\u7684 Chunk \u5927\u5c0f\u52a0\u500d\uff0c\u5728\u5f53\u524d Chunk \u5927\u4e8e 128M \u65f6\uff0c\u65b0\u7533\u8bf7\u7684 Chunk \u5927\u5c0f\u5728\u6ee1\u8db3\u672c\u6b21\u5185\u5b58\u7533\u8bf7\u7684\u524d\u63d0\u4e0b\u81f3\u591a\u989d\u5916\u5206\u914d 128M\uff0c\u907f\u514d\u6d6a\u8d39\u8fc7\u591a\u5185\u5b58\uff0c\u9ed8\u8ba4\u4e4b\u524d\u7684 Chunk \u4e0d\u4f1a\u518d\u53c2\u4e0e\u540e\u7eed alloc\u3002"),(0,l.yg)("h3",{id:"hashtable"},"HashTable"),(0,l.yg)("p",null,"Doris \u4e2d\u7684 HashTable \u4e3b\u8981\u5728 Hash Join\u3001\u805a\u5408\u3001\u96c6\u5408\u8fd0\u7b97\u3001\u7a97\u53e3\u51fd\u6570\u4e2d\u5e94\u7528\uff0c\u4e3b\u8981\u4f7f\u7528\u7684 PartitionedHashTable \u6700\u591a\u5305\u542b 16 \u4e2a\u5b50 HashTable\uff0c\u652f\u6301\u4e24\u4e2a HashTable \u7684\u5e76\u884c\u5316\u5408\u5e76\uff0c\u6bcf\u4e2a\u5b50 Hash Join \u72ec\u7acb\u6269\u5bb9\uff0c\u9884\u671f\u53ef\u51cf\u5c11\u603b\u5185\u5b58\u7684\u4f7f\u7528\uff0c\u6269\u5bb9\u671f\u95f4\u7684\u5ef6\u8fdf\u4e5f\u5c06\u88ab\u5206\u644a\u3002"),(0,l.yg)("p",null,"\u5728 HashTable \u5c0f\u4e8e 8M \u65f6\u5c06\u4ee5 4 \u7684\u500d\u6570\u6269\u5bb9\uff0c\u5728 HashTable \u5927\u4e8e 8M \u65f6\u5c06\u4ee5 2 \u7684\u500d\u6570\u6269\u5bb9\uff0c\u5728 HashTable \u5c0f\u4e8e 2G \u65f6\u6269\u5bb9\u56e0\u5b50\u4e3a 50%\uff0c\u5373\u5728 HashTable \u88ab\u586b\u5145\u5230 50% \u65f6\u89e6\u53d1\u6269\u5bb9\uff0c\u5728 HashTable \u5927\u4e8e 2G \u540e\u6269\u5bb9\u56e0\u5b50\u88ab\u8c03\u6574\u4e3a 75%\uff0c\u4e3a\u4e86\u907f\u514d\u6d6a\u8d39\u8fc7\u591a\u5185\u5b58\uff0c\u5728\u6784\u5efa HashTable \u524d\u901a\u5e38\u4f1a\u4f9d\u636e\u6570\u636e\u91cf\u9884\u6269\u5bb9\u3002\u6b64\u5916 Doris \u4e3a\u4e0d\u540c\u573a\u666f\u8bbe\u8ba1\u4e86\u4e0d\u540c\u7684 HashTable\uff0c\u6bd4\u5982\u805a\u5408\u573a\u666f\u4f7f\u7528 PHmap \u4f18\u5316\u5e76\u53d1\u6027\u80fd\u3002"),(0,l.yg)("h3",{id:"podarray"},"PODArray"),(0,l.yg)("p",null,"PODArray \u662f\u4e00\u4e2a POD \u7c7b\u578b\u7684\u52a8\u6001\u6570\u7ec4\uff0c\u4e0e std::vector \u7684\u533a\u522b\u5728\u4e8e\u4e0d\u4f1a\u521d\u59cb\u5316\u5143\u7d20\uff0c\u652f\u6301\u90e8\u5206 std::vector \u7684\u63a5\u53e3\uff0c\u540c\u6837\u652f\u6301\u5185\u5b58\u5bf9\u9f50\u5e76\u4ee5 2 \u7684\u500d\u6570\u6269\u5bb9\uff0cPODArray \u6790\u6784\u65f6\u4e0d\u4f1a\u8c03\u7528\u6bcf\u4e2a\u5143\u7d20\u7684\u6790\u6784\u51fd\u6570\uff0c\u800c\u662f\u76f4\u63a5\u91ca\u653e\u6389\u6574\u5757\u5185\u5b58\uff0c\u4e3b\u8981\u7528\u4e8e\u4fdd\u5b58 String \u7b49 Column \u4e2d\u7684\u6570\u636e\uff0c\u6b64\u5916\u5728\u51fd\u6570\u8ba1\u7b97\u548c\u8868\u8fbe\u5f0f\u8fc7\u6ee4\u4e2d\u4e5f\u88ab\u5927\u91cf\u4f7f\u7528\u3002"),(0,l.yg)("h3",{id:"\u5185\u5b58\u590d\u7528"},"\u5185\u5b58\u590d\u7528"),(0,l.yg)("p",null,"Doris \u5728\u6267\u884c\u5c42\u505a\u4e86\u5927\u91cf\u5185\u5b58\u590d\u7528\uff0c\u53ef\u89c1\u7684\u5185\u5b58\u70ed\u70b9\u57fa\u672c\u90fd\u88ab\u5c4f\u853d\u3002\u6bd4\u5982\u5bf9\u6570\u636e\u5757 Block \u7684\u590d\u7528\u8d2f\u7a7f Query \u6267\u884c\u7684\u59cb\u7ec8\uff1b\u6bd4\u5982 Shuffle \u7684 Sender \u7aef\u59cb\u7ec8\u4fdd\u6301\u4e00\u4e2a Block \u63a5\u6536\u6570\u636e\uff0c\u4e00\u4e2a Block \u5728 RPC \u4f20\u8f93\u4e2d\uff0c\u4e24\u4e2a Block \u4ea4\u66ff\u4f7f\u7528\uff1b\u8fd8\u6709\u5b58\u50a8\u5c42\u5728\u8bfb\u4e00\u4e2a Tablet \u65f6\u590d\u7528\u8c13\u8bcd\u5217\u5faa\u73af\u8bfb\u6570\u3001\u8fc7\u6ee4\u3001\u62f7\u8d1d\u5230\u4e0a\u5c42 Block\u3001Clear\uff1b\u5bfc\u5165 Aggregate Key \u8868\u65f6\u7f13\u5b58\u6570\u636e\u7684 MemTable \u5230\u8fbe\u4e00\u5b9a\u5927\u5c0f\u9884\u805a\u5408\u6536\u7f29\u540e\u7ee7\u7eed\u5199\u5165\u7b49\u7b49\u3002"),(0,l.yg)("p",null,"\u6b64\u5916 Doris \u4f1a\u5728\u6570\u636e Scan \u5f00\u59cb\u524d\u4f9d\u636e Scanner \u4e2a\u6570\u548c\u7ebf\u7a0b\u6570\u9884\u5206\u914d\u4e00\u6279 Free Block\uff0c\u6bcf\u6b21\u8c03\u5ea6 Scanner \u65f6\u4f1a\u4ece\u4e2d\u83b7\u53d6\u4e00\u4e2a Block \u5e76\u4f20\u9012\u5230\u5b58\u50a8\u5c42\u8bfb\u53d6\u6570\u636e\uff0c\u8bfb\u53d6\u5b8c\u6210\u540e\u4f1a\u5c06 Block \u653e\u5230\u751f\u4ea7\u8005\u961f\u5217\u4e2d\uff0c\u4f9b\u4e0a\u5c42\u7b97\u5b50\u6d88\u8d39\u5e76\u8fdb\u884c\u540e\u7eed\u8ba1\u7b97\uff0c\u4e0a\u5c42\u7b97\u5b50\u5c06\u6570\u636e\u62f7\u8d70\u540e\u4f1a\u5c06 Block \u91cd\u65b0\u653e\u56de Free Block \u4e2d\uff0c\u7528\u4e8e\u4e0b\u6b21 Scanner \u8c03\u5ea6\uff0c\u4ece\u800c\u5b9e\u73b0\u5185\u5b58\u590d\u7528\uff0c\u6570\u636e Scan \u5b8c\u6210\u540e Free Block \u4f1a\u5728\u4e4b\u524d\u9884\u5206\u914d\u7684\u7ebf\u7a0b\u7edf\u4e00\u91ca\u653e\uff0c\u907f\u514d\u5185\u5b58\u7533\u8bf7\u548c\u91ca\u653e\u4e0d\u5728\u540c\u4e00\u4e2a\u7ebf\u7a0b\u800c\u5bfc\u81f4\u7684\u989d\u5916\u5f00\u9500\uff0cFree Block \u7684\u4e2a\u6570\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u8fd8\u63a7\u5236\u7740\u6570\u636e Scan \u7684\u5e76\u53d1\u3002"),(0,l.yg)("h2",{id:"\u5185\u5b58-gc"},"\u5185\u5b58 GC"),(0,l.yg)("p",null,"Doris BE \u4f1a\u5b9a\u65f6\u4ece\u7cfb\u7edf\u83b7\u53d6\u8fdb\u7a0b\u7684\u7269\u7406\u5185\u5b58\u548c\u7cfb\u7edf\u5f53\u524d\u5269\u4f59\u53ef\u7528\u5185\u5b58\uff0c\u5e76\u6536\u96c6\u6240\u6709\u67e5\u8be2\u3001\u5bfc\u5165\u3001Compaction \u4efb\u52a1 MemTracker \u7684\u5feb\u7167\uff0c\u5f53 BE \u8fdb\u7a0b\u5185\u5b58\u8d85\u9650\u6216\u7cfb\u7edf\u5269\u4f59\u53ef\u7528\u5185\u5b58\u4e0d\u8db3\u65f6\uff0cDoris \u5c06\u91ca\u653e Cache \u548c\u7ec8\u6b62\u90e8\u5206\u67e5\u8be2\u6216\u5bfc\u5165\u6765\u91ca\u653e\u5185\u5b58\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u7531\u4e00\u4e2a\u5355\u72ec\u7684 GC \u7ebf\u7a0b\u5b9a\u65f6\u6267\u884c\u3002"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Memory GC",src:r(721230).A,width:"1080",height:"515"})),(0,l.yg)("p",null,"\u82e5 Doris BE \u8fdb\u7a0b\u5185\u5b58\u8d85\u8fc7 SoftMemLimit\uff08\u9ed8\u8ba4\u7cfb\u7edf\u603b\u5185\u5b58\u7684 81%\uff09\u6216\u7cfb\u7edf\u5269\u4f59\u53ef\u7528\u5185\u5b58\u4f4e\u4e8e Warning \u6c34\u4f4d\u7ebf\uff08\u901a\u5e38\u4e0d\u5927\u4e8e 3.2GB\uff09\u65f6\u89e6\u53d1 Minor GC\uff0c\u6b64\u65f6\u67e5\u8be2\u4f1a\u5728 Allocator \u5206\u914d\u5185\u5b58\u65f6\u6682\u505c\uff0c\u540c\u65f6\u5bfc\u5165\u5f3a\u5236\u4e0b\u5237\u7f13\u5b58\u4e2d\u7684\u6570\u636e\uff0c\u5e76\u91ca\u653e\u90e8\u5206 Data Page Cache \u4ee5\u53ca\u8fc7\u671f\u7684 Segment Cache \u7b49\uff0c\u82e5\u91ca\u653e\u7684\u5185\u5b58\u4e0d\u8db3\u8fdb\u7a0b\u5185\u5b58\u7684 10%\uff0c\u82e5\u542f\u7528\u4e86\u67e5\u8be2\u5185\u5b58\u8d85\u53d1\uff0c\u5219\u4ece\u5185\u5b58\u8d85\u53d1\u6bd4\u4f8b\u5927\u7684\u67e5\u8be2\u5f00\u59cb Cancel\uff0c\u76f4\u5230\u91ca\u653e 10% \u7684\u8fdb\u7a0b\u5185\u5b58\u6216\u6ca1\u6709\u67e5\u8be2\u53ef\u88ab Cancel\uff0c\u7136\u540e\u8c03\u4f4e\u7cfb\u7edf\u5185\u5b58\u72b6\u6001\u83b7\u53d6\u95f4\u9694\u548c GC \u95f4\u9694\uff0c\u5176\u4ed6\u67e5\u8be2\u5728\u53d1\u73b0\u5269\u4f59\u5185\u5b58\u540e\u5c06\u7ee7\u7eed\u6267\u884c\u3002"),(0,l.yg)("p",null,"\u82e5 BE \u8fdb\u7a0b\u5185\u5b58\u8d85\u8fc7 MemLimit\uff08\u9ed8\u8ba4\u7cfb\u7edf\u603b\u5185\u5b58\u7684 90%\uff09\u6216\u7cfb\u7edf\u5269\u4f59\u53ef\u7528\u5185\u5b58\u4f4e\u4e8e Low \u6c34\u4f4d\u7ebf\uff08\u901a\u5e38\u4e0d\u5927\u4e8e 1.6GB\uff09\u65f6\u89e6\u53d1 Full GC\uff0c\u6b64\u65f6\u9664\u4e0a\u8ff0\u64cd\u4f5c\u5916\uff0c\u5bfc\u5165\u5728\u5f3a\u5236\u4e0b\u5237\u7f13\u5b58\u6570\u636e\u65f6\u4e5f\u5c06\u6682\u505c\uff0c\u5e76\u91ca\u653e\u5168\u90e8 Data Page Cache \u548c\u5927\u90e8\u5206\u5176\u4ed6 Cache\uff0c\u5982\u679c\u91ca\u653e\u7684\u5185\u5b58\u4e0d\u8db3 20%\uff0c\u5c06\u5f00\u59cb\u6309\u4e00\u5b9a\u7b56\u7565\u5728\u6240\u6709\u67e5\u8be2\u548c\u5bfc\u5165\u7684 MemTracker \u5217\u8868\u4e2d\u67e5\u627e\uff0c\u4f9d\u6b21 Cancel \u5185\u5b58\u5360\u7528\u5927\u7684\u67e5\u8be2\u3001\u5185\u5b58\u8d85\u53d1\u6bd4\u4f8b\u5927\u7684\u5bfc\u5165\u3001\u5185\u5b58\u5360\u7528\u5927\u7684\u5bfc\u5165\uff0c\u76f4\u5230\u91ca\u653e 20% \u7684\u8fdb\u7a0b\u5185\u5b58\u540e\uff0c\u8c03\u9ad8\u7cfb\u7edf\u5185\u5b58\u72b6\u6001\u83b7\u53d6\u95f4\u9694\u548c GC \u95f4\u9694\uff0c\u5176\u4ed6\u67e5\u8be2\u548c\u5bfc\u5165\u4e5f\u5c06\u7ee7\u7eed\u6267\u884c\uff0cGC \u7684\u8017\u65f6\u901a\u5e38\u5728\u51e0\u767e us \u5230\u51e0\u5341 ms \u4e4b\u95f4\u3002"),(0,l.yg)("h2",{id:"\u5185\u5b58\u9650\u5236\u548c\u6c34\u4f4d\u7ebf\u8ba1\u7b97\u65b9\u6cd5"},"\u5185\u5b58\u9650\u5236\u548c\u6c34\u4f4d\u7ebf\u8ba1\u7b97\u65b9\u6cd5"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u8fdb\u7a0b\u5185\u5b58\u4e0a\u9650 MemLimit = ",(0,l.yg)("inlineCode",{parentName:"p"},"be.conf/mem_limit * PhysicalMemory"),", \u9ed8\u8ba4\u7cfb\u7edf\u603b\u5185\u5b58\u7684 90%\uff0c\u5177\u4f53\u53c2\u8003 \u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u8fdb\u7a0b\u5185\u5b58\u8f6f\u9650 SoftMemLimit = ",(0,l.yg)("inlineCode",{parentName:"p"},"be.conf/mem_limit * PhysicalMemory * be.conf/soft_mem_limit_frac"),", \u9ed8\u8ba4\u7cfb\u7edf\u603b\u5185\u5b58\u7684 81%\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u7cfb\u7edf\u5269\u4f59\u53ef\u7528\u5185\u5b58\u4f4e\u6c34\u4f4d\u7ebf LowWaterMark = ",(0,l.yg)("inlineCode",{parentName:"p"},"be.conf/max_sys_mem_available_low_water_mark_bytes"),"\uff0c\u9ed8\u8ba4\u7b49\u4e8e -1\uff0c\u6b64\u65f6 LowWaterMark = ",(0,l.yg)("inlineCode",{parentName:"p"},"min(PhysicalMemory - MemLimit, PhysicalMemory * 0.05)"),", \u5728 64G \u5185\u5b58\u7684\u673a\u5668\u4e0a LowWaterMark \u7684\u503c\u7565\u5c0f\u4e8e 3.2 GB\uff08\u56e0\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"PhysicalMemory")," \u7684\u771f\u5b9e\u503c\u5f80\u5f80\u5c0f\u4e8e 64G\uff09\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u7cfb\u7edf\u5269\u4f59\u53ef\u7528\u5185\u5b58\u8b66\u544a\u6c34\u4f4d\u7ebf WarningWaterMark = ",(0,l.yg)("inlineCode",{parentName:"p"},"2 * LowWaterMark")," \uff0c\u5728 64G \u5185\u5b58\u7684\u673a\u5668\u4e0a ",(0,l.yg)("inlineCode",{parentName:"p"},"WarningWaterMark")," \u9ed8\u8ba4\u7565\u5c0f\u4e8e 6.4 GB\u3002"))),(0,l.yg)("h2",{id:"\u7cfb\u7edf\u5269\u4f59\u53ef\u7528\u5185\u5b58\u8ba1\u7b97"},"\u7cfb\u7edf\u5269\u4f59\u53ef\u7528\u5185\u5b58\u8ba1\u7b97"),(0,l.yg)("p",null,"\u5f53\u9519\u8bef\u4fe1\u606f\u4e2d\u7cfb\u7edf\u53ef\u7528\u5185\u5b58\u5c0f\u4e8e\u4f4e\u6c34\u4f4d\u7ebf\u65f6\uff0c\u540c\u6837\u5f53\u4f5c\u8fdb\u7a0b\u5185\u5b58\u8d85\u9650\u5904\u7406\uff0c\u5176\u4e2d\u7cfb\u7edf\u53ef\u7528\u5185\u5b58\u7684\u503c\u6765\u81ea\u4e8e",(0,l.yg)("inlineCode",{parentName:"p"},"/proc/meminfo"),"\u4e2d\u7684",(0,l.yg)("inlineCode",{parentName:"p"},"MemAvailable"),"\uff0c\u5f53",(0,l.yg)("inlineCode",{parentName:"p"},"MemAvailable"),"\u4e0d\u8db3\u65f6\u7ee7\u7eed\u5185\u5b58\u7533\u8bf7\u53ef\u80fd\u8fd4\u56de std::bad_alloc \u6216\u8005\u5bfc\u81f4 BE \u8fdb\u7a0b OOM\uff0c\u56e0\u4e3a\u5237\u65b0\u8fdb\u7a0b\u5185\u5b58\u7edf\u8ba1\u548c BE \u5185\u5b58 GC \u90fd\u5177\u6709\u4e00\u5b9a\u7684\u6ede\u540e\u6027\uff0c\u6240\u4ee5\u9884\u7559\u5c0f\u90e8\u5206\u5185\u5b58 buffer \u4f5c\u4e3a\u4f4e\u6c34\u4f4d\u7ebf\uff0c\u5c3d\u53ef\u80fd\u907f\u514d OOM\u3002"),(0,l.yg)("p",null,"\u5176\u4e2d",(0,l.yg)("inlineCode",{parentName:"p"},"MemAvailable"),"\u662f\u64cd\u4f5c\u7cfb\u7edf\u7efc\u5408\u8003\u8651\u5f53\u524d\u7a7a\u95f2\u7684\u5185\u5b58\u3001buffer\u3001cache\u3001\u5185\u5b58\u788e\u7247\u7b49\u56e0\u7d20\u7ed9\u51fa\u7684\u4e00\u4e2a\u5728\u5c3d\u53ef\u80fd\u4e0d\u89e6\u53d1 swap \u7684\u60c5\u51b5\u4e0b\u53ef\u4ee5\u63d0\u4f9b\u7ed9\u7528\u6237\u8fdb\u7a0b\u4f7f\u7528\u7684\u5185\u5b58\u603b\u91cf\uff0c\u4e00\u4e2a\u7b80\u5355\u7684\u8ba1\u7b97\u516c\u5f0f\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},"MemAvailable = MemFree - LowWaterMark + (PageCache - min(PageCache / 2, LowWaterMark))"),"\uff0c\u548c cmd ",(0,l.yg)("inlineCode",{parentName:"p"},"free"),"\u770b\u5230\u7684",(0,l.yg)("inlineCode",{parentName:"p"},"available"),"\u503c\u76f8\u540c\uff0c\u5177\u4f53\u53ef\u53c2\u8003\uff1a"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://serverfault.com/questions/940196/why-is-memavailable-a-lot-less-than-memfreebufferscached"},"why-is-memavailable-a-lot-less-than-memfreebufferscached")),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=34e431b0ae398fc54ea69ff85ec700722c9da773"},"Linux MemAvailable")),(0,l.yg)("p",null,"\u4f4e\u6c34\u4f4d\u7ebf\u9ed8\u8ba4\u6700\u5927 3.2G\uff082.1.5 \u4e4b\u524d\u9ed8\u8ba4 1.6G\uff09\uff0c\u6839\u636e ",(0,l.yg)("inlineCode",{parentName:"p"},"MemTotal"),"\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"vm/min_free_kbytes"),"\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"confg::mem_limit"),"\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"config::max_sys_mem_available_low_water_mark_bytes"),"\u5171\u540c\u7b97\u51fa\uff0c\u5e76\u907f\u514d\u6d6a\u8d39\u8fc7\u591a\u5185\u5b58\u3002\u5176\u4e2d",(0,l.yg)("inlineCode",{parentName:"p"},"MemTotal"),"\u662f\u7cfb\u7edf\u603b\u5185\u5b58\uff0c\u53d6\u503c\u540c\u6837\u6765\u81ea",(0,l.yg)("inlineCode",{parentName:"p"},"/proc/meminfo"),"\uff1b",(0,l.yg)("inlineCode",{parentName:"p"},"vm/min_free_kbytes"),"\u662f\u64cd\u4f5c\u7cfb\u7edf\u7ed9\u5185\u5b58 GC \u8fc7\u7a0b\u9884\u7559\u7684 buffer\uff0c\u53d6\u503c\u901a\u5e38\u5728 0.4% \u5230 5% \u4e4b\u95f4\uff0c\u67d0\u4e9b\u4e91\u670d\u52a1\u5668\u4e0a",(0,l.yg)("inlineCode",{parentName:"p"},"vm/min_free_kbytes"),"\u53ef\u80fd\u4e3a 5%\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u76f4\u89c2\u4e0a\u7cfb\u7edf\u53ef\u7528\u5185\u5b58\u6bd4\u771f\u5b9e\u503c\u5c11\uff1b\u8c03\u5927",(0,l.yg)("inlineCode",{parentName:"p"},"config::max_sys_mem_available_low_water_mark_bytes"),"\u5c06\u5728\u5927\u4e8e 64G \u5185\u5b58\u7684\u673a\u5668\u4e0a\uff0c\u4e3a Full GC \u9884\u7559\u66f4\u591a\u7684\u5185\u5b58 buffer\uff0c\u53cd\u4e4b\u8c03\u5c0f\u5c06\u5c3d\u53ef\u80fd\u5145\u5206\u4f7f\u7528\u5185\u5b58\u3002"))}s.isMDXComponent=!0},338493:(e,a,r)=>{r.d(a,{A:()=>n});const n=r.p+"assets/images/memory-allocator-e75cd4ce675cb9429bb949a249c50b9e.png"},721230:(e,a,r)=>{r.d(a,{A:()=>n});const n=r.p+"assets/images/memory-gc-8b3c593fff57871d8d78efe9d7e94aea.png"},824961:(e,a,r)=>{r.d(a,{A:()=>n});const n=r.p+"assets/images/memory-management-overview-18bdce4244c3b30be40154a1c9031cf1.png"}}]);