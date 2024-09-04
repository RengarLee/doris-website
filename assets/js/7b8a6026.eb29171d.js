"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[916815],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=u(t),d=i,y=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return t?r.createElement(y,l(l({ref:n},c),{},{components:t})):r.createElement(y,l({ref:n},c))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[f]="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},489756:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=t(58168),i=(t(296540),t(15680));const o={title:"IF",language:"en"},l=void 0,a={unversionedId:"sql-manual/sql-functions/conditional-functions/if",id:"version-2.1/sql-manual/sql-functions/conditional-functions/if",title:"IF",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/conditional-functions/if.md",sourceDirName:"sql-manual/sql-functions/conditional-functions",slug:"/sql-manual/sql-functions/conditional-functions/if",permalink:"/docs/2.1/sql-manual/sql-functions/conditional-functions/if",draft:!1,tags:[],version:"2.1",frontMatter:{title:"IF",language:"en"},sidebar:"docs",previous:{title:"COALESCE",permalink:"/docs/2.1/sql-manual/sql-functions/conditional-functions/coalesce"},next:{title:"IFNULL",permalink:"/docs/2.1/sql-manual/sql-functions/conditional-functions/ifnull"}},s={},u=[{value:"if",id:"if",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},f="wrapper";function p(e){let{components:n,...t}=e;return(0,i.yg)(f,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"if"},"if"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"if(boolean condition, type valueTrue, type valueFalseOrNull)")),(0,i.yg)("p",null,"Returns valueTrue when condition is true, returns valueFalseOrNull otherwise. "),(0,i.yg)("p",null,"The return type is the type of the result of the valueTrue/valueFalseOrNull expression"),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'mysql> select  user_id, if(user_id = 1, "true", "false") test_if from test;\n+---------+---------+\n| user_id | test_if |\n+---------+---------+\n| 1       | true    |\n| 2       | false   |\n+---------+---------+\n')),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("p",null,"IF"))}p.isMDXComponent=!0}}]);