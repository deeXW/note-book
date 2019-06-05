(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{267:function(s,e,t){s.exports=t.p+"assets/img/markdown-img-paste-20190321221551803.46b84041.png"},612:function(s,e,t){"use strict";t.r(e);var r=t(2),a=Object(r.a)({},function(){var s=this,e=s.$createElement,r=s._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"_014-redis-如何通过读写分离来承载读请求-qps-超过-10-万-？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_014-redis-如何通过读写分离来承载读请求-qps-超过-10-万-？","aria-hidden":"true"}},[s._v("#")]),s._v(" 014. redis 如何通过读写分离来承载读请求 QPS 超过 10 万 +？")]),s._v(" "),r("p",[r("TOC",{class:"table-of-contents",attrs:{"list-type":"ul","include-level":[2,3]}},[r("template",{slot:"header"}),r("template",{slot:"footer"})],2)],1),s._v(" "),r("h2",{attrs:{id:"redis-高并发跟整个系统的高并发之间的关系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redis-高并发跟整个系统的高并发之间的关系","aria-hidden":"true"}},[s._v("#")]),s._v(" redis 高并发跟整个系统的高并发之间的关系")]),s._v(" "),r("p",[s._v("搞高并发的话，不可避免的要把底层的缓存搞得很好，这里就是 redis")]),s._v(" "),r("p",[s._v("使用 mysql 来支撑高并发的话，就算做到了，那么也是通过一系列复杂的分库分表方案。订单系统中是有事务要求的，QPS 到几万，就已经比较高了，很难提升上去了")]),s._v(" "),r("p",[s._v("要做一些电商的商品详情页，真正的超高并发，QPS 上十万，甚至是百万，一秒钟百万的请求量")]),s._v(" "),r("p",[s._v("光是 redis 是不够的，但是 redis 是整个大型的缓存架构中，支撑高并发的架构里面，非常重要的一个环节")]),s._v(" "),r("p",[s._v("首先，你的底层的缓存中间件，缓存系统，必须能够支撑的起我们说的那种高并发，其次，再经过良好的整体的缓存架构的设计（多级缓存架构、热点缓存），支撑真正的上十万，甚至上百万的高并发")]),s._v(" "),r("h2",{attrs:{id:"redis-不能支撑高并发的瓶颈在哪里？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redis-不能支撑高并发的瓶颈在哪里？","aria-hidden":"true"}},[s._v("#")]),s._v(" redis 不能支撑高并发的瓶颈在哪里？")]),s._v(" "),r("p",[s._v("就是 "),r("strong",[s._v("单机")])]),s._v(" "),r("p",[s._v("单机 redis 一般情况下能够承载的 QPS 上万到几万不等，根据你的业务操作的复杂性，\nredis 提供很多复杂的操作，如 lua 脚本等复杂的操作，那么可能会更低。\n比如就简单的 kv 查询来说还是比较容易达到上万的。")]),s._v(" "),r("p",[s._v("假设有上千万、上亿的用户来访问，直接就能把你的单机 redis 干死")]),s._v(" "),r("h1",{attrs:{id:"如果-redis-要支撑超过-10万-的并发，那应该怎么做？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如果-redis-要支撑超过-10万-的并发，那应该怎么做？","aria-hidden":"true"}},[s._v("#")]),s._v(" 如果 redis 要支撑超过 10万+ 的并发，那应该怎么做？")]),s._v(" "),r("p",[s._v("单机的 redis 几乎不太可能 QPS 超过 10万+，除非一些特殊情况，比如你的机器性能特别好，配置特别高，真实物理机，维护做的特别好，而且你的整体的操作不是太复杂")]),s._v(" "),r("p",[s._v("单机在一般就几万。要提高并发，一般的方案是 "),r("strong",[s._v("读写分离")]),s._v("，一般来说，对缓存，一般都是用来支撑读高并发的，写的请求是比较少的，可能写请求也就一秒钟几千，一两千，大量的请求都是读，一秒钟二十万次读")]),s._v(" "),r("p",[s._v("也就是 "),r("strong",[s._v("读多写少")]),s._v(" 的情况下才能用缓存。写多读少可以选择使用异步写，本课程主要讲解缓存")]),s._v(" "),r("p",[r("img",{attrs:{src:t(267),alt:""}})]),s._v(" "),r("p",[s._v("如上图，一主多从，主负责写，并且将数据同步复制到其他 slave 节点，从节点负责读，还可水平扩展 slave 节点以支撑更多的 QPS")]),s._v(" "),r("p",[s._v("主从架构 -> 读写分离 -> 支撑 10万+ 读 QPS 的架构")]),s._v(" "),r("p",[s._v("接下来要讲解的就是怎么实现 redis 的主从架构。")])])},[],!1,null,null,null);e.default=a.exports}}]);