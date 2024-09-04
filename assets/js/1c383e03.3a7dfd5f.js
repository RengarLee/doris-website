"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[801777],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},E=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),E=r,d=m["".concat(s,".").concat(E)]||m[E]||u[E]||l;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=E;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}E.displayName="MDXCreateElement"},393573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const l={title:"CREATE-INDEX",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-INDEX",id:"version-3.0/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-INDEX",title:"CREATE-INDEX",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-INDEX.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Create",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-INDEX",permalink:"/docs/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-INDEX",draft:!1,tags:[],version:"3.0",frontMatter:{title:"CREATE-INDEX",language:"en"},sidebar:"docs",previous:{title:"CREATE-TABLE-AS-SELECT",permalink:"/docs/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT"},next:{title:"CREATE-VIEW",permalink:"/docs/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-VIEW"}},s={},c=[{value:"CREATE-INDEX",id:"create-index",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"create-index"},"CREATE-INDEX"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"CREATE INDEX"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to create an index\ngrammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE INDEX [IF NOT EXISTS] index_name ON table_name (column [, ...],) [USING INVERTED] [COMMENT 'balabala'];\n")),(0,r.yg)("p",null,"Notice:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"INVERTED indexes are only created on a single column")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a inverted index for siteid on table1"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE INDEX [IF NOT EXISTS] index_name ON table1 (siteid) USING INVERTED COMMENT 'balabala';\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"CREATE, INDEX\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);