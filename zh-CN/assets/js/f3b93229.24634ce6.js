"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[141337],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>E});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),g=r,E=c["".concat(i,".").concat(g)]||c[g]||m[g]||l;return a?n.createElement(E,o(o({ref:t},u),{},{components:a})):n.createElement(E,o({ref:t},u))}));function E(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},696470:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(58168),r=(a(296540),a(15680));const l={title:"ALTER-SYSTEM-MODIFY-BACKEND",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-MODIFY-BACKEND",id:"version-3.0/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-MODIFY-BACKEND",title:"ALTER-SYSTEM-MODIFY-BACKEND",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-MODIFY-BACKEND.md",sourceDirName:"sql-manual/sql-statements/Cluster-Management-Statements",slug:"/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-MODIFY-BACKEND",permalink:"/zh-CN/docs/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-MODIFY-BACKEND",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ALTER-SYSTEM-MODIFY-BACKEND",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-SYSTEM-ADD-BROKER",permalink:"/zh-CN/docs/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-ADD-BROKER"},next:{title:"ALTER-SYSTEM-DECOMMISSION-BACKEND",permalink:"/zh-CN/docs/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DECOMMISSION-BACKEND"}},i={},p=[{value:"ALTER-SYSTEM-MODIFY-BACKEND",id:"alter-system-modify-backend",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"alter-system-modify-backend"},"ALTER-SYSTEM-MODIFY-BACKEND"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"ALTER SYSTEM MKDIFY BACKEND"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u4fee\u6539 BE \u8282\u70b9\u5c5e\u6027\uff08\u4ec5\u7ba1\u7406\u5458\u4f7f\u7528\uff01\uff09"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u901a\u8fc7 host \u548c port \u67e5\u627e backend")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "host:heartbeat_port" SET ("key" = "value"[, ...]);\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u901a\u8fc7 backend_id \u67e5\u627e backend")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "id1" SET ("key" = "value"[, ...]);\n')),(0,r.yg)("p",null," \u8bf4\u660e\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"host \u53ef\u4ee5\u662f\u4e3b\u673a\u540d\u6216\u8005ip\u5730\u5740"),(0,r.yg)("li",{parentName:"ol"},"heartbeat_port \u4e3a\u8be5\u8282\u70b9\u7684\u5fc3\u8df3\u7aef\u53e3"),(0,r.yg)("li",{parentName:"ol"},"\u4fee\u6539 BE \u8282\u70b9\u5c5e\u6027\u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u5c5e\u6027\uff1a")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"tag.xxx\uff1a\u8d44\u6e90\u6807\u7b7e"),(0,r.yg)("li",{parentName:"ul"},"disable_query: \u67e5\u8be2\u7981\u7528\u5c5e\u6027"),(0,r.yg)("li",{parentName:"ul"},"disable_load: \u5bfc\u5165\u7981\u7528\u5c5e\u6027        ")),(0,r.yg)("p",null,"\u6ce8\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},'\u53ef\u4ee5\u7ed9\u4e00\u4e2a Backend \u8bbe\u7f6e\u591a\u79cd\u8d44\u6e90\u6807\u7b7e\u3002\u4f46\u5fc5\u987b\u5305\u542b "tag.location"\u3002')),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4fee\u6539 BE \u7684\u8d44\u6e90\u6807\u7b7e"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "host1:heartbeat_port" SET ("tag.location" = "group_a");\nALTER SYSTEM MODIFY BACKEND "host1:heartbeat_port" SET ("tag.location" = "group_a", "tag.compute" = "c1");\n')),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "id1" SET ("tag.location" = "group_a");\nALTER SYSTEM MODIFY BACKEND "id1" SET ("tag.location" = "group_a", "tag.compute" = "c1");\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4fee\u6539 BE \u7684\u67e5\u8be2\u7981\u7528\u5c5e\u6027"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "host1:heartbeat_port" SET ("disable_query" = "true");\n')),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "id1" SET ("disable_query" = "true");\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4fee\u6539 BE \u7684\u5bfc\u5165\u7981\u7528\u5c5e\u6027"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "host1:heartbeat_port" SET ("disable_load" = "true");\n')),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "id1" SET ("disable_load" = "true");\n')))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"ALTER, SYSTEM, ADD, BACKEND, ALTER SYSTEM\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);