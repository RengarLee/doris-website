"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[924319],{15680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>p});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(r),y=a,p=d["".concat(u,".").concat(y)]||d[y]||c[y]||i;return r?n.createElement(p,o(o({ref:t},m),{},{components:r})):n.createElement(p,o({ref:t},m))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},309849:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(58168),a=(r(296540),r(15680));const i={title:"Workload System Table",language:"en"},o=void 0,s={unversionedId:"admin-manual/resource-admin/workload-system-table",id:"version-3.0/admin-manual/resource-admin/workload-system-table",title:"Workload System Table",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/admin-manual/resource-admin/workload-system-table.md",sourceDirName:"admin-manual/resource-admin",slug:"/admin-manual/resource-admin/workload-system-table",permalink:"/docs/admin-manual/resource-admin/workload-system-table",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Workload System Table",language:"en"},sidebar:"docs",previous:{title:"Workload Policy",permalink:"/docs/admin-manual/resource-admin/workload-policy"},next:{title:"Resource Group",permalink:"/docs/admin-manual/resource-admin/multi-tenant"}},u={},l=[{value:"Backgroup",id:"backgroup",level:2},{value:"Workload System Table Introduction",id:"workload-system-table-introduction",level:2},{value:"active_queries",id:"active_queries",level:3},{value:"backend_active_tasks",id:"backend_active_tasks",level:3},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Application scenarios",id:"application-scenarios",level:2},{value:"Find SQL with the highest CPU usage",id:"find-sql-with-the-highest-cpu-usage",level:3},{value:"Find SQL with the highest memory usage",id:"find-sql-with-the-highest-memory-usage",level:3},{value:"Find queries which scan too much data",id:"find-queries-which-scan-too-much-data",level:3}],m={toc:l},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"backgroup"},"Backgroup"),(0,a.yg)("p",null,"Doris supports analyzing the resource usage of running workloads through the Workload system table, commonly used in the following scenarios:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"View the resource usage of Workload Group in the cluster, including CPU and memory."),(0,a.yg)("li",{parentName:"ol"},"View the TopN SQL with the highest resource usage in the current cluster."),(0,a.yg)("li",{parentName:"ol"},"View the queue status of Workload Groups in the cluster")),(0,a.yg)("p",null,"Users can query this information by submitting SQL, identify the Workload Group or SQL with high resource usage in the system, and perform corresponding processing."),(0,a.yg)("h2",{id:"workload-system-table-introduction"},"Workload System Table Introduction"),(0,a.yg)("p",null,"At present, the system tables are in database ",(0,a.yg)("inlineCode",{parentName:"p"},"information_schema"),"."),(0,a.yg)("h3",{id:"active_queries"},"active_queries"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"active_queries")," table records the execution information of the current query on FE, and the detailed information of the fields is as follows\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"query_id, query's id"),(0,a.yg)("li",{parentName:"ul"},"query_start_time, the start time of the query execution; If query queues, it represents the time when execution starts after the queue ends"),(0,a.yg)("li",{parentName:"ul"},"query_time_ms, the query time, in milliseconds"),(0,a.yg)("li",{parentName:"ul"},"workload_group_id, workload group's id"),(0,a.yg)("li",{parentName:"ul"},"database, sql's database"),(0,a.yg)("li",{parentName:"ul"},"frontend_instance, the FE which query is submitted"),(0,a.yg)("li",{parentName:"ul"},"queue_start_time, if query queues, it means the time that query begins to queue"),(0,a.yg)("li",{parentName:"ul"},"queue_end_time, if query queues, it means the time that query ends to queue"),(0,a.yg)("li",{parentName:"ul"},"query_status, query status, it has two value RUNNING and QUEUED, RUNNIG means query is running; QUEUED means query is queued."),(0,a.yg)("li",{parentName:"ul"},"sql, sql content")),(0,a.yg)("h3",{id:"backend_active_tasks"},"backend_active_tasks"),(0,a.yg)("p",null,"A query is usually divided into multiple fragments to be executed on multiple BEs, and ",(0,a.yg)("inlineCode",{parentName:"p"},"backend_active_tasks")," table represent the total amount of CPU and memory resources used by a query on a single BE. If this query has multiple concurrency and fragments on a single BE, it will also be summarized into one row of data.\nThe detailed information of the fields is as follows:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"be_id, BE's id"),(0,a.yg)("li",{parentName:"ul"},"fe_host, it represents which FE this query was submitted from"),(0,a.yg)("li",{parentName:"ul"},"query_id, query's id"),(0,a.yg)("li",{parentName:"ul"},"task_time_ms, query execution time on the current BE, in milliseconds"),(0,a.yg)("li",{parentName:"ul"},"task_cpu_time_ms\uff0cquery cpu time on the current BE, in milliseconds"),(0,a.yg)("li",{parentName:"ul"},"scan_rows, the number of rows scanned on the current BE. If multiple tables are scanned, it is the cumulative value of multiple tables"),(0,a.yg)("li",{parentName:"ul"},"scan_bytes, the number of bytes scanned on the current BE. If multiple tables are scanned, it is the cumulative value of multiple tables"),(0,a.yg)("li",{parentName:"ul"},"be_peak_memory_bytes, the peak memory usage on the current BE, in bytes"),(0,a.yg)("li",{parentName:"ul"},"current_used_memory_bytes, the amount of memory currently in use on the BE, in bytes"),(0,a.yg)("li",{parentName:"ul"},"shuffle_send_bytes, the number of bytes sent as shuffle clients at the BE"),(0,a.yg)("li",{parentName:"ul"},"shuffle_send_rows, the number of rows sent as shuffle clients at the BE")),(0,a.yg)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"TopN resource usage sql"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"select \n        t2.query_id,\n        t2.workload_group_id,\n        t2.`database`,\n        t1.cpu_time,\n        t1.mem_used,\n        t2.`sql`\nfrom\n(select query_id, sum(task_cpu_time_ms) as cpu_time,sum(current_used_memory_bytes) as mem_used from backend_active_tasks group by query_id) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id \norder by cpu_time desc, mem_used desc limit 10;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"TopN resource usage sql on BE"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"select \n        t2.query_id,\n        t2.workload_group_id,\n        t2.`database`,\n        t1.cpu_time,\n        t1.mem_used,\n        t2.`sql`\nfrom\n(select query_id, sum(task_cpu_time_ms) as cpu_time,sum(current_used_memory_bytes) as mem_used \n    from backend_active_tasks where be_id=12345 group by query_id) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id \norder by cpu_time desc, mem_used desc limit 10;\n")))),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"WorkloadGroup queue details"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"select \n    workload_group_id, \n    sum(case when query_status='QUEUED' then 1 else 0 end) as queue_num, \n    sum(case when query_status='RUNNING' then 1 else 0 end) as running_query_num\nfrom \n    active_queries\ngroup by workload_group_id\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Query queue time"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"select \n         workload_group_id,\n         query_id,\n         query_status,\n         now() - queue_start_time as queued_time\nfrom \n     active_queries\nwhere query_status='queued'\norder by workload_group_id\n")))),(0,a.yg)("h2",{id:"application-scenarios"},"Application scenarios"),(0,a.yg)("p",null,"When the query latency of the cluster increases and the availability decreases, bottleneck points can be identified through the overall monitoring of the cluster:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"When the CPU resources of BE are fully utilized and the memory usage is not high, it indicates that the main bottleneck should be on the CPU."),(0,a.yg)("li",{parentName:"ol"},"When the CPU and memory resources of BE are both high, it indicates that the main bottleneck is in memory."),(0,a.yg)("li",{parentName:"ol"},"When the CPU and memory resource usage of BE is not high, but the IO usage is high, it indicates that the main bottleneck is in IO."),(0,a.yg)("li",{parentName:"ol"},"The CPU/memory/IO is not high, but there are many queued queries, indicating that the queue parameter configuration is unreasonable. You can try increasing the queue concurrency.")),(0,a.yg)("p",null,"After identifying the bottleneck points of the cluster, the SQL that is currently using more resources can be further analyzed through the workload system table, and then the query can be downgraded."),(0,a.yg)("h3",{id:"find-sql-with-the-highest-cpu-usage"},"Find SQL with the highest CPU usage"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"TopN CPU usage sql"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"select \n        t2.query_id,\n        t2.workload_group_id,\n        t2.`database`,\n        t1.cpu_time,\n        t2.`sql`\nfrom\n(select query_id, sum(task_cpu_time_ms) as cpu_time from backend_active_tasks group by query_id) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id\norder by cpu_time desc limit 10;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Workload group cpu time"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"select \n        t2.workload_group_id,\n        sum(t1.cpu_time) cpu_time\nfrom\n(select query_id, sum(task_cpu_time_ms) as cpu_time from backend_active_tasks group by query_id) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id \ngroup by workload_group_id order by cpu_time desc\n")))),(0,a.yg)("p",null,"If the CPU usage of a single SQL is too high, it can be alleviated by canceling the query."),(0,a.yg)("p",null,"If SQL with longer CPU time comes from the same workload group, CPU usage can be reduced by lowering the CPU priority of this workload group or lowering the number of scan threads."),(0,a.yg)("h3",{id:"find-sql-with-the-highest-memory-usage"},"Find SQL with the highest memory usage"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"TopN memory usage sql"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"select \n        t2.query_id,\n        t2.workload_group_id,\n        t1.mem_used\nfrom\n(select query_id, sum(current_used_memory_bytes) as mem_used from backend_active_tasks group by query_id) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id \norder by mem_used desc limit 10;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Workload group memory usage"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"select \n        t2.workload_group_id,\n        sum(t1.mem_used) wg_mem_used\nfrom\n(select query_id, sum(current_used_memory_bytes) as mem_used from backend_active_tasks group by query_id) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id \ngroup by t2.workload_group_id order by wg_mem_used desc\n")))),(0,a.yg)("p",null,"If a single query occupies most of the memory, then killing this query can be used to quickly free up memory."),(0,a.yg)("p",null,"If a lower priority workload group is using more memory, memory can be released by downgrading this workload group:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"If the memory configuration is soft limit, it can be modified to hard limit and the memory limit of the workload group can be reduced"),(0,a.yg)("li",{parentName:"ol"},"Reduce the query concurrency of the workload group through its queuing function")),(0,a.yg)("h3",{id:"find-queries-which-scan-too-much-data"},"Find queries which scan too much data"),(0,a.yg)("p",null,"At present, Doris does not directly collect indicators of disk IO for queries, but it can indirectly find SQL with heavier scans through the number of scan rows and scan bytes."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"TopN scan data query"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"select \n        t2.query_id,\n        t2.workload_group_id,\n        t1.scan_rows,\n        t1.scan_bytes\nfrom\n(select query_id, sum(scan_rows) as scan_rows,sum(scan_bytes) as scan_bytes from backend_active_tasks group by query_id) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id \norder by scan_rows desc,scan_bytes desc limit 10;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Workload group scan data"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"select \n        t2.workload_group_id,\n        sum(t1.scan_rows) as wg_scan_rows,\n        sum(t1.scan_bytes) as wg_scan_bytes\nfrom\n(select query_id, sum(scan_rows) as scan_rows,sum(scan_bytes) as scan_bytes from backend_active_tasks group by query_id) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id \ngroup by t2.workload_group_id\norder by wg_scan_rows desc,wg_scan_bytes desc\n")))),(0,a.yg)("p",null,"If the scan data volume of a single SQL statement is large, then a kill query can be used to check if there will be any relief."),(0,a.yg)("p",null,"If the scanning data volume of a certain workload group is large, IO can be reduced by lowering the number of scanning threads of the workload group."))}c.isMDXComponent=!0}}]);