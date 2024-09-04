"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[73463],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,d=u["".concat(s,".").concat(f)]||u[f]||g[f]||o;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},980603:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const o={title:"PERCENTILE_APPROX_WEIGHTED",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/percentile-approx-weighted",id:"version-3.0/sql-manual/sql-functions/aggregate-functions/percentile-approx-weighted",title:"PERCENTILE_APPROX_WEIGHTED",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/aggregate-functions/percentile-approx-weighted.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/percentile-approx-weighted",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/percentile-approx-weighted",draft:!1,tags:[],version:"3.0",frontMatter:{title:"PERCENTILE_APPROX_WEIGHTED",language:"zh-CN"},sidebar:"docs",previous:{title:"PERCENTILE_APPROX",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/percentile-approx"},next:{title:"HISTOGRAM",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/histogram"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:2}],p={toc:c},u="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"PERCENTILE_APPROX_WEIGHTED(expr, w ,DOUBLE p [, DOUBLE compression])")),(0,a.yg)("p",null,"\u8be5\u51fd\u6570\u548c PERCENTILE_APPROX \u7c7b\u4f3c\uff0c\u552f\u4e00\u7684\u533a\u522b\u662f\u591a\u4e86\u4e00\u4e2a\u53c2\u6570 w\uff0c\u7528\u6765\u8868\u793a expr \u51fa\u73b0\u7684\u6b21\u6570\u3002\n\u6ce8\u610f\u53c2\u6570 W \u7684\u53d6\u503c\u9700\u8981\u5927\u4e8e0\uff0c\u5982\u679c\u8ba1\u7b97\u8fc7\u7a0b\u4e2d\u67d0\u4e00\u884c\u7684\u53d6\u503c\u5c0f\u4e8e\u7b49\u4e8e0\u65f6\uff0c\u5219\u4f1a\u8df3\u8fc7\u5f53\u524d\u884c\u3002"),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"$ mysql >select * from quantile_weighted_table order by k;\n+------+------+\n| k    | w    |\n+------+------+\n|    1 |    2 |\n|    3 |    1 |\n|    5 |    2 |\n+------+------+\n\n$ mysql >select percentile_approx_weighted(k,w,0.55) from quantile_weighted_table;\n+----------------------------------------------------------------------------------------+\n| percentile_approx_weighted(cast(k as DOUBLE), cast(w as DOUBLE), cast(0.55 as DOUBLE)) |\n+----------------------------------------------------------------------------------------+\n|                                                                     3.3333332538604736 |\n+----------------------------------------------------------------------------------------+\n\n")),(0,a.yg)("h2",{id:"keywords"},"Keywords"),(0,a.yg)("p",null,"RCENTILE_APPROX, PERCENTILE, APPROX, PERCENTILE_APPROX_WEIGHTED"))}g.isMDXComponent=!0}}]);