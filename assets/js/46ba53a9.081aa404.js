"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[206880],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>h});var o=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},942466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(58168),a=(n(296540),n(15680));const i={title:"Compiling with LDB Toolchain (Recommended)",language:"en"},r=void 0,l={unversionedId:"install/source-install/compilation-with-ldb-toolchain",id:"version-2.1/install/source-install/compilation-with-ldb-toolchain",title:"Compiling with LDB Toolchain (Recommended)",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/install/source-install/compilation-with-ldb-toolchain.md",sourceDirName:"install/source-install",slug:"/install/source-install/compilation-with-ldb-toolchain",permalink:"/docs/2.1/install/source-install/compilation-with-ldb-toolchain",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Compiling with LDB Toolchain (Recommended)",language:"en"},sidebar:"docs",previous:{title:"Compiling with Docker (Recommended)",permalink:"/docs/2.1/install/source-install/compilation-with-docker"},next:{title:"Compiling on Linux",permalink:"/docs/2.1/install/source-install/compilation-linux"}},p={},s=[{value:"Prepare the compilation environment:",id:"prepare-the-compilation-environment",level:2},{value:"Compile Doris",id:"compile-doris",level:2},{value:"Pre-compile third-party libraries",id:"pre-compile-third-party-libraries",level:2}],c={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,o.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This guide is about how to compile Doris using the LDB Toolchain. This method serves as a supplement to the Docker compilation approach to help the developers and users without a Docker environment. The recommended LDB Toolchain version is 0.17, which includes clang-16 and gcc-11."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"LDB Toolchain is fully known as Linux Distribution Based Toolchain Generator. It helps compile modern C++ projects on almost all Linux distributions. "),(0,a.yg)("p",{parentName:"admonition"},"Special thanks to ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/amosbird"},"Amos Bird")," for the contribution.")),(0,a.yg)("h2",{id:"prepare-the-compilation-environment"},"Prepare the compilation environment:"),(0,a.yg)("p",null,"This method applies to most Linux distributions (CentOS, Ubuntu, etc.)."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Download")," ",(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"ldb_toolchain_gen.sh")))),(0,a.yg)("p",null,"Download the latest ",(0,a.yg)("inlineCode",{parentName:"p"},"ldb_toolchain_gen.sh")," from ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/amosbird/ldb_toolchain_gen/releases"},"here"),". This script is used to generate ldb toolchain."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"For more information, please visit ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/amosbird/ldb_toolchain_gen"},"https://github.com/amosbird/ldb_toolchain_gen")," ")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Execute the following command to generate ldb toolchain."))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Plain"},"sh ldb_toolchain_gen.sh /path/to/ldb_toolchain/\n")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"/path/to/ldb_toolchain/")," is the installation directory for the toolchain. After successful execution, the following directory structure will be generated under ",(0,a.yg)("inlineCode",{parentName:"p"},"/path/to/ldb_toolchain/"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Plain"},"\u251c\u2500\u2500 bin\n\u251c\u2500\u2500 include\n\u251c\u2500\u2500 lib\n\u251c\u2500\u2500 share\n\u251c\u2500\u2500 test\n\u2514\u2500\u2500 usr\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Download and install other compilation components"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Download ",(0,a.yg)("a",{parentName:"p",href:"https://doris-thirdparty-1308700295.cos.ap-beijing.myqcloud.com/tools/jdk-8u391-linux-x64.tar.gz"},"Java8")," and install it to /path/to/java."),(0,a.yg)("blockquote",{parentName:"li"},(0,a.yg)("p",{parentName:"blockquote"},"For versions later than 3.0 (inclusive), or the master branch, please use ",(0,a.yg)("a",{parentName:"p",href:"https://download.oracle.com/java/17/archive/jdk-17.0.10_linux-x64_bin.tar.gz"},"Java 17"),"."))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Download ",(0,a.yg)("a",{parentName:"p",href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/apache-maven-3.6.3-bin.tar.gz"},"Apache Maven 3.6.3")," and install it to /path/to/maven.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Download ",(0,a.yg)("a",{parentName:"p",href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/node-v12.13.0-linux-x64.tar.gz"},"Node v12.13.0")," and install it to /path/to/node.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Different Linux distributions may include different default components. Therefore, you may need to install some additional components. The following takes CentOS 6 as an example. Similar steps may apply to other distributions:"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Plain"},"install required system packages\nsudo yum install -y byacc patch automake libtool make which file ncurses-devel gettext-devel unzip bzip2 zip util-linux wget git python2\n\ninstall autoconf-2.69\nwget http://ftp.gnu.org/gnu/autoconf/autoconf-2.69.tar.gz && \\\n    tar zxf autoconf-2.69.tar.gz && \\\n    cd autoconf-2.69 && \\\n    ./configure && \\\n    make && \\\n    make install\n\ninstall bison-3.0.4\nwget http://ftp.gnu.org/gnu/bison/bison-3.0.4.tar.gz && \\\n    tar xzf bison-3.0.4.tar.gz && \\\n    cd bison-3.0.4 && \\\n    ./configure && \\\n    make && \\\n    make install\n")),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Download Doris source code"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Plain"},"git clone https://github.com/apache/doris.git\n")),(0,a.yg)("p",null,"After downloading, navigate to the Doris source code directory, create a ",(0,a.yg)("inlineCode",{parentName:"p"},"custom_env.sh")," file, and set the PATH environment variable as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Plain"},"export JAVA_HOME=/path/to/java/\nexport PATH=$JAVA_HOME/bin:$PATH\nexport PATH=/path/to/maven/bin:$PATH\nexport PATH=/path/to/node/bin:$PATH\nexport PATH=/path/to/ldb_toolchain/bin:$PATH\n")),(0,a.yg)("h2",{id:"compile-doris"},"Compile Doris"),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"The first step of compiling Doris source code is to first download third-party libraries and compile them. You can refer to the following instructions to download precompiled versions of the third-party libraries. ")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Enter the Doris source code directory and execute the following command to check if the compilation machine supports the AVX2 instruction set."))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"$ cat /proc/cpuinfo | grep avx2\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Execute compilation."))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Plain"},"# By default, it builds AVX2 version.\n$ sh build.sh\n\n# If you need the no AVX2 version, add USE_AVX2=0.\n$ USE_AVX2=0 sh build.sh\n\n# To compile a debug version of BE, add BUILD_TYPE=Debug.\n$ BUILD_TYPE=Debug sh build.sh\n")),(0,a.yg)("p",null,"This script first compiles the third-party libraries and then the Doris components (FE, BE). The compilation output can be found in the ",(0,a.yg)("inlineCode",{parentName:"p"},"output/")," directory."),(0,a.yg)("h2",{id:"pre-compile-third-party-libraries"},"Pre-compile third-party libraries"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"build.sh")," script compiles third-party libraries first. You can download the pre-compiled third-party libraries directly from the following link:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"https://github.com/apache/doris-thirdparty/releases\n")),(0,a.yg)("p",null,"The pre-compiled libraries for Linux and MacOS are provided. If they match your compilation and runtime environment, you can download them and use them directly."),(0,a.yg)("p",null,"After downloading, extract the files to obtain an ",(0,a.yg)("inlineCode",{parentName:"p"},"installed/")," directory. Copy this directory to the ",(0,a.yg)("inlineCode",{parentName:"p"},"thirdparty/"),"directory, and then run ",(0,a.yg)("inlineCode",{parentName:"p"},"build.sh")," to proceed with the compilation."))}m.isMDXComponent=!0}}]);