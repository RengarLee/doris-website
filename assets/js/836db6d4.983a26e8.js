"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[903362],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>s});var n=a(296540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=l,s=d["".concat(o,".").concat(m)]||d[m]||y[m]||r;return a?n.createElement(s,g(g({ref:t},p),{},{components:a})):n.createElement(s,g({ref:t},p))}));function s(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,g=new Array(r);g[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:l,g[1]=i;for(var u=2;u<r;u++)g[u]=a[u];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},44556:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>g,default:()=>y,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(58168),l=(a(296540),a(15680));const r={title:"Usage Notes",language:"en"},g=void 0,i={unversionedId:"table-design/data-model/tips",id:"version-2.1/table-design/data-model/tips",title:"Usage Notes",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/table-design/data-model/tips.md",sourceDirName:"table-design/data-model",slug:"/table-design/data-model/tips",permalink:"/docs/2.1/table-design/data-model/tips",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Usage Notes",language:"en"},sidebar:"docs",previous:{title:"Aggregate Key Model",permalink:"/docs/2.1/table-design/data-model/aggregate"},next:{title:"Hybrid Storage",permalink:"/docs/2.1/table-design/row-store"}},o={},u=[{value:"Suggestions for column types",id:"suggestions-for-column-types",level:2},{value:"Limitations of aggregate model",id:"limitations-of-aggregate-model",level:2},{value:"Merge on write of unique model",id:"merge-on-write-of-unique-model",level:3},{value:"Duplicate model",id:"duplicate-model",level:3},{value:"Key columns",id:"key-columns",level:2},{value:"Suggestions for choosing data model",id:"suggestions-for-choosing-data-model",level:2}],p={toc:u},d="wrapper";function y(e){let{components:t,...a}=e;return(0,l.yg)(d,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"suggestions-for-column-types"},"Suggestions for column types"),(0,l.yg)("p",null,"Suggestions for column types when creating a table:"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"The Key column should precede all Value columns."),(0,l.yg)("li",{parentName:"ol"},"Whenever possible, choose integer types. This is because the calculation and search efficiency of integer types are much higher than that of strings."),(0,l.yg)("li",{parentName:"ol"},"For selecting integer types of different lengths, follow the principle of sufficiency."),(0,l.yg)("li",{parentName:"ol"},"For the lengths of VARCHAR and STRING types, also follow the principle of sufficiency.")),(0,l.yg)("h2",{id:"limitations-of-aggregate-model"},"Limitations of aggregate model"),(0,l.yg)("p",null,"This section is about the limitations of the Aggregate Model."),(0,l.yg)("p",null,"The Aggregate Model only presents the aggregated data. That means we have to ensure the presentation consistency of data that has not yet been aggregated (for example, two different import batches). The following provides further explanation with examples."),(0,l.yg)("p",null,"Suppose that you have the following table schema:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"ColumnName"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"AggregationType"),(0,l.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"user","_","id"),(0,l.yg)("td",{parentName:"tr",align:null},"LARGEINT"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"User ID")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"date"),(0,l.yg)("td",{parentName:"tr",align:null},"DATE"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Date when the data are imported")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"cost"),(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.yg)("td",{parentName:"tr",align:null},"SUM"),(0,l.yg)("td",{parentName:"tr",align:null},"Total user consumption")))),(0,l.yg)("p",null,"Assume that there are two batches of data that have been imported into the storage engine as follows:"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"batch 1")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"user","_","id"),(0,l.yg)("th",{parentName:"tr",align:null},"date"),(0,l.yg)("th",{parentName:"tr",align:null},"cost"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10001"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-11-20"),(0,l.yg)("td",{parentName:"tr",align:null},"50")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10002"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-11-21"),(0,l.yg)("td",{parentName:"tr",align:null},"39")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"batch 2")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"user","_","id"),(0,l.yg)("th",{parentName:"tr",align:null},"date"),(0,l.yg)("th",{parentName:"tr",align:null},"cost"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10001"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-11-20"),(0,l.yg)("td",{parentName:"tr",align:null},"1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10001"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-11-21"),(0,l.yg)("td",{parentName:"tr",align:null},"5")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10003"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-11-22"),(0,l.yg)("td",{parentName:"tr",align:null},"22")))),(0,l.yg)("p",null,"As you can see, data about User 10001 in these two import batches have not yet been aggregated. However, in order to ensure that users can only query the aggregated data as follows:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"user","_","id"),(0,l.yg)("th",{parentName:"tr",align:null},"date"),(0,l.yg)("th",{parentName:"tr",align:null},"cost"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10001"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-11-20"),(0,l.yg)("td",{parentName:"tr",align:null},"51")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10001"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-11-21"),(0,l.yg)("td",{parentName:"tr",align:null},"5")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10002"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-11-21"),(0,l.yg)("td",{parentName:"tr",align:null},"39")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10003"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-11-22"),(0,l.yg)("td",{parentName:"tr",align:null},"22")))),(0,l.yg)("p",null,"We have added an aggregation operator to the  query engine to ensure the presentation consistency of data."),(0,l.yg)("p",null,"In addition, on the aggregate column (Value), when executing aggregate class queries that are inconsistent with the aggregate type, please pay attention to the semantics. For example, in the example above, if you execute the following query:"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"SELECT MIN(cost) FROM table;")),(0,l.yg)("p",null,"The result will be 5, not 1."),(0,l.yg)("p",null,"Meanwhile, this consistency guarantee could considerably reduce efficiency in some queries."),(0,l.yg)("p",null,"Take the basic count (*) query as an example:"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"SELECT COUNT(*) FROM table;")),(0,l.yg)("p",null,"In other databases, such queries return results quickly. Because in actual implementation, the models can get the query result by counting rows and saving the statistics upon import, or by scanning only one certain column of data to get count value upon query, with very little overhead. But in Doris's Aggregation Model, the overhead of such queries is ",(0,l.yg)("strong",{parentName:"p"},"large"),"."),(0,l.yg)("p",null,"For the previous example:"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"batch 1")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"user","_","id"),(0,l.yg)("th",{parentName:"tr",align:null},"date"),(0,l.yg)("th",{parentName:"tr",align:null},"cost"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10001"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-11-20"),(0,l.yg)("td",{parentName:"tr",align:null},"50")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10002"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-11-21"),(0,l.yg)("td",{parentName:"tr",align:null},"39")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"batch 2")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"user","_","id"),(0,l.yg)("th",{parentName:"tr",align:null},"date"),(0,l.yg)("th",{parentName:"tr",align:null},"cost"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10001"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-11-20"),(0,l.yg)("td",{parentName:"tr",align:null},"1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10001"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-11-21"),(0,l.yg)("td",{parentName:"tr",align:null},"5")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10003"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-11-22"),(0,l.yg)("td",{parentName:"tr",align:null},"22")))),(0,l.yg)("p",null,"Since the final aggregation result is:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"user","_","id"),(0,l.yg)("th",{parentName:"tr",align:null},"date"),(0,l.yg)("th",{parentName:"tr",align:null},"cost"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10001"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-11-20"),(0,l.yg)("td",{parentName:"tr",align:null},"51")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10001"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-11-21"),(0,l.yg)("td",{parentName:"tr",align:null},"5")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10002"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-11-21"),(0,l.yg)("td",{parentName:"tr",align:null},"39")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10003"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-11-22"),(0,l.yg)("td",{parentName:"tr",align:null},"22")))),(0,l.yg)("p",null,"The correct result of  ",(0,l.yg)("inlineCode",{parentName:"p"},"select count (*) from table;"),"  should be ",(0,l.yg)("strong",{parentName:"p"},"4"),". But if the model only scans the ",(0,l.yg)("inlineCode",{parentName:"p"},"user_id"),"\ncolumn and operates aggregation upon query, the final result will be ",(0,l.yg)("strong",{parentName:"p"},"3")," (10001, 10002, 10003).\nAnd if it does not operate aggregation, the final result will be ",(0,l.yg)("strong",{parentName:"p"},"5")," (a total of five rows in two batches). Apparently, both results are wrong."),(0,l.yg)("p",null,"In order to get the correct result, we must read both the  ",(0,l.yg)("inlineCode",{parentName:"p"},"user_id")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"date")," column, and ",(0,l.yg)("strong",{parentName:"p"},"performs aggregation")," when querying.\nThat is to say, in the ",(0,l.yg)("inlineCode",{parentName:"p"},"count (*)")," query, Doris must scan all AGGREGATE KEY columns (in this case, ",(0,l.yg)("inlineCode",{parentName:"p"},"user_id")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"date"),")\nand aggregate them to get the semantically correct results. That means if there are many aggregated columns, ",(0,l.yg)("inlineCode",{parentName:"p"},"count (*)")," queries could involve scanning large amounts of data."),(0,l.yg)("p",null,"Therefore, if you need to perform frequent ",(0,l.yg)("inlineCode",{parentName:"p"},"count (*)")," queries, we recommend that you simulate ",(0,l.yg)("inlineCode",{parentName:"p"},"count (*)")," by adding a\ncolumn of value 1 and aggregation type SUM. In this way, the table schema in the previous example will be modified as follows:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"ColumnName"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"AggregationType"),(0,l.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"user ID"),(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"User ID")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"date"),(0,l.yg)("td",{parentName:"tr",align:null},"DATE"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Date when the data are imported")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Cost"),(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.yg)("td",{parentName:"tr",align:null},"SUM"),(0,l.yg)("td",{parentName:"tr",align:null},"Total user consumption")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"count"),(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.yg)("td",{parentName:"tr",align:null},"SUM"),(0,l.yg)("td",{parentName:"tr",align:null},"For count queries")))),(0,l.yg)("p",null,"The above adds a count column, the value of which will always be ",(0,l.yg)("strong",{parentName:"p"},"1"),", so the result of ",(0,l.yg)("inlineCode",{parentName:"p"},"select count (*) from table;"),"\nis equivalent to that of ",(0,l.yg)("inlineCode",{parentName:"p"},"select sum (count) from table;")," The latter is much more efficient than the former. However,\nthis method has its shortcomings, too. That is, it  requires that users will not import rows with the same values in the\nAGGREGATE KEY columns. Otherwise, ",(0,l.yg)("inlineCode",{parentName:"p"},"select sum (count) from table;")," can only express the number of rows of the originally imported data, instead of the semantics of ",(0,l.yg)("inlineCode",{parentName:"p"},"select count (*) from table;")),(0,l.yg)("p",null,"Another method is to add a ",(0,l.yg)("inlineCode",{parentName:"p"},"cound")," column of value 1 but aggregation type of REPLACE. Then ",(0,l.yg)("inlineCode",{parentName:"p"},"select sum (count) from table;"),"\nand ",(0,l.yg)("inlineCode",{parentName:"p"},"select count (*) from table;"),"  could produce the same results. Moreover, this method does not require the absence of same AGGREGATE KEY columns in the import data."),(0,l.yg)("h3",{id:"merge-on-write-of-unique-model"},"Merge on write of unique model"),(0,l.yg)("p",null,"The Merge on Write implementation in the Unique Model does not impose the same limitation as the Aggregate Model.\nIn Merge on Write, the model adds a  ",(0,l.yg)("inlineCode",{parentName:"p"},"delete bitmap")," for each imported rowset to mark the data being overwritten or deleted. With the previous example, after Batch 1 is imported, the data status will be as follows:"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"batch 1")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"user_id"),(0,l.yg)("th",{parentName:"tr",align:null},"date"),(0,l.yg)("th",{parentName:"tr",align:null},"cost"),(0,l.yg)("th",{parentName:"tr",align:null},"delete bit"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10001"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-11-20"),(0,l.yg)("td",{parentName:"tr",align:null},"50"),(0,l.yg)("td",{parentName:"tr",align:null},"false")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10002"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-11-21"),(0,l.yg)("td",{parentName:"tr",align:null},"39"),(0,l.yg)("td",{parentName:"tr",align:null},"false")))),(0,l.yg)("p",null,"After Batch 2 is imported, the duplicate rows in the first batch will be marked as deleted, and the status of the two batches of data is as follows"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"batch 1")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"user_id"),(0,l.yg)("th",{parentName:"tr",align:null},"date"),(0,l.yg)("th",{parentName:"tr",align:null},"cost"),(0,l.yg)("th",{parentName:"tr",align:null},"delete bit"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10001"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-11-20"),(0,l.yg)("td",{parentName:"tr",align:null},"50"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"td"},"true"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10002"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-11-21"),(0,l.yg)("td",{parentName:"tr",align:null},"39"),(0,l.yg)("td",{parentName:"tr",align:null},"false")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"batch 2")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"user","_","id"),(0,l.yg)("th",{parentName:"tr",align:null},"date"),(0,l.yg)("th",{parentName:"tr",align:null},"cost"),(0,l.yg)("th",{parentName:"tr",align:null},"delete bit"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10001"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-11-20"),(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"false")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10001"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-11-21"),(0,l.yg)("td",{parentName:"tr",align:null},"5"),(0,l.yg)("td",{parentName:"tr",align:null},"false")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10003"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-11-22"),(0,l.yg)("td",{parentName:"tr",align:null},"22"),(0,l.yg)("td",{parentName:"tr",align:null},"false")))),(0,l.yg)("p",null,"In queries, all data marked ",(0,l.yg)("inlineCode",{parentName:"p"},"true")," in the ",(0,l.yg)("inlineCode",{parentName:"p"},"delete bitmap")," will not be read, so there is no need for data aggregation.\nSince there are 4 valid rows in the above data, the query result should also be 4.  This also enables minimum overhead since it only scans one column of data."),(0,l.yg)("p",null,"In the test environment, ",(0,l.yg)("inlineCode",{parentName:"p"},"count(*)")," queries in Merge on Write of the Unique Model deliver 10 times higher performance than that of the Aggregate Model."),(0,l.yg)("h3",{id:"duplicate-model"},"Duplicate model"),(0,l.yg)("p",null,"The Duplicate Model does not impose the same limitation as the Aggregate Model because it does not involve aggregation semantics.\nFor any columns, it can return the semantically correct results in  ",(0,l.yg)("inlineCode",{parentName:"p"},"count (*)")," queries."),(0,l.yg)("h2",{id:"key-columns"},"Key columns"),(0,l.yg)("p",null,'For the Duplicate, Aggregate, and Unique Models, the Key columns will be specified when the table is created,\nbut there exist some differences: In the Duplicate Model, the Key columns of the table can be regarded as just "sorting columns",\nbut not unique identifiers. In Aggregate and Unique Models, the Key columns are both "sorting columns" and "unique identifier columns".'),(0,l.yg)("h2",{id:"suggestions-for-choosing-data-model"},"Suggestions for choosing data model"),(0,l.yg)("p",null,"Since the data model was established when the table was built, and ",(0,l.yg)("strong",{parentName:"p"},"irrevocable thereafter, it is very important to select the appropriate data model"),"."),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"The Aggregate Model can greatly reduce the amount of data scanned and query computation by pre-aggregation. Thus, it is very suitable for report query scenarios with fixed patterns. But this model is unfriendly to ",(0,l.yg)("inlineCode",{parentName:"li"},"count (*)")," queries. Meanwhile, since the aggregation method on the Value column is fixed, semantic correctness should be considered in other types of aggregation queries."),(0,l.yg)("li",{parentName:"ol"},"The Unique Model guarantees the uniqueness of primary key for scenarios requiring a unique primary key. The downside is that it cannot exploit the advantage brought by pre-aggregation such as ROLLUP in queries. Users who have high-performance requirements for aggregate queries are recommended to use the newly added Merge on Write implementation since version 1.2."),(0,l.yg)("li",{parentName:"ol"},"The Duplicate Model is suitable for ad-hoc queries of any dimensions. Although it may not be able to take advantage of the pre-aggregation feature, it is not limited by what constrains the Aggregate Model and can give full play to the advantage of columnar storage (reading only the relevant columns, but not all Key columns)."),(0,l.yg)("li",{parentName:"ol"},"If user need to use partial-update, please refer to document ",(0,l.yg)("a",{parentName:"li",href:"../../data-operate/update/update-of-unique-model"},"partial-update"))))}y.isMDXComponent=!0}}]);