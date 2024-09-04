"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[651272],{15680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>g});var t=a(296540);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=t.createContext({}),s=function(e){var n=t.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=s(e.components);return t.createElement(d.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=s(a),m=o,g=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return a?t.createElement(g,l(l({ref:n},p),{},{components:a})):t.createElement(g,l({ref:n},p))}));function g(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=m;var r={};for(var d in n)hasOwnProperty.call(n,d)&&(r[d]=n[d]);r.originalType=e,r[c]="string"==typeof e?e:o,l[1]=r;for(var s=2;s<i;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},494630:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var t=a(58168),o=(a(296540),a(15680));const i={title:"Before Deployment",language:"en"},l=void 0,r={unversionedId:"compute-storage-decoupled/before-deployment",id:"version-3.0/compute-storage-decoupled/before-deployment",title:"Before Deployment",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/compute-storage-decoupled/before-deployment.md",sourceDirName:"compute-storage-decoupled",slug:"/compute-storage-decoupled/before-deployment",permalink:"/docs/compute-storage-decoupled/before-deployment",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Before Deployment",language:"en"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/compute-storage-decoupled/overview"},next:{title:"Compilation and Deployment",permalink:"/docs/compute-storage-decoupled/compilation-and-deployment"}},d={},s=[{value:"Deployment steps",id:"deployment-steps",level:2},{value:"Deployment planning",id:"deployment-planning",level:2},{value:"Install FoundationDB",id:"install-foundationdb",level:2},{value:"Machine requirements",id:"machine-requirements",level:3},{value:"Primary machine configuration",id:"primary-machine-configuration",level:3},{value:"Modify FoundationDB configuration",id:"modify-foundationdb-configuration",level:3},{value:"Configure access privilege",id:"configure-access-privilege",level:3},{value:"Configure a new database",id:"configure-a-new-database",level:3},{value:"Build FoundationDB cluster",id:"build-foundationdb-cluster",level:3},{value:"Install OpenJDK17",id:"install-openjdk17",level:2},{value:"Note",id:"note",level:2}],p={toc:s},c="wrapper";function u(e){let{components:n,...i}=e;return(0,o.yg)(c,(0,t.A)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"The diagram below visualizes the deployment architecture of Doris in the compute-storage mode. It involves three modules: "),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"FE"),": Responsible for receiving user requests and storing the meta data of databases and tables. It is currently stateful, but will evolve to be stateless like BE."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"BE"),": Stateless BE nodes, responsible for computation. The BE will cache a portion of the Tablet metadata and data to improve query performance."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Meta Service"),": A new module added in the compute-storage decoupled mode, with the program name ",(0,o.yg)("inlineCode",{parentName:"li"},"doris_cloud"),", which can be specified as one of the following two roles by starting with different parameters:",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Meta Service"),": Responsible for metadata management. It provides services for metadata operations, such as creating Tablets, adding Rowsets, and querying metadata of Tablets and Rowsets."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Recycler"),": Responsible for data recycling. It implements periodic asynchronous forward recycling of data by regularly scanning the metadata of the data marked for deletion (the data files are stored on S3 or HDFS), without the need to list the data objects for metadata comparison.")))),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"apache-doris-in-compute-storage-decoupled-mode",src:a(561814).A,width:"2560",height:"1384"})),(0,o.yg)("p",null,"The Meta Service is a stateless service that relies on ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apple/foundationdb"},"FoundationDB"),", a high-performance distributed transactional KV store, to store metadata. This greatly simplifies the metadata management process and provides high horizontal scalability."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"deployment-of-compute-storage-decoupled-mode",src:a(780451).A,width:"2552",height:"1694"})),(0,o.yg)("p",null,"Deploying Doris in the compute-storage decoupled mode relies on two open-source projects. Please install the following dependencies before proceeding:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"FoundationDB (FDB)")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"OpenJDK17"),": Needs to be installed on all nodes where the Meta Service is deployed.")),(0,o.yg)("h2",{id:"deployment-steps"},"Deployment steps"),(0,o.yg)("p",null,"Given the modules and their functionalities, it is recommended to deploy Doris in the compute-storage decoupled mode from bottom up:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Machine planning: Follow the instructions on ",(0,o.yg)("a",{parentName:"li",href:"/docs/compute-storage-decoupled/before-deployment"},"this page"),"."),(0,o.yg)("li",{parentName:"ol"},"Deployment of FoundationDB and the required runtime dependencies: This step can be completed without the need for any Doris compilation outputs. Follow the instructions on ",(0,o.yg)("a",{parentName:"li",href:"/docs/compute-storage-decoupled/before-deployment"},"this page"),"."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"/docs/compute-storage-decoupled/compilation-and-deployment"},"Deploy Meta Service and Recycler")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"/docs/compute-storage-decoupled/creating-cluster"},"Deploy FE and BE"))),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Note: A single FoundationDB + Meta Service + Recycler infrastructure can support multiple Doris instances (i.e., multiple FE + BE setups) running in the compute-storage decoupled mode.")),(0,o.yg)("h2",{id:"deployment-planning"},"Deployment planning"),(0,o.yg)("p",null,"To avoid inter-module interference as much as possible, the recommended deployment is to deploy module by module."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The Meta Service, Recycler, and FoundationDB modules use the same set of machines, with a minimum requirement of 3 machines.",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"To enable the compute-storage decoupled mode, at least one Meta Service process and one Recycler process must be deployed. These stateless processes can be scaled as needed, typically with 3 instances for each."),(0,o.yg)("li",{parentName:"ul"},"To ensure the performance, reliability, and scalability of FoundationDB, a multi-replica deployment is required."))),(0,o.yg)("li",{parentName:"ul"},"FE is deployed independently, with a minimum of 1 machine, and can be scaled out based on the actual query demands."),(0,o.yg)("li",{parentName:"ul"},"BE is deployed independently, with a minimum of 1 machine, and can be scaled out based on the actual query demands.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"               Host1                  Host2\n       .------------------.   .------------------.\n       |                  |   |                  |\n       |        FE        |   |        BE        |\n       |                  |   |                  |\n       '------------------'   '------------------'\n\n        Host3                 Host4                 Host5\n.------------------.  .------------------.  .------------------.\n|     Recycler     |  |     Recycler     |  |     Recycler     |\n|   Meta Service   |  |   Meta Service   |  |   Meta Service   |\n|   FoundationDB   |  |   FoundationDB   |  |   FoundationDB   |\n'------------------'  '------------------'  '------------------'\n\n")),(0,o.yg)("p",null,"If machine resources are limited, a hybrid deployment approach can be used, where all the modules are deployed on the same set of machines. This approach requires a minimum of 3 machines."),(0,o.yg)("p",null,"One feasible planning is as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"        Host1                  Host2                  Host3\n.------------------.   .------------------.   .------------------.\n|                  |   |                  |   |                  |\n|        FE        |   |                  |   |                  |\n|                  |   |        BE        |   |        BE        |\n|     Recycler     |   |                  |   |                  |\n|   Meta Servcie   |   |                  |   |                  |\n|   FoundationDB   |   |   FoundationDB   |   |   FoundationDB   |\n|                  |   |                  |   |                  |\n'------------------'   '------------------'   '------------------'\n")),(0,o.yg)("h2",{id:"install-foundationdb"},"Install FoundationDB"),(0,o.yg)("h3",{id:"machine-requirements"},"Machine requirements"),(0,o.yg)("p",null,"Typically, at least 3 machines are required to form a FoundationDB cluster having double data replicas and allowing for failure of a single machine."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"If this is only for development/testing purposes, a single machine will be enough.")),(0,o.yg)("p",null,"Each machine needs to have the FoundationDB service installed first. You can download the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apple/foundationdb/releases"},"FoundationDB installation package from here"),". Currently, the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apple/foundationdb/releases/tag/7.1.38"},"7.1.38")," version is generally recommended."),(0,o.yg)("p",null,"For CentOS (Red Hat) and Ubuntu users, the download links are as follows:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apple/foundationdb/releases/download/7.1.38/foundationdb-clients-7.1.38-1.el7.x86_64.rpm"},"clients-x86_64.rpm")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apple/foundationdb/releases/download/7.1.38/foundationdb-server-7.1.38-1.el7.x86_64.rpm"},"server-x86_64.rpm")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apple/foundationdb/releases/download/7.1.38/foundationdb-clients_7.1.38-1_amd64.deb"},"clients-amd64.deb")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apple/foundationdb/releases/download/7.1.38/foundationdb-server_7.1.38-1_amd64.deb"},"server-amd64.deb"))),(0,o.yg)("p",null,"If you need faster downloads, you can also use the following image links:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://selectdb-doris-1308700295.cos.ap-beijing.myqcloud.com/toolkit/fdb/foundationdb-clients-7.1.38-1.el7.x86_64.rpm"},"clients-x86_64.rpm")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://selectdb-doris-1308700295.cos.ap-beijing.myqcloud.com/toolkit/fdb/foundationdb-server-7.1.38-1.el7.x86_64.rpm"},"server-x86_64.rpm")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://selectdb-doris-1308700295.cos.ap-beijing.myqcloud.com/toolkit/fdb/foundationdb-clients_7.1.38-1_amd64.deb"},"clients-amd64.deb")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://selectdb-doris-1308700295.cos.ap-beijing.myqcloud.com/toolkit/fdb/foundationdb-server_7.1.38-1_amd64.deb"},"server-amd64.deb"))),(0,o.yg)("p",null,"Use the following command to install FoundationDB:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Shell"},"// Ubuntu user@host\n$ sudo dpkg -i foundationdb-clients_7.1.23-1_amd64.deb \\ foundationdb-server_7.1.23-1_amd64.deb\n\n// CentOS \nuser@host$ sudo rpm -Uvh foundationdb-clients-7.1.23-1.el7.x86_64.rpm \\ foundationdb-server-7.1.23-1.el7.x86_64.rpm\n")),(0,o.yg)("p",null,"Enter ",(0,o.yg)("inlineCode",{parentName:"p"},"fdbcli")," in the command line to check if the installation was successful. If the output shows the word ",(0,o.yg)("inlineCode",{parentName:"p"},"available"),", it indicates a successful installation:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Plain"},"user@host$ fdbcli\nUsing cluster file `/etc/foundationdb/fdb.cluster'.\n\nThe database is available.\n\nWelcome to the fdbcli. For help, type `help'.\n")),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"After a successful installation:"),(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},"By default, a FoundationDB service will be started."),(0,o.yg)("li",{parentName:"ul"},"By default, the cluster information file ",(0,o.yg)("inlineCode",{parentName:"li"},"fdb.cluster")," will be stored at ",(0,o.yg)("inlineCode",{parentName:"li"},"/etc/foundationdb/fdb.cluster"),", and the default cluster configuration file ",(0,o.yg)("inlineCode",{parentName:"li"},"foundationdb.conf")," will be stored at ",(0,o.yg)("inlineCode",{parentName:"li"},"/etc/foundationdb/foundationdb.conf"),"."),(0,o.yg)("li",{parentName:"ul"},"By default, the data and logs will be saved in ",(0,o.yg)("inlineCode",{parentName:"li"},"/var/lib/foundationdb/data/")," and ",(0,o.yg)("inlineCode",{parentName:"li"},"/var/log/foundationdb"),"."),(0,o.yg)("li",{parentName:"ul"},"By default, a FoundationDB ",(0,o.yg)("inlineCode",{parentName:"li"},"user")," and ",(0,o.yg)("inlineCode",{parentName:"li"},"group")," will be created. The paths for the data and logs are already granted with access permissions to FoundationDB."))),(0,o.yg)("h3",{id:"primary-machine-configuration"},"Primary machine configuration"),(0,o.yg)("p",null,"Select one of the three machines to be the primary machine. Configure the primary machine first, and then the other machines."),(0,o.yg)("h3",{id:"modify-foundationdb-configuration"},"Modify FoundationDB configuration"),(0,o.yg)("p",null,"Adjust the FoundationDB configurations based on different hardware specifications. You may follow the ",(0,o.yg)("a",{parentName:"p",href:"https://apple.github.io/foundationdb/configuration.html#system-requirements"},"FoundationDB System Requirements")," guidelines."),(0,o.yg)("p",null,"This is an example ",(0,o.yg)("inlineCode",{parentName:"p"},"foundationdb.conf")," configuration file for a machine with 8 CPU cores, 32 GB of memory, and a 500 GB SSD data disk. Ensure that the ",(0,o.yg)("inlineCode",{parentName:"p"},"datadir")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"logdir")," paths are set correctly. The data disk is typically mounted at ",(0,o.yg)("inlineCode",{parentName:"p"},"/mnt"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"# foundationdb.conf\n##\n## Configuration file for FoundationDB server processes\n## Full documentation is available at\n## https://apple.github.io/foundationdb/configuration.html#the-configuration-file\n\n[fdbmonitor]\nuser = foundationdb\ngroup = foundationdb\n\n[general]\nrestart-delay = 60\n## By default, restart-backoff = restart-delay-reset-interval = restart-delay\n# initial-restart-delay = 0\n# restart-backoff = 60\n# restart-delay-reset-interval = 60\ncluster-file = /etc/foundationdb/fdb.cluster\n# delete-envvars =\n# kill-on-configuration-change = true\n\n## Default parameters for individual fdbserver processes\n[fdbserver]\ncommand = /usr/sbin/fdbserver\npublic-address = auto:$ID\nlisten-address = public\nlogdir = /mnt/foundationdb/log\ndatadir = /mnt/foundationdb/data/$ID\n# logsize = 10MiB\n# maxlogssize = 100MiB\n# machine-id =\n# datacenter-id =\n# class =\n# memory = 8GiB\n# storage-memory = 1GiB\n# cache-memory = 2GiB\n# metrics-cluster =\n# metrics-prefix =\n\n## An individual fdbserver process with id 4500\n## Parameters set here override defaults from the [fdbserver] section\n[fdbserver.4500]\nclass = stateless\n[fdbserver.4501]\nclass = stateless\n\n[fdbserver.4502]\nclass = storage\n\n[fdbserver.4503]\nclass = storage\n\n[fdbserver.4504]\nclass = log\n\n[backup_agent]\ncommand = /usr/lib/foundationdb/backup_agent/backup_agent\nlogdir = /mnt/foundationdb/log\n\n[backup_agent.1]\n")),(0,o.yg)("p",null,"Firstly, on the primary host machine, create the directories corresponding to the configured ",(0,o.yg)("inlineCode",{parentName:"p"},"datadir")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"logdir")," paths, and grant the ",(0,o.yg)("inlineCode",{parentName:"p"},"foundationdb")," user and group access to them."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Shell"},"chown -R foundationdb:foundationdb /mnt/foundationdb/data/ /mnt/foundationdb/log\n")),(0,o.yg)("p",null,"Then, replace the relevant contents of the ",(0,o.yg)("inlineCode",{parentName:"p"},"/etc/foundationdb/foundationdb.conf")," file with the corresponding configurations."),(0,o.yg)("h3",{id:"configure-access-privilege"},"Configure access privilege"),(0,o.yg)("p",null,"Set the access privileges for the ",(0,o.yg)("inlineCode",{parentName:"p"},"/etc/foundationdb")," directory:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Shell"},"chmod -R 777 /etc/foundationdb\n")),(0,o.yg)("p",null,"On the primary machine, update the ",(0,o.yg)("inlineCode",{parentName:"p"},"ip")," in the ",(0,o.yg)("inlineCode",{parentName:"p"},"/etc/foundationdb/fdb.cluster")," file. It is set to the address of the local machine by default, and it should be updated to the appropriate internal network address. For example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Shell"},"3OrXp9ei:diDqAjYV@127.0.0.1:4500 -> 3OrXp9ei:diDqAjYV@172.21.16.37:4500\n")),(0,o.yg)("p",null,"Then, restart the FoundationDB service to apply the changes:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"# for service\nuser@host$ sudo service foundationdb restart\n\n# for systemd\nuser@host$ sudo systemctl restart foundationdb.service\n")),(0,o.yg)("h3",{id:"configure-a-new-database"},"Configure a new database"),(0,o.yg)("p",null,"Due to changes in the storage paths for ",(0,o.yg)("inlineCode",{parentName:"p"},"data")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"log"),", a new ",(0,o.yg)("inlineCode",{parentName:"p"},"database")," needs to be created on the primary machine. This can be done in ",(0,o.yg)("inlineCode",{parentName:"p"},"fdbcli")," by creating a new ",(0,o.yg)("inlineCode",{parentName:"p"},"database")," with ",(0,o.yg)("inlineCode",{parentName:"p"},"ssd")," as the storage engine."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Shell"},"user@host$ fdbcli\nfdb> configure new single ssd\nDatabase created\n")),(0,o.yg)("p",null,"Finally, check through ",(0,o.yg)("inlineCode",{parentName:"p"},"fdbcli")," to see if it starts up normally."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Shell"},"user@host$ fdbcli\nUsing cluster file `/etc/foundationdb/fdb.cluster'.\n\nThe database is available.\n\nWelcome to the fdbcli. For help, type `help'.\n")),(0,o.yg)("p",null,"At this point, the configuration of the primary machine is completed."),(0,o.yg)("h3",{id:"build-foundationdb-cluster"},"Build FoundationDB cluster"),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"If you are only deploying a single machine for development or testing, you can skip this step.")),(0,o.yg)("p",null,"For machines other than the primary machine, follow the same steps of configuring the primary machine to create the ",(0,o.yg)("inlineCode",{parentName:"p"},"data")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"log")," directories. Then, set access privileges to the ",(0,o.yg)("inlineCode",{parentName:"p"},"/etc/foundationdb"),"directory:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Shell"},"chmod -R 777 /etc/foundationdb\n")),(0,o.yg)("p",null,"Replace ",(0,o.yg)("inlineCode",{parentName:"p"},"/etc/foundationdb/foundationdb.conf")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"/etc/foundationdb/fdb.cluster")," of the primary machine with those of the local machine. "),(0,o.yg)("p",null,"Then, restart FoundationDB service on the local machine."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"# for service\nuser@host$ sudo service foundationdb restart\n\n# for systemd\nuser@host$ sudo systemctl restart foundationdb.service\n")),(0,o.yg)("p",null,"After these steps on all machines, the machines will be connected to the same cluster (i.e., the same ",(0,o.yg)("inlineCode",{parentName:"p"},"fdb.cluster"),"). Log in to the primary machine and configure double replicas."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Shell"},"user@host$ fdbcli\nUsing cluster file `/etc/foundationdb/fdb.cluster'.\n\nThe database is available.\n\nWelcome to the fdbcli. For help, type `help'.\nfdb> configure double\nConfiguration changed.\n")),(0,o.yg)("p",null,"Then, on the primary machine, configure the ",(0,o.yg)("inlineCode",{parentName:"p"},"fdb.cluster"),"file with the accessible machines and ports for disaster recovery purposes."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Shell"},"user@host$ fdbcli\nUsing cluster file `/etc/foundationdb/fdb.cluster'.\n\nThe database is available.\n\nWelcome to the fdbcli. For help, type `help'.\nfdb> coordinators ${primary machine ip}:4500 ${secondary machine 1 ip}:4500 ${secondary machine 2 ip}:4500 (Fill in all machines)\nCoordinators changed\n")),(0,o.yg)("p",null,"Finally, check if the configuration is successful using the ",(0,o.yg)("inlineCode",{parentName:"p"},"status")," command in ",(0,o.yg)("inlineCode",{parentName:"p"},"fdbcli"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Shell"},"[root@ip-10-100-3-91 recycler]# fdbcli\nUsing cluster file `/etc/foundationdb/fdb.cluster'.\n\nThe database is available.\n\nWelcome to the fdbcli. For help, type `help'.\nfdb> status\n\nUsing cluster file `/etc/foundationdb/fdb.cluster'.\n\nConfiguration:\n  Redundancy mode        - double\n  Storage engine         - ssd-2\n  Coordinators           - 3\n  Usable Regions         - 1\n\nCluster:\n  FoundationDB processes - 15\n  Zones                  - 3\n  Machines               - 3\n  Memory availability    - 6.1 GB per process on machine with least available\n  Fault Tolerance        - 1 machines\n  Server time            - 11/11/22 04:47:30\n\nData:\n  Replication health     - Healthy\n  Moving data            - 0.000 GB\n  Sum of key-value sizes - 0 MB\n  Disk space used        - 944 MB\n\nOperating space:\n  Storage server         - 473.9 GB free on most full server\n  Log server             - 473.9 GB free on most full server\n\nWorkload:\n  Read rate              - 19 Hz\n  Write rate             - 0 Hz\n  Transactions started   - 5 Hz\n  Transactions committed - 0 Hz\n  Conflict rate          - 0 Hz\n\nBackup and DR:\n  Running backups        - 0\n  Running DRs            - 0\n")),(0,o.yg)("h2",{id:"install-openjdk17"},"Install OpenJDK17"),(0,o.yg)("p",null,"All nodes must have OpenJDK 17 installed. You can download the installation package from the following link: ",(0,o.yg)("a",{parentName:"p",href:"https://download.java.net/java/GA/jdk17.0.1/2a2082e5a09d4267845be086888add4f/12/GPL/openjdk-17.0.1_linux-x64_bin.tar.gz"},"OpenJDK 17")),(0,o.yg)("p",null,"Then, simply extract the downloaded OpenJDK package directly to the installation path:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"tar xf openjdk-17.0.1_linux-x64_bin.tar.gz  -C /opt/\n\n# Before starting Meta Service or Recycler\nexport JAVA_HOME=/opt/jdk-17.0.1\n")),(0,o.yg)("h2",{id:"note"},"Note"),(0,o.yg)("p",null,"The machines deployed with FoundationDB can also be deployed with Meta Service and Recycler, which is also the recommended deployment method to save on machine resources."))}u.isMDXComponent=!0},561814:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/apache-doris-in-compute-storage-decoupled-mode-7657c7c3e3deff58e1f16ab0a45cbe52.png"},780451:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/deployment-of-compute-storage-decoupled-mode-eedd9142b42a4bd16fc49196f92cded8.png"}}]);