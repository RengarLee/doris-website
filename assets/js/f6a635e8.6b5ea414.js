"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[494689],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>u});var n=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),g=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=g(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=g(t),y=r,u=d["".concat(s,".").concat(y)]||d[y]||c[y]||o;return t?n.createElement(u,l(l({ref:a},p),{},{components:t})):n.createElement(u,l({ref:a},p))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=y;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var g=2;g<o;g++)l[g]=t[g];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},464898:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var n=t(58168),r=(t(296540),t(15680));const o={title:"Iceberg Catalog",language:"en"},l=void 0,i={unversionedId:"lakehouse/datalake-analytics/iceberg",id:"lakehouse/datalake-analytics/iceberg",title:"Iceberg Catalog",description:"\x3c!--",source:"@site/docs/lakehouse/datalake-analytics/iceberg.md",sourceDirName:"lakehouse/datalake-analytics",slug:"/lakehouse/datalake-analytics/iceberg",permalink:"/docs/dev/lakehouse/datalake-analytics/iceberg",draft:!1,tags:[],version:"current",frontMatter:{title:"Iceberg Catalog",language:"en"},sidebar:"docs",previous:{title:"Hudi Catalog",permalink:"/docs/dev/lakehouse/datalake-analytics/hudi"},next:{title:"Paimon Catalog",permalink:"/docs/dev/lakehouse/datalake-analytics/paimon"}},s={},g=[{value:"Limitations",id:"limitations",level:2},{value:"Create Catalog",id:"create-catalog",level:2},{value:"Create Catalog Based on Hive Metastore",id:"create-catalog-based-on-hive-metastore",level:3},{value:"Create Catalog based on Iceberg API",id:"create-catalog-based-on-iceberg-api",level:3},{value:"Hadoop Catalog",id:"hadoop-catalog",level:4},{value:"Hive Metastore",id:"hive-metastore",level:4},{value:"AWS Glue",id:"aws-glue",level:4},{value:"Alibaba Cloud DLF",id:"alibaba-cloud-dlf",level:4},{value:"REST Catalog",id:"rest-catalog",level:4},{value:"Google Dataproc Metastore",id:"google-dataproc-metastore",level:4},{value:"Iceberg On Object Storage",id:"iceberg-on-object-storage",level:3},{value:"Example",id:"example",level:2},{value:"Column type mapping",id:"column-type-mapping",level:2},{value:"Time Travel",id:"time-travel",level:2}],p={toc:g},d="wrapper";function c(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/gettingStarted/tutorials/doris-iceberg"},"Apache Doris & Iceberg Quick Start")),(0,r.yg)("h2",{id:"limitations"},"Limitations"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Supports Iceberg V1/V2."),(0,r.yg)("li",{parentName:"ol"},"Supports Position Delete"),(0,r.yg)("li",{parentName:"ol"},"Supports Equality Delete since 2.1.3"),(0,r.yg)("li",{parentName:"ol"},"Supports Parquet format."),(0,r.yg)("li",{parentName:"ol"},"Supports ORC format since 2.1.3.")),(0,r.yg)("h2",{id:"create-catalog"},"Create Catalog"),(0,r.yg)("h3",{id:"create-catalog-based-on-hive-metastore"},"Create Catalog Based on Hive Metastore"),(0,r.yg)("p",null,"It is basically the same as Hive Catalog, and only a simple example is given here. See ",(0,r.yg)("a",{parentName:"p",href:"/docs/dev/lakehouse/datalake-analytics/hive"},"Hive Catalog")," for other examples."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,r.yg)("h3",{id:"create-catalog-based-on-iceberg-api"},"Create Catalog based on Iceberg API"),(0,r.yg)("p",null,"Use the Iceberg API to access metadata, and support services such as Hadoop File System, Hive, REST, DLF and Glue as Iceberg's Catalog."),(0,r.yg)("h4",{id:"hadoop-catalog"},"Hadoop Catalog"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note: The path of ",(0,r.yg)("inlineCode",{parentName:"p"},"warehouse")," should point to the parent path of ",(0,r.yg)("inlineCode",{parentName:"p"},"Database")," level."),(0,r.yg)("p",{parentName:"blockquote"},"Eg: If you path is like ",(0,r.yg)("inlineCode",{parentName:"p"},"s3://bucket/path/to/db1/table1"),", the ",(0,r.yg)("inlineCode",{parentName:"p"},"warehouse")," should be ",(0,r.yg)("inlineCode",{parentName:"p"},"s3://bucket/path/to/"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg_hadoop PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type' = 'hadoop',\n    'warehouse' = 'hdfs://your-host:8020/dir/key'\n);\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg_hadoop_ha PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type' = 'hadoop',\n    'warehouse' = 'hdfs://your-nameservice/dir/key',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg_s3 PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type' = 'hadoop',\n    'warehouse' = 's3://bucket/dir/key',\n    's3.endpoint' = 's3.us-east-1.amazonaws.com',\n    's3.access_key' = 'ak',\n    's3.secret_key' = 'sk'\n);\n")),(0,r.yg)("h4",{id:"hive-metastore"},"Hive Metastore"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,r.yg)("h4",{id:"aws-glue"},"AWS Glue"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"When connecting Glue, if it's not on the EC2 environment, need copy the ",(0,r.yg)("inlineCode",{parentName:"p"},"~/.aws")," from the EC2 environment to the current environment. And can also download and configure the ",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"},"AWS Cli tools"),", which also creates the ",(0,r.yg)("inlineCode",{parentName:"p"},".aws")," directory under the current user directory.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG glue PROPERTIES (\n    "type"="iceberg",\n    "iceberg.catalog.type" = "glue",\n    "glue.endpoint" = "https://glue.us-east-1.amazonaws.com",\n    "glue.access_key" = "ak",\n    "glue.secret_key" = "sk"\n);\n')),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"For Iceberg properties, see ",(0,r.yg)("a",{parentName:"p",href:"https://iceberg.apache.org/docs/latest/aws/#glue-catalog"},"Iceberg Glue Catalog"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"If you do not fill the credentials(",(0,r.yg)("inlineCode",{parentName:"p"},"glue.access_key")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"glue.secret_key"),") in glue catalog, the default DefaultAWSCredentialsProviderChain will be used, and it will read credentials and the system environment variables or instance profile properties on AWS EC2."))),(0,r.yg)("h4",{id:"alibaba-cloud-dlf"},"Alibaba Cloud DLF"),(0,r.yg)("p",null,"see ",(0,r.yg)("a",{parentName:"p",href:"/docs/dev/lakehouse/datalake-analytics/dlf"},"Alibaba Cloud DLF Catalog")),(0,r.yg)("h4",{id:"rest-catalog"},"REST Catalog"),(0,r.yg)("p",null,"This method needs to provide REST services in advance, and users need to implement the REST interface for obtaining Iceberg metadata."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type'='rest',\n    'uri' = 'http://172.21.0.1:8181'\n);\n")),(0,r.yg)("p",null,"If the data is on HDFS and High Availability (HA) is set up, need to add HA configuration to the Catalog."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type'='rest',\n    'uri' = 'http://172.21.0.1:8181',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.1:8020',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.2:8020',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,r.yg)("h4",{id:"google-dataproc-metastore"},"Google Dataproc Metastore"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG iceberg PROPERTIES (\n    "type"="iceberg",\n    "iceberg.catalog.type"="hms",\n    "hive.metastore.uris" = "thrift://172.21.0.1:9083",\n    "gs.endpoint" = "https://storage.googleapis.com",\n    "gs.region" = "us-east-1",\n    "gs.access_key" = "ak",\n    "gs.secret_key" = "sk",\n    "use_path_style" = "true"\n);\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"hive.metastore.uris"),": Dataproc Metastore URI\uff0cSee in Metastore Services \uff1a",(0,r.yg)("a",{parentName:"p",href:"https://console.cloud.google.com/dataproc/metastore"},"Dataproc Metastore Services"),"."),(0,r.yg)("h3",{id:"iceberg-on-object-storage"},"Iceberg On Object Storage"),(0,r.yg)("p",null,"If the data is stored on S3, the following parameters can be used in properties:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'"s3.access_key" = "ak"\n"s3.secret_key" = "sk"\n"s3.endpoint" = "s3.us-east-1.amazonaws.com"\n"s3.region" = "us-east-1"\n')),(0,r.yg)("p",null,"The data is stored on Alibaba Cloud OSS:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'"oss.access_key" = "ak"\n"oss.secret_key" = "sk"\n"oss.endpoint" = "oss-cn-beijing-internal.aliyuncs.com"\n"oss.region" = "oss-cn-beijing"\n')),(0,r.yg)("p",null,"The data is stored on Tencent Cloud COS:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'"cos.access_key" = "ak"\n"cos.secret_key" = "sk"\n"cos.endpoint" = "cos.ap-beijing.myqcloud.com"\n"cos.region" = "ap-beijing"\n')),(0,r.yg)("p",null,"The data is stored on Huawei Cloud OBS:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'"obs.access_key" = "ak"\n"obs.secret_key" = "sk"\n"obs.endpoint" = "obs.cn-north-4.myhuaweicloud.com"\n"obs.region" = "cn-north-4"\n')),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'-- MinIO & Rest Catalog\nCREATE CATALOG `iceberg` PROPERTIES (\n    "type" = "iceberg",\n    "iceberg.catalog.type" = "rest",\n    "uri" = "http://10.0.0.1:8181",\n    "warehouse" = "s3://bucket",\n    "token" = "token123456",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk",\n    "s3.endpoint" = "http://10.0.0.1:9000",\n    "s3.region" = "us-east-1"\n);\n')),(0,r.yg)("h2",{id:"column-type-mapping"},"Column type mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Iceberg Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Doris Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"int")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"float"),(0,r.yg)("td",{parentName:"tr",align:null},"float")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"double"),(0,r.yg)("td",{parentName:"tr",align:null},"double")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"decimal(p,s)"),(0,r.yg)("td",{parentName:"tr",align:null},"decimal(p,s)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"date"),(0,r.yg)("td",{parentName:"tr",align:null},"date")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"uuid"),(0,r.yg)("td",{parentName:"tr",align:null},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"timestamp (Timestamp without timezone)"),(0,r.yg)("td",{parentName:"tr",align:null},"datetime(6)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"timestamptz (Timestamp with timezone)"),(0,r.yg)("td",{parentName:"tr",align:null},"datetime(6)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fixed(L)"),(0,r.yg)("td",{parentName:"tr",align:null},"char(L)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"binary"),(0,r.yg)("td",{parentName:"tr",align:null},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"struct"),(0,r.yg)("td",{parentName:"tr",align:null},"struct (since 2.1.3)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"map (since 2.1.3)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"list"),(0,r.yg)("td",{parentName:"tr",align:null},"array")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"time"),(0,r.yg)("td",{parentName:"tr",align:null},"unsupported")))),(0,r.yg)("h2",{id:"time-travel"},"Time Travel"),(0,r.yg)("p",null,"Supports reading the snapshot specified by the Iceberg table."),(0,r.yg)("p",null,"Every write operation to the iceberg table will generate a new snapshot."),(0,r.yg)("p",null,"By default, read requests will only read the latest version of the snapshot."),(0,r.yg)("p",null,"You can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"FOR TIME AS OF")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"FOR VERSION AS OF")," statements to read historical versions of data based on the snapshot ID or the time when the snapshot was generated. Examples are as follows:"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},'SELECT * FROM iceberg_tbl FOR TIME AS OF "2022-10-07 17:20:37";')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"SELECT * FROM iceberg_tbl FOR VERSION AS OF 868895038966572;")),(0,r.yg)("p",null,"In addition, you can use the ",(0,r.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-functions/table-valued-functions/iceberg-meta"},"iceberg_meta")," table function to query the snapshot information of the specified table."))}c.isMDXComponent=!0}}]);