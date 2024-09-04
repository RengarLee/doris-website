"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[873035],{15680:(e,t,n)=>{n.d(t,{xA:()=>o,yg:()=>s});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),y=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=y(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,o=g(e,["components","mdxType","originalType","parentName"]),d=y(n),m=r,s=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(s,i(i({ref:t},o),{},{components:n})):a.createElement(s,i({ref:t},o))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var g={};for(var p in t)hasOwnProperty.call(t,p)&&(g[p]=t[p]);g.originalType=e,g[d]="string"==typeof e?e:r,i[1]=g;for(var y=2;y<l;y++)i[y]=n[y];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>g,toc:()=>y});var a=n(58168),r=(n(296540),n(15680));const l={title:"\u524d\u7f00\u7d22\u5f15\u4e0e\u6392\u5e8f\u952e",language:"zh-CN"},i=void 0,g={unversionedId:"table-design/index/prefix-index",id:"version-2.1/table-design/index/prefix-index",title:"\u524d\u7f00\u7d22\u5f15\u4e0e\u6392\u5e8f\u952e",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/table-design/index/prefix-index.md",sourceDirName:"table-design/index",slug:"/table-design/index/prefix-index",permalink:"/zh-CN/docs/2.1/table-design/index/prefix-index",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u524d\u7f00\u7d22\u5f15\u4e0e\u6392\u5e8f\u952e",language:"zh-CN"},sidebar:"docs",previous:{title:"\u7d22\u5f15\u6982\u8ff0",permalink:"/zh-CN/docs/2.1/table-design/index/index-overview"},next:{title:"\u5012\u6392\u7d22\u5f15",permalink:"/zh-CN/docs/2.1/table-design/index/inverted-index"}},p={},y=[{value:"\u7d22\u5f15\u539f\u7406",id:"\u7d22\u5f15\u539f\u7406",level:2},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u4f7f\u7528\u8bed\u6cd5",id:"\u4f7f\u7528\u8bed\u6cd5",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}],o={toc:y},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u7d22\u5f15\u539f\u7406"},"\u7d22\u5f15\u539f\u7406"),(0,r.yg)("p",null,"Apache Doris \u7684\u6570\u636e\u5b58\u50a8\u5728\u7c7b\u4f3c SSTable\uff08Sorted String Table\uff09\u7684\u6570\u636e\u7ed3\u6784\u4e2d\u3002\u8be5\u7ed3\u6784\u662f\u4e00\u79cd\u6709\u5e8f\u7684\u6570\u636e\u7ed3\u6784\uff0c\u53ef\u4ee5\u6309\u7167\u6307\u5b9a\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u5217\u8fdb\u884c\u6392\u5e8f\u5b58\u50a8\u3002\u5728\u8fd9\u79cd\u6570\u636e\u7ed3\u6784\u4e0a\uff0c\u4ee5\u6392\u5e8f\u5217\u7684\u5168\u90e8\u6216\u8005\u524d\u9762\u51e0\u4e2a\u4f5c\u4e3a\u6761\u4ef6\u8fdb\u884c\u67e5\u627e\uff0c\u4f1a\u975e\u5e38\u7684\u9ad8\u6548\u3002"),(0,r.yg)("p",null,"\u5728 Aggregate\u3001Unique \u548c Duplicate \u4e09\u79cd\u6570\u636e\u6a21\u578b\u4e2d\u3002\u5e95\u5c42\u7684\u6570\u636e\u5b58\u50a8\uff0c\u662f\u6309\u7167\u5404\u81ea\u5efa\u8868\u8bed\u53e5\u4e2d\uff0cAggregate Key\u3001Unique Key \u548c Duplicate Key \u4e2d\u6307\u5b9a\u7684\u5217\u8fdb\u884c\u6392\u5e8f\u5b58\u50a8\u7684\u3002\u8fd9\u4e9b Key\uff0c\u79f0\u4e3a\u6392\u5e8f\u952e\uff08Sort Key\uff09\u3002\u501f\u52a9\u6392\u5e8f\u952e\uff0c\u5728\u67e5\u8be2\u65f6\uff0c\u901a\u8fc7\u7ed9\u6392\u5e8f\u5217\u6307\u5b9a\u6761\u4ef6\uff0cApache Doris \u4e0d\u9700\u8981\u626b\u63cf\u5168\u8868\u5373\u53ef\u5feb\u901f\u627e\u5230\u9700\u8981\u5904\u7406\u7684\u6570\u636e\uff0c\u964d\u4f4e\u641c\u7d22\u7684\u590d\u6742\u5ea6\uff0c\u4ece\u800c\u52a0\u901f\u67e5\u8be2\u3002"),(0,r.yg)("p",null,"\u5728\u6392\u5e8f\u952e\u7684\u57fa\u7840\u4e0a\uff0c\u53c8\u5f15\u5165\u4e86\u524d\u7f00\u7d22\u5f15\uff08Prefix Index\uff09\u3002\u524d\u7f00\u7d22\u5f15\u662f\u4e00\u79cd\u7a00\u758f\u7d22\u5f15\u3002\u8868\u4e2d\u6309\u7167\u76f8\u5e94\u7684\u884c\u6570\u7684\u6570\u636e\u6784\u6210\u4e00\u4e2a\u903b\u8f91\u6570\u636e\u5757 (Data Block)\u3002\u6bcf\u4e2a\u903b\u8f91\u6570\u636e\u5757\u5728\u524d\u7f00\u7d22\u5f15\u8868\u4e2d\u5b58\u50a8\u4e00\u4e2a\u7d22\u5f15\u9879\uff0c\u7d22\u5f15\u9879\u7684\u957f\u5ea6\u4e0d\u8d85\u8fc7 36 \u5b57\u8282\uff0c\u5176\u5185\u5bb9\u4e3a\u6570\u636e\u5757\u4e2d\u7b2c\u4e00\u884c\u6570\u636e\u7684\u6392\u5e8f\u5217\u7ec4\u6210\u7684\u524d\u7f00\uff0c\u5728\u67e5\u627e\u524d\u7f00\u7d22\u5f15\u8868\u65f6\u53ef\u4ee5\u5e2e\u52a9\u786e\u5b9a\u8be5\u884c\u6570\u636e\u6240\u5728\u903b\u8f91\u6570\u636e\u5757\u7684\u8d77\u59cb\u884c\u53f7\u3002\u7531\u4e8e\u524d\u7f00\u7d22\u5f15\u6bd4\u8f83\u5c0f\uff0c\u6240\u4ee5\uff0c\u53ef\u4ee5\u5168\u91cf\u5728\u5185\u5b58\u7f13\u5b58\uff0c\u5feb\u901f\u5b9a\u4f4d\u6570\u636e\u5757\uff0c\u5927\u5927\u63d0\u5347\u4e86\u67e5\u8be2\u6548\u7387\u3002"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"\u6570\u636e\u5757\u4e00\u884c\u6570\u636e\u7684\u524d 36 \u4e2a\u5b57\u8282\u4f5c\u4e3a\u8fd9\u884c\u6570\u636e\u7684\u524d\u7f00\u7d22\u5f15\u3002\u5f53\u9047\u5230 VARCHAR \u7c7b\u578b\u65f6\uff0c\u524d\u7f00\u7d22\u5f15\u4f1a\u76f4\u63a5\u622a\u65ad\u3002\u5982\u679c\u7b2c\u4e00\u5217\u5373\u4e3a VARCHAR\uff0c\u90a3\u4e48\u5373\u4f7f\u6ca1\u6709\u8fbe\u5230 36 \u5b57\u8282\uff0c\u4e5f\u4f1a\u76f4\u63a5\u622a\u65ad\uff0c\u540e\u9762\u7684\u5217\u4e0d\u518d\u52a0\u5165\u524d\u7f00\u7d22\u5f15\u3002")),(0,r.yg)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,r.yg)("p",null,"\u524d\u7f00\u7d22\u5f15\u53ef\u4ee5\u52a0\u901f\u7b49\u503c\u67e5\u8be2\u548c\u8303\u56f4\u67e5\u8be2\u3002"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"\u56e0\u4e3a\u4e00\u4e2a\u8868\u7684 Key \u5b9a\u4e49\u662f\u552f\u4e00\u7684\uff0c\u6240\u4ee5\u4e00\u4e2a\u8868\u53ea\u6709\u4e00\u79cd\u524d\u7f00\u7d22\u5f15\u3002\u8fd9\u5bf9\u4e8e\u4f7f\u7528\u5176\u4ed6\u4e0d\u80fd\u547d\u4e2d\u524d\u7f00\u7d22\u5f15\u7684\u5217\u4f5c\u4e3a\u6761\u4ef6\u8fdb\u884c\u7684\u67e5\u8be2\u6765\u8bf4\uff0c\u6548\u7387\u4e0a\u53ef\u80fd\u65e0\u6cd5\u6ee1\u8db3\u9700\u6c42\uff0c\u6709\u4e24\u79cd\u89e3\u51b3\u65b9\u6848\uff1a"),(0,r.yg)("ol",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ol"},"\u5bf9\u9700\u8981\u52a0\u901f\u67e5\u8be2\u7684\u6761\u4ef6\u5217\u521b\u5efa\u5012\u6392\u7d22\u5f15\uff0c\u7531\u4e8e\u4e00\u4e2a\u8868\u7684\u5012\u6392\u7d22\u5f15\u53ef\u4ee5\u6709\u5f88\u591a\u4e2a\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u5bf9\u4e8e Duplicate \u8868\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u76f8\u5e94\u7684\u8c03\u6574\u4e86\u5217\u987a\u5e8f\u7684\u5355\u8868\u5f3a\u4e00\u81f4\u7269\u5316\u89c6\u56fe\u6765\u95f4\u63a5\u5b9e\u73b0\u591a\u79cd\u524d\u7f00\u7d22\u5f15\uff0c\u8be6\u60c5\u53ef\u53c2\u8003\u67e5\u8be2\u52a0\u901f/\u7269\u5316\u89c6\u56fe\u3002"))),(0,r.yg)("h2",{id:"\u4f7f\u7528\u8bed\u6cd5"},"\u4f7f\u7528\u8bed\u6cd5"),(0,r.yg)("p",null,"\u524d\u7f00\u7d22\u5f15\u6ca1\u6709\u4e13\u95e8\u7684\u8bed\u6cd5\u53bb\u5b9a\u4e49\uff0c\u5efa\u8868\u65f6\u81ea\u52a8\u53d6\u8868\u7684 Key \u7684\u524d 36 \u5b57\u8282\u4f5c\u4e3a\u524d\u7f00\u7d22\u5f15\u3002"),(0,r.yg)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5047\u5982\u8868\u7684\u6392\u5e8f\u5217\u4e3a\u5982\u4e0b 5 \u5217\uff0c\u90a3\u4e48\u524d\u7f00\u7d22\u5f15\u4e3a\uff1auser_id(8 Bytes) + age(4 Bytes) + message(prefix 20 Bytes)\u3002")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"ColumnName"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"user_id"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"age"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"message"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR(100)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_dwell_time"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"min_dwell_time"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME")))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5047\u5982\u8868\u7684\u6392\u5e8f\u5217\u4e3a\u5982\u4e0b 5 \u5217\uff0c\u5219\u524d\u7f00\u7d22\u5f15\u4e3a user_name(20 Bytes)\u3002\u5373\u4f7f\u6ca1\u6709\u8fbe\u5230 36 \u4e2a\u5b57\u8282\uff0c\u56e0\u4e3a\u9047\u5230 VARCHAR\uff0c\u6240\u4ee5\u76f4\u63a5\u622a\u65ad\uff0c\u4e0d\u518d\u5f80\u540e\u7ee7\u7eed\u3002")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"ColumnName"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"user_name"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR(20)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"age"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"message"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR(100)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_dwell_time"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"min_dwell_time"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME")))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5f53\u6211\u4eec\u7684\u67e5\u8be2\u6761\u4ef6\uff0c\u662f\u524d\u7f00\u7d22\u5f15\u7684\u524d\u7f00\u65f6\uff0c\u53ef\u4ee5\u6781\u5927\u5730\u52a0\u5feb\u67e5\u8be2\u901f\u5ea6\u3002\u6bd4\u5982\u5728\u7b2c\u4e00\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6267\u884c\u5982\u4e0b\u67e5\u8be2\uff1a")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM table WHERE user_id=1829239 and age=20\uff1b\n")),(0,r.yg)("p",null,"\u8be5\u67e5\u8be2\u7684\u6548\u7387\u4f1a\u8fdc\u9ad8\u4e8e\u5982\u4e0b\u67e5\u8be2\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM table WHERE age=20\uff1b\n")),(0,r.yg)("p",null,"\u6240\u4ee5\u5728\u5efa\u8868\u65f6\uff0c\u6b63\u786e\u9009\u62e9\u5217\u987a\u5e8f\uff0c\u80fd\u591f\u6781\u5927\u5730\u63d0\u9ad8\u67e5\u8be2\u6548\u7387\u3002"))}u.isMDXComponent=!0}}]);