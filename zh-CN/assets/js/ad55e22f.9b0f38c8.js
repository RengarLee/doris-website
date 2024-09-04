"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[489671],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,y=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},660050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"SHOW-TABLETS-BELONG",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-TABLETS-BELONG",id:"version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-TABLETS-BELONG",title:"SHOW-TABLETS-BELONG",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-TABLETS-BELONG.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-TABLETS-BELONG",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-TABLETS-BELONG",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-TABLETS-BELONG",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-TABLET",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-TABLET"},next:{title:"SHOW-VARIABLES",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-VARIABLES"}},i={},c=[{value:"SHOW-TABLETS-BELONG",id:"show-tablets-belong",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-tablets-belong"},"SHOW-TABLETS-BELONG"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW TABLETS BELONG"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u6307\u5b9a Tablets \u5f52\u5c5e\u7684\u8868\u7684\u4fe1\u606f"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLETS BELONG tablet-ids;\n")),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"tablet-ids\uff1a\u4ee3\u8868\u4e00\u5230\u591a\u4e2a tablet-id \u6784\u6210\u7684\u5217\u8868\u3002\u5982\u6709\u591a\u4e2a\uff0c\u4f7f\u7528\u9017\u53f7\u5206\u9694"),(0,a.yg)("li",{parentName:"ol"},"\u7ed3\u679c\u4e2d table \u76f8\u5173\u7684\u4fe1\u606f\u548c ",(0,a.yg)("inlineCode",{parentName:"li"},"SHOW-DATA")," \u8bed\u53e5\u7684\u53e3\u5f84\u4e00\u81f4")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c55\u793a 3 \u4e2a tablet-id \u7684\u76f8\u5173\u4fe1\u606f\uff08tablet-id \u53ef\u53bb\u91cd\uff09"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"```sql\nSHOW TABLETS BELONG 27028,78880,78382,27028;\n```\n\n```\n")),(0,a.yg)("p",{parentName:"li"},"+---------------------+-----------+-----------+--------------+-----------+--------------+----------------+\n| DbName              | TableName | TableSize | PartitionNum | BucketNum | ReplicaCount | TabletIds      |\n+---------------------+-----------+-----------+--------------+-----------+--------------+----------------+\n| default_cluster:db1 | kec       | 613.000 B | 379          | 604       | 604          | ","[78880, 78382]"," |\n| default_cluster:db1 | test      | 1.874 KB  | 1            | 1         | 1            | ","[27028]","        |\n+---------------------+-----------+-----------+--------------+-----------+--------------+----------------+"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"```\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, TABLETS, BELONG\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);