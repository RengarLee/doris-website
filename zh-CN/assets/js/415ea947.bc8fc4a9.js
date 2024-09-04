"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[230157],{15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>u});var r=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),o=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},y=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),s=o(a),m=n,u=s["".concat(p,".").concat(m)]||s[m]||d[m]||l;return a?r.createElement(u,g(g({ref:t},y),{},{components:a})):r.createElement(u,g({ref:t},y))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,g=new Array(l);g[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:n,g[1]=i;for(var o=2;o<l;o++)g[o]=a[o];return r.createElement.apply(null,g)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},565882:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=a(58168),n=(a(296540),a(15680));const l={title:"PostgreSQL",language:"zh-CN"},g=void 0,i={unversionedId:"lakehouse/database/postgresql",id:"version-2.1/lakehouse/database/postgresql",title:"PostgreSQL",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/lakehouse/database/postgresql.md",sourceDirName:"lakehouse/database",slug:"/lakehouse/database/postgresql",permalink:"/zh-CN/docs/2.1/lakehouse/database/postgresql",draft:!1,tags:[],version:"2.1",frontMatter:{title:"PostgreSQL",language:"zh-CN"},sidebar:"docs",previous:{title:"MySQL",permalink:"/zh-CN/docs/2.1/lakehouse/database/mysql"},next:{title:"Oracle",permalink:"/zh-CN/docs/2.1/lakehouse/database/oracle"}},p={},o=[{value:"\u4f7f\u7528\u987b\u77e5",id:"\u4f7f\u7528\u987b\u77e5",level:2},{value:"\u8fde\u63a5 PostgreSQL",id:"\u8fde\u63a5-postgresql",level:2},{value:"\u8fde\u63a5\u5b89\u5168",id:"\u8fde\u63a5\u5b89\u5168",level:3},{value:"\u5c42\u7ea7\u6620\u5c04",id:"\u5c42\u7ea7\u6620\u5c04",level:2},{value:"\u7c7b\u578b\u6620\u5c04",id:"\u7c7b\u578b\u6620\u5c04",level:2},{value:"PostgreSQL \u5230 Doris \u7c7b\u578b\u6620\u5c04",id:"postgresql-\u5230-doris-\u7c7b\u578b\u6620\u5c04",level:3},{value:"\u65f6\u95f4\u6233\u7c7b\u578b\u5904\u7406",id:"\u65f6\u95f4\u6233\u7c7b\u578b\u5904\u7406",level:3},{value:"\u67e5\u8be2\u4f18\u5316",id:"\u67e5\u8be2\u4f18\u5316",level:2},{value:"\u7edf\u8ba1\u4fe1\u606f",id:"\u7edf\u8ba1\u4fe1\u606f",level:3},{value:"\u8c13\u8bcd\u4e0b\u63a8",id:"\u8c13\u8bcd\u4e0b\u63a8",level:3},{value:"\u884c\u6570\u9650\u5236",id:"\u884c\u6570\u9650\u5236",level:3},{value:"\u8f6c\u4e49\u5b57\u7b26",id:"\u8f6c\u4e49\u5b57\u7b26",level:3}],y={toc:o},s="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(s,(0,r.A)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Doris JDBC Catalog \u652f\u6301\u901a\u8fc7\u6807\u51c6 JDBC \u63a5\u53e3\u8fde\u63a5 PostgreSQL \u6570\u636e\u5e93\u3002\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u914d\u7f6e PostgreSQL \u6570\u636e\u5e93\u8fde\u63a5\u3002"),(0,n.yg)("h2",{id:"\u4f7f\u7528\u987b\u77e5"},"\u4f7f\u7528\u987b\u77e5"),(0,n.yg)("p",null,"\u8981\u8fde\u63a5\u5230 PostgreSQL \u6570\u636e\u5e93\uff0c\u60a8\u9700\u8981"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"PostgreSQL 11.x \u6216\u66f4\u9ad8\u7248\u672c")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"PostgreSQL \u6570\u636e\u5e93\u7684 JDBC \u9a71\u52a8\u7a0b\u5e8f\uff0c\u60a8\u53ef\u4ee5\u4ece ",(0,n.yg)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/org.postgresql/postgresql"},"Maven \u4ed3\u5e93"),"\u4e0b\u8f7d\u6700\u65b0\u6216\u6307\u5b9a\u7248\u672c\u7684 PostgreSQL JDBC \u9a71\u52a8\u7a0b\u5e8f\u3002",(0,n.yg)("strong",{parentName:"p"},"\u63a8\u8350\u4f7f\u7528 PostgreSQL JDBC Driver 42.5.x \u53ca\u4ee5\u4e0a\u7248\u672c\u3002"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Doris \u6bcf\u4e2a FE \u548c BE \u8282\u70b9\u548c PostgreSQL \u670d\u52a1\u5668\u4e4b\u95f4\u7684\u7f51\u7edc\u8fde\u63a5\uff0c\u9ed8\u8ba4\u7aef\u53e3\u4e3a 5432\u3002"))),(0,n.yg)("h2",{id:"\u8fde\u63a5-postgresql"},"\u8fde\u63a5 PostgreSQL"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG postgresql PROPERTIES (\n    "type"="jdbc",\n    "user"="root",\n    "password"="secret",\n    "jdbc_url" = "jdbc:postgresql://example.net:5432/postgres",\n    "driver_url" = "postgresql-42.5.6.jar",\n    "driver_class" = "org.postgresql.Driver"\n)\n')),(0,n.yg)("admonition",{title:"\u5907\u6ce8",type:"info"},(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("inlineCode",{parentName:"p"},"jdbc_url")," \u5b9a\u4e49\u8981\u4f20\u9012\u7ed9 PostgreSQL JDBC \u9a71\u52a8\u7a0b\u5e8f\u7684\u8fde\u63a5\u4fe1\u606f\u548c\u53c2\u6570\u3002\n\u652f\u6301\u7684 URL \u7684\u53c2\u6570\u53ef\u5728 ",(0,n.yg)("a",{parentName:"p",href:"https://jdbc.postgresql.org/documentation/use/#connecting-to-the-database"},"PostgreSQL JDBC \u9a71\u52a8\u7a0b\u5e8f\u6587\u6863")," \u4e2d\u627e\u5230\u3002")),(0,n.yg)("h3",{id:"\u8fde\u63a5\u5b89\u5168"},"\u8fde\u63a5\u5b89\u5168"),(0,n.yg)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u6570\u636e\u6e90\u4e0a\u5b89\u88c5\u7684\u5168\u5c40\u4fe1\u4efb\u8bc1\u4e66\u914d\u7f6e\u4e86 TLS\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u5c06\u53c2\u6570\u9644\u52a0\u5230\u5728 jdbc_url \u5c5e\u6027\u4e2d\u8bbe\u7f6e\u7684 JDBC \u8fde\u63a5\u5b57\u7b26\u4e32\u6765\u542f\u7528\u96c6\u7fa4\u548c\u6570\u636e\u6e90\u4e4b\u95f4\u7684 TLS\u3002"),(0,n.yg)("p",null,"\u4f8b\u5982\uff0c\u5bf9\u4e8e\u7248\u672c 42 \u7684 PostgreSQL JDBC \u9a71\u52a8\u7a0b\u5e8f\uff0c\u901a\u8fc7\u5c06 ssl=true \u53c2\u6570\u6dfb\u52a0\u5230 jdbc_url \u914d\u7f6e\u5c5e\u6027\u4e2d\u542f\u7528 TLS\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'"jdbc_url"="jdbc:postgresql://example.net:5432/database?ssl=true"\n')),(0,n.yg)("p",null,"\u6709\u5173 TLS \u914d\u7f6e\u9009\u9879\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,n.yg)("a",{parentName:"p",href:"https://jdbc.postgresql.org/documentation/use/#connecting-to-the-database"},"PostgreSQL JDBC \u9a71\u52a8\u7a0b\u5e8f\u6587\u6863"),"\u3002"),(0,n.yg)("h2",{id:"\u5c42\u7ea7\u6620\u5c04"},"\u5c42\u7ea7\u6620\u5c04"),(0,n.yg)("p",null,"\u6620\u5c04 PostgreSQL \u65f6\uff0cDoris \u7684\u4e00\u4e2a Database \u5bf9\u5e94\u4e8e PostgreSQL \u4e2d\u6307\u5b9a database \u4e0b\u7684\u4e00\u4e2a Schema\uff08\u5982\u793a\u4f8b\u4e2d ",(0,n.yg)("inlineCode",{parentName:"p"},"jdbc_url")," \u53c2\u6570\u4e2d ",(0,n.yg)("inlineCode",{parentName:"p"},"postgres")," \u4e0b\u7684 schemas\uff09\u3002\u800c Doris \u7684 Database \u4e0b\u7684 Table \u5219\u5bf9\u5e94\u4e8e PostgreSQL \u4e2d\uff0c\u8be5 Schema \u4e0b\u7684 Tables\u3002\u5373\u6620\u5c04\u5173\u7cfb\u5982\u4e0b\uff1a"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"center"},"Doris"),(0,n.yg)("th",{parentName:"tr",align:"center"},"PostgreSQL"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Catalog"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Database")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Database"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Schema")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Table"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Table")))),(0,n.yg)("h2",{id:"\u7c7b\u578b\u6620\u5c04"},"\u7c7b\u578b\u6620\u5c04"),(0,n.yg)("h3",{id:"postgresql-\u5230-doris-\u7c7b\u578b\u6620\u5c04"},"PostgreSQL \u5230 Doris \u7c7b\u578b\u6620\u5c04"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"PostgreSQL Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Doris Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"boolean"),(0,n.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"smallint/int2"),(0,n.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"integer/int4"),(0,n.yg)("td",{parentName:"tr",align:null},"INT"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"bigint/int8"),(0,n.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"decimal/numeric"),(0,n.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"real/float4"),(0,n.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"double precision"),(0,n.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"smallserial"),(0,n.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"serial"),(0,n.yg)("td",{parentName:"tr",align:null},"INT"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"bigserial"),(0,n.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"char"),(0,n.yg)("td",{parentName:"tr",align:null},"CHAR"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"varchar/text"),(0,n.yg)("td",{parentName:"tr",align:null},"STRING"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"timestamp/timestampz"),(0,n.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"date"),(0,n.yg)("td",{parentName:"tr",align:null},"DATE"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"json/jsonb"),(0,n.yg)("td",{parentName:"tr",align:null},"STRING"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"time"),(0,n.yg)("td",{parentName:"tr",align:null},"STRING"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"interval"),(0,n.yg)("td",{parentName:"tr",align:null},"STRING"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"point/line/lseg/box/path/polygon/circle"),(0,n.yg)("td",{parentName:"tr",align:null},"STRING"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"cidr/inet/macaddr"),(0,n.yg)("td",{parentName:"tr",align:null},"STRING"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"bit"),(0,n.yg)("td",{parentName:"tr",align:null},"BOOLEAN/STRING"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"uuid"),(0,n.yg)("td",{parentName:"tr",align:null},"STRING"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Other"),(0,n.yg)("td",{parentName:"tr",align:null},"UNSUPPORTED"),(0,n.yg)("td",{parentName:"tr",align:null})))),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"\u65e0\u7cbe\u5ea6 numeric \u4f1a\u88ab\u6620\u5c04\u4e3a String \u7c7b\u578b\uff0c\u8fdb\u884c\u6570\u503c\u8ba1\u7b97\u65f6\u9700\u8981\u5148\u8f6c\u6362\u4e3a DECIMAL \u7c7b\u578b\uff0c\u4e14\u4e0d\u652f\u6301\u56de\u5199\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u4e3a\u4e86\u66f4\u597d\u7684\u8bfb\u53d6\u4e0e\u8ba1\u7b97\u6027\u80fd\u5747\u8861\uff0cDoris \u4f1a\u5c06 JSON \u7c7b\u578b\u6620\u5c04\u4e3a STRING \u7c7b\u578b\u3002"),(0,n.yg)("li",{parentName:"ul"},"Doris \u4e0d\u652f\u6301 BIT \u7c7b\u578b\uff0cBIT \u7c7b\u578b\u4f1a\u5728 BIT(1) \u65f6\u88ab\u6620\u5c04\u4e3a BOOLEAN\uff0c\u5176\u4ed6\u60c5\u51b5\u4e0b\u6620\u5c04\u4e3a STRING\u3002"),(0,n.yg)("li",{parentName:"ul"},"Doris \u4e0d\u652f\u6301 time \u7c7b\u578b\uff0cTIME \u7c7b\u578b\u4f1a\u88ab\u6620\u5c04\u4e3a STRING\u3002"))),(0,n.yg)("h3",{id:"\u65f6\u95f4\u6233\u7c7b\u578b\u5904\u7406"},"\u65f6\u95f4\u6233\u7c7b\u578b\u5904\u7406"),(0,n.yg)("p",null,"\u7531\u4e8e Doris \u4e0d\u652f\u6301\u5e26\u65f6\u533a\u7684\u65f6\u95f4\u6233\u7c7b\u578b\uff0c\u6240\u4ee5\u5728\u8bfb\u53d6 PostgreSQL \u7684 timestampz \u7c7b\u578b\u65f6\uff0cDoris \u4f1a\u5c06\u5176\u6620\u5c04\u4e3a DATETIME \u7c7b\u578b\uff0c\u4e14\u4f1a\u5728\u8bfb\u53d6\u65f6\u8f6c\u6362\u6210\u672c\u5730\u65f6\u533a\u7684\u65f6\u95f4\u3002"),(0,n.yg)("p",null,"\u4e14\u7531\u4e8e\u5728 JDBC \u7c7b\u578b Catalog \u8bfb\u53d6\u6570\u636e\u65f6\uff0cBE \u7684 Java \u90e8\u5206\u4f7f\u7528 JVM \u65f6\u533a\u3002JVM \u65f6\u533a\u9ed8\u8ba4\u4e3a BE \u90e8\u7f72\u673a\u5668\u7684\u65f6\u533a\uff0c\u8fd9\u4f1a\u5f71\u54cd JDBC \u8bfb\u53d6\u6570\u636e\u65f6\u7684\u65f6\u533a\u8f6c\u6362\u3002"),(0,n.yg)("p",null,"\u4e3a\u4e86\u786e\u4fdd\u65f6\u533a\u4e00\u81f4\u6027\uff0c\u5efa\u8bae\u5728 be.conf \u7684 JAVA_OPTS \u4e2d\u8bbe\u7f6e JVM \u65f6\u533a\u4e0e Doris session \u7684 ",(0,n.yg)("inlineCode",{parentName:"p"},"time_zone")," \u4e00\u81f4\u3002"),(0,n.yg)("h2",{id:"\u67e5\u8be2\u4f18\u5316"},"\u67e5\u8be2\u4f18\u5316"),(0,n.yg)("h3",{id:"\u7edf\u8ba1\u4fe1\u606f"},"\u7edf\u8ba1\u4fe1\u606f"),(0,n.yg)("p",null,"Doris \u4f1a\u5728 Catalog \u4e2d\u7ef4\u62a4\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u4ee5\u4fbf\u5728\u6267\u884c\u67e5\u8be2\u65f6\u80fd\u591f\u66f4\u597d\u5730\u4f18\u5316\u67e5\u8be2\u8ba1\u5212\u3002"),(0,n.yg)("p",null,"\u53ef\u4ee5\u67e5\u770b ",(0,n.yg)("a",{parentName:"p",href:"../external-statistics"},"\u5916\u8868\u7edf\u8ba1\u4fe1\u606f")," \u4e86\u89e3\u5982\u4f55\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u3002"),(0,n.yg)("h3",{id:"\u8c13\u8bcd\u4e0b\u63a8"},"\u8c13\u8bcd\u4e0b\u63a8"),(0,n.yg)("p",null,"\u5f53\u6267\u884c\u7c7b\u4f3c\u4e8e ",(0,n.yg)("inlineCode",{parentName:"p"},"where dt = '2022-01-01'")," \u8fd9\u6837\u7684\u67e5\u8be2\u65f6\uff0cDoris \u80fd\u591f\u5c06\u8fd9\u4e9b\u8fc7\u6ee4\u6761\u4ef6\u4e0b\u63a8\u5230\u5916\u90e8\u6570\u636e\u6e90\uff0c\u4ece\u800c\u76f4\u63a5\u5728\u6570\u636e\u6e90\u5c42\u9762\u6392\u9664\u4e0d\u7b26\u5408\u6761\u4ef6\u7684\u6570\u636e\uff0c\u51cf\u5c11\u4e86\u4e0d\u5fc5\u8981\u7684\u6570\u636e\u83b7\u53d6\u548c\u4f20\u8f93\u3002\u8fd9\u5927\u5927\u63d0\u9ad8\u4e86\u67e5\u8be2\u6027\u80fd\uff0c\u540c\u65f6\u4e5f\u964d\u4f4e\u4e86\u5bf9\u5916\u90e8\u6570\u636e\u6e90\u7684\u8d1f\u8f7d\u3002"),(0,n.yg)("h3",{id:"\u884c\u6570\u9650\u5236"},"\u884c\u6570\u9650\u5236"),(0,n.yg)("p",null,"\u5982\u679c\u5728\u67e5\u8be2\u4e2d\u5e26\u6709 limit \u5173\u952e\u5b57\uff0cDoris \u4f1a\u5c06 limit \u4e0b\u63a8\u5230 PostgreSQL\uff0c\u4ee5\u51cf\u5c11\u6570\u636e\u4f20\u8f93\u91cf\u3002"),(0,n.yg)("h3",{id:"\u8f6c\u4e49\u5b57\u7b26"},"\u8f6c\u4e49\u5b57\u7b26"),(0,n.yg)("p",null,'Doris \u4f1a\u5728\u4e0b\u53d1\u5230 PostgreSQL \u7684\u67e5\u8be2\u8bed\u53e5\u4e2d\uff0c\u81ea\u52a8\u5728\u5b57\u6bb5\u540d\u4e0e\u8868\u540d\u4e0a\u52a0\u4e0a\u8f6c\u4e49\u7b26\uff1a("")\uff0c\u4ee5\u907f\u514d\u5b57\u6bb5\u540d\u4e0e\u8868\u540d\u4e0e PostgreSQL \u5185\u90e8\u5173\u952e\u5b57\u51b2\u7a81\u3002'))}d.isMDXComponent=!0}}]);