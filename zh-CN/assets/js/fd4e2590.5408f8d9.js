"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[637380],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,y=p["".concat(i,".").concat(m)]||p[m]||g[m]||l;return t?r.createElement(y,o(o({ref:n},c),{},{components:t})):r.createElement(y,o({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u[p]="string"==typeof e?e:a,o[1]=u;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},846229:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var r=t(58168),a=(t(296540),t(15680));const l={title:"HISTOGRAM",language:"zh-CN"},o=void 0,u={unversionedId:"sql-manual/sql-functions/aggregate-functions/histogram",id:"version-3.0/sql-manual/sql-functions/aggregate-functions/histogram",title:"HISTOGRAM",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/aggregate-functions/histogram.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/histogram",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/histogram",draft:!1,tags:[],version:"3.0",frontMatter:{title:"HISTOGRAM",language:"zh-CN"},sidebar:"docs",previous:{title:"PERCENTILE_APPROX_WEIGHTED",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/percentile-approx-weighted"},next:{title:"GROUP_ARRAY_INTERSECT",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/group-array-intersect"}},i={},s=[{value:"HISTOGRAM",id:"histogram",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},p="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"histogram"},"HISTOGRAM"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"histogram(expr[, INT num_buckets])")),(0,a.yg)("p",null,"histogram\uff08\u76f4\u65b9\u56fe\uff09\u51fd\u6570\u7528\u4e8e\u63cf\u8ff0\u6570\u636e\u5206\u5e03\u60c5\u51b5\uff0c\u5b83\u4f7f\u7528\u201c\u7b49\u9ad8\u201d\u7684\u5206\u6876\u7b56\u7565\uff0c\u5e76\u6309\u7167\u6570\u636e\u7684\u503c\u5927\u5c0f\u8fdb\u884c\u5206\u6876\uff0c\u5e76\u7528\u4e00\u4e9b\u7b80\u5355\u7684\u6570\u636e\u6765\u63cf\u8ff0\u6bcf\u4e2a\u6876\uff0c\u6bd4\u5982\u843d\u5728\u6876\u91cc\u7684\u503c\u7684\u4e2a\u6570\u3002\u4e3b\u8981\u7528\u4e8e\u4f18\u5316\u5668\u8fdb\u884c\u533a\u95f4\u67e5\u8be2\u7684\u4f30\u7b97\u3002"),(0,a.yg)("p",null,"\u51fd\u6570\u7ed3\u679c\u8fd4\u56de\u7a7a\u6216\u8005 Json \u5b57\u7b26\u4e32\u3002"),(0,a.yg)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"num_buckets\uff1a\u53ef\u9009\u9879\u3002\u7528\u4e8e\u9650\u5236\u76f4\u65b9\u56fe\u6876\uff08bucket\uff09\u7684\u6570\u91cf\uff0c\u9ed8\u8ba4\u503c 128\u3002")),(0,a.yg)("p",null,"\u522b\u540d\u51fd\u6570\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"hist(expr[, INT num_buckets])")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'MySQL [test]> SELECT histogram(c_float) FROM histogram_test;\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| histogram(`c_float`)                                                                                                                |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| {"num_buckets":3,"buckets":[{"lower":"0.1","upper":"0.1","count":1,"pre_sum":0,"ndv":1},...]} |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n\nMySQL [test]> SELECT histogram(c_string, 2) FROM histogram_test;\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| histogram(`c_string`)                                                                                                               |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| {"num_buckets":2,"buckets":[{"lower":"str1","upper":"str7","count":4,"pre_sum":0,"ndv":3},...]} |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n')),(0,a.yg)("p",null,"\u67e5\u8be2\u7ed3\u679c\u8bf4\u660e\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    "num_buckets": 3, \n    "buckets": [\n        {\n            "lower": "0.1", \n            "upper": "0.2", \n            "count": 2, \n            "pre_sum": 0, \n            "ndv": 2\n        }, \n        {\n            "lower": "0.8", \n            "upper": "0.9", \n            "count": 2, \n            "pre_sum": 2, \n            "ndv": 2\n        }, \n        {\n            "lower": "1.0", \n            "upper": "1.0", \n            "count": 2, \n            "pre_sum": 4, \n            "ndv": 1\n        }\n    ]\n}\n')),(0,a.yg)("p",null,"\u5b57\u6bb5\u8bf4\u660e\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"num_buckets\uff1a\u6876\u7684\u6570\u91cf"),(0,a.yg)("li",{parentName:"ul"},"buckets\uff1a\u76f4\u65b9\u56fe\u6240\u5305\u542b\u7684\u6876",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"lower\uff1a\u6876\u7684\u4e0a\u754c"),(0,a.yg)("li",{parentName:"ul"},"upper\uff1a\u6876\u7684\u4e0b\u754c"),(0,a.yg)("li",{parentName:"ul"},"count\uff1a\u6876\u5185\u5305\u542b\u7684\u5143\u7d20\u6570\u91cf"),(0,a.yg)("li",{parentName:"ul"},"pre_sum\uff1a\u524d\u9762\u6876\u7684\u5143\u7d20\u603b\u91cf"),(0,a.yg)("li",{parentName:"ul"},"ndv\uff1a\u6876\u5185\u4e0d\u540c\u503c\u7684\u4e2a\u6570")))),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u76f4\u65b9\u56fe\u603b\u7684\u5143\u7d20\u6570\u91cf = \u6700\u540e\u4e00\u4e2a\u6876\u7684\u5143\u7d20\u6570\u91cf\uff08count\uff09+ \u524d\u9762\u6876\u7684\u5143\u7d20\u603b\u91cf\uff08pre_sum\uff09\u3002")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"HISTOGRAM, HIST"))}g.isMDXComponent=!0}}]);