"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[370364],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(y,l(l({ref:t},p),{},{components:n})):a.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const o={title:"RESUME-SYNC-JOB",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/RESUME-SYNC-JOB",id:"version-2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/RESUME-SYNC-JOB",title:"RESUME-SYNC-JOB",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/RESUME-SYNC-JOB.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/RESUME-SYNC-JOB",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/RESUME-SYNC-JOB",draft:!1,tags:[],version:"2.0",frontMatter:{title:"RESUME-SYNC-JOB",language:"en"},sidebar:"docs",previous:{title:"PAUSE-SYNC-JOB",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-SYNC-JOB"},next:{title:"STOP-SYNC-JOB",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STOP-SYNC-JOB"}},s={},c=[{value:"RESUME-SYNC-JOB",id:"resume-sync-job",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"resume-sync-job"},"RESUME-SYNC-JOB"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"RESUME SYNC JOB"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"Resume a resident data synchronization job whose current database has been suspended by ",(0,r.yg)("inlineCode",{parentName:"p"},"job_name"),", and the job will continue to synchronize data from the latest position before the last suspension."),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"RESUME SYNC JOB [db.]job_name\n")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Resume the data synchronization job named ",(0,r.yg)("inlineCode",{parentName:"p"},"job_name")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"RESUME SYNC JOB `job_name`;\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"RESUME, SYNC, LOAD\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);