(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{604:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"使用-mysql-来达到热更新-ik-词库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-mysql-来达到热更新-ik-词库","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 mysql 来达到热更新 ik 词库")]),t._v(" "),s("h2",{attrs:{id:"什么是热更新？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是热更新？","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是热更新？")]),t._v(" "),s("p",[t._v("修改扩展词的时候，每次都需要手动在配置文件中增加，并且需要重启 es 才能生效，\nes 是分布式的，可能有数百个节点，你不能每次都一个一个节点上面去修改。")]),t._v(" "),s("p",[t._v("es 不停机，直接我们在外部某个地方添加新的词语，es 中立即热加载到这些新词语，这就是热更新效果")]),t._v(" "),s("h2",{attrs:{id:"热更新的方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#热更新的方案","aria-hidden":"true"}},[t._v("#")]),t._v(" 热更新的方案")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("修改 ik 分词器源码，然后手动支持从 mysql 中每隔一定时间，自动加载新的词库")])]),t._v(" "),s("li",[s("p",[t._v("基于 ik 分词器原生支持的热更新方案")]),t._v(" "),s("p",[t._v("部署一个 web 服务器，提供一个 http 接口，通过 modified 和 tag 两个 http 响应头，来提供词语的热更新\n这个远程更新的可以在源码中找到。使用数据库加载的时候就可以参考这个是怎么把词语放到内存中的")])])]),t._v(" "),s("p",[t._v("用第一种方案，第二种 ik git 社区官方都不建议采用，觉得不太稳定")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("下载源码")]),t._v(" "),s("p",[t._v("https://github.com/medcl/elasticsearch-analysis-ik/tree/v5.2.0\nik 分词器，是个标准的 java maven 工程")])]),t._v(" "),s("li",[s("p",[t._v("修改源码")]),t._v(" "),s("p",[t._v("主要思路：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("Dictionary类，"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("169")]),t._v("行：Dictionary 单例类的初始化方法，在这里需要创建一个我们自定义的线程，并且启动它\nHotDictReloadThread 类：就是死循环，不断调用 Dictionary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSingleton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reLoadMainDict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("，去重新加载词典\nDictionary类，"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("389")]),t._v("行："),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadMySQLExtDict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDictionary类，"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("683")]),t._v("行："),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadMySQLStopwordDict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("然后再写个配置文件和 ik 的词库配置放一起，里面可以配置 mysql 的相关参数配置\n"),s("code",[t._v("org.wltea.analyzer.dic.Dictionary")]),t._v(" 主要的入口点在这个类里面，大概看了一下代码量少，有中文注释，比较容易看懂")])]),t._v(" "),s("li",[s("p",[t._v("mvn package 打包代码")]),t._v(" "),s("p",[t._v("target\\releases\\elasticsearch-analysis-ik-5.2.0.zip")])]),t._v(" "),s("li",[s("p",[t._v("解压缩 ik 压缩包：将 mysql 驱动 jar，放入 ik 的目录下")])]),t._v(" "),s("li",[s("p",[t._v("修改 jdbc 相关配置")])]),t._v(" "),s("li",[s("p",[t._v("重启 es")])])]),t._v(" "),s("p",[t._v("观察日志，日志中就会显示我们打印的那些东西，比如加载了什么配置，加载了什么词语，什么停用词")]),t._v(" "),s("p",[t._v("在 mysql 中添加词库与停用词并分词实验，验证热更新是否生效")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("该课程包含了一个已经实现 mysql 热更新的项目包。由于代码不是很复杂，就不提供该包了")])])])},[],!1,null,null,null);a.default=e.exports}}]);