"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[652133],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var a=r(296540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||n;return r?a.createElement(y,i(i({ref:t},c),{},{components:r})):a.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<n;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},272426:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var a=r(58168),o=(r(296540),r(15680));const n={title:"Use Workload Group limit CPU",language:"zh-CN"},i=void 0,l={unversionedId:"admin-manual/resource-admin/use-workload-cpu-limit",id:"admin-manual/resource-admin/use-workload-cpu-limit",title:"Use Workload Group limit CPU",description:"\x3c!--",source:"@site/docs/admin-manual/resource-admin/use-workload-cpu-limit.md",sourceDirName:"admin-manual/resource-admin",slug:"/admin-manual/resource-admin/use-workload-cpu-limit",permalink:"/docs/dev/admin-manual/resource-admin/use-workload-cpu-limit",draft:!1,tags:[],version:"current",frontMatter:{title:"Use Workload Group limit CPU",language:"zh-CN"},sidebar:"docs",previous:{title:"Use Workload Group limit memory",permalink:"/docs/dev/admin-manual/resource-admin/use-workload-mem-limit"},next:{title:"Use Workload Group limit local IO",permalink:"/docs/dev/admin-manual/resource-admin/use-workload-local-io-limit"}},s={},u=[{value:"CPU hard limit Test",id:"cpu-hard-limit-test",level:2},{value:"Test env",id:"test-env",level:3},{value:"Test",id:"test",level:3},{value:"NOTE",id:"note",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.yg)(d,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"The workloads in Doris can generally be divided into three categories:"),(0,o.yg)("p",null,"Core Report Queries: These are typically used by company executives to view reports. The load may not be very high, but the availability requirements are high. These queries can be grouped together and assigned a higher-priority soft limit, ensuring they receive more CPU resources when CPU availability is limited."),(0,o.yg)("p",null,"Ad-hoc Queries: These queries are usually exploratory, with random SQL and unpredictable resource usage. They typically have a lower priority, so they can be managed with a CPU hard limit set to a lower value, preventing them from consuming excessive CPU resources and reducing cluster availability."),(0,o.yg)("p",null,"ETL Queries: These queries have relatively fixed SQL and stable resource usage, though occasionally, a sudden increase in upstream data volume can cause a spike in resource usage. Therefore, they can be managed with a CPU hard limit configuration."),(0,o.yg)("p",null,"Different workloads consume CPU resources differently, and users have varying requirements for response latency. When the BE's CPU is heavily utilized, availability decreases and response latency increases. For example, an ad-hoc analytical query might fully utilize the cluster's CPU, causing increased latency for core reports and impacting the SLA. Therefore, a CPU isolation mechanism is needed to separate different types of workloads, ensuring cluster availability and meeting SLAs."),(0,o.yg)("p",null,"Workload Groups support both soft and hard CPU limits, with a current recommendation to configure Workload Groups with hard limits in production environments. This is because soft limits only come into effect when the CPU is fully utilized, but when the CPU is maxed out, internal components of Doris (e.g., RPC components) and available CPU resources for the operating system are reduced, leading to a significant decline in overall cluster availability. Therefore, in production environments, it's generally necessary to avoid situations where CPU resources are fully utilized, and the same applies to other resources such as memory."),(0,o.yg)("h2",{id:"cpu-hard-limit-test"},"CPU hard limit Test"),(0,o.yg)("h3",{id:"test-env"},"Test env"),(0,o.yg)("p",null,"1FE, 1BE(96 cores)\nTest data is clickbench\uff0csql is q29."),(0,o.yg)("h3",{id:"test"},"Test"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Run query in 3 concurrent, using top command we can see it uses 76 cores.")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"use workload group cpu",src:r(497201).A,width:"962",height:"146"})),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"Alter workload group.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"alter workload group g2 properties('cpu_hard_limit'='10%');\n")),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},"Enable cpu hard limit\uff0cthen all workload group could convert to hard limit.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'ADMIN SET FRONTEND CONFIG ("enable_cpu_hard_limit" = "true");\n')),(0,o.yg)("ol",{start:4},(0,o.yg)("li",{parentName:"ol"},"Test again, the BE using 9 ~ 10 cores, about 10%.")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"use workload group cpu",src:r(320954).A,width:"1138",height:"180"})),(0,o.yg)("p",null,"It should be noted that it's best to use query workloads for testing here, as they are more likely to reflect the intended effects. If you use high-throughput data import instead, it may trigger compaction, causing the observed values to be higher than the configured Workload Group limits. Currently, the compaction workload is not managed by the Workload Group."),(0,o.yg)("ol",{start:5},(0,o.yg)("li",{parentName:"ol"},"Use system table to show cpu usage, it's about 10%;")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql [information_schema]>select CPU_USAGE_PERCENT from workload_group_resource_usage where WORKLOAD_GROUP_ID=11201;\n+-------------------+\n| CPU_USAGE_PERCENT |\n+-------------------+\n|              9.57 |\n+-------------------+\n1 row in set (0.02 sec)\n")),(0,o.yg)("h2",{id:"note"},"NOTE"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"When configuring in practice, it's best not to have the total CPU allocation of all Groups add up to exactly 100%. This is primarily to ensure availability in low-latency scenarios, as some resources need to be reserved for other components. However, if the scenario is not sensitive to latency and the goal is maximum resource utilization, you can consider configuring the total CPU allocation of all Groups to equal 100%.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Currently, the time interval for the Frontend (FE) to synchronize Workload Group metadata to the Backend (BE) is 30 seconds, so it may take up to 30 seconds for changes to the Workload Group to take effect."))))}p.isMDXComponent=!0},497201:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/use_wg_cpu_1-6211d7170720ad508590d94cf72724e3.png"},320954:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/use_wg_cpu_2-03419ba3e02b1980179a1af557d41d1c.png"}}]);