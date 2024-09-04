"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[27173],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>m});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=n.createContext({}),o=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(g.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=o(a),u=r,m=p["".concat(g,".").concat(u)]||p[u]||y[u]||l;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var g in t)hasOwnProperty.call(t,g)&&(s[g]=t[g]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},845472:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var n=a(58168),r=(a(296540),a(15680));const l={title:"Data Types",language:"en"},i=void 0,s={unversionedId:"table-design/data-type",id:"version-2.1/table-design/data-type",title:"Data Types",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/table-design/data-type.md",sourceDirName:"table-design",slug:"/table-design/data-type",permalink:"/docs/2.1/table-design/data-type",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Data Types",language:"en"},sidebar:"docs",previous:{title:"High-speed data transmission link based on Arrow Flight SQL",permalink:"/docs/2.1/db-connect/arrow-flight-sql-connect"},next:{title:"Model Overview",permalink:"/docs/2.1/table-design/data-model/overview"}},g={},o=[{value:"Numeric data type",id:"numeric-data-type",level:2},{value:"Datetime data type",id:"datetime-data-type",level:2},{value:"String data type",id:"string-data-type",level:2},{value:"Semi-structured data type",id:"semi-structured-data-type",level:2},{value:"Aggregation data type",id:"aggregation-data-type",level:2},{value:"IP types",id:"ip-types",level:2}],d={toc:o},p="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Apache Doris support standard SQL syntax, using MySQL Network Connection Protocol, highly compatible with MySQL syntax protocol. Therefore, in terms of data type support, Apache Doris aligns as closely as possible with MySQL-related data types"),(0,r.yg)("p",null,"The list of data types supported by Doris is as follows:"),(0,r.yg)("h2",{id:"numeric-data-type"},(0,r.yg)("a",{parentName:"h2",href:"../sql-manual/sql-data-types/numeric/numeric-overview"},"Numeric data type")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Type Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Storage (bytes)"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"../sql-manual/sql-data-types/numeric/BOOLEAN"},"BOOLEAN")),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean data type that stores only two values: 0 represents false, 1 represents true.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"../sql-manual/sql-data-types/numeric/TINYINT"},"TINYINT")),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer value, signed range is from -128 to 127.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"../sql-manual/sql-data-types/numeric/SMALLINT"},"SMALLINT")),(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer value, signed range is from -32768 to 32767.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"../sql-manual/sql-data-types/numeric/INT"},"INT")),(0,r.yg)("td",{parentName:"tr",align:null},"4"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer value, signed range is from -2147483648 to 2147483647.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"../sql-manual/sql-data-types/numeric/BIGINT"},"BIGINT")),(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer value, signed range is from -9223372036854775808 to 9223372036854775807.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"../sql-manual/sql-data-types/numeric/LARGEINT"},"LARGEINT")),(0,r.yg)("td",{parentName:"tr",align:null},"16"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer value, range is ","[-2^127 + 1 to 2^127 - 1]",".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"../sql-manual/sql-data-types/numeric/FLOAT"},"FLOAT")),(0,r.yg)("td",{parentName:"tr",align:null},"4"),(0,r.yg)("td",{parentName:"tr",align:null},"Single precision floating point number, range is ","[-3.4 ",(0,r.yg)("em",{parentName:"td"}," 10^38 to 3.4 ")," 10^38]",".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"../sql-manual/sql-data-types/numeric/DOUBLE"},"DOUBLE")),(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"Double precision floating point number, range is ","[-1.79 ",(0,r.yg)("em",{parentName:"td"}," 10^308 to 1.79 ")," 10^308]",".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"../sql-manual/sql-data-types/numeric/DECIMAL"},"DECIMAL")),(0,r.yg)("td",{parentName:"tr",align:null},"4/8/16"),(0,r.yg)("td",{parentName:"tr",align:null},"An exact fixed-point number defined by precision (total number of digits) and scale (number of digits to the right of the decimal point). Format: DECIMAL(M","[,D]","), where M is precision and D is scale. The range for M is ","[1, 38]",", and for D is ","[0, precision]",". Storage requirements: - 4 bytes for 0 < precision <= 9, - 8 bytes for 9 < precision <= 18, - 16 bytes for 18 < precision <= 38.")))),(0,r.yg)("h2",{id:"datetime-data-type"},(0,r.yg)("a",{parentName:"h2",href:"../sql-manual/sql-data-types/datetime/datetime-overview"},"Datetime data type")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Type name"),(0,r.yg)("th",{parentName:"tr",align:null},"Storeage (bytes)"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"../sql-manual/sql-data-types/date-time/DATE"},"DATE")),(0,r.yg)("td",{parentName:"tr",align:null},"16"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE holds values for a calendar year, month and day, the  supported range is ","['0000-01-01', '9999-12-31']",".  Default print format: 'yyyy-MM-dd'.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"../sql-manual/sql-data-types/date-time/DATETIME"},"DATETIME")),(0,r.yg)("td",{parentName:"tr",align:null},"16"),(0,r.yg)("td",{parentName:"tr",align:null},"A DATE and TIME combination  Format: DATETIME (","[P]",").   The optional parameter P represents time precision, with a value range of ","[0,6]",", supporting up to 6 decimal places (microseconds). When not set, it is 0.   The supported range is ['0000-01-01 00:00:00 ","[.000000]","', '9999-12-31 23:59:59 ","[.999999]","'].   Default print format: 'yyy-MM-dd HH: mm: ss. SSSSSS '.")))),(0,r.yg)("h2",{id:"string-data-type"},(0,r.yg)("a",{parentName:"h2",href:"../sql-manual/sql-data-types/string-type/string-overview"},"String data type")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Type name"),(0,r.yg)("th",{parentName:"tr",align:null},"Storeage (bytes)"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"../sql-manual/sql-data-types/string-type/CHAR"},"CHAR")),(0,r.yg)("td",{parentName:"tr",align:null},"M"),(0,r.yg)("td",{parentName:"tr",align:null},"A FIXED length string, the parameter M specifies the column length in characters. The range of M is from 1 to 255.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"../sql-manual/sql-data-types/string-type/VARCHAR"},"VARCHAR")),(0,r.yg)("td",{parentName:"tr",align:null},"Variable Length"),(0,r.yg)("td",{parentName:"tr",align:null},"A VARIABLE length string , the parameter M specifies the maximum string length in characters. The range of M is from 1 to 65533.   The variable-length string is stored in UTF-8 encoding. English characters occupy 1 byte, and Chinese characters occupy 3 bytes.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"../sql-manual/sql-data-types/string-type/STRING"},"STRING")),(0,r.yg)("td",{parentName:"tr",align:null},"Variable Length"),(0,r.yg)("td",{parentName:"tr",align:null},"A VARIABLE length string, default supports 1048576 bytes (1 MB), and a limit of maximum precision of 2147483643 bytes (2 GB).   Size can be configured string_type_length_soft_limit_bytes adjusted through BE.   String type can only be used in value column, not in key column and partition bucket column.")))),(0,r.yg)("h2",{id:"semi-structured-data-type"},(0,r.yg)("a",{parentName:"h2",href:"../sql-manual/sql-data-types/semi-structured/semi-structured-overview"},"Semi-structured data type")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Type name"),(0,r.yg)("th",{parentName:"tr",align:null},"Storeage (bytes)"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"../sql-manual/sql-data-types/semi-structured/ARRAY"},"ARRAY")),(0,r.yg)("td",{parentName:"tr",align:null},"Variable Length"),(0,r.yg)("td",{parentName:"tr",align:null},"Arrays composed of elements of type T cannot be used as key columns. Currently supported for use in tables with Duplicate and Unique models.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"../sql-manual/sql-data-types/semi-structured/MAP"},"MAP")),(0,r.yg)("td",{parentName:"tr",align:null},"Variable Length"),(0,r.yg)("td",{parentName:"tr",align:null},"Maps consisting of elements of type K and V, cannot be used as Key columns. These maps are currently supported in tables using the Duplicate and Unique models.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"../sql-manual/sql-data-types/semi-structured/STRUCT"},"STRUCT")),(0,r.yg)("td",{parentName:"tr",align:null},"Variable Length"),(0,r.yg)("td",{parentName:"tr",align:null},"A structure composed of multiple Fields can also be understood as a collection of multiple columns. It cannot be used as a Key. Currently, STRUCT can only be used in tables of Duplicate models. The name and number of Fields in a Struct are fixed and are always Nullable.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"../sql-manual/sql-data-types/semi-structured/JSON"},"JSON")),(0,r.yg)("td",{parentName:"tr",align:null},"Variable Length"),(0,r.yg)("td",{parentName:"tr",align:null},"Binary JSON type, stored in binary JSON format, access internal JSON fields through JSON function.   Supported up to 1048576 bytes (1MB) by default, and can be adjusted to a maximum of 2147483643 bytes (2GB). This limit can be modified through the BE configuration parameter 'jsonb_type_length_soft_limit_bytes'.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"../sql-manual/sql-data-types/semi-structured/VARIANT"},"VARIANT")),(0,r.yg)("td",{parentName:"tr",align:null},"Variable Length"),(0,r.yg)("td",{parentName:"tr",align:null},"The VARIANT data type is dynamically adaptable, specifically designed for semi-structured data like JSON. It can store any JSON object and automatically splits JSON fields into subcolumns for improved storage efficiency and query performance. The length limits and configuration methods are the same as for the STRING type. However, the VARIANT type can only be used in value columns and cannot be used in key columns or partition / bucket columns.")))),(0,r.yg)("h2",{id:"aggregation-data-type"},(0,r.yg)("a",{parentName:"h2",href:"../sql-manual/sql-data-types/aggregate/aggregate-overview"},"Aggregation data type")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Type name"),(0,r.yg)("th",{parentName:"tr",align:null},"Storeage (bytes)"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"../sql-manual/sql-data-types/aggregate/HLL"},"HLL")),(0,r.yg)("td",{parentName:"tr",align:null},"Variable Length"),(0,r.yg)("td",{parentName:"tr",align:null},"HLL stands for HyperLogLog, is a fuzzy deduplication. It performs better than Count Distinct when dealing with large datasets.   The error rate of HLL is typically around 1%, and sometimes it can reach 2%. HLL cannot be used as a key column, and the aggregation type is HLL_UNION when creating a table.  Users do not need to specify the length or default value as it is internally controlled based on the aggregation level of the data.  HLL columns can only be queried or used through the companion functions such as hll_union_agg, hll_raw_agg, hll_cardinality, and hll_hash.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"../sql-manual/sql-data-types/aggregate/BITMAP"},"BITMAP")),(0,r.yg)("td",{parentName:"tr",align:null},"Variable Length"),(0,r.yg)("td",{parentName:"tr",align:null},"BITMAP type can be used in Aggregate tables, Unique tables or Duplicate tables.  - When used in a Unique table or a Duplicate table, BITMAP must be employed as non-key columns.  - When used in an Aggregate table, BITMAP must also serve as non-key columns, and the aggregation type must be set to BITMAP_UNION during table creation.  Users do not need to specify the length or default value as it is internally controlled based on the aggregation level of the data. BITMAP columns can only be queried or used through the companion functions such as bitmap_union_count, bitmap_union, bitmap_hash, and bitmap_hash64.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"../sql-manual/sql-data-types/aggregate/QUANTILE_STATE"},"QUANTILE_STATE")),(0,r.yg)("td",{parentName:"tr",align:null},"Variable Length"),(0,r.yg)("td",{parentName:"tr",align:null},"A type used to calculate approximate quantile values.  When loading, it performs pre-aggregation for the same keys with different values. When the number of values does not exceed 2048, it records all data in detail. When the number of values is greater than 2048, it employs the TDigest algorithm to aggregate (cluster) the data and store the centroid points after clustering.   QUANTILE_STATE cannot be used as a key column and should be paired with the aggregation type QUANTILE_UNION when creating a table. Users do not need to specify the length or default value as it is internally controlled based on the aggregation level of the data.   QUANTILE_STATE columns can only be queried or used through the companion functions such as QUANTILE_PERCENT, QUANTILE_UNION, and TO_QUANTILE_STATE.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"../sql-manual/sql-data-types/aggregate/AGG_STATE"},"AGG_STATE")),(0,r.yg)("td",{parentName:"tr",align:null},"Variable Length"),(0,r.yg)("td",{parentName:"tr",align:null},"Aggregate function can only be used with state/merge/union function combiners.   AGG_STATE cannot be used as a key column. When creating a table, the signature of the aggregate function needs to be declared alongside.   Users do not need to specify the length or default value. The actual data storage size depends on the function's implementation.")))),(0,r.yg)("h2",{id:"ip-types"},(0,r.yg)("a",{parentName:"h2",href:"../sql-manual/sql-data-types/ip/ip-overview"},"IP types")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Type Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Storage (bytes)"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"../sql-manual/sql-data-types/ip/IPV4"},"IPv4")),(0,r.yg)("td",{parentName:"tr",align:null},"4"),(0,r.yg)("td",{parentName:"tr",align:null},"It is used in conjunction with the ",(0,r.yg)("inlineCode",{parentName:"td"},"ipv4_*")," family of functions.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"../sql-manual/sql-data-types/ip/IPV6"},"IPv6")),(0,r.yg)("td",{parentName:"tr",align:null},"16"),(0,r.yg)("td",{parentName:"tr",align:null},"It is used in conjunction with the ",(0,r.yg)("inlineCode",{parentName:"td"},"ipv6_*")," family of functions.")))),(0,r.yg)("p",null,"You can also view all the data types supported by Doris with the ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW DATA TYPES; "),"statement."))}y.isMDXComponent=!0}}]);