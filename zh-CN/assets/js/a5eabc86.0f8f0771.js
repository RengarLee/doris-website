"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[569572],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>g});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=m(a),y=r,g=c["".concat(o,".").concat(y)]||c[y]||s[y]||l;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=y;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},431196:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(58168),r=(a(296540),a(15680));const l={title:"file_cache_statistics",language:"zh-CN"},i=void 0,p={unversionedId:"admin-manual/system-tables/file_cache_statistics",id:"version-3.0/admin-manual/system-tables/file_cache_statistics",title:"file_cache_statistics",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/system-tables/file_cache_statistics.md",sourceDirName:"admin-manual/system-tables",slug:"/admin-manual/system-tables/file_cache_statistics",permalink:"/zh-CN/docs/admin-manual/system-tables/file_cache_statistics",draft:!1,tags:[],version:"3.0",frontMatter:{title:"file_cache_statistics",language:"zh-CN"},sidebar:"docs",previous:{title:"\u7528\u6237\u914d\u7f6e\u9879",permalink:"/zh-CN/docs/admin-manual/config/user-property"},next:{title:"tables",permalink:"/zh-CN/docs/admin-manual/system-tables/tables"}},o={},m=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u6240\u5c5e\u6570\u636e\u5e93",id:"\u6240\u5c5e\u6570\u636e\u5e93",level:2},{value:"\u8868\u4fe1\u606f",id:"\u8868\u4fe1\u606f",level:2},{value:"2.1.x \u7248\u672c\u6307\u6807\u8bf4\u660e",id:"21x-\u7248\u672c\u6307\u6807\u8bf4\u660e",level:3},{value:"3.0.x \u7248\u672c\u6307\u6807\u8bf4\u660e",id:"30x-\u7248\u672c\u6307\u6807\u8bf4\u660e",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],u={toc:m},c="wrapper";function s(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.yg)("p",null,"\u7528\u4e8e\u67e5\u770b\u5404\u4e2a BE \u8282\u70b9 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/lakehouse/filecache"},"\u6570\u636e\u7f13\u5b58")," \u76f8\u5173\u7684\u6307\u6807\u4fe1\u606f\u3002"),(0,r.yg)("p",null,"\u6307\u6807\u4fe1\u606f\u6765\u6e90\u4e8e BE \u7684\u6570\u636e\u7f13\u5b58\u76f8\u5173\u76d1\u63a7\u6307\u6807\u3002"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"\u8be5\u7cfb\u7edf\u8868\u81ea 2.1.6 \u548c 3.0.2 \u7248\u672c\u652f\u6301\u3002")),(0,r.yg)("h2",{id:"\u6240\u5c5e\u6570\u636e\u5e93"},"\u6240\u5c5e\u6570\u636e\u5e93"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"information_schema")),(0,r.yg)("h2",{id:"\u8868\u4fe1\u606f"},"\u8868\u4fe1\u606f"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u5217\u540d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BE_ID"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"BE \u8282\u70b9 ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BE_IP"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR(256)"),(0,r.yg)("td",{parentName:"tr",align:null},"BE \u8282\u70b9 IP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CACHE_PATH"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR(256)"),(0,r.yg)("td",{parentName:"tr",align:null},"BE \u8282\u70b9\u7f13\u5b58\u8def\u5f84")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"METRIC_NAME"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR(256)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"METRIC_VALUE"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6307\u6807\u503c")))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u4e0d\u540c Doris \u7248\u672c\u53ef\u80fd\u5305\u542b\u4e0d\u540c\u7684\u6307\u6807\u4fe1\u606f\u3002")),(0,r.yg)("h3",{id:"21x-\u7248\u672c\u6307\u6807\u8bf4\u660e"},"2.1.x \u7248\u672c\u6307\u6807\u8bf4\u660e"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u4ec5\u5217\u4e3e\u91cd\u8981\u6307\u6807\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"normal_queue_curr_elements")),(0,r.yg)("p",{parentName:"li"},"  \u5f53\u524d\u7f13\u5b58\u4e2d File Block \u7684\u4e2a\u6570\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"normal_queue_max_elements")),(0,r.yg)("p",{parentName:"li"},"  \u7f13\u5b58\u5141\u8bb8\u7684 File Block \u6700\u5927\u4e2a\u6570\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"normal_queue_curr_size")),(0,r.yg)("p",{parentName:"li"},"  \u5f53\u524d\u7f13\u5b58\u5927\u5c0f")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"normal_queue_max_size")),(0,r.yg)("p",{parentName:"li"},"  \u7f13\u5b58\u5141\u8bb8\u7684\u6700\u5927\u5927\u5c0f")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"hits_ratio")),(0,r.yg)("p",{parentName:"li"},"  \u81ea BE \u542f\u52a8\u540e\u7684\u7f13\u5b58\u603b\u547d\u4e2d\u7387\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"hits_ratio_5m")),(0,r.yg)("p",{parentName:"li"},"  \u6700\u8fd1 5 \u5206\u949f\u7684\u7f13\u5b58\u547d\u4e2d\u7387\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"hits_ratio_1h")),(0,r.yg)("p",{parentName:"li"},"  \u6700\u8fd1 1 \u5c0f\u65f6\u7684\u7f13\u5b58\u547d\u4e2d\u7387\u3002"))),(0,r.yg)("h3",{id:"30x-\u7248\u672c\u6307\u6807\u8bf4\u660e"},"3.0.x \u7248\u672c\u6307\u6807\u8bf4\u660e"),(0,r.yg)("p",null,"TODO"),(0,r.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u67e5\u8be2\u6240\u6709\u7f13\u5b58\u6307\u6807"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select * from information_schema.file_cache_statistics;\n+-------+---------------+----------------------------+----------------------------+--------------------+\n| BE_ID | BE_IP         | CACHE_PATH                 | METRIC_NAME                | METRIC_VALUE       |\n+-------+---------------+----------------------------+----------------------------+--------------------+\n| 10003 | 172.20.32.136 | /mnt/output/be/file_cache/ | normal_queue_curr_elements |               1392 |\n| 10003 | 172.20.32.136 | /mnt/output/be/file_cache/ | normal_queue_curr_size     |          248922234 |\n| 10003 | 172.20.32.136 | /mnt/output/be/file_cache/ | normal_queue_max_elements  |             102400 |\n| 10003 | 172.20.32.136 | /mnt/output/be/file_cache/ | normal_queue_max_size      |        21474836480 |\n| 10003 | 172.20.32.136 | /mnt/output/be/file_cache/ | hits_ratio                 | 0.8539634687001242 |\n| 10003 | 172.20.32.136 | /mnt/output/be/file_cache/ | hits_ratio_1h              |                  0 |\n| 10003 | 172.20.32.136 | /mnt/output/be/file_cache/ | hits_ratio_5m              |                  0 |\n+-------+---------------+----------------------------+----------------------------+--------------------+\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u67e5\u8be2\u7f13\u5b58\u547d\u4e2d\u7387\uff0c\u5e76\u6309\u547d\u4e2d\u7387\u6392\u5e8f"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'select * from information_schema.file_cache_statistics where METRIC_NAME = "hits_ratio" order by METRIC_VALUE desc;\n')))))}s.isMDXComponent=!0}}]);