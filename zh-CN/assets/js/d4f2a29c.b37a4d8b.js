"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[163182],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>c});var a=t(296540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),g=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=g(e.components);return a.createElement(o.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),y=g(t),d=l,c=y["".concat(o,".").concat(d)]||y[d]||u[d]||r;return t?a.createElement(c,i(i({ref:n},m),{},{components:t})):a.createElement(c,i({ref:n},m))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[y]="string"==typeof e?e:l,i[1]=p;for(var g=2;g<r;g++)i[g]=t[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},913849:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>g});var a=t(58168),l=(t(296540),t(15680));const r={title:"\u4f4d\u56fe\u7d22\u5f15",language:"zh-CN"},i=void 0,p={unversionedId:"table-design/index/bitmap-index",id:"version-3.0/table-design/index/bitmap-index",title:"\u4f4d\u56fe\u7d22\u5f15",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/table-design/index/bitmap-index.md",sourceDirName:"table-design/index",slug:"/table-design/index/bitmap-index",permalink:"/zh-CN/docs/table-design/index/bitmap-index",draft:!1,tags:[],version:"3.0",frontMatter:{title:"\u4f4d\u56fe\u7d22\u5f15",language:"zh-CN"}},o={},g=[{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:2},{value:"\u4e0d\u9002\u7528\u573a\u666f",id:"\u4e0d\u9002\u7528\u573a\u666f",level:2},{value:"\u521b\u5efa\u4f4d\u56fe\u7d22\u5f15",id:"\u521b\u5efa\u4f4d\u56fe\u7d22\u5f15",level:2},{value:"\u67e5\u770b\u4f4d\u56fe\u7d22\u5f15",id:"\u67e5\u770b\u4f4d\u56fe\u7d22\u5f15",level:2},{value:"\u5220\u9664\u7d22\u5f15",id:"\u5220\u9664\u7d22\u5f15",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],m={toc:g},y="wrapper";function u(e){let{components:n,...r}=e;return(0,l.yg)(y,(0,a.A)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"\u4f4d\u56fe\u7d22\u5f15\uff08Bitmap Index\uff09\u5c31\u662f\u7528\u4f4d\u56fe\u8868\u793a\u7684\u7d22\u5f15\uff0c\u5bf9\u5217\u7684\u6bcf\u4e2a\u952e\u503c\u5efa\u7acb\u4e00\u4e2a\u4f4d\u56fe\uff0c\u76f8\u5bf9\u4e8e\u5176\u5b83\u7d22\u5f15\uff0c\u5360\u7528\u7684\u5b58\u50a8\u7a7a\u95f4\u975e\u5e38\u5c0f\uff0c\u521b\u5efa\u548c\u4f7f\u7528\u975e\u5e38\u5feb\uff0c\u7f3a\u70b9\u662f\u4fee\u6539\u64cd\u4f5c\u9501\u7c92\u5ea6\u5927\uff0c\u4e0d\u9002\u5408\u9891\u7e41\u66f4\u65b0\u3002"),(0,l.yg)("p",null,"\u5982\u4e0b\u56fe\uff0cbitmap \u7d22\u5f15\u5c06\u6bcf\u4e2a\u88ab\u7d22\u5f15\u7684\u5217\u7684\u503c\u4f5c\u4e3a KEY\uff0c\u4f7f\u7528\u6bcf\u4e2a BIT \u8868\u793a\u4e00\u884c\uff0c\u5f53\u8fd9\u884c\u4e2d\u5305\u542b\u8fd9\u4e2a\u503c\u65f6\uff0c\u8bbe\u7f6e\u4e3a 1\uff0c\u5426\u5219\u8bbe\u7f6e\u4e3a 0\u3002"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Bitmap Index",src:t(489919).A,width:"2560",height:"896"})),(0,l.yg)("h2",{id:"\u9002\u7528\u573a\u666f"},"\u9002\u7528\u573a\u666f"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5efa\u5728\u503c\u91cd\u590d\u5ea6\u9ad8\u7684\u5217\u4e0a\uff0c\u5efa\u8bae\u5728 100 \u5230 100,000 \u4e4b\u95f4\uff0c\u5982\uff1a\u804c\u4e1a\u3001\u5730\u5e02\u7b49\u3002\u91cd\u590d\u5ea6\u8fc7\u9ad8\u5219\u5bf9\u6bd4\u5176\u4ed6\u7c7b\u578b\u7d22\u5f15\u6ca1\u6709\u660e\u663e\u4f18\u52bf\uff1b\u91cd\u590d\u5ea6\u8fc7\u4f4e\uff0c\u5219\u7a7a\u95f4\u6548\u7387\u548c\u6027\u80fd\u4f1a\u5927\u5927\u964d\u4f4e\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u7279\u5b9a\u7c7b\u578b\u7684\u67e5\u8be2\u4f8b\u5982 count\u3001or\u3001and \u7b49\u903b\u8f91\u64cd\u4f5c\u53ea\u9700\u8981\u8fdb\u884c\u4f4d\u8fd0\u7b97\u3002\u5982\uff1a\u901a\u8fc7\u591a\u4e2a\u6761\u4ef6\u7ec4\u5408\u67e5\u8be2\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"select count(*) from table where city = \u2019\u5357\u4eac\u5e02\u2019and job = \u2019\u533b\u751f\u2019 and phonetype = \u2018iphone\u2019and gender =\u2019\u7537\u2019"),"\u3002\u7c7b\u4f3c\u8fd9\u79cd\u573a\u666f\uff0c\u5982\u679c\u5728\u6bcf\u4e2a\u67e5\u8be2\u6761\u4ef6\u5217\u4e0a\u90fd\u5efa\u7acb\u4e86 Bitmap \u7d22\u5f15\uff0c\u5219\u6570\u636e\u5e93\u53ef\u4ee5\u8fdb\u884c\u9ad8\u6548\u7684 bit \u8fd0\u7b97\uff0c\u7cbe\u786e\u5b9a\u4f4d\u5230\u9700\u8981\u7684\u6570\u636e\uff0c\u51cf\u5c11\u78c1\u76d8 IO\uff0c\u5e76\u4e14\u7b5b\u9009\u51fa\u7684\u7ed3\u679c\u96c6\u8d8a\u5c0f\uff0cBitmap \u7d22\u5f15\u7684\u4f18\u52bf\u8d8a\u660e\u663e\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u9002\u7528\u4e8e\u5373\u5e2d\u67e5\u8be2\u3001\u591a\u7ef4\u5206\u6790\u7b49\u5206\u6790\u573a\u666f\u3002\u5982\u679c\u6709\u4e00\u5f20\u8868\u6709 100 \u5217\uff0c\u7528\u6237\u4f1a\u4f7f\u7528\u5176\u4e2d\u7684 20 \u4e2a\u5217\u4f5c\u4e3a\u67e5\u8be2\u6761\u4ef6\uff08\u4efb\u610f\u4f7f\u7528\u8fd9 20 \u4e2a\u5217\u4e0a\u7684 N \u7684\u5217\uff09\uff0c\u5728\u8fd9\u4e9b\u5217\u4e0a\u521b\u5efa 20 \u4e2a Bitmap \u7d22\u5f15\uff0c\u90a3\u4e48\u6240\u6709\u7684\u67e5\u8be2\u90fd\u53ef\u4ee5\u5e94\u7528\u5230\u7d22\u5f15\u3002"))),(0,l.yg)("h2",{id:"\u4e0d\u9002\u7528\u573a\u666f"},"\u4e0d\u9002\u7528\u573a\u666f"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u503c\u91cd\u590d\u5ea6\u4f4e\u7684\u5217\uff0c\u5982\uff1a\u8eab\u4efd\u8bc1\u53f7\u3001\u624b\u673a\u53f7\u7801\u7b49\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u91cd\u590d\u5ea6\u8fc7\u9ad8\u7684\u5217\uff0c\u5982\uff1a\u6027\u522b\uff0c\u53ef\u4ee5\u5efa\u7acb Bitmap \u7d22\u5f15\uff0c\u4f46\u4e0d\u5efa\u8bae\u5355\u72ec\u4f5c\u4e3a\u67e5\u8be2\u6761\u4ef6\u4f7f\u7528\uff0c\u5efa\u8bae\u4e0e\u5176\u4ed6\u6761\u4ef6\u5171\u540c\u8fc7\u6ee4\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u7ecf\u5e38\u9700\u8981\u66f4\u65b0\u4fee\u6539\u7684\u5217\u3002"))),(0,l.yg)("h2",{id:"\u521b\u5efa\u4f4d\u56fe\u7d22\u5f15"},"\u521b\u5efa\u4f4d\u56fe\u7d22\u5f15"),(0,l.yg)("p",null,"\u5728\u8868\u540d\u4e3a table_name \u4e0a\u4e3a siteid \u521b\u5efa Bitmap \u7d22\u5f15"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE INDEX [IF NOT EXISTS] index_name ON table1 (siteid) USING BITMAP;\n")),(0,l.yg)("h2",{id:"\u67e5\u770b\u4f4d\u56fe\u7d22\u5f15"},"\u67e5\u770b\u4f4d\u56fe\u7d22\u5f15"),(0,l.yg)("p",null,"\u5c55\u793a\u6307\u5b9a table_name \u7684\u4e0b\u7d22\u5f15"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW INDEX FROM table_name;\n")),(0,l.yg)("h2",{id:"\u5220\u9664\u7d22\u5f15"},"\u5220\u9664\u7d22\u5f15"),(0,l.yg)("p",null,"\u5220\u9664\u6307\u5b9a table_name \u7684\u4e0b\u7d22\u5f15"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"DROP INDEX [IF EXISTS] index_name ON table_name;\n")),(0,l.yg)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Bitmap \u7d22\u5f15\u4ec5\u5728\u5355\u5217\u4e0a\u521b\u5efa\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Bitmap \u7d22\u5f15\u80fd\u591f\u5e94\u7528\u5728 ",(0,l.yg)("inlineCode",{parentName:"p"},"Duplicate"),"\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"Uniq")," \u6570\u636e\u6a21\u578b\u7684\u6240\u6709\u5217\u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"Aggregate"),"\u6a21\u578b\u7684 Key \u5217\u4e0a\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Bitmap \u7d22\u5f15\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u5982\u4e0b\uff1a"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"TINYINT")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"SMALLINT")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"INT")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"BIGINT")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"CHAR")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"VARCHAR")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"DATE")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"DATETIME")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"LARGEINT")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"DECIMAL")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"BOOL"))))))}u.isMDXComponent=!0},489919:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/bitmap-index-example-692794948b22e3105c1171ed819766fc.png"}}]);