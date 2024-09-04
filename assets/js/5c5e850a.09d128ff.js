"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[746685],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",E={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,m=d["".concat(c,".").concat(u)]||d[u]||E[u]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},255591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>E,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(58168),a=(n(296540),n(15680));const o={title:"TPCDS",language:"en"},s=void 0,i={unversionedId:"lakehouse/datalake-analytics/tpcds",id:"lakehouse/datalake-analytics/tpcds",title:"TPCDS",description:"\x3c!--",source:"@site/docs/lakehouse/datalake-analytics/tpcds.md",sourceDirName:"lakehouse/datalake-analytics",slug:"/lakehouse/datalake-analytics/tpcds",permalink:"/docs/dev/lakehouse/datalake-analytics/tpcds",draft:!1,tags:[],version:"current",frontMatter:{title:"TPCDS",language:"en"},sidebar:"docs",previous:{title:"TPCH",permalink:"/docs/dev/lakehouse/datalake-analytics/tpch"},next:{title:"Hive",permalink:"/docs/dev/lakehouse/datalake-building/hive-build"}},c={},l=[{value:"Usage Notes",id:"usage-notes",level:2},{value:"Compiling the TPCDS Connector",id:"compiling-the-tpcds-connector",level:2},{value:"Deploying the TPCDS Connector",id:"deploying-the-tpcds-connector",level:2},{value:"Creating the TPCDS Catalog",id:"creating-the-tpcds-catalog",level:2},{value:"Using the TPCDS Catalog",id:"using-the-tpcds-catalog",level:2},{value:"Best Practices",id:"best-practices",level:3},{value:"Quickly Build TPCDS Test Dataset",id:"quickly-build-tpcds-test-dataset",level:4}],p={toc:l},d="wrapper";function E(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"usage-notes"},"Usage Notes"),(0,a.yg)("p",null,"TPCDS Catalog uses the ",(0,a.yg)("a",{parentName:"p",href:"https://doris.apache.org/community/how-to-contribute/trino-connector-developer-guide"},"Trino Connector")," compatibility framework and the ",(0,a.yg)("a",{parentName:"p",href:"https://trino.io/docs/current/connector/tpcds.html"},"TPCDS Connector")," to quickly build TPCDS test sets."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"This feature is supported starting from Doris version 3.0.0.")),(0,a.yg)("h2",{id:"compiling-the-tpcds-connector"},"Compiling the TPCDS Connector"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"JDK 17 is required.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/trinodb/trino.git\ngit checkout 435\ncd trino/plugin/trino-tpcds\nmvn clean install -DskipTest\n")),(0,a.yg)("p",null,"After compiling, you will find the ",(0,a.yg)("inlineCode",{parentName:"p"},"trino-tpcds-435/")," directory under ",(0,a.yg)("inlineCode",{parentName:"p"},"trino/plugin/trino-tpcds/target/"),"."),(0,a.yg)("p",null,"You can also directly download the precompiled ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/morningman/trino-connectors/releases/download/trino-connectors/trino-tpcds-435.tar.gz"},"trino-tpcds-435.tar.gz")," and extract it."),(0,a.yg)("h2",{id:"deploying-the-tpcds-connector"},"Deploying the TPCDS Connector"),(0,a.yg)("p",null,"Place the ",(0,a.yg)("inlineCode",{parentName:"p"},"trino-tpcds-435/")," directory under the ",(0,a.yg)("inlineCode",{parentName:"p"},"connectors/")," directory in the deployment paths of all FE and BE nodes. (If it does not exist, you can create it manually)."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"\u251c\u2500\u2500 bin\n\u251c\u2500\u2500 conf\n\u251c\u2500\u2500 connectors\n\u2502\xa0\xa0 \u251c\u2500\u2500 trino-tpcds-435\n...\n")),(0,a.yg)("p",null,"After deployment, it is recommended to restart the FE and BE nodes to ensure the Connector is loaded correctly."),(0,a.yg)("h2",{id:"creating-the-tpcds-catalog"},"Creating the TPCDS Catalog"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `tpcds` PROPERTIES (\n    "type" = "trino-connector",\n    "trino.connector.name" = "tpcds",\n    "trino.tpcds.split-count" = "32"\n);\n')),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"trino.tpcds.split-count")," property sets the level of concurrency. It is recommended to set it to twice the number of cores per BE node to achieve optimal concurrency and improve data generation efficiency."),(0,a.yg)("h2",{id:"using-the-tpcds-catalog"},"Using the TPCDS Catalog"),(0,a.yg)("p",null,"The TPCDS Catalog includes pre-configured TPCDS datasets of different scale factors, which can be viewed using the ",(0,a.yg)("inlineCode",{parentName:"p"},"SHOW DATABASES")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"SHOW TABLES")," commands."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> SWITCH tpcds;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> SHOW DATABASES;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| mysql              |\n| sf1                |\n| sf100              |\n| sf1000             |\n| sf10000            |\n| sf100000           |\n| sf300              |\n| sf3000             |\n| sf30000            |\n| tiny               |\n+--------------------+\n11 rows in set (0.00 sec)\n\nmysql> USE sf1;\nmysql> SHOW TABLES;\n+------------------------+\n| Tables_in_sf1          |\n+------------------------+\n| call_center            |\n| catalog_page           |\n| catalog_returns        |\n| catalog_sales          |\n| customer               |\n| customer_address       |\n| customer_demographics  |\n| date_dim               |\n| dbgen_version          |\n| household_demographics |\n| income_band            |\n| inventory              |\n| item                   |\n| promotion              |\n| reason                 |\n| ship_mode              |\n| store                  |\n| store_returns          |\n| store_sales            |\n| time_dim               |\n| warehouse              |\n| web_page               |\n| web_returns            |\n| web_sales              |\n| web_site               |\n+------------------------+\n25 rows in set (0.00 sec)\n")),(0,a.yg)("p",null,"You can directly query these tables using the SELECT statement."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"The data in these pre-configured datasets is not actually stored but generated in real-time during queries. Therefore, these datasets are not suitable for direct benchmarking. They are more appropriate for writing to other target tables (such as Doris internal tables, Hive, Iceberg, and other data sources supported by Doris) via ",(0,a.yg)("inlineCode",{parentName:"p"},"INSERT INTO SELECT"),", after which performance tests can be conducted on the target tables.")),(0,a.yg)("h3",{id:"best-practices"},"Best Practices"),(0,a.yg)("h4",{id:"quickly-build-tpcds-test-dataset"},"Quickly Build TPCDS Test Dataset"),(0,a.yg)("p",null,"You can quickly build a TPCDS test dataset using the CTAS (Create Table As Select) statement:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'CREATE TABLE hive.tpcds100.call_center            PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.call_center           ;\nCREATE TABLE hive.tpcds100.catalog_page           PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.catalog_page          ;\nCREATE TABLE hive.tpcds100.catalog_returns        PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.catalog_returns       ;\nCREATE TABLE hive.tpcds100.catalog_sales          PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.catalog_sales         ;\nCREATE TABLE hive.tpcds100.customer               PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.customer              ;\nCREATE TABLE hive.tpcds100.customer_address       PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.customer_address      ;\nCREATE TABLE hive.tpcds100.customer_demographics  PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.customer_demographics ;\nCREATE TABLE hive.tpcds100.date_dim               PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.date_dim              ;\nCREATE TABLE hive.tpcds100.dbgen_version          PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.dbgen_version         ;\nCREATE TABLE hive.tpcds100.household_demographics PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.household_demographics;\nCREATE TABLE hive.tpcds100.income_band            PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.income_band           ;\nCREATE TABLE hive.tpcds100.inventory              PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.inventory             ;\nCREATE TABLE hive.tpcds100.item                   PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.item                  ;\nCREATE TABLE hive.tpcds100.promotion              PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.promotion             ;\nCREATE TABLE hive.tpcds100.reason                 PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.reason                ;\nCREATE TABLE hive.tpcds100.ship_mode              PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.ship_mode             ;\nCREATE TABLE hive.tpcds100.store                  PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.store                 ;\nCREATE TABLE hive.tpcds100.store_returns          PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.store_returns         ;\nCREATE TABLE hive.tpcds100.store_sales            PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.store_sales           ;\nCREATE TABLE hive.tpcds100.time_dim               PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.time_dim              ;\nCREATE TABLE hive.tpcds100.warehouse              PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.warehouse             ;\nCREATE TABLE hive.tpcds100.web_page               PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.web_page              ;\nCREATE TABLE hive.tpcds100.web_returns            PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.web_returns           ;\nCREATE TABLE hive.tpcds100.web_sales              PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.web_sales             ;\nCREATE TABLE hive.tpcds100.web_site               PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.web_site              ;\n')),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"On a Doris cluster with 3 BE nodes, each with 16 cores, creating a TPCDS 1000 dataset in Hive takes approximately 3 to 4 hours.")))}E.isMDXComponent=!0}}]);