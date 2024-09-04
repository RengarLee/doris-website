"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[138704],{15680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>g});var t=a(296540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=t.createContext({}),p=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},d=function(e){var n=p(e.components);return t.createElement(i.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=l,g=m["".concat(i,".").concat(u)]||m[u]||c[u]||r;return a?t.createElement(g,s(s({ref:n},d),{},{components:a})):t.createElement(g,s({ref:n},d))}));function g(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=u;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[m]="string"==typeof e?e:l,s[1]=o;for(var p=2;p<r;p++)s[p]=a[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},524228:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var t=a(58168),l=(a(296540),a(15680));const r={title:"\u5bfc\u5165\u4e8b\u52a1\u4e0e\u539f\u5b50\u6027",language:"zh-CN"},s=void 0,o={unversionedId:"data-operate/import/load-atomicity",id:"version-2.1/data-operate/import/load-atomicity",title:"\u5bfc\u5165\u4e8b\u52a1\u4e0e\u539f\u5b50\u6027",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/data-operate/import/load-atomicity.md",sourceDirName:"data-operate/import",slug:"/data-operate/import/load-atomicity",permalink:"/zh-CN/docs/2.1/data-operate/import/load-atomicity",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u5bfc\u5165\u4e8b\u52a1\u4e0e\u539f\u5b50\u6027",language:"zh-CN"},sidebar:"docs",previous:{title:"Group Commit",permalink:"/zh-CN/docs/2.1/data-operate/import/group-commit-manual"},next:{title:"\u6570\u636e\u8f6c\u5316",permalink:"/zh-CN/docs/2.1/data-operate/import/load-data-convert"}},i={},p=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u57fa\u672c\u539f\u7406",id:"\u57fa\u672c\u539f\u7406",level:2},{value:"Label \u673a\u5236",id:"label-\u673a\u5236",level:3},{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"Insert Into",id:"insert-into",level:3},{value:"Stream Load",id:"stream-load",level:3},{value:"Broker Load",id:"broker-load",level:3},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2}],d={toc:p},m="wrapper";function c(e){let{components:n,...a}=e;return(0,l.yg)(m,(0,t.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,l.yg)("p",null,"Doris \u4e2d\u6240\u6709\u5bfc\u5165\u4efb\u52a1\u90fd\u662f\u539f\u5b50\u6027\u7684\uff0c\u5373\u4e00\u4e2a\u5bfc\u5165\u4f5c\u4e1a\u8981\u4e48\u5168\u90e8\u6210\u529f\uff0c\u8981\u4e48\u5168\u90e8\u5931\u8d25\uff0c\u4e0d\u4f1a\u51fa\u73b0\u4ec5\u90e8\u5206\u6570\u636e\u5bfc\u5165\u6210\u529f\u7684\u60c5\u51b5\uff0c\u5e76\u4e14\u5728\u540c\u4e00\u4e2a\u5bfc\u5165\u4efb\u52a1\u4e2d\u5bf9\u591a\u5f20\u8868\u7684\u5bfc\u5165\u4e5f\u80fd\u591f\u4fdd\u8bc1\u539f\u5b50\u6027\u3002\u540c\u65f6\uff0cDoris \u8fd8\u53ef\u4ee5\u901a\u8fc7 Label \u7684\u673a\u5236\u6765\u4fdd\u8bc1\u6570\u636e\u5bfc\u5165\u7684\u4e0d\u4e22\u4e0d\u91cd\u3002\u5bf9\u4e8e\u7b80\u5355\u7684\u5bfc\u5165\u4efb\u52a1\uff0c\u7528\u6237\u65e0\u9700\u505a\u989d\u5916\u914d\u7f6e\u6216\u64cd\u4f5c\u3002\u5bf9\u4e8e\u8868\u6240\u9644\u5c5e\u7684\u7269\u5316\u89c6\u56fe\uff0c\u4e5f\u540c\u65f6\u4fdd\u8bc1\u548c\u57fa\u8868\u7684\u539f\u5b50\u6027\u548c\u4e00\u81f4\u6027\u3002\u5bf9\u4e8e\u4ee5\u4e0b\u60c5\u5f62\uff0cDoris \u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u4e8b\u52a1\u63a7\u5236\u3002"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5982\u679c\u7528\u6237\u9700\u8981\u5c06\u5bf9\u4e8e\u540c\u4e00\u4e2a\u76ee\u6807\u8868\u7684\u591a\u4e2a ",(0,l.yg)("inlineCode",{parentName:"p"},"INSERT INTO")," \u5bfc\u5165\u7ec4\u5408\u6210\u4e00\u4e2a\u4e8b\u52a1\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"p"},"BEGIN")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"COMMIT")," \u547d\u4ee4\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5982\u679c\u7528\u6237\u9700\u8981\u5c06\u591a\u4e2a Stream Load \u5bfc\u5165\u7ec4\u5408\u6210\u4e00\u4e2a\u4e8b\u52a1\uff0c\u53ef\u4ee5\u4f7f\u7528 Stream Load \u7684\u4e24\u9636\u6bb5\u4e8b\u52a1\u63d0\u4ea4\u6a21\u5f0f\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Broker Load \u591a\u8868\u5bfc\u5165\u7684\u539f\u5b50\u6027\uff0c"))),(0,l.yg)("h2",{id:"\u57fa\u672c\u539f\u7406"},"\u57fa\u672c\u539f\u7406"),(0,l.yg)("p",null,"Doris \u5bfc\u5165\u4efb\u52a1\u4e2d\uff0cBE \u4f1a\u63d0\u4ea4\u5199\u5165\u6210\u529f\u7684 Tablet ID \u5230 FE\u3002FE \u4f1a\u6839\u636e tablet \u6210\u529f\u526f\u672c\u6570\u5224\u65ad\u5bfc\u5165\u662f\u5426\u6210\u529f\uff0c\u5982\u679c\u6210\u529f\uff0c\u8be5\u5bfc\u5165\u7684\u4e8b\u52a1\u88ab commit\uff0c\u5bfc\u5165\u6570\u636e\u53ef\u89c1\u3002\u5982\u679c\u5931\u8d25\uff0c\u8be5\u5bfc\u5165\u7684\u4e8b\u52a1\u4f1a\u88ab rollback\uff0c\u76f8\u5e94\u7684 tablet \u4e5f\u4f1a\u88ab\u6e05\u7406\u3002"),(0,l.yg)("h3",{id:"label-\u673a\u5236"},"Label \u673a\u5236"),(0,l.yg)("p",null,"Doris \u7684\u5bfc\u5165\u4f5c\u4e1a\u90fd\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a Label\u3002\u8fd9\u4e2a Label \u901a\u5e38\u662f\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u3001\u5177\u6709\u4e00\u5b9a\u4e1a\u52a1\u903b\u8f91\u5c5e\u6027\u7684\u5b57\u7b26\u4e32\u3002"),(0,l.yg)("p",null,"Label \u7684\u4e3b\u8981\u4f5c\u7528\u662f\u552f\u4e00\u6807\u8bc6\u4e00\u4e2a\u5bfc\u5165\u4efb\u52a1\uff0c\u5e76\u4e14\u80fd\u591f\u4fdd\u8bc1\u76f8\u540c\u7684 Label \u4ec5\u4f1a\u88ab\u6210\u529f\u5bfc\u5165\u4e00\u6b21\u3002"),(0,l.yg)("p",null,"Label \u673a\u5236\u53ef\u4ee5\u4fdd\u8bc1\u5bfc\u5165\u6570\u636e\u7684\u4e0d\u4e22\u4e0d\u91cd\u3002\u5982\u679c\u4e0a\u6e38\u6570\u636e\u6e90\u80fd\u591f\u4fdd\u8bc1 At-Least-Once \u8bed\u4e49\uff0c\u5219\u914d\u5408 Doris \u7684 Label \u673a\u5236\uff0c\u80fd\u591f\u4fdd\u8bc1 Exactly-Once \u8bed\u4e49\u3002"),(0,l.yg)("p",null,"Label \u5728\u4e00\u4e2a\u6570\u636e\u5e93\u4e0b\u5177\u6709\u552f\u4e00\u6027\u3002Label \u7684\u4fdd\u7559\u671f\u9650\u9ed8\u8ba4\u662f 3 \u5929\u3002\u5373 3 \u5929\u540e\uff0c\u5df2\u5b8c\u6210\u7684 Label \u4f1a\u88ab\u81ea\u52a8\u6e05\u7406\uff0c\u4e4b\u540e Label \u53ef\u4ee5\u88ab\u91cd\u590d\u4f7f\u7528\u3002"),(0,l.yg)("h2",{id:"\u5feb\u901f\u4e0a\u624b"},"\u5feb\u901f\u4e0a\u624b"),(0,l.yg)("h3",{id:"insert-into"},"Insert Into"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"1. \u5efa\u8868")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE testdb.test_table(\n    user_id            BIGINT       NOT NULL COMMENT "\u7528\u6237 ID",\n    name               VARCHAR(20)  NOT NULL COMMENT "\u7528\u6237\u59d3\u540d",\n    age                INT                   COMMENT "\u7528\u6237\u5e74\u9f84"\n)\nDUPLICATE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10;\n')),(0,l.yg)("p",null,"\u521b\u5efa\u4e00\u4e2a\u540c\u6837 Schema \u7684\u8868\u7528\u4e8e\u5931\u8d25\u7684\u4f8b\u5b50"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE testdb.test_table2 LIKE testdb.test_table;\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"2. \u5bfc\u5165\u6210\u529f\u7684\u4f8b\u5b50")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},'BEGIN;\n\n-- INSERT #1\nINSERT INTO testdb.test_table (user_id, name, age)\nVALUES (1, "Emily", 25),\n       (2, "Benjamin", 35),\n       (3, "Olivia", 28),\n       (4, "Alexander", 60),\n       (5, "Ava", 17);\n\n-- INSERT #2\nINSERT INTO testdb.test_table (user_id, name, age)\nVALUES (6, "William", 69),\n       (7, "Sophia", 32),\n       (8, "James", 64),\n       (9, "Emma", 37),\n       (10, "Liam", 64);\n\nCOMMIT;\n')),(0,l.yg)("p",null,"\u5bfc\u5165\u7ed3\u679c\uff0c\u5bfc\u5165\u4efb\u52a1\u7684\u72b6\u6001\u5148\u662f ",(0,l.yg)("inlineCode",{parentName:"p"},"PREPARE"),"\uff0c\u76f4\u5230 COMMIT \u540e\u624d\u662f ",(0,l.yg)("inlineCode",{parentName:"p"},"VISIBLE"),"\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},"// BEGIN\nQuery OK, 0 rows affected (0.001 sec)\n{'label':'txn_insert_2aeac5519bd549a1-a72fe4001c56e10c', 'status':'PREPARE', 'txnId':''}\n\n// INSERT #1\nQuery OK, 5 rows affected (0.017 sec)\n{'label':'txn_insert_2aeac5519bd549a1-a72fe4001c56e10c', 'status':'PREPARE', 'txnId':'10060'}\n\n// INSERT #2\nQuery OK, 5 rows affected (0.007 sec)\n{'label':'txn_insert_2aeac5519bd549a1-a72fe4001c56e10c', 'status':'PREPARE', 'txnId':'10060'}\n\n// COMMIT\nQuery OK, 0 rows affected (1.013 sec)\n{'label':'txn_insert_2aeac5519bd549a1-a72fe4001c56e10c', 'status':'VISIBLE', 'txnId':'10060'}\n")),(0,l.yg)("p",null,"\u9a8c\u8bc1\u6570\u636e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"MySQL [testdb]> SELECT * FROM testdb.test_table;\n+---------+-----------+------+\n| user_id | name      | age  |\n+---------+-----------+------+\n|       5 | Ava       |   17 |\n|      10 | Liam      |   64 |\n|       1 | Emily     |   25 |\n|       4 | Alexander |   60 |\n|       7 | Sophia    |   32 |\n|       9 | Emma      |   37 |\n|       2 | Benjamin  |   35 |\n|       3 | Olivia    |   28 |\n|       6 | William   |   69 |\n|       8 | James     |   64 |\n+---------+-----------+------+\n10 rows in set (0.110 sec)\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"3. \u5bfc\u5165\u5931\u8d25\u7684\u4f8b\u5b50")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'BEGIN;\n\n-- INSERT #1\nINSERT INTO testdb.test_table2 (user_id, name, age)\nVALUES (1, "Emily", 25),\n       (2, "Benjamin", 35),\n       (3, "Olivia", 28),\n       (4, "Alexander", 60),\n       (5, "Ava", 17);\n\n-- INSERT #2\nINSERT INTO testdb.test_table2 (user_id, name, age)\nVALUES (6, "William", 69),\n       (7, "Sophia", 32),\n       (8, NULL, 64),\n       (9, "Emma", 37),\n       (10, "Liam", 64);\n\nCOMMIT;\n')),(0,l.yg)("p",null,"\u5bfc\u5165\u7ed3\u679c\uff0c\u56e0\u4e3a\u7b2c\u4e8c\u4e2a INSERT INTO \u5b58\u5728 NULL\uff0c\u5bfc\u81f4\u6574\u4e2a\u4e8b\u52a1 COMMIT \u5931\u8d25\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-JSON"},"// BEGIN\nQuery OK, 0 rows affected (0.001 sec)\n{'label':'txn_insert_f3ecb2285edf42e2-92988ee97d74fbb0', 'status':'PREPARE', 'txnId':''}\n\n// INSERT #1\nQuery OK, 5 rows affected (0.012 sec)\n{'label':'txn_insert_f3ecb2285edf42e2-92988ee97d74fbb0', 'status':'PREPARE', 'txnId':'10062'}\n\n// INSERT #2\n{'label':'txn_insert_f3ecb2285edf42e2-92988ee97d74fbb0', 'status':'PREPARE', 'txnId':'10062'}\n\n// COMMIT\nERROR 1105 (HY000): errCode = 2, detailMessage = errCode = 2, detailMessage = [DATA_QUALITY_ERROR]too many filtered rows\n")),(0,l.yg)("p",null,"\u9a8c\u8bc1\u7ed3\u679c\uff0c\u6ca1\u6709\u6570\u636e\u88ab\u5bfc\u5165\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-JSON"},"MySQL [testdb]> SELECT * FROM testdb.test_table2;\nEmpty set (0.019 sec)\n")),(0,l.yg)("h3",{id:"stream-load"},"Stream Load"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"1. \u5728 HTTP Header \u4e2d\u8bbe\u7f6e ",(0,l.yg)("inlineCode",{parentName:"strong"},"two_phase_commit:true")," \u542f\u7528\u4e24\u9636\u6bb5\u63d0\u4ea4\u3002")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'curl  --location-trusted -u user:passwd -H "two_phase_commit:true" -T test.txt http://fe_host:http_port/api/{db}/{table}/_stream_load\n{\n    "TxnId": 18036,\n    "Label": "55c8ffc9-1c40-4d51-b75e-f2265b3602ef",\n    "TwoPhaseCommit": "true",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 100,\n    "NumberLoadedRows": 100,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 1031,\n    "LoadTimeMs": 77,\n    "BeginTxnTimeMs": 1,\n    "StreamLoadPutTimeMs": 1,\n    "ReadDataTimeMs": 0,\n    "WriteDataTimeMs": 58,\n    "CommitAndPublishTimeMs": 0\n}\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"2. \u5bf9\u4e8b\u52a1\u89e6\u53d1 commit \u64cd\u4f5c\uff08\u8bf7\u6c42\u53d1\u5f80 FE \u6216 BE \u5747\u53ef\uff09")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u4f7f\u7528\u4e8b\u52a1 id \u6307\u5b9a\u4e8b\u52a1"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT --location-trusted -u user:passwd -H "txn_id:18036" -H "txn_operation:commit" http://fe_host:http_port/api/{db}/{table}/stream_load2pc\n{\n    "status": "Success",\n    "msg": "transaction [18036] commit successfully."\n}\n'))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4e5f\u53ef\u4ee5\u4f7f\u7528 label \u6307\u5b9a\u4e8b\u52a1"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT --location-trusted -u user:passwd  -H "label:55c8ffc9-1c40-4d51-b75e-f2265b3602ef" -H "txn_operation:commit"  http://fe_host:http_port/api/{db}/{table}/_stream_load_2pc\n{\n    "status": "Success",\n    "msg": "label [55c8ffc9-1c40-4d51-b75e-f2265b3602ef] commit successfully."\n}\n')))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"3. \u5bf9\u4e8b\u52a1\u89e6\u53d1 abort \u64cd\u4f5c\uff08\u8bf7\u6c42\u53d1\u5f80 FE \u6216 BE \u5747\u53ef\uff09")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u4f7f\u7528\u4e8b\u52a1 id \u6307\u5b9a\u4e8b\u52a1"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT --location-trusted -u user:passwd  -H "txn_id:18037" -H "txn_operation:abort"  http://fe_host:http_port/api/{db}/{table}/stream_load2pc\n{\n    "status": "Success",\n    "msg": "transaction [18037] abort successfully."\n}\n'))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4e5f\u53ef\u4ee5\u4f7f\u7528 label \u6307\u5b9a\u4e8b\u52a1"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT --location-trusted -u user:passwd  -H "label:55c8ffc9-1c40-4d51-b75e-f2265b3602ef" -H "txn_operation:abort"  http://fe_host:http_port/api/{db}/{table}/stream_load2pc\n{\n    "status": "Success",\n    "msg": "label [55c8ffc9-1c40-4d51-b75e-f2265b3602ef] abort successfully."\n}\n')))),(0,l.yg)("h3",{id:"broker-load"},"Broker Load"),(0,l.yg)("p",null,"\u6240\u6709 Broker Load \u5bfc\u5165\u4efb\u52a1\u90fd\u662f\u539f\u5b50\u751f\u6548\u7684\u3002\u5e76\u4e14\u5728\u540c\u4e00\u4e2a\u5bfc\u5165\u4efb\u52a1\u4e2d\u5bf9\u591a\u5f20\u8868\u7684\u5bfc\u5165\u4e5f\u80fd\u591f\u4fdd\u8bc1\u539f\u5b50\u6027\u3002\u8fd8\u53ef\u4ee5\u901a\u8fc7 Label \u7684\u673a\u5236\u6765\u4fdd\u8bc1\u6570\u636e\u5bfc\u5165\u7684\u4e0d\u4e22\u4e0d\u91cd\u3002"),(0,l.yg)("p",null,"\u4e0b\u9762\u4f8b\u5b50\u662f\u4ece HDFS \u5bfc\u5165\u6570\u636e\uff0c\u4f7f\u7528\u901a\u914d\u7b26\u5339\u914d\u4e24\u6279\u6587\u4ef6\uff0c\u5206\u522b\u5bfc\u5165\u5230\u4e24\u4e2a\u8868\u4e2d\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label2\n(\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/input/file-10*")\n    INTO TABLE `my_table1`\n    PARTITION (p1)\n    COLUMNS TERMINATED BY ","\n    (k1, tmp_k2, tmp_k3)\n    SET (\n        k2 = tmp_k2 + 1,\n        k3 = tmp_k3 + 1\n    )\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/input/file-20*")\n    INTO TABLE `my_table2`\n    COLUMNS TERMINATED BY ","\n    (k1, k2, k3)\n)\nWITH BROKER hdfs\n(\n    "username"="hdfs_user",\n    "password"="hdfs_password"\n);\n')),(0,l.yg)("p",null,"\u4f7f\u7528\u901a\u914d\u7b26\u5339\u914d\u5bfc\u5165\u4e24\u6279\u6587\u4ef6 ",(0,l.yg)("inlineCode",{parentName:"p"},"file-10*")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"file-20*"),"\u3002\u5206\u522b\u5bfc\u5165\u5230 ",(0,l.yg)("inlineCode",{parentName:"p"},"my_table1")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"my_table2")," \u4e24\u5f20\u8868\u4e2d\u3002\u5176\u4e2d ",(0,l.yg)("inlineCode",{parentName:"p"},"my_table1")," \u6307\u5b9a\u5bfc\u5165\u5230\u5206\u533a ",(0,l.yg)("inlineCode",{parentName:"p"},"p1")," \u4e2d\uff0c\u5e76\u4e14\u5c06\u5bfc\u5165\u6e90\u6587\u4ef6\u4e2d\u7b2c\u4e8c\u5217\u548c\u7b2c\u4e09\u5217\u7684\u503c +1 \u540e\u5bfc\u5165\u3002"),(0,l.yg)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,l.yg)("p",null,"Label \u901a\u5e38\u88ab\u8bbe\u7f6e\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"\u4e1a\u52a1\u903b\u8f91+\u65f6\u95f4")," \u7684\u683c\u5f0f\u3002\u5982 ",(0,l.yg)("inlineCode",{parentName:"p"},"my_business1_20220330_125000"),"\u3002"),(0,l.yg)("p",null,"\u8fd9\u4e2a Label \u901a\u5e38\u7528\u4e8e\u8868\u793a\uff1a\u4e1a\u52a1 ",(0,l.yg)("inlineCode",{parentName:"p"},"my_business1")," \u8fd9\u4e2a\u4e1a\u52a1\u5728 ",(0,l.yg)("inlineCode",{parentName:"p"},"2022-03-30 12:50:00")," \u4ea7\u751f\u7684\u4e00\u6279\u6570\u636e\u3002\u901a\u8fc7\u8fd9\u79cd Label \u8bbe\u5b9a\uff0c\u4e1a\u52a1\u4e0a\u53ef\u4ee5\u901a\u8fc7 Label \u67e5\u8be2\u5bfc\u5165\u4efb\u52a1\u72b6\u6001\uff0c\u6765\u660e\u786e\u7684\u83b7\u77e5\u8be5\u65f6\u95f4\u70b9\u6279\u6b21\u7684\u6570\u636e\u662f\u5426\u5df2\u7ecf\u5bfc\u5165\u6210\u529f\u3002\u5982\u679c\u6ca1\u6709\u6210\u529f\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a Label \u7ee7\u7eed\u91cd\u8bd5\u5bfc\u5165\u3002"),(0,l.yg)("p",null,"INSERT INTO \u652f\u6301\u5c06 Doris \u67e5\u8be2\u7684\u7ed3\u679c\u5bfc\u5165\u5230\u53e6\u4e00\u4e2a\u8868\u4e2d\u3002INSERT INTO \u662f\u4e00\u4e2a\u540c\u6b65\u5bfc\u5165\u65b9\u5f0f\uff0c\u6267\u884c\u5bfc\u5165\u540e\u8fd4\u56de\u5bfc\u5165\u7ed3\u679c\u3002\u53ef\u4ee5\u901a\u8fc7\u8bf7\u6c42\u7684\u8fd4\u56de\u5224\u65ad\u5bfc\u5165\u662f\u5426\u6210\u529f\u3002INSERT INTO \u53ef\u4ee5\u4fdd\u8bc1\u5bfc\u5165\u4efb\u52a1\u7684\u539f\u5b50\u6027\uff0c\u8981\u4e48\u5168\u90e8\u5bfc\u5165\u6210\u529f\uff0c\u8981\u4e48\u5168\u90e8\u5bfc\u5165\u5931\u8d25\u3002"))}c.isMDXComponent=!0}}]);