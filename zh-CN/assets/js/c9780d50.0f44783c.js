"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[807701],{15680:(e,n,a)=>{a.d(n,{xA:()=>s,yg:()=>d});var t=a(296540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=t.createContext({}),g=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},s=function(e){var n=g(e.components);return t.createElement(o.Provider,{value:n},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=g(a),c=l,d=u["".concat(o,".").concat(c)]||u[c]||h[c]||r;return a?t.createElement(d,i(i({ref:n},s),{},{components:a})):t.createElement(d,i({ref:n},s))}));function d(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[u]="string"==typeof e?e:l,i[1]=p;for(var g=2;g<r;g++)i[g]=a[g];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},86080:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>p,toc:()=>g});var t=a(58168),l=(a(296540),a(15680));const r={title:"Release 1.1.0",language:"zh-CN"},i=void 0,p={unversionedId:"releasenotes/v1.1/release-1.1.0",id:"version-3.0/releasenotes/v1.1/release-1.1.0",title:"Release 1.1.0",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/releasenotes/v1.1/release-1.1.0.md",sourceDirName:"releasenotes/v1.1",slug:"/releasenotes/v1.1/release-1.1.0",permalink:"/zh-CN/docs/releasenotes/v1.1/release-1.1.0",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Release 1.1.0",language:"zh-CN"},sidebar:"releasenotes",previous:{title:"Release 1.1.1",permalink:"/zh-CN/docs/releasenotes/v1.1/release-1.1.1"}},o={},g=[{value:"\u5347\u7ea7\u8bf4\u660e",id:"\u5347\u7ea7\u8bf4\u660e",level:2},{value:"\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u9ed8\u8ba4\u5f00\u542f",id:"\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u9ed8\u8ba4\u5f00\u542f",level:3},{value:"BE \u4e8c\u8fdb\u5236\u6587\u4ef6\u66f4\u540d",id:"be-\u4e8c\u8fdb\u5236\u6587\u4ef6\u66f4\u540d",level:3},{value:"Segment \u5b58\u50a8\u683c\u5f0f\u5347\u7ea7",id:"segment-\u5b58\u50a8\u683c\u5f0f\u5347\u7ea7",level:3},{value:"\u6b63\u5e38\u5347\u7ea7",id:"\u6b63\u5e38\u5347\u7ea7",level:3},{value:"\u91cd\u8981\u529f\u80fd",id:"\u91cd\u8981\u529f\u80fd",level:2},{value:"\u652f\u6301\u6570\u636e\u968f\u673a\u5206\u5e03 \u5b9e\u9a8c\u6027\u529f\u80fd(https://github.com/apache/doris/pull/8259) #8041",id:"\u652f\u6301\u6570\u636e\u968f\u673a\u5206\u5e03-\u5b9e\u9a8c\u6027\u529f\u80fdhttpsgithubcomapachedorispull8259-8041",level:3},{value:"\u652f\u6301\u521b\u5efa Iceberg \u5916\u90e8\u8868 \u5b9e\u9a8c\u6027\u529f\u80fd(https://github.com/apache/doris/pull/7391) #7981 #8179",id:"\u652f\u6301\u521b\u5efa-iceberg-\u5916\u90e8\u8868-\u5b9e\u9a8c\u6027\u529f\u80fdhttpsgithubcomapachedorispull7391-7981-8179",level:3},{value:"\u589e\u52a0 ZSTD \u538b\u7f29\u7b97\u6cd5 #8923 #9747",id:"\u589e\u52a0-zstd-\u538b\u7f29\u7b97\u6cd5-8923-9747",level:3},{value:"\u529f\u80fd\u4f18\u5316",id:"\u529f\u80fd\u4f18\u5316",level:2},{value:"<strong>\u66f4\u5168\u9762\u7684\u5411\u91cf\u5316\u652f\u6301</strong>",id:"\u66f4\u5168\u9762\u7684\u5411\u91cf\u5316\u652f\u6301",level:3},{value:"Compaction \u903b\u8f91\u4f18\u5316\u4e0e\u5b9e\u65f6\u6027\u4fdd\u8bc1 #10153",id:"compaction-\u903b\u8f91\u4f18\u5316\u4e0e\u5b9e\u65f6\u6027\u4fdd\u8bc1-10153",level:3},{value:"Parquet \u548c ORC \u6587\u4ef6\u7684\u8bfb\u53d6\u6548\u7387\u4f18\u5316 #9472",id:"parquet-\u548c-orc-\u6587\u4ef6\u7684\u8bfb\u53d6\u6548\u7387\u4f18\u5316-9472",level:3},{value:"\u66f4\u5b89\u5168\u7684\u5143\u6570\u636e Checkpoint #9180 #9192",id:"\u66f4\u5b89\u5168\u7684\u5143\u6570\u636e-checkpoint-9180-9192",level:3},{value:"Bug \u4fee\u590d",id:"bug-\u4fee\u590d",level:2},{value:"\u4fee\u590d\u7531\u4e8e\u7f3a\u5c11\u6570\u636e\u7248\u672c\u800c\u65e0\u6cd5\u67e5\u8be2\u6570\u636e\u7684\u95ee\u9898\u3002\uff08\u4e25\u91cd\uff09#9267 #9266",id:"\u4fee\u590d\u7531\u4e8e\u7f3a\u5c11\u6570\u636e\u7248\u672c\u800c\u65e0\u6cd5\u67e5\u8be2\u6570\u636e\u7684\u95ee\u9898\u4e25\u91cd9267-9266",level:3},{value:"\u89e3\u51b3\u4e86\u8d44\u6e90\u9694\u79bb\u5bf9\u52a0\u8f7d\u4efb\u52a1\u7684\u8d44\u6e90\u4f7f\u7528\u9650\u5236\u65e0\u6548\u7684\u95ee\u9898\uff08\u4e2d\u7b49\uff09#9492",id:"\u89e3\u51b3\u4e86\u8d44\u6e90\u9694\u79bb\u5bf9\u52a0\u8f7d\u4efb\u52a1\u7684\u8d44\u6e90\u4f7f\u7528\u9650\u5236\u65e0\u6548\u7684\u95ee\u9898\u4e2d\u7b499492",level:3},{value:"\u4fee\u590d\u4f7f\u7528 HTTP BRPC \u8d85\u8fc7 2GB \u4f20\u8f93\u7f51\u7edc\u6570\u636e\u5305\u5bfc\u81f4\u6570\u636e\u4f20\u8f93\u9519\u8bef\u7684\u95ee\u9898\uff08\u4e2d\u7b49\uff09#9770",id:"\u4fee\u590d\u4f7f\u7528-http-brpc-\u8d85\u8fc7-2gb-\u4f20\u8f93\u7f51\u7edc\u6570\u636e\u5305\u5bfc\u81f4\u6570\u636e\u4f20\u8f93\u9519\u8bef\u7684\u95ee\u9898\u4e2d\u7b499770",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2},{value:"\u7981\u7528 Mini Load",id:"\u7981\u7528-mini-load",level:3},{value:"\u5b8c\u5168\u7981\u7528 SegmentV1 \u5b58\u50a8\u683c\u5f0f",id:"\u5b8c\u5168\u7981\u7528-segmentv1-\u5b58\u50a8\u683c\u5f0f",level:3},{value:"\u9650\u5236 String \u7c7b\u578b\u7684\u6700\u5927\u957f\u5ea6 #8567",id:"\u9650\u5236-string-\u7c7b\u578b\u7684\u6700\u5927\u957f\u5ea6-8567",level:3},{value:"\u4fee\u590d fastjson \u76f8\u5173\u6f0f\u6d1e #9763",id:"\u4fee\u590d-fastjson-\u76f8\u5173\u6f0f\u6d1e-9763",level:3},{value:"\u6dfb\u52a0\u4e86 ADMIN DIAGNOSE TABLET \u547d\u4ee4 #8839",id:"\u6dfb\u52a0\u4e86-admin-diagnose-tablet-\u547d\u4ee4-8839",level:3},{value:"\u4e0b\u8f7d\u4f7f\u7528",id:"\u4e0b\u8f7d\u4f7f\u7528",level:2},{value:"\u4e0b\u8f7d\u94fe\u63a5",id:"\u4e0b\u8f7d\u94fe\u63a5",level:3},{value:"\u5347\u7ea7\u8bf4\u660e",id:"\u5347\u7ea7\u8bf4\u660e-1",level:3},{value:"\u610f\u89c1\u53cd\u9988",id:"\u610f\u89c1\u53cd\u9988",level:3},{value:"\u81f4\u8c22",id:"\u81f4\u8c22",level:2}],s={toc:g},u="wrapper";function h(e){let{components:n,...r}=e;return(0,l.yg)(u,(0,t.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"\u5728 1.1 \u7248\u672c\u4e2d\uff0c",(0,l.yg)("strong",{parentName:"p"},"\u6211\u4eec\u5b9e\u73b0\u4e86\u8ba1\u7b97\u5c42\u548c\u5b58\u50a8\u5c42\u7684\u5168\u9762\u5411\u91cf\u5316\u3001\u6b63\u5f0f\u5c06\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u4f5c\u4e3a\u7a33\u5b9a\u529f\u80fd\u8fdb\u884c\u5168\u9762\u542f\u7528"),"\uff0c\u6240\u6709\u67e5\u8be2\u9ed8\u8ba4\u901a\u8fc7\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u6765\u6267\u884c\uff0c",(0,l.yg)("strong",{parentName:"p"},"\u6027\u80fd\u8f83\u4e4b\u524d\u7248\u672c\u6709 3-5 \u500d\u7684\u5de8\u5927\u63d0\u5347"),"\uff1b\u589e\u52a0\u4e86\u76f4\u63a5\u8bbf\u95ee Apache Iceberg \u5916\u90e8\u8868\u7684\u80fd\u529b\uff0c\u652f\u6301\u5bf9 Doris \u548c Iceberg \u4e2d\u7684\u6570\u636e\u8fdb\u884c\u8054\u90a6\u67e5\u8be2\uff0c",(0,l.yg)("strong",{parentName:"p"},"\u6269\u5c55\u4e86 Apache Doris \u5728\u6570\u636e\u6e56\u4e0a\u7684\u5206\u6790\u80fd\u529b"),"\uff1b\u5728\u539f\u6709\u7684 LZ4 \u57fa\u7840\u4e0a\u589e\u52a0\u4e86 ZSTD \u538b\u7f29\u7b97\u6cd5\uff0c\u8fdb\u4e00\u6b65\u63d0\u5347\u4e86\u6570\u636e\u538b\u7f29\u7387\uff1b",(0,l.yg)("strong",{parentName:"p"},"\u4fee\u590d\u4e86\u8bf8\u591a\u4e4b\u524d\u7248\u672c\u5b58\u5728\u7684\u6027\u80fd\u4e0e\u7a33\u5b9a\u6027\u95ee\u9898"),"\uff0c\u4f7f\u7cfb\u7edf\u7a33\u5b9a\u6027\u5f97\u5230\u5927\u5e45\u63d0\u5347\u3002\u6b22\u8fce\u5927\u5bb6\u4e0b\u8f7d\u4f7f\u7528\u3002"),(0,l.yg)("h2",{id:"\u5347\u7ea7\u8bf4\u660e"},"\u5347\u7ea7\u8bf4\u660e"),(0,l.yg)("h3",{id:"\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u9ed8\u8ba4\u5f00\u542f"},"\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u9ed8\u8ba4\u5f00\u542f"),(0,l.yg)("p",null,"\u5728 Apache Doris 1.0 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5f15\u5165\u4e86\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u4f5c\u4e3a\u5b9e\u9a8c\u6027\u529f\u80fd\u3002\u7528\u6237\u9700\u8981\u5728\u6267\u884c SQL \u67e5\u8be2\u624b\u5de5\u5f00\u542f\uff0c\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"set batch_size = 4096")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"set enable_vectorized_engine = true "),"\u914d\u7f6e session \u53d8\u91cf\u6765\u5f00\u542f\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u3002"),(0,l.yg)("p",null,"\u5728 1.1 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u6b63\u5f0f\u5c06\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u4f5c\u4e3a\u7a33\u5b9a\u529f\u80fd\u8fdb\u884c\u4e86\u5168\u9762\u542f\u7528\uff0csession \u53d8\u91cf",(0,l.yg)("inlineCode",{parentName:"p"},"enable_vectorized_engine")," \u9ed8\u8ba4\u8bbe\u7f6e\u4e3a true\uff0c\u65e0\u9700\u7528\u6237\u624b\u5de5\u5f00\u542f\uff0c\u6240\u6709\u67e5\u8be2\u9ed8\u8ba4\u901a\u8fc7\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u6765\u6267\u884c\u3002"),(0,l.yg)("h3",{id:"be-\u4e8c\u8fdb\u5236\u6587\u4ef6\u66f4\u540d"},"BE \u4e8c\u8fdb\u5236\u6587\u4ef6\u66f4\u540d"),(0,l.yg)("p",null,"BE \u4e8c\u8fdb\u5236\u6587\u4ef6\u4ece\u539f\u6709\u7684 palo_be \u66f4\u540d\u4e3a doris_be \uff0c\u5982\u679c\u60a8\u4ee5\u524d\u4f9d\u8d56\u8fdb\u7a0b\u540d\u79f0\u8fdb\u884c\u96c6\u7fa4\u7ba1\u7406\u548c\u5176\u4ed6\u64cd\u4f5c\uff0c\u8bf7\u6ce8\u610f\u4fee\u6539\u76f8\u5173\u811a\u672c\u3002"),(0,l.yg)("h3",{id:"segment-\u5b58\u50a8\u683c\u5f0f\u5347\u7ea7"},"Segment \u5b58\u50a8\u683c\u5f0f\u5347\u7ea7"),(0,l.yg)("p",null,"Apache Doris \u65e9\u671f\u7248\u672c\u7684\u5b58\u50a8\u683c\u5f0f\u4e3a Segment V1\uff0c\u5728 0.12 \u7248\u672c\u4e2d\u6211\u4eec\u5b9e\u73b0\u4e86\u65b0\u7684\u5b58\u50a8\u683c\u5f0f Segment V2 \uff0c\u5f15\u5165\u4e86 Bitmap \u7d22\u5f15\u3001\u5185\u5b58\u8868\u3001Page Cache\u3001\u5b57\u5178\u538b\u7f29\u4ee5\u53ca\u5ef6\u8fdf\u7269\u5316\u7b49\u8bf8\u591a\u7279\u6027\u3002\u4ece 0.13 \u7248\u672c\u5f00\u59cb\uff0c\u65b0\u5efa\u8868\u7684\u9ed8\u8ba4\u5b58\u50a8\u683c\u5f0f\u4e3a Segment V2\uff0c\u4e0e\u6b64\u540c\u65f6\u4e5f\u4fdd\u7559\u4e86\u5bf9 Segment V1 \u683c\u5f0f\u7684\u517c\u5bb9\u3002"),(0,l.yg)("p",null,"\u4e3a\u4e86\u4fdd\u8bc1\u4ee3\u7801\u7ed3\u6784\u7684\u53ef\u7ef4\u62a4\u6027\u3001\u964d\u4f4e\u5197\u4f59\u5386\u53f2\u4ee3\u7801\u5e26\u6765\u7684\u989d\u5916\u5b66\u4e60\u53ca\u5f00\u53d1\u6210\u672c\uff0c\u6211\u4eec\u51b3\u5b9a\u4ece\u4e0b\u4e00\u4e2a\u7248\u672c\u8d77\u4e0d\u518d\u652f\u6301 Segment v1 \u5b58\u50a8\u683c\u5f0f\uff0c\u9884\u8ba1\u5728 Apache Doris 1.2 \u7248\u672c\u4e2d\u5c06\u5220\u9664\u8fd9\u90e8\u5206\u4ee3\u7801\u3002"),(0,l.yg)("h3",{id:"\u6b63\u5e38\u5347\u7ea7"},"\u6b63\u5e38\u5347\u7ea7"),(0,l.yg)("p",null,"\u6b63\u5e38\u5347\u7ea7\u64cd\u4f5c\u8bf7\u6309\u7167\u5b98\u7f51\u4e0a\u7684\u96c6\u7fa4\u5347\u7ea7\u6587\u6863\u8fdb\u884c\u6eda\u52a8\u5347\u7ea7\u5373\u53ef\u3002"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/admin-manual/cluster-management/upgrade"},"https://doris.apache.org/zh-CN/docs/admin-manual/cluster-management/upgrade")),(0,l.yg)("h2",{id:"\u91cd\u8981\u529f\u80fd"},"\u91cd\u8981\u529f\u80fd"),(0,l.yg)("h3",{id:"\u652f\u6301\u6570\u636e\u968f\u673a\u5206\u5e03-\u5b9e\u9a8c\u6027\u529f\u80fdhttpsgithubcomapachedorispull8259-8041"},"\u652f\u6301\u6570\u636e\u968f\u673a\u5206\u5e03 ","[\u5b9e\u9a8c\u6027\u529f\u80fd][#8259]","(",(0,l.yg)("a",{parentName:"h3",href:"https://github.com/apache/doris/pull/8259"},"https://github.com/apache/doris/pull/8259"),") ",(0,l.yg)("a",{parentName:"h3",href:"https://github.com/apache/doris/pull/8041"},"#8041")),(0,l.yg)("p",null,"\u5728\u67d0\u4e9b\u573a\u666f\u4e2d\uff08\u4f8b\u5982\u65e5\u5fd7\u5206\u6790\u7c7b\u573a\u666f\uff09\uff0c\u7528\u6237\u53ef\u80fd\u65e0\u6cd5\u627e\u5230\u4e00\u4e2a\u5408\u9002\u7684\u5206\u6876\u952e\u6765\u907f\u514d\u6570\u636e\u503e\u659c\uff0c\u56e0\u6b64\u9700\u8981\u7531\u7cfb\u7edf\u63d0\u4f9b\u989d\u5916\u7684\u5206\u5e03\u65b9\u5f0f\u6765\u89e3\u51b3\u6570\u636e\u503e\u659c\u7684\u95ee\u9898\u3002"),(0,l.yg)("p",null,"\u56e0\u6b64\u901a\u8fc7\u5728\u5efa\u8868\u65f6\u53ef\u4ee5\u4e0d\u6307\u5b9a\u5177\u4f53\u5206\u6876\u952e\uff0c\u9009\u62e9\u4f7f\u7528\u968f\u673a\u5206\u5e03\u5bf9\u6570\u636e\u8fdb\u884c\u5206\u6876",(0,l.yg)("inlineCode",{parentName:"p"},"DISTRIBUTED BY random BUCKETS number"),"\uff0c\u6570\u636e\u5bfc\u5165\u65f6\u5c06\u4f1a\u968f\u673a\u5199\u5165\u5355\u4e2a Tablet \uff0c\u4ee5\u51cf\u5c11\u52a0\u8f7d\u8fc7\u7a0b\u4e2d\u7684\u6570\u636e\u6247\u51fa\uff0c\u5e76\u51cf\u5c11\u8d44\u6e90\u5f00\u9500\u3001\u63d0\u5347\u7cfb\u7edf\u7a33\u5b9a\u6027\u3002"),(0,l.yg)("h3",{id:"\u652f\u6301\u521b\u5efa-iceberg-\u5916\u90e8\u8868-\u5b9e\u9a8c\u6027\u529f\u80fdhttpsgithubcomapachedorispull7391-7981-8179"},"\u652f\u6301\u521b\u5efa Iceberg \u5916\u90e8\u8868 ","[\u5b9e\u9a8c\u6027\u529f\u80fd][#7391]","(",(0,l.yg)("a",{parentName:"h3",href:"https://github.com/apache/doris/pull/7391"},"https://github.com/apache/doris/pull/7391"),") ",(0,l.yg)("a",{parentName:"h3",href:"https://github.com/apache/doris/pull/7981"},"#7981")," ",(0,l.yg)("a",{parentName:"h3",href:"https://github.com/apache/doris/pull/8179"},"#8179")),(0,l.yg)("p",null,"Iceberg \u5916\u90e8\u8868\u4e3a Apache Doris \u63d0\u4f9b\u4e86\u76f4\u63a5\u8bbf\u95ee\u5b58\u50a8\u5728 Iceberg \u6570\u636e\u7684\u80fd\u529b\u3002\u901a\u8fc7 Iceberg \u5916\u90e8\u8868\u53ef\u4ee5\u5b9e\u73b0\u5bf9\u672c\u5730\u5b58\u50a8\u548c Iceberg \u5b58\u50a8\u7684\u6570\u636e\u8fdb\u884c\u8054\u90a6\u67e5\u8be2\uff0c\u7701\u53bb\u7e41\u7410\u7684\u6570\u636e\u52a0\u8f7d\u5de5\u4f5c\u3001\u7b80\u5316\u6570\u636e\u5206\u6790\u7684\u7cfb\u7edf\u67b6\u6784\uff0c\u5e76\u8fdb\u884c\u66f4\u590d\u6742\u7684\u5206\u6790\u64cd\u4f5c\u3002"),(0,l.yg)("p",null,"\u5728 1.1 \u7248\u672c\u4e2d\uff0cApache Doris \u652f\u6301\u4e86\u521b\u5efa Iceberg \u5916\u90e8\u8868\u5e76\u67e5\u8be2\u6570\u636e\uff0c\u5e76\u652f\u6301\u901a\u8fc7 REFRESH \u547d\u4ee4\u5b9e\u73b0 Iceberg \u6570\u636e\u5e93\u4e2d\u6240\u6709\u8868 Schema \u7684\u81ea\u52a8\u540c\u6b65\u3002"),(0,l.yg)("h3",{id:"\u589e\u52a0-zstd-\u538b\u7f29\u7b97\u6cd5-8923-9747"},"\u589e\u52a0 ZSTD \u538b\u7f29\u7b97\u6cd5 ",(0,l.yg)("a",{parentName:"h3",href:"https://github.com/apache/doris/pull/8923"},"#8923")," ",(0,l.yg)("a",{parentName:"h3",href:"https://github.com/apache/doris/pull/9747"},"#9747")),(0,l.yg)("p",null,"\u76ee\u524d Apache Doris \u4e2d\u6570\u636e\u538b\u7f29\u65b9\u6cd5\u662f\u7cfb\u7edf\u7edf\u4e00\u6307\u5b9a\u7684\uff0c\u9ed8\u8ba4\u4e3a LZ4\u3002\u9488\u5bf9\u90e8\u5206\u5bf9\u6570\u636e\u5b58\u50a8\u6210\u672c\u654f\u611f\u7684\u573a\u666f\uff0c\u4f8b\u5982\u65e5\u5fd7\u7c7b\u573a\u666f\uff0c\u539f\u6709\u7684\u6570\u636e\u538b\u7f29\u7387\u9700\u6c42\u65e0\u6cd5\u5f97\u5230\u6ee1\u8db3\u3002"),(0,l.yg)("p",null,"\u5728 1.1 \u7248\u672c\u4e2d\uff0c\u7528\u6237\u5efa\u8868\u65f6\u53ef\u4ee5\u5728\u8868\u5c5e\u6027\u4e2d\u8bbe\u7f6e",(0,l.yg)("inlineCode",{parentName:"p"},'"compression"="zstd"')," \u5c06\u538b\u7f29\u65b9\u6cd5\u6307\u5b9a\u4e3a ZSTD\u3002\u5728 25GB 1.1 \u4ebf\u884c\u7684\u6587\u672c\u65e5\u5fd7\u6d4b\u8bd5\u6570\u636e\u4e2d\uff0c",(0,l.yg)("strong",{parentName:"p"},"\u6700\u9ad8\u83b7\u5f97\u4e86\u8fd1 10 \u500d\u7684\u538b\u7f29\u7387\u3001\u8f83\u539f\u6709\u538b\u7f29\u7387\u63d0\u5347\u4e86 53%\uff0c\u4ece\u78c1\u76d8\u8bfb\u53d6\u6570\u636e\u5e76\u8fdb\u884c\u89e3\u538b\u7f29\u7684\u901f\u5ea6\u63d0\u5347\u4e86 30%")," \u3002"),(0,l.yg)("h2",{id:"\u529f\u80fd\u4f18\u5316"},"\u529f\u80fd\u4f18\u5316"),(0,l.yg)("h3",{id:"\u66f4\u5168\u9762\u7684\u5411\u91cf\u5316\u652f\u6301"},(0,l.yg)("strong",{parentName:"h3"},"\u66f4\u5168\u9762\u7684\u5411\u91cf\u5316\u652f\u6301")),(0,l.yg)("p",null,"\u5728 1.1 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5b9e\u73b0\u4e86\u8ba1\u7b97\u5c42\u548c\u5b58\u50a8\u5c42\u7684\u5168\u9762\u5411\u91cf\u5316\uff0c\u5305\u62ec\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5b9e\u73b0\u4e86\u6240\u6709\u5185\u7f6e\u51fd\u6570\u7684\u5411\u91cf\u5316")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5b58\u50a8\u5c42\u5b9e\u73b0\u5411\u91cf\u5316\uff0c\u5e76\u652f\u6301\u4e86\u4f4e\u57fa\u6570\u5b57\u7b26\u4e32\u5217\u7684\u5b57\u5178\u4f18\u5316")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4f18\u5316\u5e76\u89e3\u51b3\u4e86\u5411\u91cf\u5316\u5f15\u64ce\u7684\u5927\u91cf\u6027\u80fd\u548c\u7a33\u5b9a\u6027\u95ee\u9898\u3002"))),(0,l.yg)("p",null,"\u6211\u4eec\u5bf9 Apache Doris 1.1 \u7248\u672c\u4e0e 0.15 \u7248\u672c\u5206\u522b\u5728 SSB \u548c TPC-H \u6807\u51c6\u6d4b\u8bd5\u6570\u636e\u96c6\u4e0a\u8fdb\u884c\u4e86\u6027\u80fd\u6d4b\u8bd5\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5728 SSB \u6d4b\u8bd5\u6570\u636e\u96c6\u7684\u5168\u90e8 13 \u4e2a SQL \u4e0a\uff0c1.1 \u7248\u672c\u5747\u4f18\u4e8e 0.15 \u7248\u672c\uff0c\u6574\u4f53\u6027\u80fd\u7ea6\u63d0\u5347\u4e86 3 \u500d\uff0c\u89e3\u51b3\u4e86 1.0 \u7248\u672c\u4e2d\u5b58\u5728\u7684\u90e8\u5206\u573a\u666f\u6027\u80fd\u52a3\u5316\u95ee\u9898\uff1b")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5728 TPC-H \u6d4b\u8bd5\u6570\u636e\u96c6\u7684\u5168\u90e8 22 \u4e2a SQL \u4e0a\uff0c1.1 \u7248\u672c\u5747\u4f18\u4e8e 0.15 \u7248\u672c\uff0c\u6574\u4f53\u6027\u80fd\u7ea6\u63d0\u5347\u4e86 4.5 \u500d\uff0c\u90e8\u5206\u573a\u666f\u6027\u80fd\u8fbe\u5230\u4e86\u5341\u4f59\u500d\u7684\u63d0\u5347\uff1b"))),(0,l.yg)("p",null,(0,l.yg)("img",{src:a(462656).A,width:"1280",height:"554"})),(0,l.yg)("p",{align:"center"},"SSB \u6d4b\u8bd5\u6570\u636e\u96c6"),(0,l.yg)("p",null,(0,l.yg)("img",{src:a(942968).A,width:"1280",height:"596"})),(0,l.yg)("p",{align:"center"},"TPC-H \u6d4b\u8bd5\u6570\u636e\u96c6"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a\uff1a")),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/benchmark/ssb"},"https://doris.apache.org/zh-CN/docs/benchmark/ssb")),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/benchmark/tpch"},"https://doris.apache.org/zh-CN/docs/benchmark/tpch")),(0,l.yg)("h3",{id:"compaction-\u903b\u8f91\u4f18\u5316\u4e0e\u5b9e\u65f6\u6027\u4fdd\u8bc1-10153"},"Compaction \u903b\u8f91\u4f18\u5316\u4e0e\u5b9e\u65f6\u6027\u4fdd\u8bc1 ",(0,l.yg)("a",{parentName:"h3",href:"https://github.com/apache/doris/pull/10153"},"#10153")),(0,l.yg)("p",null,"\u5728 Apache Doris \u4e2d\u6bcf\u6b21 Commit \u90fd\u4f1a\u4ea7\u751f\u4e00\u4e2a\u6570\u636e\u7248\u672c\uff0c\u5728\u9ad8\u5e76\u53d1\u5199\u5165\u573a\u666f\u4e0b\uff0c\u5bb9\u6613\u51fa\u73b0\u56e0\u6570\u636e\u7248\u672c\u8fc7\u591a\u4e14 Compaction \u4e0d\u53ca\u65f6\u800c\u5bfc\u81f4\u7684 -235 \u9519\u8bef\uff0c\u540c\u65f6\u67e5\u8be2\u6027\u80fd\u4e5f\u4f1a\u968f\u4e4b\u4e0b\u964d\u3002"),(0,l.yg)("p",null,"\u5728 1.1 \u7248\u672c\u4e2d\u6211\u4eec\u5f15\u5165\u4e86 QuickCompaction\uff0c\u589e\u52a0\u4e86\u4e3b\u52a8\u89e6\u53d1\u5f0f\u7684 Compaction \u68c0\u67e5\uff0c\u5728\u6570\u636e\u7248\u672c\u589e\u52a0\u7684\u65f6\u5019\u4e3b\u52a8\u89e6\u53d1 Compaction\uff0c\u540c\u65f6\u901a\u8fc7\u63d0\u5347\u5206\u7247\u5143\u4fe1\u606f\u626b\u63cf\u7684\u80fd\u529b\uff0c\u5feb\u901f\u53d1\u73b0\u6570\u636e\u7248\u672c\u8fc7\u591a\u7684\u5206\u7247\u5e76\u89e6\u53d1 Compaction\u3002\u901a\u8fc7\u4e3b\u52a8\u5f0f\u89e6\u53d1\u52a0\u88ab\u52a8\u5f0f\u626b\u63cf\u7684\u65b9\u5f0f\uff0c\u5f7b\u5e95\u89e3\u51b3\u6570\u636e\u5408\u5e76\u7684\u5b9e\u65f6\u6027\u95ee\u9898\u3002"),(0,l.yg)("p",null,"\u540c\u65f6\uff0c\u9488\u5bf9\u9ad8\u9891\u7684\u5c0f\u6587\u4ef6 Cumulative Compaction\uff0c\u5b9e\u73b0\u4e86 Compaction \u4efb\u52a1\u7684\u8c03\u5ea6\u9694\u79bb\uff0c\u9632\u6b62\u91cd\u91cf\u7ea7\u7684 Base Compaction \u5bf9\u65b0\u589e\u6570\u636e\u7684\u5408\u5e76\u9020\u6210\u5f71\u54cd\u3002"),(0,l.yg)("p",null,"\u6700\u540e\uff0c\u9488\u5bf9\u5c0f\u6587\u4ef6\u5408\u5e76\uff0c\u4f18\u5316\u4e86\u5c0f\u6587\u4ef6\u5408\u5e76\u7684\u7b56\u7565\uff0c\u91c7\u7528\u68af\u5ea6\u5408\u5e76\u7684\u65b9\u5f0f\uff0c\u6bcf\u6b21\u53c2\u4e0e\u5408\u5e76\u7684\u6587\u4ef6\u90fd\u5c5e\u4e8e\u540c\u4e00\u4e2a\u6570\u636e\u91cf\u7ea7\uff0c\u9632\u6b62\u5927\u5c0f\u5dee\u522b\u5f88\u5927\u7684\u7248\u672c\u8fdb\u884c\u5408\u5e76\uff0c\u9010\u6e10\u6709\u5c42\u6b21\u7684\u5408\u5e76\uff0c\u51cf\u5c11\u5355\u4e2a\u6587\u4ef6\u53c2\u4e0e\u5408\u5e76\u7684\u6b21\u6570\uff0c\u80fd\u591f\u5927\u5e45\u5730\u8282\u7701\u7cfb\u7edf\u7684 CPU \u6d88\u8017\u3002"),(0,l.yg)("p",null,(0,l.yg)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a6d5c50f16a048f3ab27357bc97b7461~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,l.yg)("p",null,"\u5728\u6570\u636e\u4e0a\u6e38\u7ef4\u6301\u6bcf\u79d2 10w \u7684\u5199\u5165\u9891\u7387\u65f6\uff0820 \u4e2a\u5e76\u53d1\u5199\u5165\u4efb\u52a1\u3001\u6bcf\u4e2a\u4f5c\u4e1a 5000 \u884c\u3001 Checkpoint \u95f4\u9694 1s\uff09\uff0c1.1 \u7248\u672c\u8868\u73b0\u5982\u4e0b\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u6570\u636e\u5feb\u901f\u5408\u5e76\uff1aTablet \u6570\u636e\u7248\u672c\u7ef4\u6301\u5728 50 \u4ee5\u4e0b\uff0cCompaction Score \u7a33\u5b9a\u3002\u76f8\u8f83\u4e8e\u4e4b\u524d\u7248\u672c\u9ad8\u5e76\u53d1\u5199\u5165\u65f6\u9891\u7e41\u51fa\u73b0\u7684 -235 \u95ee\u9898\uff0c",(0,l.yg)("strong",{parentName:"li"},"Compaction \u5408\u5e76\u6548\u7387\u6709 10 \u500d\u4ee5\u4e0a\u7684\u63d0\u5347"),"\u3002")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"CPU \u8d44\u6e90\u6d88\u8017\u663e\u8457\u964d\u4f4e\uff1a\u9488\u5bf9\u5c0f\u6587\u4ef6 Compaction \u8fdb\u884c\u4e86\u7b56\u7565\u4f18\u5316\uff0c\u5728\u4e0a\u8ff0\u9ad8\u5e76\u53d1\u5199\u5165\u573a\u666f\u4e0b\uff0c",(0,l.yg)("strong",{parentName:"li"},"CPU \u8d44\u6e90\u6d88\u8017\u964d\u4f4e 25%")," \uff1b")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u67e5\u8be2\u8017\u65f6\u7a33\u5b9a\uff1a\u63d0\u5347\u4e86\u6570\u636e\u6574\u4f53\u6709\u5e8f\u6027\uff0c\u5927\u5e45\u964d\u4f4e\u67e5\u8be2\u8017\u65f6\u7684\u6ce2\u52a8\u6027\uff0c",(0,l.yg)("strong",{parentName:"li"},"\u9ad8\u5e76\u53d1\u5199\u5165\u65f6\u7684\u67e5\u8be2\u8017\u65f6\u4e0e\u4ec5\u67e5\u8be2\u65f6\u6301\u5e73"),"\uff0c\u67e5\u8be2\u6027\u80fd\u8f83\u4e4b\u524d\u7248\u672c",(0,l.yg)("strong",{parentName:"li"},"\u6709 3-4 \u500d\u63d0\u5347"),"\u3002")),(0,l.yg)("p",null,(0,l.yg)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c79ee9efba0416d81cc7bed1a349fdf~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,l.yg)("h3",{id:"parquet-\u548c-orc-\u6587\u4ef6\u7684\u8bfb\u53d6\u6548\u7387\u4f18\u5316-9472"},"Parquet \u548c ORC \u6587\u4ef6\u7684\u8bfb\u53d6\u6548\u7387\u4f18\u5316 ",(0,l.yg)("a",{parentName:"h3",href:"https://github.com/apache/doris/pull/9472"},"#9472")),(0,l.yg)("p",null,"\u901a\u8fc7\u8c03\u6574 Arrow \u53c2\u6570\uff0c\u5229\u7528 Arrow \u7684\u591a\u7ebf\u7a0b\u8bfb\u53d6\u80fd\u529b\u6765\u52a0\u901f Arrow \u5bf9\u6bcf\u4e2a row_group \u7684\u8bfb\u53d6\uff0c\u5e76\u4fee\u6539\u6210 SPSC \u6a21\u578b\uff0c\u901a\u8fc7\u9884\u53d6\u6765\u964d\u4f4e\u7b49\u5f85\u7f51\u7edc\u7684\u4ee3\u4ef7\u3002\u4f18\u5316\u524d\u540e\u5bf9 Parquet \u6587\u4ef6\u5bfc\u5165\u7684\u6027\u80fd\u6709 4 \uff5e 5 \u500d\u7684\u63d0\u5347\u3002"),(0,l.yg)("h3",{id:"\u66f4\u5b89\u5168\u7684\u5143\u6570\u636e-checkpoint-9180-9192"},"\u66f4\u5b89\u5168\u7684\u5143\u6570\u636e Checkpoint ",(0,l.yg)("a",{parentName:"h3",href:"https://github.com/apache/doris/pull/9180"},"#9180")," ",(0,l.yg)("a",{parentName:"h3",href:"https://github.com/apache/doris/pull/9192"},"#9192")),(0,l.yg)("p",null,"\u901a\u8fc7\u5bf9\u5143\u6570\u636e\u68c0\u67e5\u70b9\u540e\u751f\u6210\u7684 image \u6587\u4ef6\u8fdb\u884c\u53cc\u91cd\u68c0\u67e5\u548c\u4fdd\u7559\u5386\u53f2 image \u6587\u4ef6\u7684\u529f\u80fd\uff0c\u89e3\u51b3\u4e86 image \u6587\u4ef6\u9519\u8bef\u5bfc\u81f4\u7684\u5143\u6570\u636e\u635f\u574f\u95ee\u9898\u3002"),(0,l.yg)("h2",{id:"bug-\u4fee\u590d"},"Bug \u4fee\u590d"),(0,l.yg)("h3",{id:"\u4fee\u590d\u7531\u4e8e\u7f3a\u5c11\u6570\u636e\u7248\u672c\u800c\u65e0\u6cd5\u67e5\u8be2\u6570\u636e\u7684\u95ee\u9898\u4e25\u91cd9267-9266"},"\u4fee\u590d\u7531\u4e8e\u7f3a\u5c11\u6570\u636e\u7248\u672c\u800c\u65e0\u6cd5\u67e5\u8be2\u6570\u636e\u7684\u95ee\u9898\u3002\uff08\u4e25\u91cd\uff09",(0,l.yg)("a",{parentName:"h3",href:"https://github.com/apache/doris/pull/9267"},"#9267")," ",(0,l.yg)("a",{parentName:"h3",href:"https://github.com/apache/doris/pull/9266"},"#9266")),(0,l.yg)("p",null,"\u95ee\u9898\u63cf\u8ff0\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},"failed to initialize storage reader. tablet=924991.xxxx, res=-214, backend=xxxx")),(0,l.yg)("p",null,"\u8be5\u95ee\u9898\u662f\u5728\u7248\u672c 1.0 \u4e2d\u5f15\u5165\u7684\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u591a\u4e2a\u526f\u672c\u7684\u6570\u636e\u7248\u672c\u4e22\u5931\u3002"),(0,l.yg)("h3",{id:"\u89e3\u51b3\u4e86\u8d44\u6e90\u9694\u79bb\u5bf9\u52a0\u8f7d\u4efb\u52a1\u7684\u8d44\u6e90\u4f7f\u7528\u9650\u5236\u65e0\u6548\u7684\u95ee\u9898\u4e2d\u7b499492"},"\u89e3\u51b3\u4e86\u8d44\u6e90\u9694\u79bb\u5bf9\u52a0\u8f7d\u4efb\u52a1\u7684\u8d44\u6e90\u4f7f\u7528\u9650\u5236\u65e0\u6548\u7684\u95ee\u9898\uff08\u4e2d\u7b49\uff09",(0,l.yg)("a",{parentName:"h3",href:"https://github.com/apache/doris/pull/9492"},"#9492")),(0,l.yg)("p",null,"\u5728 1.1 \u7248\u672c\u4e2d\uff0c Broker Load \u548c Routine Load \u5c06\u4f7f\u7528\u5177\u6709\u6307\u5b9a\u8d44\u6e90\u6807\u8bb0\u7684 BE \u8282\u70b9\u8fdb\u884c\u52a0\u8f7d\u3002"),(0,l.yg)("h3",{id:"\u4fee\u590d\u4f7f\u7528-http-brpc-\u8d85\u8fc7-2gb-\u4f20\u8f93\u7f51\u7edc\u6570\u636e\u5305\u5bfc\u81f4\u6570\u636e\u4f20\u8f93\u9519\u8bef\u7684\u95ee\u9898\u4e2d\u7b499770"},"\u4fee\u590d\u4f7f\u7528 HTTP BRPC \u8d85\u8fc7 2GB \u4f20\u8f93\u7f51\u7edc\u6570\u636e\u5305\u5bfc\u81f4\u6570\u636e\u4f20\u8f93\u9519\u8bef\u7684\u95ee\u9898\uff08\u4e2d\u7b49\uff09",(0,l.yg)("a",{parentName:"h3",href:"https://github.com/apache/doris/pull/9770"},"#9770")),(0,l.yg)("p",null,"\u5728\u4ee5\u524d\u7684\u7248\u672c\u4e2d\uff0c\u5f53\u901a\u8fc7 BRPC \u5728\u540e\u7aef\u4e4b\u95f4\u4f20\u8f93\u7684\u6570\u636e\u8d85\u8fc7 2GB \u65f6\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6570\u636e\u4f20\u8f93\u9519\u8bef\u3002"),(0,l.yg)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,l.yg)("h3",{id:"\u7981\u7528-mini-load"},"\u7981\u7528 Mini Load"),(0,l.yg)("p",null,"Mini Load \u4e0e Stream Load \u7684\u5bfc\u5165\u5b9e\u73b0\u65b9\u5f0f\u5b8c\u5168\u4e00\u81f4\uff0c\u90fd\u662f\u901a\u8fc7 HTTP \u534f\u8bae\u63d0\u4ea4\u548c\u4f20\u8f93\u6570\u636e\uff0c\u5728\u5bfc\u5165\u529f\u80fd\u652f\u6301\u4e0a Stream Load \u66f4\u52a0\u5b8c\u5907\u3002"),(0,l.yg)("p",null,"\u5728 1.1 \u7248\u672c\u4e2d\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b Mini Load \u63a5\u53e3 ",(0,l.yg)("inlineCode",{parentName:"p"},"/_load")," \u5c06\u5904\u4e8e\u7981\u7528\u72b6\u6001\uff0c\u8bf7\u7edf\u4e00\u4f7f\u7528 Stream Load \u6765\u66ff\u6362 Mini Load\u3002\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5173\u95ed FE \u914d\u7f6e\u9879 ",(0,l.yg)("inlineCode",{parentName:"p"},"disable_mini_load")," \u6765\u91cd\u65b0\u542f\u7528 Mini Load \u63a5\u53e3\u3002\u5728\u7248\u672c 1.2 \u4e2d\uff0c\u5c06\u5f7b\u5e95\u5220\u9664 Mini Load \u3002"),(0,l.yg)("h3",{id:"\u5b8c\u5168\u7981\u7528-segmentv1-\u5b58\u50a8\u683c\u5f0f"},"\u5b8c\u5168\u7981\u7528 SegmentV1 \u5b58\u50a8\u683c\u5f0f"),(0,l.yg)("p",null,"\u5728 1.1 \u7248\u672c\u4e2d\u5c06\u4e0d\u518d\u5141\u8bb8\u65b0\u521b\u5efa SegmentV1 \u5b58\u50a8\u683c\u5f0f\u7684\u6570\u636e\uff0c\u73b0\u6709\u6570\u636e\u4ecd\u53ef\u4ee5\u7ee7\u7eed\u6b63\u5e38\u8bbf\u95ee\u3002"),(0,l.yg)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 ADMIN SHOW TABLET STORAGE FORMAT \u8bed\u53e5\u68c0\u67e5\u96c6\u7fa4\u4e2d\u662f\u5426\u4ecd\u7136\u5b58\u5728 SegmentV1 \u683c\u5f0f\u7684\u6570\u636e\uff0c\u5982\u679c\u5b58\u5728\u8bf7\u52a1\u5fc5\u901a\u8fc7\u6570\u636e\u8f6c\u6362\u547d\u4ee4\u8f6c\u6362\u4e3a SegmentV2\u3002"),(0,l.yg)("p",null,"\u5728 Apache Doris 1.2 \u7248\u672c\u4e2d\u4e0d\u518d\u652f\u6301\u5bf9 Segment V1 \u6570\u636e\u7684\u8bbf\u95ee\uff0c\u540c\u65f6 Segment V1 \u4ee3\u7801\u5c06\u88ab\u5f7b\u5e95\u5220\u9664\u3002"),(0,l.yg)("h3",{id:"\u9650\u5236-string-\u7c7b\u578b\u7684\u6700\u5927\u957f\u5ea6-8567"},"\u9650\u5236 String \u7c7b\u578b\u7684\u6700\u5927\u957f\u5ea6 ",(0,l.yg)("a",{parentName:"h3",href:"https://github.com/apache/doris/pull/8567"},"#8567")),(0,l.yg)("p",null,"String \u7c7b\u578b\u662f Apache Doris \u5728 0.15 \u7248\u672c\u4e2d\u5f15\u5165\u7684\u65b0\u6570\u636e\u7c7b\u578b\uff0c\u5728\u8fc7\u53bb String \u7c7b\u578b\u7684\u6700\u5927\u957f\u5ea6\u5141\u8bb8\u4e3a 2GB\u3002"),(0,l.yg)("p",null,"\u5728 1.1 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5c06 String \u7c7b\u578b\u7684\u6700\u5927\u957f\u5ea6\u9650\u5236\u4e3a 1 MB\uff0c\u8d85\u8fc7\u6b64\u957f\u5ea6\u7684\u5b57\u7b26\u4e32\u65e0\u6cd5\u518d\u5199\u5165\uff0c\u540c\u65f6\u4e0d\u518d\u652f\u6301\u5c06 String \u7c7b\u578b\u7528\u4f5c\u8868\u7684 Key \u5217\u3001\u5206\u533a\u5217\u4ee5\u53ca\u5206\u6876\u5217\u3002"),(0,l.yg)("p",null,"\u5df2\u5199\u5165\u7684\u5b57\u7b26\u4e32\u7c7b\u578b\u53ef\u4ee5\u6b63\u5e38\u8bbf\u95ee\u3002"),(0,l.yg)("h3",{id:"\u4fee\u590d-fastjson-\u76f8\u5173\u6f0f\u6d1e-9763"},"\u4fee\u590d fastjson \u76f8\u5173\u6f0f\u6d1e ",(0,l.yg)("a",{parentName:"h3",href:"https://github.com/apache/doris/pull/9763"},"#9763")),(0,l.yg)("p",null,"\u5bf9 Canal \u7248\u672c\u8fdb\u884c\u66f4\u65b0\u4ee5\u4fee\u590d fastjson \u5b89\u5168\u6f0f\u6d1e"),(0,l.yg)("h3",{id:"\u6dfb\u52a0\u4e86-admin-diagnose-tablet-\u547d\u4ee4-8839"},"\u6dfb\u52a0\u4e86 ADMIN DIAGNOSE TABLET \u547d\u4ee4 ",(0,l.yg)("a",{parentName:"h3",href:"https://github.com/apache/doris/pull/8839"},"#8839")),(0,l.yg)("p",null,"\u901a\u8fc7 ADMIN DIAGNOSE TABLET tablet_id \u547d\u4ee4\u53ef\u4ee5\u5feb\u901f\u8bca\u65ad\u6307\u5b9a Tablet \u7684\u95ee\u9898\u3002"),(0,l.yg)("h2",{id:"\u4e0b\u8f7d\u4f7f\u7528"},"\u4e0b\u8f7d\u4f7f\u7528"),(0,l.yg)("h3",{id:"\u4e0b\u8f7d\u94fe\u63a5"},"\u4e0b\u8f7d\u94fe\u63a5"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/download"},"https://doris.apache.org/zh-CN/download")),(0,l.yg)("h3",{id:"\u5347\u7ea7\u8bf4\u660e-1"},"\u5347\u7ea7\u8bf4\u660e"),(0,l.yg)("p",null,"\u60a8\u53ef\u4ee5\u4ece Apache Doris 1.0 Release \u7248\u672c\u548c 1.0.x \u53d1\u884c\u7248\u672c\u5347\u7ea7\u5230 1.1 Release \u7248\u672c\uff0c\u5347\u7ea7\u8fc7\u7a0b\u8bf7\u5b98\u7f51\u53c2\u8003\u6587\u6863\u3002\u5982\u679c\u60a8\u5f53\u524d\u662f 0.15 Release \u7248\u672c\u6216 0.15.x \u53d1\u884c\u7248\u672c\uff0c\u53ef\u8df3\u8fc7 1.0 \u7248\u672c\u76f4\u63a5\u5347\u7ea7\u81f3 1.1\u3002"),(0,l.yg)("p",null,"[https://doris.apache.org/zh-CN/docs/admin-manual/cluster-management/upgrade]","(",(0,l.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/admin-manual/cluster-management/upgrade"},"https://doris.apache.org/zh-CN/docs/admin-manual/cluster-management/upgrade")),(0,l.yg)("h3",{id:"\u610f\u89c1\u53cd\u9988"},"\u610f\u89c1\u53cd\u9988"),(0,l.yg)("p",null,"\u5982\u679c\u60a8\u9047\u5230\u4efb\u4f55\u4f7f\u7528\u4e0a\u7684\u95ee\u9898\uff0c\u6b22\u8fce\u968f\u65f6\u901a\u8fc7 GitHub Discussion \u8bba\u575b\u6216\u8005 Dev \u90ae\u4ef6\u7ec4\u4e0e\u6211\u4eec\u53d6\u5f97\u8054\u7cfb\u3002"),(0,l.yg)("p",null,"GitHub \u8bba\u575b\uff1a",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/discussions"},"https://github.com/apache/incubator-doris/discussions")),(0,l.yg)("p",null,"Dev \u90ae\u4ef6\u7ec4\uff1a",(0,l.yg)("a",{parentName:"p",href:"dev@doris.apache.org"},"dev@doris.apache.org")),(0,l.yg)("h2",{id:"\u81f4\u8c22"},"\u81f4\u8c22"),(0,l.yg)("p",null,"Apache Doris 1.1 Release \u7248\u672c\u7684\u53d1\u5e03\u79bb\u4e0d\u5f00\u6240\u6709\u793e\u533a\u7528\u6237\u7684\u652f\u6301\uff0c\u5728\u6b64\u5411\u6240\u6709\u53c2\u4e0e\u7248\u672c\u8bbe\u8ba1\u3001\u5f00\u53d1\u3001\u6d4b\u8bd5\u3001\u8ba8\u8bba\u7684\u793e\u533a\u8d21\u732e\u8005\u4eec\u8868\u793a\u611f\u8c22\uff0c\u4ed6\u4eec\u5206\u522b\u662f\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"\n@adonis0147\n\n@airborne12\n\n@amosbird\n\n@aopangzi\n\n@arthuryangcs\n\n@awakeljw\n\n@BePPPower\n\n@BiteTheDDDDt\n\n@bridgeDream\n\n@caiconghui\n\n@cambyzju\n\n@ccoffline\n\n@chenlinzhong\n\n@daikon12\n\n@DarvenDuan\n\n@dataalive\n\n@dataroaring\n\n@deardeng\n\n@Doris-Extras\n\n@emerkfu\n\n@EmmyMiao87\n\n@englefly\n\n@Gabriel39\n\n@GoGoWen\n\n@gtchaos\n\n@HappenLee\n\n@hello-stephen\n\n@Henry2SS\n\n@hewei-nju\n\n@hf200012\n\n@jacktengg\n\n@jackwener\n\n@Jibing-Li\n\n@JNSimba\n\n@kangshisen\n\n@Kikyou1997\n\n@kylinmac\n\n@Lchangliang\n\n@leo65535\n\n@liaoxin01\n\n@liutang123\n\n@lovingfeel\n\n@luozenglin\n\n@luwei16\n\n@luzhijing\n\n@mklzl\n\n@morningman\n\n@morrySnow\n\n@nextdreamblue\n\n@Nivane\n\n@pengxiangyu\n\n@qidaye\n\n@qzsee\n\n@SaintBacchus\n\n@SleepyBear96\n\n@smallhibiscus\n\n@spaces-X\n\n@stalary\n\n@starocean999\n\n@steadyBoy\n\n@SWJTU-ZhangLei\n\n@Tanya-W\n\n@tarepanda1024\n\n@tianhui5\n\n@Userwhite\n\n@wangbo\n\n@wangyf0555\n\n@weizuo93\n\n@whutpencil\n\n@wsjz\n\n@wunan1210\n\n@xiaokang\n\n@xinyiZzz\n\n@xlwh\n\n@xy720\n\n@yangzhg\n\n@Yankee24\n\n@yiguolei\n\n@yinzhijian\n\n@yixiutt\n\n@zbtzbtzbt\n\n@zenoyang\n\n@zhangstar333\n\n@zhangyifan27\n\n@zhannngchen\n\n@zhengshengjun\n\n@zhengshiJ\n\n@zingdle\n\n@zuochunwei\n\n@zy-kkk\n")))}h.isMDXComponent=!0},462656:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/release-note-1.1.0-SSB-6067d10e7f8b966be8da2b64950622fb.png"},942968:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/release-note-1.1.0-TPC-H-7d6975b410de89a004c7f058226a02da.png"}}]);