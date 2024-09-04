"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[679205],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(296540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,s=e.originalType,a=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=c(n),y=l,d=f["".concat(a,".").concat(y)]||f[y]||p[y]||s;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=n.length,i=new Array(s);i[0]=y;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o[f]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},624134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(58168),l=(n(296540),n(15680));const s={title:"strleft",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-functions/string-functions/strleft",id:"version-1.2/sql-manual/sql-functions/string-functions/strleft",title:"strleft",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/string-functions/strleft.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/strleft",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/strleft",draft:!1,tags:[],version:"1.2",frontMatter:{title:"strleft",language:"en"},sidebar:"docs",previous:{title:"right",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/right"},next:{title:"strright",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/strright"}},a={},c=[{value:"strleft",id:"strleft",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},f="wrapper";function p(e){let{components:t,...n}=e;return(0,l.yg)(f,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"strleft"},"strleft"),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"VARCHAR STRLEFT (VARCHAR str, INT len)")),(0,l.yg)("p",null,"It returns the left part of a string of specified length, length is char length not the byte size. Another alias for this function is ",(0,l.yg)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-functions/string-functions/left"},"left"),"."),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> select strleft(\"Hello doris\",5);\n+------------------------+\n| strleft('Hello doris', 5) |\n+------------------------+\n| Hello                  |\n+------------------------+\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"STRLEFT\n")))}p.isMDXComponent=!0}}]);