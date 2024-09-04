"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[899251],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>h});var o=r(296540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=i,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||n;return r?o.createElement(h,a(a({ref:t},u),{},{components:r})):o.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<n;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},379536:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=r(58168),i=(r(296540),r(15680));const n={title:"How to Become Contributor",language:"en"},a=void 0,l={unversionedId:"how-to-contribute/contributor-guide",id:"how-to-contribute/contributor-guide",title:"How to Become Contributor",description:"\x3c!--",source:"@site/community/how-to-contribute/contributor-guide.md",sourceDirName:"how-to-contribute",slug:"/how-to-contribute/contributor-guide",permalink:"/community/how-to-contribute/contributor-guide",draft:!1,tags:[],version:"current",frontMatter:{title:"How to Become Contributor",language:"en"},sidebar:"community",previous:{title:"Contribute to Doris",permalink:"/community/how-to-contribute/"},next:{title:"How to Become Committer",permalink:"/community/how-to-contribute/how-to-be-a-committer"}},s={},c=[{value:"New Contributor Guidelines",id:"new-contributor-guidelines",level:2},{value:"Subscribe to the public mailing lists",id:"subscribe-to-the-public-mailing-lists",level:3},{value:"Code Review Guidelines",id:"code-review-guidelines",level:2},{value:"Pull Request Guidelines",id:"pull-request-guidelines",level:2}],u={toc:c},m="wrapper";function p(e){let{components:t,...r}=e;return(0,i.yg)(m,(0,o.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"new-contributor-guidelines"},"New Contributor Guidelines"),(0,i.yg)("h3",{id:"subscribe-to-the-public-mailing-lists"},"Subscribe to the public mailing lists"),(0,i.yg)("p",null,"If you haven\u2019t yet, subscribe to {dev,commits}@doris.apache.org mailing lists.\nCommits mailing list is especially important because all of Github Issue, Pull Request and build notifications are sent there."),(0,i.yg)("h2",{id:"code-review-guidelines"},"Code Review Guidelines"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Always maintain a high standard of review so that the quality of the entire product can be better guaranteed.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Changes to the architecture or the user interface need to be fully discussed by the community. This can be either in a mail group or in a GitHub issue. ")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Test coverage. The added logic needs to be covered by a corresponding test. When the old code for which there is no test is changed, this requirement can be appropriately relaxed.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Documentation. Newly added features must be documented, otherwise such code is not allowed.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Readability of the code. If reviewers are not very clear about the logic of the code, then you can ask the contributor to explain the logic. And writing sufficient comments in the code to explain the logic is encouraged.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'Try to give a clear conclusion at the end of your comments, "approve" or "change request". If it\'s a minor issue, you can just leave a comment.')),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'Recommend to submit a "+1 Comment" rather than a "+1 Approve" to indicate that it looks good to me but I am not sure whether this part of the function is correct. It needs someone else\'s approve.')),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Respect each other and learn from each other. Maintain a polite tone when commenting, try to give reasons for the suggestions."))),(0,i.yg)("h2",{id:"pull-request-guidelines"},"Pull Request Guidelines"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"During a PR, there are three types of roles. Contributor: the PR submitter; Reviewer: the person who needs to make code-level review on the PR; and Moderator: the person responsible for coordinating the entire PR process. For example, the moderator should assign reviewers, push the author to make changes according to the comments, set different tags for the PR, and merge the PR etc. For a specific PR, a person may act in different roles, such as when a contributor submitted one PR, he may himself be both the contributor and the moderator of that PR.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Contributors can assign a PR to itself as a moderator. After assigning it to themselves, the other contributor will know that this PR has been in charge.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"The contributor is encouraged to act as a moderator for its own PR.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"The reviewer needs to perform a code-level review, refer Code Review Guidelines")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Once a reviewer has commented on a PR, they need to keep following up on subsequent changes to that PR.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"A PR must get at least a +1 approved from committer who is not the author.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"After the first +1 to the PR, wait at least one working day before merging. The main purpose is to wait for the rest of the community to come to review.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"For architecture or user interface changes, a PR needs to get at least 3 +1's to merge.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Regression cases should pass before merging.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Moderator needs to make sure all comments are resolved before merging.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'Select "squash and merge" to merge.')),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"When there is a disagreement about a modification, try to discuss the resolution. If the discussion doesn't work out, it can be resolved by a vote in ",(0,i.yg)("a",{parentName:"p",href:"mailto:dev@doris.apache.org"},"dev@doris.apache.org")," by the majority rules.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Adding External libraries"))),(0,i.yg)("p",null,"Extra care should be taken when introducing external libraries. When adding a new library, the following factors should be considered:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"What functionality does the new external library provide? Can the existing libraries provide this functionality (perhaps with some effort)?"),(0,i.yg)("li",{parentName:"ul"},"Is the external library maintained by an active contributor community?"),(0,i.yg)("li",{parentName:"ul"},"What are the licensing terms of the new library?"),(0,i.yg)("li",{parentName:"ul"},"Are you adding the library to a core module? This will affect other parts of the Doris codebase. For example, in Java, if the new library introduces a large number of transitive dependencies, we may encounter unexpected class conflicts, which are difficult to discover through testing because they depend on the order in which libraries are loaded at runtime.")))}p.isMDXComponent=!0}}]);