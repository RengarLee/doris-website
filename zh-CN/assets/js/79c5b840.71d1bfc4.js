"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[124201],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,y=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(y,o(o({ref:t},u),{},{components:n})):a.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(58168),r=(n(296540),n(15680));const l={title:"Get Load State",language:"zh-CN"},o=void 0,i={unversionedId:"admin-manual/fe/get-load-state",id:"version-2.0/admin-manual/fe/get-load-state",title:"Get Load State",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/fe/get-load-state.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/get-load-state",permalink:"/zh-CN/docs/2.0/admin-manual/fe/get-load-state",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Get Load State",language:"zh-CN"},sidebar:"docs",previous:{title:"Get Load Info Action",permalink:"/zh-CN/docs/2.0/admin-manual/fe/get-load-info-action"},next:{title:"Get FE log file",permalink:"/zh-CN/docs/2.0/admin-manual/fe/get-log-file-action"}},p={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /api/<db>/get_load_state")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8fd4\u56de\u6307\u5b9a label \u7684\u5bfc\u5165\u4e8b\u52a1\u7684\u72b6\u6001\n\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u4f1a\u4ee5 Json \u683c\u5f0f\u8fd4\u56de\u8fd9\u6b21\u5bfc\u5165\u7684\u76f8\u5173\u5185\u5bb9\u3002\u5f53\u524d\u5305\u62ec\u4ee5\u4e0b\u5b57\u6bb5\uff1a\nLabel\uff1a\u672c\u6b21\u5bfc\u5165\u7684 label\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a\uff0c\u5219\u4e3a\u4e00\u4e2a uuid\nStatus\uff1a\u6b64\u547d\u4ee4\u662f\u5426\u6210\u529f\u6267\u884c\uff0cSuccess \u8868\u793a\u6210\u529f\u6267\u884c\nMessage\uff1a\u5177\u4f53\u7684\u6267\u884c\u4fe1\u606f\nState: \u53ea\u6709\u5728 Status \u4e3a Success \u65f6\u624d\u6709\u610f\u4e49\nUNKNOWN: \u6ca1\u6709\u627e\u5230\u5bf9\u5e94\u7684 Label\nPREPARE: \u5bf9\u5e94\u7684\u4e8b\u52a1\u5df2\u7ecf prepare\uff0c\u4f46\u5c1a\u672a\u63d0\u4ea4\nCOMMITTED: \u4e8b\u52a1\u5df2\u7ecf\u63d0\u4ea4\uff0c\u4e0d\u80fd\u88ab cancel\nVISIBLE: \u4e8b\u52a1\u63d0\u4ea4\uff0c\u5e76\u4e14\u6570\u636e\u53ef\u89c1\uff0c\u4e0d\u80fd\u88ab cancel\nABORTED: \u4e8b\u52a1\u5df2\u7ecf\u88ab ROLLBACK\uff0c\u5bfc\u5165\u5df2\u7ecf\u5931\u8d25"),(0,r.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<db>")),(0,r.yg)("p",{parentName:"li"},"  \u6307\u5b9a\u6570\u636e\u5e93"))),(0,r.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"label")),(0,r.yg)("p",{parentName:"li"},"  \u6307\u5b9a\u5bfc\u5165 label"))),(0,r.yg)("h2",{id:"request-body"},"Request body"),(0,r.yg)("p",null,"\u65e0"),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": "VISIBLE",\n    "count": 0\n}\n')),(0,r.yg)("p",null,"\u5982 label \u4e0d\u5b58\u5728\uff0c\u5219\u8fd4\u56de\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": "UNKNOWN",\n    "count": 0\n}\n')),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u83b7\u53d6\u6307\u5b9a label \u7684\u5bfc\u5165\u4e8b\u52a1\u7684\u72b6\u6001\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'GET /api/example_db/get_load_state?label=my_label\n\n{\n    "msg": "success",\n    "code": 0,\n    "data": "VISIBLE",\n    "count": 0\n}\n')))))}d.isMDXComponent=!0}}]);