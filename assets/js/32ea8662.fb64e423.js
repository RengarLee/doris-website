"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[859232],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},590360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(58168),r=(n(296540),n(15680));const o={title:"Get Load Info Action",language:"en"},l=void 0,i={unversionedId:"admin-manual/http-actions/fe/get-load-info-action",id:"version-1.2/admin-manual/http-actions/fe/get-load-info-action",title:"Get Load Info Action",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/admin-manual/http-actions/fe/get-load-info-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/get-load-info-action",permalink:"/docs/1.2/admin-manual/http-actions/fe/get-load-info-action",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Get Load Info Action",language:"en"},sidebar:"docs",previous:{title:"Get DDL Statement Action",permalink:"/docs/1.2/admin-manual/http-actions/fe/get-ddl-stmt-action"},next:{title:"Get Load State",permalink:"/docs/1.2/admin-manual/http-actions/fe/get-load-state"}},p={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"get-load-info-action"},"Get Load Info Action"),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /api/<db>/_load_info")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Used to obtain the information of the load job of the specified label."),(0,r.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<db>")),(0,r.yg)("p",{parentName:"li"},"  Specify database"))),(0,r.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"label")),(0,r.yg)("p",{parentName:"li"},"  Specify load label"))),(0,r.yg)("h2",{id:"request-body"},"Request body"),(0,r.yg)("p",null,"None"),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "dbName": "default_cluster:db1",\n        "tblNames": ["tbl1"],\n        "label": "my_label",\n        "clusterName": "default_cluster",\n        "state": "FINISHED",\n        "failMsg": "",\n        "trackingUrl": ""\n    },\n    "count": 0\n}\n')),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Get the load job information of the specified label"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'GET /api/example_db/_load_info?label=my_label\n\nResponse\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "dbName": "default_cluster:db1",\n        "tblNames": ["tbl1"],\n        "label": "my_label",\n        "clusterName": "default_cluster",\n        "state": "FINISHED",\n        "failMsg": "",\n        "trackingUrl": ""\n    },\n    "count": 0\n}\n')))))}u.isMDXComponent=!0}}]);