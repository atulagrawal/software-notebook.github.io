"use strict";(self.webpackChunksoftware_architecture=self.webpackChunksoftware_architecture||[]).push([[5032],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=n,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6301:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={},o="Performance",s={unversionedId:"software-architecture/quality-attributes/performance",id:"software-architecture/quality-attributes/performance",title:"Performance",description:"A system is considered to be performance ability if it continues to serve the desired functionality as per the pre-defined SLAs without any degration.",source:"@site/docs/software-architecture/quality-attributes/performance.md",sourceDirName:"software-architecture/quality-attributes",slug:"/software-architecture/quality-attributes/performance",permalink:"/software-architecture/docs/software-architecture/quality-attributes/performance",draft:!1,editUrl:"https://github.com/atulagrawal/software-architecture/tree/main/packages/create-docusaurus/templates/shared/docs/software-architecture/quality-attributes/performance.md",tags:[],version:"current",frontMatter:{},sidebar:"softwareArchitectureSidebar",previous:{title:"Observability",permalink:"/software-architecture/docs/software-architecture/quality-attributes/observability"},next:{title:"Resiliency and Fault Tolerance",permalink:"/software-architecture/docs/software-architecture/quality-attributes/resiliency and fault tolerance"}},l={},c=[{value:"Cache",id:"cache",level:2},{value:"Cache Policies :",id:"cache-policies-",level:3},{value:"Time to Live Policy",id:"time-to-live-policy",level:4},{value:"Least Frequently Used Policy",id:"least-frequently-used-policy",level:4}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"performance"},"Performance"),(0,n.kt)("p",null,"A system is considered to be performance ability if it continues to serve the desired functionality as per the pre-defined SLAs without any degration."),(0,n.kt)("p",null,"Exmaples:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A system is perfomrant if the response time, throughput (number of requests per second)for an API continues to be as per 95% and 99% percentile SLAs."),(0,n.kt)("li",{parentName:"ul"},"On the hand, if systems performance continues to degrade e.g. due to memory leaks, resource starvation etc then it would exhibit non-performant behaviour.")),(0,n.kt)("p",null,"Resources and Bottlenecks"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"- Sharing\n    - Threads - Common Thread Pools across all APIs in a service.\n    - Machine Instance  - Multiple services in a same host machine.\n    - Disk\n    - Database Connections\n- Metrics\n    - Query per seconds\n    - Requests per seconds\n- Locks\n    - Optimistic Lock\n        - Acccess the resource with version, perform the business operation, update the resource for same version,  if version mismatch then abort the flow.\n    - Oultiple threads can enter and access the same resource.\n    - Doesn't work with multi data center architecture..\n        - If request for two diff users go to two diff data center then both will get procssed locally..\n    - Pessimistic Lock\n        - Acquire the lock on the resource, perform the business operation, update the resource, release the lock on the resource.\n- Distributed Locks\n    - The lock has a timeout (i.e. it is a lease) so that if a service / client is down then it doesn't end up holding a lock forever and never releasing it. \n    \n")),(0,n.kt)("p",null,"Latency"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"One of the most devastating and unpredictable latency intruders is the Java Virtual Machine\u2019s (JVM\u2019s) \u201cstop the world\u201d pauses for garbage collection (memory clean-up). ",(0,n.kt)("a",{parentName:"li",href:"https://blog.cloudera.com/tuning-java-garbage-collection-for-hbase/"},"HBase - Tuning Garbase Collection")),(0,n.kt)("li",{parentName:"ul"},"strong consistency causes performance and latency issues as well. Each write is more expensive, especially with cross-datacenter replication, as it needs the acknowledgment of multiple replicas. "),(0,n.kt)("li",{parentName:"ul"},"Dependencies ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Downtream services and databases - (sequential vs parrallel invocation)"),(0,n.kt)("li",{parentName:"ul"},"Libraries (performance, compute time)")))),(0,n.kt)("p",null,"Core Application Logic"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"- Utlisization of Resources for the given business use case\n    - CPU Bound - Blockchain, Crypto\n    - Memory Bound - Data Science\n    - I/O Bound - Web crawling\n- Code / Algorithm Compexlity\n    - Runtime Complexity\n    - Space time complexity\n")),(0,n.kt)("p",null,"Database"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"- Indexing - Helps in querying the data in optimal way.\n- Read replicas - Helps in reducing the load on main database (#shared-resources)\n- Single Data Center vs Multiple Data Center\n- Consistency vs Eventual Consistency\n    - eventual consistency is problematic for read-after-write use-cases.\n- Read heavy vs write heavy\n    - Command Query Responsiblity Segregation - CQRS.\n    - Replication (read replicas)\n- Database paritioning\n    - Horizontal Parition - Table Data (rows) is sharded across multiple instances based on certain keys (e.g. US customer in shard A, IN customer in shard B)\n    - Verification Parition - Tables in a databases are split across multiple instances (e.g. Customer table in instance A and Customer Order table in instance B)\n- [Connection Pooling](https://www.cockroachlabs.com/blog/what-is-connection-pooling/)\n")),(0,n.kt)("p",null,"API Design"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"- Bulk APIs - Helps in performing same operation for multiple requests.\n- Pagination - Helps in client iteratively use the data.\n- GraphQL - Load what you need.\n- Bulk Head Pattern to keep specific API\n    - Threads per API for avoiding resource starvation\n")),(0,n.kt)("p",null,"Events"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"- Fire and Forget\n    - Use events for the tasks that are not needed immediately.\n")),(0,n.kt)("h2",{id:"cache"},"Cache"),(0,n.kt)("p",null,"There are two key intents of using the cache:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Cache as primary storage")),(0,n.kt)("p",null,"This approach can be used where we have to store some some transient, fast-changing data, and where it\u2019s not a big deal if you occasionally lose that data for whatever reason. In this case, there is no other storage.\nExamples : Request counters per IP address (for rate limiting purposes) or Distinct IP addresses per user ID (for abuse detection)."),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Cache as supplimentary storage")),(0,n.kt)("p",null,"This approach is used for reducing the latency and for reudcing the load on primary storage. In this case, cache is filled from primary storage source for the data that gets accessed very frequently.\nExamples : Storing the session information per customer for authentication and authorization."),(0,n.kt)("h3",{id:"cache-policies-"},"Cache Policies :"),(0,n.kt)("h4",{id:"time-to-live-policy"},"Time to Live Policy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A short TTL could lead to more cache miss leading to performance and latency issues."),(0,n.kt)("li",{parentName:"ul"},"A long TTL could lead to memory issue as there will be more keys in the momory.")),(0,n.kt)("p",null,"In case of TTL policy, the data staleness should also be considered. If data is being updated by other processes then this approach might serve old data to the customers."),(0,n.kt)("h4",{id:"least-frequently-used-policy"},"Least Frequently Used Policy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The keys that are being used least frequently will be cleaned up for keeping the memory footprint optimized.")),(0,n.kt)("p",null,"In this case also, the staleness of the data has to be kept in mind. If a key has very high frequency then we will have to think about the mechanism for updating the values."))}d.isMDXComponent=!0}}]);