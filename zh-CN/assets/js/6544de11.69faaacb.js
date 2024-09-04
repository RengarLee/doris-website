"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[201643],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>d});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(r),m=a,d=s["".concat(c,".").concat(m)]||s[m]||y[m]||i;return r?t.createElement(d,l(l({ref:n},p),{},{components:r})):t.createElement(d,l({ref:n},p))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},56923:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var t=r(58168),a=(r(296540),r(15680));const i={title:"\u7528\u6237\u914d\u7f6e\u9879",language:"zh-CN"},l=void 0,o={unversionedId:"admin-manual/config/user-property",id:"version-2.1/admin-manual/config/user-property",title:"\u7528\u6237\u914d\u7f6e\u9879",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/config/user-property.md",sourceDirName:"admin-manual/config",slug:"/admin-manual/config/user-property",permalink:"/zh-CN/docs/2.1/admin-manual/config/user-property",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u7528\u6237\u914d\u7f6e\u9879",language:"zh-CN"},sidebar:"docs",previous:{title:"BE \u914d\u7f6e\u9879",permalink:"/zh-CN/docs/2.1/admin-manual/config/be-config"},next:{title:"file_cache_statistics",permalink:"/zh-CN/docs/2.1/admin-manual/system-tables/file_cache_statistics"}},c={},u=[{value:"\u67e5\u770b\u914d\u7f6e\u9879",id:"\u67e5\u770b\u914d\u7f6e\u9879",level:2},{value:"\u8bbe\u7f6e\u914d\u7f6e\u9879",id:"\u8bbe\u7f6e\u914d\u7f6e\u9879",level:2},{value:"\u5e94\u7528\u4e3e\u4f8b",id:"\u5e94\u7528\u4e3e\u4f8b",level:2},{value:"\u914d\u7f6e\u9879\u5217\u8868",id:"\u914d\u7f6e\u9879\u5217\u8868",level:2},{value:"max_user_connections",id:"max_user_connections",level:3},{value:"max_query_instances",id:"max_query_instances",level:3},{value:"resource",id:"resource",level:3},{value:"quota",id:"quota",level:3}],p={toc:u},s="wrapper";function y(e){let{components:n,...r}=e;return(0,a.yg)(s,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u8be5\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u4e86 User \u7ea7\u522b\u7684\u76f8\u5173\u914d\u7f6e\u9879\u3002User \u7ea7\u522b\u7684\u914d\u7f6e\u751f\u6548\u8303\u56f4\u4e3a\u5355\u4e2a\u7528\u6237\u3002\u6bcf\u4e2a\u7528\u6237\u90fd\u53ef\u4ee5\u8bbe\u7f6e\u81ea\u5df1\u7684 User property\u3002\u76f8\u4e92\u4e0d\u5f71\u54cd\u3002"),(0,a.yg)("h2",{id:"\u67e5\u770b\u914d\u7f6e\u9879"},"\u67e5\u770b\u914d\u7f6e\u9879"),(0,a.yg)("p",null,"FE \u542f\u52a8\u540e\uff0c\u5728 MySQL \u5ba2\u6237\u7aef\uff0c\u901a\u8fc7\u4e0b\u9762\u547d\u4ee4\u67e5\u770b User \u7684\u914d\u7f6e\u9879\uff1a"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"SHOW PROPERTY [FOR user] [LIKE key pattern]")),(0,a.yg)("p",null,"\u5177\u4f53\u8bed\u6cd5\u53ef\u901a\u8fc7\u547d\u4ee4\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"help show property;")," \u67e5\u8be2\u3002"),(0,a.yg)("h2",{id:"\u8bbe\u7f6e\u914d\u7f6e\u9879"},"\u8bbe\u7f6e\u914d\u7f6e\u9879"),(0,a.yg)("p",null,"FE \u542f\u52a8\u540e\uff0c\u5728 MySQL \u5ba2\u6237\u7aef\uff0c\u901a\u8fc7\u4e0b\u9762\u547d\u4ee4\u4fee\u6539 User \u7684\u914d\u7f6e\u9879\uff1a"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"SET PROPERTY [FOR 'user'] 'key' = 'value' [, 'key' = 'value']")),(0,a.yg)("p",null,"\u5177\u4f53\u8bed\u6cd5\u53ef\u901a\u8fc7\u547d\u4ee4\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"help set property;")," \u67e5\u8be2\u3002"),(0,a.yg)("p",null,"User \u7ea7\u522b\u7684\u914d\u7f6e\u9879\u53ea\u4f1a\u5bf9\u6307\u5b9a\u7528\u6237\u751f\u6548\uff0c\u5e76\u4e0d\u4f1a\u5f71\u54cd\u5176\u4ed6\u7528\u6237\u7684\u914d\u7f6e\u3002"),(0,a.yg)("h2",{id:"\u5e94\u7528\u4e3e\u4f8b"},"\u5e94\u7528\u4e3e\u4f8b"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237 Billie \u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"max_user_connections")),(0,a.yg)("p",{parentName:"li"},"\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"SHOW PROPERTY FOR 'Billie' LIKE '%max_user_connections%';")," \u67e5\u770b Billie \u7528\u6237\u5f53\u524d\u7684\u6700\u5927\u94fe\u63a5\u6570\u4e3a 100\u3002"),(0,a.yg)("p",{parentName:"li"},"\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"SET PROPERTY FOR 'Billie' 'max_user_connections' = '200';")," \u4fee\u6539 Billie \u7528\u6237\u7684\u5f53\u524d\u6700\u5927\u8fde\u63a5\u6570\u5230 200\u3002"))),(0,a.yg)("h2",{id:"\u914d\u7f6e\u9879\u5217\u8868"},"\u914d\u7f6e\u9879\u5217\u8868"),(0,a.yg)("h3",{id:"max_user_connections"},"max_user_connections"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"\u7528\u6237\u6700\u5927\u7684\u8fde\u63a5\u6570\uff0c\u9ed8\u8ba4\u503c\u4e3a100\u3002\u4e00\u822c\u60c5\u51b5\u4e0d\u9700\u8981\u66f4\u6539\u8be5\u53c2\u6570\uff0c\u9664\u975e\u67e5\u8be2\u7684\u5e76\u53d1\u6570\u8d85\u8fc7\u4e86\u9ed8\u8ba4\u503c\u3002\n")),(0,a.yg)("h3",{id:"max_query_instances"},"max_query_instances"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"\u7528\u6237\u540c\u4e00\u65f6\u95f4\u70b9\u53ef\u4f7f\u7528\u7684instance\u4e2a\u6570, \u9ed8\u8ba4\u662f-1\uff0c\u5c0f\u4e8e\u7b49\u4e8e0\u5c06\u4f1a\u4f7f\u7528\u914d\u7f6edefault_max_query_instances.\n")),(0,a.yg)("h3",{id:"resource"},"resource"),(0,a.yg)("h3",{id:"quota"},"quota"))}y.isMDXComponent=!0}}]);