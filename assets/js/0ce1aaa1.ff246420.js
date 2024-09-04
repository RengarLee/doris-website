"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[646918],{15680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>c});var t=a(296540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),m=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},p=function(e){var n=m(e.components);return t.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(a),g=r,c=d["".concat(s,".").concat(g)]||d[g]||u[g]||i;return a?t.createElement(c,o(o({ref:n},p),{},{components:a})):t.createElement(c,o({ref:n},p))}));function c(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},791520:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var t=a(58168),r=(a(296540),a(15680));const i={title:"N-Gram BloomFilter Index",language:"en"},o=void 0,l={unversionedId:"table-design/index/ngram-bloomfilter-index",id:"version-2.1/table-design/index/ngram-bloomfilter-index",title:"N-Gram BloomFilter Index",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/table-design/index/ngram-bloomfilter-index.md",sourceDirName:"table-design/index",slug:"/table-design/index/ngram-bloomfilter-index",permalink:"/docs/2.1/table-design/index/ngram-bloomfilter-index",draft:!1,tags:[],version:"2.1",frontMatter:{title:"N-Gram BloomFilter Index",language:"en"},sidebar:"docs",previous:{title:"BloomFilter Index",permalink:"/docs/2.1/table-design/index/bloomfilter"},next:{title:"Using AUTO_INCREMENT",permalink:"/docs/2.1/table-design/auto-increment"}},s={},m=[{value:"Indexing Principles",id:"indexing-principles",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Creating an NGram BloomFilter Index",id:"creating-an-ngram-bloomfilter-index",level:3},{value:"Viewing NGram BloomFilter Index",id:"viewing-ngram-bloomfilter-index",level:3},{value:"Deleting an NGram BloomFilter Index",id:"deleting-an-ngram-bloomfilter-index",level:3},{value:"Modifying an NGram BloomFilter Index",id:"modifying-an-ngram-bloomfilter-index",level:3},{value:"Usage Example",id:"usage-example",level:2},{value:"Table Creation",id:"table-creation",level:3},{value:"Data Import",id:"data-import",level:3},{value:"Querying",id:"querying",level:3}],p={toc:m},d="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(d,(0,t.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"indexing-principles"},"Indexing Principles"),(0,r.yg)("p",null,"The NGram BloomFilter index, similar to the BloomFilter index, is a skip list index based on BloomFilter. "),(0,r.yg)("p",null,"Unlike the BloomFilter index, the NGram BloomFilter index is used to accelerate text LIKE queries. Instead of storing the original text values, it tokenizes the text using NGram and stores each token in the BloomFilter. For LIKE queries, the pattern in LIKE '%pattern%' is also tokenized using NGram. Each token is checked against the BloomFilter, and if any token is not found, the corresponding data block does not meet the LIKE condition and can be skipped, reducing IO and accelerating the query."),(0,r.yg)("h2",{id:"use-cases"},"Use Cases"),(0,r.yg)("p",null,"The NGram BloomFilter index can only accelerate string LIKE queries, and the number of consecutive characters in the LIKE pattern must be greater than or equal to the N defined in the NGram index."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"NGram BloomFilter only supports string columns and can only accelerate LIKE queries."),(0,r.yg)("li",{parentName:"ul"},"NGram BloomFilter index and BloomFilter index are mutually exclusive, meaning a column can only have one or the other."),(0,r.yg)("li",{parentName:"ul"},"The performance analysis of the NGram BloomFilter index is similar to that of the BloomFilter index."))),(0,r.yg)("h2",{id:"syntax"},"Syntax"),(0,r.yg)("h3",{id:"creating-an-ngram-bloomfilter-index"},"Creating an NGram BloomFilter Index"),(0,r.yg)("p",null,"The index definition follows the COLUMN definition in the CREATE TABLE statement:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'INDEX `idx_column_name` (`column_name`) USING NGRAM_BF PROPERTIES("gram_size"="3", "bf_size"="1024") COMMENT \'username ngram_bf index\'\n')),(0,r.yg)("p",null,"Explanation of the syntax:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"idx_column_name(column_name)"))," is mandatory. ",(0,r.yg)("inlineCode",{parentName:"p"},"column_name")," is the column to be indexed and must appear in the column definitions above. ",(0,r.yg)("inlineCode",{parentName:"p"},"idx_column_name")," is the index name, which must be unique at the table level. It is recommended to name it with a prefix ",(0,r.yg)("inlineCode",{parentName:"p"},"idx_")," followed by the column name.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"USING NGRAM_BF"))," is mandatory and specifies that the index type is an NGram BloomFilter index.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"PROPERTIES"))," is optional and is used to specify additional properties for the NGram BloomFilter index. The supported properties are:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"gram_size"),": The N in NGram, specifying the number of consecutive characters to form a token. For example, 'an ngram example' with N = 3 would be tokenized into 'an ', 'n n', ' ng', 'ngr', 'gra', 'ram' (6 tokens)."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"bf_size"),": The size of the BloomFilter in bits. bf_size determines the size of the index corresponding to each data block. The larger this value, the more storage space it occupies, but the lower the probability of hash collisions.")),(0,r.yg)("p",{parentName:"li"},"It is recommended to set ",(0,r.yg)("strong",{parentName:"p"},"gram_size"),' to the minimum length of the string in LIKE queries but not less than 2. Generally, "gram_size"="3", "bf_size"="1024" is recommended, then adjust based on the Query Profile.')),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"COMMENT"))," is optional and specifies an index comment."))),(0,r.yg)("h3",{id:"viewing-ngram-bloomfilter-index"},"Viewing NGram BloomFilter Index"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE TABLE table_ngrambf;\n")),(0,r.yg)("h3",{id:"deleting-an-ngram-bloomfilter-index"},"Deleting an NGram BloomFilter Index"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_ngrambf DROP INDEX idx_ngrambf;\n")),(0,r.yg)("h3",{id:"modifying-an-ngram-bloomfilter-index"},"Modifying an NGram BloomFilter Index"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE INDEX idx_column_name2(column_name2) ON table_ngrambf USING NGRAM_BF PROPERTIES("gram_size"="3", "bf_size"="1024") COMMENT \'username ngram_bf index\';\n\nALTER TABLE table_ngrambf ADD INDEX idx_column_name2(column_name2) USING NGRAM_BF PROPERTIES("gram_size"="3", "bf_size"="1024") COMMENT \'username ngram_bf index\';\n')),(0,r.yg)("h2",{id:"usage-example"},"Usage Example"),(0,r.yg)("p",null,"This section demonstrates the usage and effectiveness of the NGram BloomFilter index using a dataset of Amazon product reviews, ",(0,r.yg)("inlineCode",{parentName:"p"},"amazon_reviews"),"."),(0,r.yg)("h3",{id:"table-creation"},"Table Creation"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `amazon_reviews` (  \n  `review_date` int(11) NULL,  \n  `marketplace` varchar(20) NULL,  \n  `customer_id` bigint(20) NULL,  \n  `review_id` varchar(40) NULL,\n  `product_id` varchar(10) NULL,\n  `product_parent` bigint(20) NULL,\n  `product_title` varchar(500) NULL,\n  `product_category` varchar(50) NULL,\n  `star_rating` smallint(6) NULL,\n  `helpful_votes` int(11) NULL,\n  `total_votes` int(11) NULL,\n  `vine` boolean NULL,\n  `verified_purchase` boolean NULL,\n  `review_headline` varchar(500) NULL,\n  `review_body` string NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`review_date`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`review_date`) BUCKETS 16\nPROPERTIES (\n  "replication_allocation" = "tag.location.default: 1",\n  "compression" = "ZSTD"\n);\n')),(0,r.yg)("h3",{id:"data-import"},"Data Import"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Download the dataset using wget or other tools from the following URLs:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"https://datasets-documentation.s3.eu-west-3.amazonaws.com/amazon_reviews/amazon_reviews_2010.snappy.parquet\nhttps://datasets-documentation.s3.eu-west-3.amazonaws.com/amazon_reviews/amazon_reviews_2011.snappy.parquet\nhttps://datasets-documentation.s3.eu-west-3.amazonaws.com/amazon_reviews/amazon_reviews_2012.snappy.parquet\nhttps://datasets-documentation.s3.eu-west-3.amazonaws.com/amazon_reviews/amazon_reviews_2013.snappy.parquet\nhttps://datasets-documentation.s3.eu-west-3.amazonaws.com/amazon_reviews/amazon_reviews_2014.snappy.parquet\nhttps://datasets-documentation.s3.eu-west-3.amazonaws.com/amazon_reviews/amazon_reviews_2015.snappy.parquet\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Import the data using stream load:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'curl --location-trusted -u root: -T amazon_reviews_2010.snappy.parquet -H "format:parquet" http://127.0.0.1:8030/api/${DB}/amazon_reviews/_stream_load\ncurl --location-trusted -u root: -T amazon_reviews_2011.snappy.parquet -H "format:parquet" http://127.0.0.1:8030/api/${DB}/amazon_reviews/_stream_load\ncurl --location-trusted -u root: -T amazon_reviews_2012.snappy.parquet -H "format:parquet" http://127.0.0.1:8030/api/${DB}/amazon_reviews/_stream_load\ncurl --location-trusted -u root: -T amazon_reviews_2013.snappy.parquet -H "format:parquet" http://127.0.0.1:8030/api/${DB}/amazon_reviews/_stream_load\ncurl --location-trusted -u root: -T amazon_reviews_2014.snappy.parquet -H "format:parquet" http://127.0.0.1:8030/api/${DB}/amazon_reviews/_stream_load\ncurl --location-trusted -u root: -T amazon_reviews_2015.snappy.parquet -H "format:parquet" http://127.0.0.1:8030/api/${DB}/amazon_reviews/_stream_load\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Run a count query to confirm successful data import:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT COUNT(*) FROM amazon_reviews;\n+-----------+\n| count(*)  |\n+-----------+\n| 135589433 |\n+-----------+\n")),(0,r.yg)("h3",{id:"querying"},"Querying"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"First, run the query without any index. The WHERE clause contains a LIKE condition, and the query takes 7.60 seconds:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    product_id,\n    any(product_title),\n    AVG(star_rating) AS rating,\n    COUNT(*) AS count\nFROM\n    amazon_reviews\nWHERE\n    review_body LIKE '%is super awesome%'\nGROUP BY\n    product_id\nORDER BY\n    count DESC,\n    rating DESC,\n    product_id\nLIMIT 5;\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Results:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"+------------+------------------------------------------+--------------------+-------+\n| product_id | any_value(product_title)                 | rating             | count |\n+------------+------------------------------------------+--------------------+-------+\n| B00992CF6W | Minecraft                                | 4.8235294117647056 |    17 |\n| B009UX2YAC | Subway Surfers                           | 4.7777777777777777 |     9 |\n| B00DJFIMW6 | Minion Rush: Despicable Me Official Game |              4.875 |     8 |\n| B0086700CM | Temple Run                               |                  5 |     6 |\n| B00KWVZ750 | Angry Birds Epic RPG                     |                  5 |     6 |\n+------------+------------------------------------------+--------------------+-------+\n5 rows in set (7.60 sec)\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Next, add an NGram BloomFilter index and run the same query again. The query takes 0.93 seconds, an 8x performance improvement:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE amazon_reviews ADD INDEX review_body_ngram_idx(review_body) USING NGRAM_BF PROPERTIES("gram_size"="10", "bf_size"="10240");\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"+------------+------------------------------------------+--------------------+-------+\n| product_id | any_value(product_title)                 | rating             | count |\n+------------+------------------------------------------+--------------------+-------+\n| B00992CF6W | Minecraft                                | 4.8235294117647056 |    17 |\n| B009UX2YAC | Subway Surfers                           | 4.7777777777777777 |     9 |\n| B00DJFIMW6 | Minion Rush: Despicable Me Official Game |              4.875 |     8 |\n| B0086700CM | Temple Run                               |                  5 |     6 |\n| B00KWVZ750 | Angry Birds Epic RPG                     |                  5 |     6 |\n+------------+------------------------------------------+--------------------+-------+\n5 rows in set (0.93 sec)\n")))}u.isMDXComponent=!0}}]);