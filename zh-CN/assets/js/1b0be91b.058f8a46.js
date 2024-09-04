"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[942935],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(296540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(n),d=l,g=u["".concat(p,".").concat(d)]||u[d]||y[d]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:l,o[1]=s;for(var i=2;i<a;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},634669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var r=n(58168),l=(n(296540),n(15680));const a={title:"\u96c6\u7fa4\u73af\u5883\u8981\u6c42",language:"zh-CN"},o=void 0,s={unversionedId:"install/cluster-deployment/k8s-deploy/install-env",id:"version-3.0/install/cluster-deployment/k8s-deploy/install-env",title:"\u96c6\u7fa4\u73af\u5883\u8981\u6c42",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/install/cluster-deployment/k8s-deploy/install-env.md",sourceDirName:"install/cluster-deployment/k8s-deploy",slug:"/install/cluster-deployment/k8s-deploy/install-env",permalink:"/zh-CN/docs/install/cluster-deployment/k8s-deploy/install-env",draft:!1,tags:[],version:"3.0",frontMatter:{title:"\u96c6\u7fa4\u73af\u5883\u8981\u6c42",language:"zh-CN"},sidebar:"docs",previous:{title:"Docker \u90e8\u7f72",permalink:"/zh-CN/docs/install/cluster-deployment/run-docker-cluster"},next:{title:"\u90e8\u7f72 Doris Operator",permalink:"/zh-CN/docs/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-operator"}},p={},i=[{value:"\u8f6f\u4ef6\u7248\u672c\u8981\u6c42",id:"\u8f6f\u4ef6\u7248\u672c\u8981\u6c42",level:2},{value:"\u64cd\u4f5c\u7cfb\u7edf\u8981\u6c42",id:"\u64cd\u4f5c\u7cfb\u7edf\u8981\u6c42",level:2},{value:"\u9632\u706b\u5899\u914d\u7f6e",id:"\u9632\u706b\u5899\u914d\u7f6e",level:3},{value:"\u7981\u7528\u548c\u5173\u95ed swap",id:"\u7981\u7528\u548c\u5173\u95ed-swap",level:3},{value:"\u8bbe\u7f6e\u7cfb\u7edf\u6700\u5927\u6253\u5f00\u6587\u4ef6\u53e5\u67c4\u6570",id:"\u8bbe\u7f6e\u7cfb\u7edf\u6700\u5927\u6253\u5f00\u6587\u4ef6\u53e5\u67c4\u6570",level:3},{value:"\u4fee\u6539\u865a\u62df\u5185\u5b58\u533a\u57df\u6570\u91cf",id:"\u4fee\u6539\u865a\u62df\u5185\u5b58\u533a\u57df\u6570\u91cf",level:3},{value:"\u5173\u95ed\u900f\u660e\u5927\u9875",id:"\u5173\u95ed\u900f\u660e\u5927\u9875",level:3}],c={toc:i},u="wrapper";function y(e){let{components:t,...n}=e;return(0,l.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"\u8f6f\u4ef6\u7248\u672c\u8981\u6c42"},"\u8f6f\u4ef6\u7248\u672c\u8981\u6c42"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u8f6f\u4ef6"),(0,l.yg)("th",{parentName:"tr",align:null},"\u7248\u672c\u8981\u6c42"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Docker"),(0,l.yg)("td",{parentName:"tr",align:null},">","= 1.20")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Kubernetes"),(0,l.yg)("td",{parentName:"tr",align:null},">","= 1.19")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Doris"),(0,l.yg)("td",{parentName:"tr",align:null},">","= 2.0.0")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Helm\uff08\u53ef\u9009\uff09"),(0,l.yg)("td",{parentName:"tr",align:null},">","= 3.7")))),(0,l.yg)("h2",{id:"\u64cd\u4f5c\u7cfb\u7edf\u8981\u6c42"},"\u64cd\u4f5c\u7cfb\u7edf\u8981\u6c42"),(0,l.yg)("h3",{id:"\u9632\u706b\u5899\u914d\u7f6e"},"\u9632\u706b\u5899\u914d\u7f6e"),(0,l.yg)("p",null,"\u5728 Kubernetes \u4e0a\u90e8\u7f72 Doris \u96c6\u7fa4\uff0c\u5efa\u8bae\u5173\u95ed\u9632\u706b\u5899\u914d\u7f6e\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"systemctl stop firewalld\nsystemctl disable firewalld\n")),(0,l.yg)("p",null,"\u5982\u679c\u65e0\u6cd5\u5173\u95ed\u9632\u706b\u5899\u670d\u52a1\uff0c\u53ef\u4ee5\u6839\u636e\u89c4\u5212\uff0c\u6253\u5f00 FE \u4e0e BE \u7aef\u53e3\uff1a"),(0,l.yg)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"\u5982\u679c\u65e0\u6cd5\u5173\u95ed\u9632\u706b\u5899\uff0c\u9700\u8981\u6839\u636e Kubernetes \u6620\u5c04\u89c4\u5219\u6253\u5f00 Doris \u76f8\u5e94\u7aef\u53e3\u7684\u9632\u706b\u5899\u3002\u5177\u4f53\u7aef\u53e3\u53ef\u4ee5\u53c2\u8003 ",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/install/cluster-deployment/standard-deployment#%E7%BD%91%E7%BB%9C%E9%9C%80%E6%B1%82"},"Doris \u96c6\u7fa4\u7aef\u53e3\u89c4\u5212"),"\u3002")),(0,l.yg)("h3",{id:"\u7981\u7528\u548c\u5173\u95ed-swap"},"\u7981\u7528\u548c\u5173\u95ed swap"),(0,l.yg)("p",null,"\u5728\u90e8\u7f72 Doris \u65f6\uff0c\u5efa\u8bae\u5173\u95ed swap \u5206\u533a\u3002"),(0,l.yg)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u53ef\u4ee5\u6c38\u4e45\u5173\u95ed swap \u5206\u533a\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'echo "vm.swappiness = 0">> /etc/sysctl.conf\nswapoff -a && swapon -a\nsysctl -p\n')),(0,l.yg)("h3",{id:"\u8bbe\u7f6e\u7cfb\u7edf\u6700\u5927\u6253\u5f00\u6587\u4ef6\u53e5\u67c4\u6570"},"\u8bbe\u7f6e\u7cfb\u7edf\u6700\u5927\u6253\u5f00\u6587\u4ef6\u53e5\u67c4\u6570"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"vi /etc/security/limits.conf \n* soft nofile 65536\n* hard nofile 65536\n")),(0,l.yg)("h3",{id:"\u4fee\u6539\u865a\u62df\u5185\u5b58\u533a\u57df\u6570\u91cf"},"\u4fee\u6539\u865a\u62df\u5185\u5b58\u533a\u57df\u6570\u91cf"),(0,l.yg)("p",null,"\u4fee\u6539\u865a\u62df\u5185\u5b58\u533a\u57df\u81f3\u5c11 2000000"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"sysctl -w vm.max_map_count=2000000\n")),(0,l.yg)("h3",{id:"\u5173\u95ed\u900f\u660e\u5927\u9875"},"\u5173\u95ed\u900f\u660e\u5927\u9875"),(0,l.yg)("p",null,"\u5728\u90e8\u7f72 Doris \u65f6\uff0c\u5efa\u8bae\u5173\u95ed\u900f\u660e\u5927\u9875\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"echo never > /sys/kernel/mm/transparent_hugepage/enabled\necho never > /sys/kernel/mm/transparent_hugepage/defrag\n")))}y.isMDXComponent=!0}}]);