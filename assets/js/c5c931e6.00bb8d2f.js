"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[118278],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>g});var n=t(296540);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return t?n.createElement(g,o(o({ref:a},c),{},{components:t})):n.createElement(g,o({ref:a},c))}));function g(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},711624:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=t(58168),i=(t(296540),t(15680));const r={title:"Another lifesaver for data engineers: Apache Doris Job Scheduler for task automation",summary:"The built-in Doris Job Scheduler triggers pre-defined operations efficiently and reliably. It is useful in many cases including ETL and data lake analytics.",description:"The built-in Doris Job Scheduler triggers pre-defined operations efficiently and reliably. It is useful in many cases including ETL and data lake analytics.",date:"2024-06-06",author:"Apache Doris",tags:["Tech Sharing"],image:"/images/job-scheduler-for-task-automation.jpg"},o=void 0,l={permalink:"/blog/job-scheduler-for-task-automation",source:"@site/blog/job-scheduler-for-task-automation.md",title:"Another lifesaver for data engineers: Apache Doris Job Scheduler for task automation",description:"The built-in Doris Job Scheduler triggers pre-defined operations efficiently and reliably. It is useful in many cases including ETL and data lake analytics.",date:"2024-06-06T00:00:00.000Z",formattedDate:"June 6, 2024",tags:[{label:"Tech Sharing",permalink:"/blog/tags/tech-sharing"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Another lifesaver for data engineers: Apache Doris Job Scheduler for task automation",summary:"The built-in Doris Job Scheduler triggers pre-defined operations efficiently and reliably. It is useful in many cases including ETL and data lake analytics.",description:"The built-in Doris Job Scheduler triggers pre-defined operations efficiently and reliably. It is useful in many cases including ETL and data lake analytics.",date:"2024-06-06",author:"Apache Doris",tags:["Tech Sharing"],image:"/images/job-scheduler-for-task-automation.jpg"},prevItem:{title:"Steps to industry-leading query speed: evolution of the Apache Doris execution engine",permalink:"/blog/evolution-of-the-apache-doris-execution-engine"},nextItem:{title:"Apache Doris version 2.0.11 has been released",permalink:"/blog/release-note-2.0.11"}},s={authorsImageUrls:[void 0]},p=[{value:"Syntax &amp; examples",id:"syntax--examples",level:2},{value:"Syntax description",id:"syntax-description",level:3},{value:"More examples",id:"more-examples",level:3},{value:"Auto data synchronization",id:"auto-data-synchronization",level:2},{value:"Technical design &amp; implementation",id:"technical-design--implementation",level:2},{value:"Applicable scenarios",id:"applicable-scenarios",level:2}],c={toc:p},d="wrapper";function u(e){let{components:a,...r}=e;return(0,i.yg)(d,(0,n.A)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Job scheduling is an important part of data management as it enables regular data updates and cleanups. In a data platform, it is often undertaken by workflow orchestration tools like ",(0,i.yg)("a",{parentName:"p",href:"https://airflow.apache.org"},"Apache Airflow")," and ",(0,i.yg)("a",{parentName:"p",href:"https://dolphinscheduler.apache.org/en-us"},"Apache Dolphinscheduler"),". However, adding another component to the data architecture also means investing extra resources for management and maintenance. That's why ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/blog/release-note-2.1.0"},"Apache Doris 2.1.0")," introduces a built-in Job Scheduler. It is strategically more tailored to Apache Doris, and brings higher scheduling flexibility and architectural simplicity. "),(0,i.yg)("p",null,"The Doris Job Scheduler triggers the pre-defined operations at specific time points or intervals, thus allowing for efficient and reliable task automation. Its key capabilities include: "),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Efficiency"),": It adopts the TimeWheel algorithm to ensure that the triggering of tasks is precise to the second.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Flexibility"),": It supports both one-time jobs and regular jobs. For the latter, users can define the start/end time, and intervals of minutes, hours, days, or weeks.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Execution thread pool and processing queue"),": It is supported by a Disruptor-based single-producer, multi-consumer model to avoid task execution overload.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Traceability"),": It keeps track of the latest task execution records (configurable), which are queryable by a simple command. ")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Availability"),": Like Apache Doris itself, the Doris Job Scheduler is easily recoverable and highly available."))),(0,i.yg)("h2",{id:"syntax--examples"},"Syntax & examples"),(0,i.yg)("h3",{id:"syntax-description"},"Syntax description"),(0,i.yg)("p",null,"A valid job statement consists of the following elements:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"CREATE JOB"),": Specifies the job name as a unique identifier.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"The ",(0,i.yg)("inlineCode",{parentName:"p"},"ON SCHEDULE")," clause: Specifies the type, trigger time, and frequency of the job."),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"AT timestamp"),": This is used to specify a one-time job. ",(0,i.yg)("inlineCode",{parentName:"p"},"AT CURRENT_TIMESTAMP")," means that the job will run immediately upon creation. ")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"EVERY"),": This is used to specify a regular job. You can define the execution frequency of the job. The interval can be measured in weeks, days, hours, and minutes."),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"EVERY")," clause supports an optional ",(0,i.yg)("inlineCode",{parentName:"li"},"STARTS")," clause  with a timestamp to define the start time of the recurring schedule. ",(0,i.yg)("inlineCode",{parentName:"li"},"CURRENT_TIMESTAMP")," can be used. It also supports an optional ",(0,i.yg)("inlineCode",{parentName:"li"},"ENDS")," clause to specify the end time for the job."))))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"The ",(0,i.yg)("inlineCode",{parentName:"p"},"DO")," clause defines the action to be performed when the job is executed. At this time, the only supported operation is INSERT."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE\n    JOB\n    job_name\n    ON SCHEDULE schedule\n    [COMMENT 'string']\n    DO execute_sql;\n\nschedule: {\n    AT timestamp \n  | EVERY interval\n    [STARTS timestamp ]\n    [ENDS timestamp ]\n}\n\ninterval:\n    quantity { WEEK |DAY | HOUR | MINUTE\n            }\n            \n")),(0,i.yg)("p",{parentName:"li"},"Example:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE JOB my_job ON SCHEDULE EVERY 1 MINUTE DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2;\n")),(0,i.yg)("p",{parentName:"li"},"The above statement creates a job named ",(0,i.yg)("inlineCode",{parentName:"p"},"my_job"),", which is to load data from ",(0,i.yg)("inlineCode",{parentName:"p"},"db2.tbl2")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"db1.tbl1")," every minute."))),(0,i.yg)("h3",{id:"more-examples"},"More examples"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Create a one-time job"),": Load data from ",(0,i.yg)("inlineCode",{parentName:"p"},"db2.tbl2")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"db1.tbl1")," at 2025-01-01 00:00:00."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE JOB my_job ON SCHEDULE AT '2025-01-01 00:00:00' DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2;\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Create a regular job without specifying the end time"),": Load data from ",(0,i.yg)("inlineCode",{parentName:"p"},"db2.tbl2")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"db1.tbl1")," once a day starting from 2025-01-01 00:00:00."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE JOB my_job ON SCHEDULE EVERY 1 DAY STARTS '2025-01-01 00:00:00' DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2 WHERE  create_time >=  days_add(now(),-1);\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Create a regular job within a specified period"),": Load data from ",(0,i.yg)("inlineCode",{parentName:"p"},"db2.tbl2")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"db1.tbl1")," once a day, beginning at 2025-01-01 00:00:00 and finishing at 2026-01-01 00:10:00."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE JOB my_job ON SCHEDULER EVERY 1 DAY STARTS '2025-01-01 00:00:00' ENDS '2026-01-01 00:10:00' DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2 create_time >=  days_add(now(),-1);\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Asynchronous execution"),": Because jobs are executed in an asynchronous manner in Doris. Tasks that require asynchronous execution, such as ",(0,i.yg)("inlineCode",{parentName:"p"},"insert into select"),", can be implemented by a job. "),(0,i.yg)("p",null,"For example, to asynchronously execute data loading from ",(0,i.yg)("inlineCode",{parentName:"p"},"db2.tbl2")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"db1.tbl1"),", simply create a one-time job for it and schedule it at ",(0,i.yg)("inlineCode",{parentName:"p"},"current_timestamp"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"CREATE JOB my_job ON SCHEDULE AT current_timestamp DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2;\n")),(0,i.yg)("h2",{id:"auto-data-synchronization"},"Auto data synchronization"),(0,i.yg)("p",null,"The combination of the Job Scheduler and the ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/lakehouse/lakehouse-overview#multi-catalog"},"Multi-Catalog")," feature of Apache Doris is an efficient way to implement regular data synchronization across data sources."),(0,i.yg)("p",null,"This is useful in many cases, such as for an e-commerce user who regularly needs to load business data from MySQL to Doris for analysis."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Example"),": To filter consumers by total consumption amount, last visit time, sex, and city in the table below, and import the query results to Doris regularly."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Auto data synchronization",src:t(229455).A,width:"1280",height:"463"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 1"),": Create a table in Doris"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE IF NOT EXISTS user_activity\n(\n    `user_id` LARGEINT NOT NULL COMMENT "User ID",\n    `date` DATE NOT NULL COMMENT "Time of data import",\n    `city` VARCHAR(20) COMMENT "User city",\n    `age` SMALLINT COMMENT "User age",\n    `sex` TINYINT COMMENT "User sex",\n    `last_visit_date` DATETIME REPLACE DEFAULT "1970-01-01 00:00:00" COMMENT "Time of user\'s last visit",\n    `cost` BIGINT SUM DEFAULT "0" COMMENT "User\'s total consumption amount",\n    `max_dwell_time` INT MAX DEFAULT "0" COMMENT "Maximum dwell time of user",\n    `min_dwell_time` INT MIN DEFAULT "99999" COMMENT "Minimum dwell time of user"\n)\nAGGREGATE KEY(`user_id`, `date`, `city`, `age`, `sex`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 1\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 2"),": Create a catalog in Doris to map to the data in MySQL"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},'CREATE CATALOG activity PROPERTIES (\n    "type"="jdbc",\n    "user"="root",\n    "jdbc_url" = "jdbc:mysql://127.0.0.1:9734/user?useSSL=false",\n    "driver_url" = "mysql-connector-java-5.1.49.jar",\n    "driver_class" = "com.mysql.jdbc.Driver"\n);\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 3"),": Ingest data from MySQL to Doris. Leverage the catalog mechanism and the Insert Into method for full data ingestion. (We recommend that such operations be executed during low-traffic hours to minimize potential service disruptions.)"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"One-time job"),": Schedule a one-time full-scale data loading that starts at 2024-8-10 03:00:00."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE JOB one_time_load_job\nON SCHEDULE \nAT '2024-8-10 03:00:00'\nDO\nINSERT INTO user_activity FROM SELECT * FROM activity.user.activity \n\n"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Regular job"),": Create a regular job to update data periodically."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE JOB schedule_load\nON SCHEDULE EVERY 1 DAY\nDO\nINSERT INTO user_activity FROM SELECT * FROM activity.user.activity where create_time >=  days_add(now(),-1)\n")))),(0,i.yg)("h2",{id:"technical-design--implementation"},"Technical design & implementation"),(0,i.yg)("p",null,"Efficient scheduling often comes at the cost of significant resource consumption, and high-precision scheduling is even more resource-intensive. To implement job scheduling, some people rely on the built-in scheduling capabilities of Java, while others employ job scheduling libraries. But what if we want higher precision and lower memory usage than these solutions can reach? For that, the Doris makers combine the TimingWheel algorithm with the Disruptor framework to achieve second-level job scheduling."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Technical design &amp; implementation",src:t(998629).A,width:"1280",height:"1000"})),(0,i.yg)("p",null,"To implement the TimingWheel algorithm, we leverage the HashedWheelTimer in Netty. The Job Manager puts tasks every 10 minutes (by default) in the TimeWheel for scheduling. In order to ensure efficient task triggering and avoid high resource usage, we adopt a Disruptor-based single-producer, multi-consumer model. The TimeWheel only triggers tasks but does not execute jobs directly. Tasks that need to be triggered upon expiration will be put into a Dispatch thread and distributed to an appropriate execution thread pool. Tasks that need to be executed immediately will be directly submitted to the corresponding execution thread pool."),(0,i.yg)("p",null,"This is how we improve processing efficiency by reducing unnecessary traversal: For one-time tasks, their definition will be removed after execution. For recurring tasks, the system events in the TimeWheel will periodically fetch the next round of execution tasks. This helps to avoid the accumulation of tasks in a single bucket."),(0,i.yg)("p",null,"In addition, for transactional tasks, the Job Scheduler can ensure data consistency and integrity by the transaction association and transaction callback mechanisms. "),(0,i.yg)("h2",{id:"applicable-scenarios"},"Applicable scenarios"),(0,i.yg)("p",null,"The Doris Job Scheduler is a Swiss Army Knife. It is not only useful in ETL and data lake analytics as we mentioned, but also critical for the implementation of ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/query/view-materialized-view/async-materialized-view"},"asynchronous materialized views"),". An asynchronous materialized view is a pre-computed result set. Unlike normal materialized views, it can be built on multiple tables. Thus, as you can imagine, changes in any of the source tables will lead to the need for updates in the asynchronous materialized view. That's why we apply the job scheduling mechanism for periodic data refreshing in asynchronous materialized views, which is low-maintenance and also ensures data consistency."),(0,i.yg)("p",null,"Where are we going with the Doris Job Scheduler? The ",(0,i.yg)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2gmq5o30h-455W226d79zP3L96ZhXIoQ"},"Apache Doris developer community")," is looking at:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Displaying the distribution of tasks executed in different time slots on the WebUI.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"DAG jobs. This will allow data warehouse task orchestration within Apache Doris, which will unlock many possibilities when it is combined with the Multi-Catalog feature. ")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Support for more operations such as UPDATE and DELETE."))))}u.isMDXComponent=!0},229455:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/auto-data-synchronization-e697db722413038ee542074082391276.png"},998629:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/technical-design-and-implementation-86d5f8b242e698232e33c6c1f6e25c1e.png"}}]);