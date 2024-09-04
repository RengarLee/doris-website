"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[366756],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=u(r),d=a,y=g["".concat(s,".").concat(d)]||g[d]||p[d]||o;return r?n.createElement(y,l(l({ref:t},c),{},{components:r})):n.createElement(y,l({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[g]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},192680:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(58168),a=(r(296540),r(15680));const o={title:"HLL (HyperLogLog)",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-data-types/aggregate/HLL",id:"sql-manual/sql-data-types/aggregate/HLL",title:"HLL (HyperLogLog)",description:"\x3c!--",source:"@site/docs/sql-manual/sql-data-types/aggregate/HLL.md",sourceDirName:"sql-manual/sql-data-types/aggregate",slug:"/sql-manual/sql-data-types/aggregate/HLL",permalink:"/docs/dev/sql-manual/sql-data-types/aggregate/HLL",draft:!1,tags:[],version:"current",frontMatter:{title:"HLL (HyperLogLog)",language:"en"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/dev/sql-manual/sql-data-types/aggregate/aggregate-overview"},next:{title:"BITMAP",permalink:"/docs/dev/sql-manual/sql-data-types/aggregate/BITMAP"}},s={},u=[{value:"HLL (HyperLogLog)",id:"hll-hyperloglog",level:2},{value:"Description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},g="wrapper";function p(e){let{components:t,...r}=e;return(0,a.yg)(g,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"hll-hyperloglog"},"HLL (HyperLogLog)"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"HLL"),(0,a.yg)("p",null,"HLL cannot be used as a key column. The columns of the HLL type can be used in Aggregate tables, Duplicate tables and Unique tables. When used in an Aggregate table, the aggregation type is HLL_UNION when building table.\nThe user does not need to specify the length and default value.\nThe length is controlled within the system according to the degree of data aggregation.\nAnd HLL columns can only be queried or used through the matching hll_union_agg, hll_raw_agg, hll_cardinality, and hll_hash."),(0,a.yg)("p",null,"HLL is approximate count of distinct elements, and its performance is better than Count Distinct when the amount of data is large.\nThe error of HLL is usually around 1%, sometimes up to 2%."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"select hour, HLL_UNION_AGG(pv) over(order by hour) uv from(\n   select hour, HLL_RAW_AGG(device_id) as pv\n   from metric_table -- Query the accumulated UV per hour\n   where datekey=20200922\ngroup by hour order by 1\n) final;\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"HLL,HYPERLOGLOG"))}p.isMDXComponent=!0}}]);