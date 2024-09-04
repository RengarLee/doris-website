"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[782767],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),y=a,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},711439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(58168),a=(n(296540),n(15680));const l={title:"DATE",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-data-types/date-time/DATE",id:"version-2.1/sql-manual/sql-data-types/date-time/DATE",title:"DATE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-data-types/date-time/DATE.md",sourceDirName:"sql-manual/sql-data-types/date-time",slug:"/sql-manual/sql-data-types/date-time/DATE",permalink:"/zh-CN/docs/2.1/sql-manual/sql-data-types/date-time/DATE",draft:!1,tags:[],version:"2.1",frontMatter:{title:"DATE",language:"zh-CN"},sidebar:"docs",previous:{title:"\u65e5\u671f\u7c7b\u578b\u6982\u89c8",permalink:"/zh-CN/docs/2.1/sql-manual/sql-data-types/date-time/datetime-overview"},next:{title:"TIME",permalink:"/zh-CN/docs/2.1/sql-manual/sql-data-types/date-time/TIME"}},s={},p=[{value:"DATE",id:"date",level:2},{value:"name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"date"},"DATE"),(0,a.yg)("h3",{id:"name"},"name"),(0,a.yg)("p",null,"DATE"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"DATE\u7c7b\u578b\n    \u65e5\u671f\u7c7b\u578b\uff0c\u76ee\u524d\u7684\u53d6\u503c\u8303\u56f4\u662f['0000-01-01', '9999-12-31'], \u9ed8\u8ba4\u7684\u6253\u5370\u5f62\u5f0f\u662f'yyyy-MM-dd'\n")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT DATE('2003-12-31 01:02:03');\n+-----------------------------+\n| DATE('2003-12-31 01:02:03') |\n+-----------------------------+\n| 2003-12-31                  |\n+-----------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"DATE\n")))}u.isMDXComponent=!0}}]);