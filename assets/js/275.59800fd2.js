(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{601:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"client-集群自动探查以及汽车零售店案例背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-集群自动探查以及汽车零售店案例背景","aria-hidden":"true"}},[t._v("#")]),t._v(" client 集群自动探查以及汽车零售店案例背景")]),t._v(" "),a("p",[t._v("快速入门篇（"),a("router-link",{attrs:{to:"/elasticsearch-senior/java-api/elasticsearch-core/72-employee-example.html"}},[t._v("练习例子-员工管理")]),t._v(" ），讲解过了一些基本的 java api，包括了 document 增删改查，基本的搜索，基本的聚合")],1),t._v(" "),a("p",[t._v("高手进阶篇，必须将 java api 这块深入讲解一下，介绍一些最常用的，最核心的一些 api 的使用，用一个模拟现实的案例背景，让大家在学习的时候更加贴近业务")]),t._v(" "),a("h2",{attrs:{id:"讲师吐槽"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#讲师吐槽","aria-hidden":"true"}},[t._v("#")]),t._v(" 讲师吐槽")]),t._v(" "),a("p",[t._v("本段是讲师吐槽，大意是 java api 不能所有功能都讲解，只讲最常用的一些核心 api")]),t._v(" "),a("p",[t._v("话说在前面，我们是不可能将所有的 java api 用视频全部录制一遍的，因为 api 太多了。")]),t._v(" "),a("p",[t._v("我们之前讲解各种功能，各种知识点，花了那么多的时间，哪儿些才是最最关键的，知识，原理，功能，es restful api，最次最次，哪怕是搞 php，搞 python 的人也可以来学习")]),t._v(" "),a("p",[t._v("如果说，现在要将所有所有的 api 全部用 java api 实现一遍和讲解，太耗费时间了，几乎不可能接受")]),t._v(" "),a("p",[t._v("采取的粗略，将核心的 java api 语法，还有最最常用的那些 api 都给大家上课演示了")]),t._v(" "),a("p",[t._v("然后最后一讲，会告诉大家，在掌握了之前那些课程讲解的各种知识点之后，如果要用 java api 去实现和开发，应该怎么自己去探索和掌握")]),t._v(" "),a("p",[t._v("java api，api 的学习，实际上是最最简单的，纯用，没什么难度，技术难度，你掌握了课上讲解的这些 api之后，自己应该就可以举一反三，后面自己去探索和尝试出自己要用的各种功能对应的 java api 是什么。")]),t._v(" "),a("h2",{attrs:{id:"client-集群自动探查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-集群自动探查","aria-hidden":"true"}},[t._v("#")]),t._v(" client 集群自动探查")]),t._v(" "),a("p",[t._v("默认情况下，是根据我们手动指定的所有节点，依次轮询这些节点，来发送各种请求的，如下面的代码，我们可以手动为 client 指定多个节点")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("TransportClient client "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PreBuiltTransportClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addTransportAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InetSocketTransportAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("InetAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getByName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addTransportAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InetSocketTransportAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("InetAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getByName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addTransportAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InetSocketTransportAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("InetAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getByName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("但是问题是，如果我们有成百上千个节点呢？难道也要这样手动添加吗？")]),t._v(" "),a("p",[t._v("es client 提供了一种集群节点自动探查的功能，打开这个自动探查机制以后，es client 会根据我们手动指定的几个节点连接过去，然后通过集群状态自动获取当前集群中的所有 data node，然后用这份完整的列表更新自己内部要发送请求的 node list。默认每隔 5 秒钟，就会更新一次 node list。")]),t._v(" "),a("p",[t._v("但是注意，es cilent 是不会将 Master node 纳入 node list 的，因为要避免给 master node 发送搜索等请求。")]),t._v(" "),a("p",[t._v("这样的话，我们其实直接就指定几个 master node，或者 1 个 node 就好了，client 会自动去探查集群的所有节点，而且每隔 5 秒还会自动刷新。非常棒。")]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("之前我记得说没有 master 之分来着，这里怎么又强调了呢？")])]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("Settings settings "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("builder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n               "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"client.transport.sniff"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       TransportClient client "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PreBuiltTransportClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n               "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addTransportAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InetSocketTransportAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("InetAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getByName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("在实际的生产环境中，都是这么玩儿的。")]),t._v(" "),a("h2",{attrs:{id:"汽车零售案例背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#汽车零售案例背景","aria-hidden":"true"}},[t._v("#")]),t._v(" 汽车零售案例背景")]),t._v(" "),a("p",[t._v("简单来说，会涉及到三个数据，汽车信息、汽车销售记录、汽车 4S 店信息")]),t._v(" "),a("p",[t._v("后面的讲解 java api 的使用基于这个案例进行讲解")])])},[],!1,null,null,null);s.default=e.exports}}]);