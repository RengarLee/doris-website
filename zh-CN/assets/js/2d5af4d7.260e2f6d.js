"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[208218],{15680:(e,a,n)=>{n.d(a,{xA:()=>p,yg:()=>g});var t=n(296540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),i=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):c(c({},a),e)),n},p=function(e){var a=i(e.components);return t.createElement(s.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(n),y=r,g=u["".concat(s,".").concat(y)]||u[y]||d[y]||o;return n?t.createElement(g,c(c({ref:a},p),{},{components:n})):t.createElement(g,c({ref:a},p))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=y;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[u]="string"==typeof e?e:r,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},517784:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var t=n(58168),r=(n(296540),n(15680));const o={title:"OceanBase",language:"zh-CN"},c=void 0,l={unversionedId:"lakehouse/database/oceanbase",id:"lakehouse/database/oceanbase",title:"OceanBase",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/lakehouse/database/oceanbase.md",sourceDirName:"lakehouse/database",slug:"/lakehouse/database/oceanbase",permalink:"/zh-CN/docs/dev/lakehouse/database/oceanbase",draft:!1,tags:[],version:"current",frontMatter:{title:"OceanBase",language:"zh-CN"},sidebar:"docs",previous:{title:"SAP HANA",permalink:"/zh-CN/docs/dev/lakehouse/database/sap-hana"},next:{title:"Elasticsearch",permalink:"/zh-CN/docs/dev/lakehouse/database/es"}},s={},i=[{value:"\u4f7f\u7528\u987b\u77e5",id:"\u4f7f\u7528\u987b\u77e5",level:2},{value:"\u8fde\u63a5 OceanBase",id:"\u8fde\u63a5-oceanbase",level:2},{value:"\u6a21\u5f0f\u517c\u5bb9",id:"\u6a21\u5f0f\u517c\u5bb9",level:2}],p={toc:i},u="wrapper";function d(e){let{components:a,...n}=e;return(0,r.yg)(u,(0,t.A)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Doris JDBC Catalog \u652f\u6301\u901a\u8fc7\u6807\u51c6 JDBC \u63a5\u53e3\u8fde\u63a5 OceanBase \u6570\u636e\u5e93\u3002\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u914d\u7f6e OceanBase \u6570\u636e\u5e93\u8fde\u63a5\u3002"),(0,r.yg)("h2",{id:"\u4f7f\u7528\u987b\u77e5"},"\u4f7f\u7528\u987b\u77e5"),(0,r.yg)("p",null,"\u8981\u8fde\u63a5\u5230 OceanBase \u6570\u636e\u5e93\uff0c\u60a8\u9700\u8981"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"OceanBase 3.1.0 \u6216\u66f4\u9ad8\u7248\u672c")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"OceanBase \u6570\u636e\u5e93\u7684 JDBC \u9a71\u52a8\u7a0b\u5e8f\uff0c\u60a8\u53ef\u4ee5\u4ece ",(0,r.yg)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.oceanbase/oceanbase-client"},"Maven \u4ed3\u5e93"),"\u4e0b\u8f7d\u6700\u65b0\u6216\u6307\u5b9a\u7248\u672c\u7684 OceanBase JDBC \u9a71\u52a8\u7a0b\u5e8f\u3002",(0,r.yg)("strong",{parentName:"p"},"\u63a8\u8350\u4f7f\u7528 OceanBase Connector/J 2.4.8 \u6216\u4ee5\u4e0a\u7248\u672c\u3002"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Doris \u6bcf\u4e2a FE \u548c BE \u8282\u70b9\u548c OceanBase \u670d\u52a1\u5668\u4e4b\u95f4\u7684\u7f51\u7edc\u8fde\u63a5\u3002"))),(0,r.yg)("h2",{id:"\u8fde\u63a5-oceanbase"},"\u8fde\u63a5 OceanBase"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG oceanbase PROPERTIES (\n    "type"="jdbc",\n    "user"="root",\n    "password"="password",\n    "jdbc_url" = "jdbc:oceanbase://host:port/db",\n    "driver_url" = "oceanbase-client-2.4.8.jar",\n    "driver_class" = "com.oceanbase.jdbc.Driver"\n)\n')),(0,r.yg)("admonition",{title:"\u5907\u6ce8",type:"info"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"jdbc_url")," \u5b9a\u4e49\u8981\u4f20\u9012\u7ed9 OceanBase JDBC \u9a71\u52a8\u7a0b\u5e8f\u7684\u8fde\u63a5\u4fe1\u606f\u548c\u53c2\u6570\u3002\n\u652f\u6301\u7684 URL \u7684\u53c2\u6570\u53ef\u5728 ",(0,r.yg)("a",{parentName:"p",href:"https://www.oceanbase.com/docs/common-oceanbase-connector-j-cn-1000000000517111"},"OceanBase JDBC \u9a71\u52a8\u914d\u7f6e")," \u4e2d\u627e\u5230\u3002")),(0,r.yg)("h2",{id:"\u6a21\u5f0f\u517c\u5bb9"},"\u6a21\u5f0f\u517c\u5bb9"),(0,r.yg)("p",null,"Doris \u4f1a\u5728\u521b\u5efa OceanBase Catalog \u65f6\uff0c\u81ea\u52a8\u8bc6\u522b OceanBase \u5904\u4e8e MySQL \u6216 Oracle \u6a21\u5f0f\u4e0b\uff0c\u4ee5\u4fbf\u6b63\u786e\u89e3\u6790\u5143\u6570\u636e\u3002"),(0,r.yg)("p",null,"\u4e0d\u540c\u6a21\u5f0f\u4e0b\u7684\u5c42\u7ea7\u6620\u5c04\u3001\u7c7b\u578b\u6620\u5c04\u3001\u67e5\u8be2\u4f18\u5316\uff0c\u4e0e MySQL \u6216 Oracle \u6570\u636e\u5e93\u7684 Catalog \u5904\u7406\u65b9\u5f0f\u76f8\u540c\uff0c\u53ef\u53c2\u8003\u6587\u6863"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/dev/lakehouse/database/mysql"},"MySQL Catalog")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/dev/lakehouse/database/oracle"},"Oracle Catalog"))))}d.isMDXComponent=!0}}]);