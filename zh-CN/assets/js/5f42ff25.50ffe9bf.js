"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[239319],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),y=a,d=c["".concat(s,".").concat(y)]||c[y]||m[y]||l;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},300104:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(58168),a=(n(296540),n(15680));const l={title:"\u6570\u503c\u7c7b\u578b\u6982\u89c8",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-data-types/numeric/numeric-overview",id:"version-2.0/sql-manual/sql-data-types/numeric/numeric-overview",title:"\u6570\u503c\u7c7b\u578b\u6982\u89c8",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-data-types/numeric/numeric-overview.md",sourceDirName:"sql-manual/sql-data-types/numeric",slug:"/sql-manual/sql-data-types/numeric/numeric-overview",permalink:"/zh-CN/docs/2.0/sql-manual/sql-data-types/numeric/numeric-overview",draft:!1,tags:[],version:"2.0",frontMatter:{title:"\u6570\u503c\u7c7b\u578b\u6982\u89c8",language:"zh-CN"},sidebar:"docs",previous:{title:"WIDTH_BUCKET",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/width-bucket"},next:{title:"BOOLEAN",permalink:"/zh-CN/docs/2.0/sql-manual/sql-data-types/numeric/BOOLEAN"}},s={},p=[{value:"BOOLEAN \u7c7b\u578b",id:"boolean-\u7c7b\u578b",level:2},{value:"\u6574\u6570\u7c7b\u578b",id:"\u6574\u6570\u7c7b\u578b",level:2},{value:"\u6d6e\u70b9\u6570\u7c7b\u578b",id:"\u6d6e\u70b9\u6570\u7c7b\u578b",level:2},{value:"\u5b9a\u70b9\u6570\u7c7b\u578b",id:"\u5b9a\u70b9\u6570\u7c7b\u578b",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u6570\u503c\u7c7b\u578b\u5305\u62ec\u4ee5\u4e0b 4 \u79cd\uff1a"),(0,a.yg)("h2",{id:"boolean-\u7c7b\u578b"},"BOOLEAN \u7c7b\u578b"),(0,a.yg)("p",null,"\u4e24\u79cd\u53d6\u503c\uff0c0 \u4ee3\u8868 false\uff0c1 \u4ee3\u8868 true\u3002"),(0,a.yg)("p",null,"\u66f4\u591a\u4fe1\u606f\u53c2\u8003 ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.0/sql-manual/sql-data-types/numeric/BOOLEAN"},"BOOLEAN \u6587\u6863"),"\u3002"),(0,a.yg)("h2",{id:"\u6574\u6570\u7c7b\u578b"},"\u6574\u6570\u7c7b\u578b"),(0,a.yg)("p",null,"\u90fd\u662f\u6709\u7b26\u53f7\u6574\u6570\uff0cxxINT \u7684\u5dee\u5f02\u662f\u5360\u7528\u5b57\u8282\u6570\u548c\u8868\u793a\u8303\u56f4"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"TINYINT \u5360 1 \u5b57\u8282\uff0c\u8303\u56f4 ","[-128, 127]",", \u66f4\u591a\u4fe1\u606f\u53c2\u8003 ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.0/sql-manual/sql-data-types/numeric/TINYINT"},"TINYINT \u6587\u6863"),"\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"SMALLINT \u5360 2 \u5b57\u8282\uff0c\u8303\u56f4 ","[-32768, 32767]",", \u66f4\u591a\u4fe1\u606f\u53c2\u8003 ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.0/sql-manual/sql-data-types/numeric/SMALLINT"},"SMALLINT \u6587\u6863"),"\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"INT \u5360 4 \u5b57\u8282\uff0c\u8303\u56f4 ","[-2147483648, 2147483647]",", \u66f4\u591a\u4fe1\u606f\u53c2\u8003 ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.0/sql-manual/sql-data-types/numeric/INT"},"INT \u6587\u6863"),"\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"BIGINT \u5360 8 \u5b57\u8282\uff0c\u8303\u56f4 ","[-9223372036854775808, 9223372036854775807]",", \u66f4\u591a\u4fe1\u606f\u53c2\u8003 ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.0/sql-manual/sql-data-types/numeric/BIGINT"},"BIGINT \u6587\u6863"),"\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"LARGEINT \u5360 16 \u5b57\u8282\uff0c\u8303\u56f4 ","[-2^127, 2^127 - 1]",", \u66f4\u591a\u4fe1\u606f\u53c2\u8003 ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.0/sql-manual/sql-data-types/numeric/LARGEINT"},"LARGEINT \u6587\u6863"),"\u3002"))),(0,a.yg)("h2",{id:"\u6d6e\u70b9\u6570\u7c7b\u578b"},"\u6d6e\u70b9\u6570\u7c7b\u578b"),(0,a.yg)("p",null,"\u4e0d\u7cbe\u786e\u7684\u6d6e\u70b9\u6570\u7c7b\u578b FLOAT \u548c DOUBLE\uff0c\u548c\u5e38\u89c1\u7f16\u7a0b\u8bed\u8a00\u4e2d\u7684 float \u548c double \u5bf9\u5e94\u3002"),(0,a.yg)("p",null,"\u66f4\u591a\u4fe1\u606f\u53c2\u8003 ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.0/sql-manual/sql-data-types/numeric/FLOAT"},"FLOAT"),"\u3001",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.0/sql-manual/sql-data-types/numeric/DOUBLE"},"DOUBLE")," \u6587\u6863\u3002"),(0,a.yg)("h2",{id:"\u5b9a\u70b9\u6570\u7c7b\u578b"},"\u5b9a\u70b9\u6570\u7c7b\u578b"),(0,a.yg)("p",null,"\u7cbe\u786e\u7684\u5b9a\u70b9\u6570\u7c7b\u578b DECIMAL\uff0c\u7528\u4e8e\u91d1\u878d\u7b49\u7cbe\u5ea6\u8981\u6c42\u4e25\u683c\u51c6\u786e\u7684\u573a\u666f\u3002"),(0,a.yg)("p",null,"\u66f4\u591a\u4fe1\u606f\u53c2\u8003 ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.0/sql-manual/sql-data-types/numeric/DECIMAL"},"DECIMAL")," \u6587\u6863\u3002"))}m.isMDXComponent=!0}}]);