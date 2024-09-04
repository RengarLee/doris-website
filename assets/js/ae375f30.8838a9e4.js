"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[85715],{15680:(e,t,o)=>{o.d(t,{xA:()=>u,yg:()=>m});var n=o(296540);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(o),g=r,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||s;return o?n.createElement(m,a(a({ref:t},u),{},{components:o})):n.createElement(m,a({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,a=new Array(s);a[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},400144:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=o(58168),r=(o(296540),o(15680));const s={title:"Config and install FE",language:"en"},a=void 0,i={unversionedId:"install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-cluster/config-fe",id:"version-3.0/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-cluster/config-fe",title:"Config and install FE",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-cluster/config-fe.md",sourceDirName:"install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-cluster",slug:"/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-cluster/config-fe",permalink:"/docs/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-cluster/config-fe",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Config and install FE",language:"en"},sidebar:"docs",previous:{title:"Cluster dependency association configuration",permalink:"/docs/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-cluster/config-relation"},next:{title:"Config and install Compute Clusters",permalink:"/docs/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-cluster/config-cc"}},l={},c=[{value:"Configure resources",id:"configure-resources",level:2},{value:"Configure computing resources for services",id:"configure-computing-resources-for-services",level:3},{value:"Configure service storage resources",id:"configure-service-storage-resources",level:3},{value:"Customized configuration file",id:"customized-configuration-file",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.yg)(p,(0,n.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"In the Compute-storage decoupled mode, FE is mainly responsible for SQL parsing related work and is also responsible for interacting with the metadata management component MS. FE usually only needs to deploy 2 services and set the replicas to 2. The simplest deployment mode is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  feSpec:\n    image: {feImage}\n    replicas: 2\n")),(0,r.yg)("p",null,"Configure the FE service image to be used, and update the configuration to the ","[Compute-storage decoupled resources to be deployed]","(/docs/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-quickstart#Install DorisDisaggregatedCluster)."),(0,r.yg)("h2",{id:"configure-resources"},"Configure resources"),(0,r.yg)("h3",{id:"configure-computing-resources-for-services"},"Configure computing resources for services"),(0,r.yg)("p",null,"Add computing resource configuration for FE services. ",(0,r.yg)("inlineCode",{parentName:"p"},"DorisDisaggregatedCluster")," reuses K8s requests and limits to configure resource usage for each component. The following is how to configure FE services using 4c 4Gi:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  feSpec:\n    requests:\n      cpu: 4\n      memory: 4Gi\n    limits:\n      cpu: 4\n      memory: 4Gi\n")),(0,r.yg)("p",null,"The above example shows how to configure the computing resources of the FE service to 4c 4Gi mode. After configuring the resources that FE wants to use, update the configuration information to ","[Compute-storage decoupled resources to be deployed]","(/docs/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-quickstart#Install DorisDisaggregatedCluster)."),(0,r.yg)("h3",{id:"configure-service-storage-resources"},"Configure service storage resources"),(0,r.yg)("p",null,"The Compute-storage decoupled cluster FE service is a stateful service. In the K8s deployment mode, the corresponding disk needs to be mounted to store the storage information that the FE service needs to persist."),(0,r.yg)("p",null,"The following is an example of using the default ",(0,r.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/storage-classes/"},"StorageClass")," to provide storage services for FE configuration:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  feSpec:\n    persistentVolume:\n      persistentVolumeClaimSpec:\n        #storageClassName\uff1a{storageClassName}\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          requests:\n            storage: 200Gi\n")),(0,r.yg)("p",null,"The above example shows how to add 200Gi storage to the FE service. ",(0,r.yg)("inlineCode",{parentName:"p"},"{storageClassName}")," is the name of the StorageClass to be used. If it is not filled in, the default StorageClass of the cluster will be used. After configuring the storage information required by the FE service according to the above mode, update the configuration to ","[Compute-storage decoupled resources to be deployed]","(/docs/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-quickstart#Install DorisDisaggregatedCluster)."),(0,r.yg)("h2",{id:"customized-configuration-file"},"Customized configuration file"),(0,r.yg)("p",null,"In K8s deployment, you can use ConfigMap to mount customized configuration for the FE service to start the FE service. Assume that the following configuration is used to start the FE service:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: fe-configmap\n  namespace: default\n  labels:\n    app.kubernetes.io/component: fe\ndata:\n  fe.conf: |\n    CUR_DATE=`date +%Y%m%d-%H%M%S`\n    # Log dir\n    LOG_DIR = ${DORIS_HOME}/log\n    # For jdk 17, this JAVA_OPTS will be used as default JVM options\n    JAVA_OPTS_FOR_JDK_17="-Djavax.security.auth.useSubjectCredsOnly=false -Xmx8192m -Xms8192m -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=$LOG_DIR -Xlog:gc*:$LOG_DIR/fe.gc.log.$CUR_DATE:time,uptime:filecount=10,filesize=50M --add-opens=java.base/java.nio=ALL-UNNAMED --add-opens java.base/jdk.internal.ref=ALL-UNNAMED"\n    # INFO, WARN, ERROR, FATAL\n    sys_log_level = INFO\n    # NORMAL, BRIEF, ASYNC\n    sys_log_mode = NORMAL\n    # Default dirs to put jdbc drivers,default value is ${DORIS_HOME}/jdbc_drivers\n    # jdbc_drivers_dir = ${DORIS_HOME}/jdbc_drivers\n    http_port = 8030\n    rpc_port = 9020\n    query_port = 9030\n    edit_log_port = 9010\n    enable_fqdn_mode=true\n')),(0,r.yg)("p",null,"In K8s deployment, ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_fqdn_mode=true")," must be set. FE uses the ",(0,r.yg)("inlineCode",{parentName:"p"},"DorisDisaggregatedCluster")," resource sample of the above ConfigMap:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  feSpec:\n    replicas: 2\n    configMaps:\n    - name: fe-configmap\n")),(0,r.yg)("p",null,"In the ",(0,r.yg)("inlineCode",{parentName:"p"},"DorisDisaggregatedCluster")," resource, the configMaps for mounting ConfigMap is an array. The name of each element represents the ConfigMap name of the current namespace."),(0,r.yg)("p",null,"Configure the ConfigMap information required by the FE service according to the above mode, and update the configuration to ","[Compute-storage decoupled resources to be deployed]","(/docs/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-quickstart#Install DorisDisaggregatedCluster)."),(0,r.yg)("admonition",{title:"Tip",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"In K8s deployment, when using ConfigMap to mount customized configuration files, there is no need to add ",(0,r.yg)("inlineCode",{parentName:"p"},"meta_service_endpoint")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"cloud_unique_id")," configurations, and Doris-Operator related services will be added automatically.")))}d.isMDXComponent=!0}}]);