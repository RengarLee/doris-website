"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[267688],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var a=n(296540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),y=l,d=u["".concat(s,".").concat(y)]||u[y]||m[y]||r;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},499035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(58168),l=(n(296540),n(15680));const r={title:"ANALYZE",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/ANALYZE",id:"version-3.0/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/ANALYZE",title:"ANALYZE",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/ANALYZE.md",sourceDirName:"sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation",slug:"/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/ANALYZE",permalink:"/docs/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/ANALYZE",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ANALYZE",language:"en"},sidebar:"docs",previous:{title:"INSERT-OVERWRITE",permalink:"/docs/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/INSERT-OVERWRITE"},next:{title:"OUTFILE",permalink:"/docs/sql-manual/sql-statements/Data-Manipulation-Statements/OUTFILE"}},s={},p=[{value:"ANALYZE",id:"analyze",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,l.yg)(u,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"analyze"},"ANALYZE"),(0,l.yg)("h3",{id:"name"},"Name"),(0,l.yg)("p",null,"ANALYZE"),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("p",null,"This statement is used to collect statistical information for various columns."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ANALYZE < TABLE | DATABASE table_name | db_name > \n    [ (column_name [, ...]) ]\n    [ [ WITH SYNC ] [ WITH SAMPLE PERCENT | ROWS ] ];\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"table_name"),": The specified target table. It can be in the format ",(0,l.yg)("inlineCode",{parentName:"li"},"db_name.table_name"),"."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"column_name"),": The specified target column. It must be an existing column in ",(0,l.yg)("inlineCode",{parentName:"li"},"table_name"),". You can specify multiple column names separated by commas."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"sync"),": Collect statistics synchronously. Returns after collection. If not specified, it executes asynchronously and returns a JOB ID."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"sample percent | rows"),": Collect statistics with sampling. You can specify a sampling percentage or a number of sampling rows.")),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("p",null,"Collect statistical data for a table with a 10% sampling rate:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ANALYZE TABLE lineitem WITH SAMPLE PERCENT 10;\n")),(0,l.yg)("p",null,"Collect statistical data for a table with a sample of 100,000 rows:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ANALYZE TABLE lineitem WITH SAMPLE ROWS 100000;\n")),(0,l.yg)("h3",{id:"keywords"},"Keywords"),(0,l.yg)("p",null,"ANALYZE"))}m.isMDXComponent=!0}}]);