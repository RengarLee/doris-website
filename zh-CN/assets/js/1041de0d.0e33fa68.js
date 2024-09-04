"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[547092],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>d});var a=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=c(t),m=o,d=g["".concat(p,".").concat(m)]||g[m]||u[m]||r;return t?a.createElement(d,l(l({ref:n},s),{},{components:t})):a.createElement(d,l({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[g]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},694735:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(58168),o=(t(296540),t(15680));const r={title:"\u4f7f\u7528 LDB Toolchain \u7f16\u8bd1\uff08\u63a8\u8350\uff09",language:"zh-CN"},l=void 0,i={unversionedId:"install/source-install/compilation-with-ldb-toolchain",id:"version-3.0/install/source-install/compilation-with-ldb-toolchain",title:"\u4f7f\u7528 LDB Toolchain \u7f16\u8bd1\uff08\u63a8\u8350\uff09",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/install/source-install/compilation-with-ldb-toolchain.md",sourceDirName:"install/source-install",slug:"/install/source-install/compilation-with-ldb-toolchain",permalink:"/zh-CN/docs/install/source-install/compilation-with-ldb-toolchain",draft:!1,tags:[],version:"3.0",frontMatter:{title:"\u4f7f\u7528 LDB Toolchain \u7f16\u8bd1\uff08\u63a8\u8350\uff09",language:"zh-CN"},sidebar:"docs",previous:{title:"\u4f7f\u7528 Docker \u5f00\u53d1\u955c\u50cf\u7f16\u8bd1\uff08\u63a8\u8350\uff09",permalink:"/zh-CN/docs/install/source-install/compilation-with-docker"},next:{title:"Linux \u5e73\u53f0\u76f4\u63a5\u7f16\u8bd1",permalink:"/zh-CN/docs/install/source-install/compilation-linux"}},p={},c=[{value:"\u51c6\u5907\u7f16\u8bd1\u73af\u5883",id:"\u51c6\u5907\u7f16\u8bd1\u73af\u5883",level:2},{value:"\u7f16\u8bd1 Doris",id:"\u7f16\u8bd1-doris",level:2},{value:"\u9884\u7f16\u8bd1\u4e09\u65b9\u5e93",id:"\u9884\u7f16\u8bd1\u4e09\u65b9\u5e93",level:2}],s={toc:c},g="wrapper";function u(e){let{components:n,...t}=e;return(0,o.yg)(g,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 LDB Toolchain \u7f16\u8bd1 Doris\u3002\u8be5\u65b9\u5f0f\u76ee\u524d\u4f5c\u4e3a Docker \u7f16\u8bd1\u65b9\u5f0f\u7684\u8865\u5145\uff0c\u65b9\u4fbf\u6ca1\u6709 Docker \u73af\u5883\u7684\u5f00\u53d1\u8005\u548c\u7528\u6237\u7f16\u8bd1 Doris \u6e90\u7801\u3002Doris \u76ee\u524d\u63a8\u8350\u7684 LDB Toolchain \u7248\u672c\u4e3a 0.17, \u5176\u4e2d\u542b\u6709 clang-16 \u548c gcc-11\u3002"),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"LDB Toolchain \u5168\u79f0 Linux Distribution Based Toolchain Generator\uff0c\u5b83\u6709\u52a9\u4e8e\u5728\u51e0\u4e4e\u6240\u6709 Linux \u53d1\u884c\u7248\u4e0a\u7f16\u8bd1\u73b0\u4ee3 C++ \u9879\u76ee\u3002")),(0,o.yg)("p",null,"\u611f\u8c22 ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/amosbird"},"Amos Bird")," \u7684\u8d21\u732e\u3002"),(0,o.yg)("h2",{id:"\u51c6\u5907\u7f16\u8bd1\u73af\u5883"},"\u51c6\u5907\u7f16\u8bd1\u73af\u5883"),(0,o.yg)("p",null,"\u8be5\u65b9\u5f0f\u9002\u7528\u4e8e\u7edd\u5927\u591a\u6570 Linux \u53d1\u884c\u7248\uff08CentOS\uff0cUbuntu \u7b49\uff09\u3002"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"1. \u4e0b\u8f7d",(0,o.yg)("inlineCode",{parentName:"strong"},"ldb_toolchain_gen.sh"))),(0,o.yg)("p",null,"\u53ef\u4ee5\u4ece",(0,o.yg)("a",{parentName:"p",href:"https://github.com/amosbird/ldb_toolchain_gen/releases"},"\u8fd9\u91cc"),"\u4e0b\u8f7d\u6700\u65b0\u7684 ",(0,o.yg)("inlineCode",{parentName:"p"},"ldb_toolchain_gen.sh"),"\u3002\u8be5\u811a\u672c\u7528\u4e8e\u751f\u6210 LDB Toolchain"),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"\u66f4\u591a\u4fe1\u606f\uff0c\u53ef\u8bbf\u95ee ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/amosbird/ldb_toolchain_gen"},"https://github.com/amosbird/ldb_toolchain_gen"))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"2. \u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u751f\u6210 ldb toolchain")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Plain"},"sh ldb_toolchain_gen.sh /path/to/ldb_toolchain/\n")),(0,o.yg)("p",null,"\u5176\u4e2d ",(0,o.yg)("inlineCode",{parentName:"p"},"/path/to/ldb_toolchain/")," \u4e3a\u5b89\u88c5 Toolchain \u76ee\u5f55\u3002\u6267\u884c\u6210\u529f\u540e\uff0c\u4f1a\u5728 ",(0,o.yg)("inlineCode",{parentName:"p"},"/path/to/ldb_toolchain/")," \u4e0b\u751f\u6210\u5982\u4e0b\u76ee\u5f55\u7ed3\u6784\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Plain"},"\u251c\u2500\u2500 bin\n\u251c\u2500\u2500 include\n\u251c\u2500\u2500 lib\n\u251c\u2500\u2500 share\n\u251c\u2500\u2500 test\n\u2514\u2500\u2500 usr\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"3. \u4e0b\u8f7d\u5e76\u5b89\u88c5\u5176\u4ed6\u7f16\u8bd1\u7ec4\u4ef6")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u4e0b\u8f7d ",(0,o.yg)("a",{parentName:"p",href:"https://doris-thirdparty-1308700295.cos.ap-beijing.myqcloud.com/tools/jdk-8u391-linux-x64.tar.gz"},"Java8"),"\uff0c\u5b89\u88c5\u5230 /path/to/java"),(0,o.yg)("blockquote",{parentName:"li"},(0,o.yg)("p",{parentName:"blockquote"},"3.0\uff08\u542b\uff09\u4e4b\u540e\u7684\u7248\u672c\uff0c\u6216 master \u5206\u652f\uff0c\u8bf7\u4f7f\u7528 ",(0,o.yg)("a",{parentName:"p",href:"https://download.oracle.com/java/17/archive/jdk-17.0.10_linux-x64_bin.tar.gz"},"Java 17"),"\u3002"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u4e0b\u8f7d ",(0,o.yg)("a",{parentName:"p",href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/apache-maven-3.6.3-bin.tar.gz"},"Apache Maven 3.6.3"),"\uff0c\u5b89\u88c5\u5230 /path/to/maven")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u4e0b\u8f7d ",(0,o.yg)("a",{parentName:"p",href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/node-v12.13.0-linux-x64.tar.gz"},"Node v12.13.0"),"\uff0c\u5b89\u88c5\u5230 /path/to/node")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u5bf9\u4e8e\u4e0d\u540c\u7684 Linux \u53d1\u884c\u7248\uff0c\u53ef\u80fd\u9ed8\u8ba4\u5305\u542b\u7684\u7ec4\u4ef6\u4e0d\u540c\u3002\u56e0\u6b64\u53ef\u80fd\u9700\u8981\u5b89\u88c5\u4e00\u4e9b\u989d\u5916\u7684\u7ec4\u4ef6\u3002\u4e0b\u9762\u4ee5 CentOS6 \u4e3a\u4f8b\uff0c\u5176\u4ed6\u53d1\u884c\u7248\u7c7b\u4f3c\uff1a"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Plain"},"install required system packages\nsudo yum install -y byacc patch automake libtool make which file ncurses-devel gettext-devel unzip bzip2 zip util-linux wget git python2\n\ninstall autoconf-2.69\nwget http://ftp.gnu.org/gnu/autoconf/autoconf-2.69.tar.gz && \\\n    tar zxf autoconf-2.69.tar.gz && \\\n    cd autoconf-2.69 && \\\n    ./configure && \\\n    make && \\\n    make install\n\ninstall bison-3.0.4\nwget http://ftp.gnu.org/gnu/bison/bison-3.0.4.tar.gz && \\\n    tar xzf bison-3.0.4.tar.gz && \\\n    cd bison-3.0.4 && \\\n    ./configure && \\\n    make && \\\n    make install\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"4. \u4e0b\u8f7d Doris \u6e90\u7801")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Plain"},"git clone https://github.com/apache/doris.git\n")),(0,o.yg)("p",null,"\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u8fdb\u5165\u5230 Doris \u6e90\u7801\u76ee\u5f55\uff0c\u521b\u5efa ",(0,o.yg)("inlineCode",{parentName:"p"},"custom_env.sh"),"\u6587\u4ef6\uff0c\u5e76\u8bbe\u7f6e PATH \u73af\u5883\u53d8\u91cf\uff0c\u5982\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Plain"},"export JAVA_HOME=/path/to/java/\nexport PATH=$JAVA_HOME/bin:$PATH\nexport PATH=/path/to/maven/bin:$PATH\nexport PATH=/path/to/node/bin:$PATH\nexport PATH=/path/to/ldb_toolchain/bin:$PATH\n")),(0,o.yg)("h2",{id:"\u7f16\u8bd1-doris"},"\u7f16\u8bd1 Doris"),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Doris \u6e90\u7801\u7f16\u8bd1\u65f6\u9996\u5148\u4f1a\u4e0b\u8f7d\u4e09\u65b9\u5e93\u8fdb\u884c\u7f16\u8bd1\uff0c\u53ef\u4ee5\u53c2\u8003\u4e0b\u6587\u4e0b\u8f7d\u9884\u7f16\u8bd1\u7248\u672c\u7684\u4e09\u65b9\u5e93\uff0c\u7701\u53bb\u4e09\u65b9\u5e93\u7f16\u8bd1")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"1.  \u8fdb\u5165 Doris \u6e90\u7801\u76ee\u5f55\uff0c\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\u7f16\u8bd1\u673a\u5668\u662f\u5426\u652f\u6301 AVX2 \u6307\u4ee4\u96c6")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"$ cat /proc/cpuinfo | grep avx2\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"2.  \u6267\u884c\u7f16\u8bd1")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Plain"},"# \u9ed8\u8ba4\u7f16\u8bd1\u51fa\u652f\u6301 AVX2 \u7684\n$ sh build.sh\n\n# \u5982\u4e0d\u652f\u6301 AVX2 \u9700\u8981\u52a0 USE_AVX2=0\n$ USE_AVX2=0 sh build.sh\n\n# \u5982\u9700\u7f16\u8bd1 Debug \u7248\u672c\u7684 BE\uff0c\u589e\u52a0 BUILD_TYPE=Debug\n$ BUILD_TYPE=Debug sh build.sh\n")),(0,o.yg)("p",null,"\u8be5\u811a\u672c\u4f1a\u5148\u7f16\u8bd1\u7b2c\u4e09\u65b9\u5e93\uff0c\u4e4b\u540e\u518d\u7f16\u8bd1 Doris \u7ec4\u4ef6\uff08FE\u3001BE\u3001MS\uff09\u3002\u7f16\u8bd1\u4ea7\u51fa\u5728 ",(0,o.yg)("inlineCode",{parentName:"p"},"output/")," \u76ee\u5f55\u4e0b\u3002\nMS \u6a21\u5757\u662f doris \u5b58\u7b97\u5206\u79bb\u6a21\u5f0f\u4f9d\u8d56\u7684\u6a21\u5757\uff0c\u8be6\u7ec6\u8bf4\u660e\u8bf7\u53c2\u8003",(0,o.yg)("a",{parentName:"p",href:"../compute-storage-decoupled/compilation-and-deployment.md"},"\u6b64\u8fde\u63a5")),(0,o.yg)("h2",{id:"\u9884\u7f16\u8bd1\u4e09\u65b9\u5e93"},"\u9884\u7f16\u8bd1\u4e09\u65b9\u5e93"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"build.sh")," \u811a\u672c\u4f1a\u5148\u7f16\u8bd1\u7b2c\u4e09\u65b9\u5e93\u3002\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f7d\u9884\u7f16\u8bd1\u597d\u7684\u4e09\u65b9\u5e93\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"https://github.com/apache/doris-thirdparty/releases\n")),(0,o.yg)("p",null,"\u8fd9\u91cc\u6211\u4eec\u63d0\u4f9b\u4e86 Linux \u548c MacOS \u7684\u9884\u7f16\u8bd1\u4e09\u65b9\u5e93\u3002\u5982\u679c\u548c\u4f60\u7684\u7f16\u8bd1\u8fd0\u884c\u73af\u5883\u4e00\u81f4\uff0c\u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f7d\u4f7f\u7528\u3002"),(0,o.yg)("p",null,"\u4e0b\u8f7d\u597d\u540e\uff0c\u89e3\u538b\u4f1a\u5f97\u5230\u4e00\u4e2a ",(0,o.yg)("inlineCode",{parentName:"p"},"installed/")," \u76ee\u5f55\uff0c\u5c06\u8fd9\u4e2a\u76ee\u5f55\u62f7\u8d1d\u5230 ",(0,o.yg)("inlineCode",{parentName:"p"},"thirdparty/")," \u76ee\u5f55\u4e0b\uff0c\u4e4b\u540e\u8fd0\u884c ",(0,o.yg)("inlineCode",{parentName:"p"},"build.sh")," \u5373\u53ef\u3002"))}u.isMDXComponent=!0}}]);