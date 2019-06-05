(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{608:function(s,e,a){"use strict";a.r(e);var t=a(2),r=Object(t.a)({},function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_011-redis-的-rdb-持久化配置以及数据恢复实验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_011-redis-的-rdb-持久化配置以及数据恢复实验","aria-hidden":"true"}},[s._v("#")]),s._v(" 011. redis 的 RDB 持久化配置以及数据恢复实验")]),s._v(" "),a("p",[a("TOC",{class:"table-of-contents",attrs:{"list-type":"ul","include-level":[2,3]}},[a("template",{slot:"header"}),a("template",{slot:"footer"})],2)],1),s._v(" "),a("h2",{attrs:{id:"如何配置-rdb-持久化机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何配置-rdb-持久化机制","aria-hidden":"true"}},[s._v("#")]),s._v(" 如何配置 RDB 持久化机制")]),s._v(" "),a("p",[s._v("/etc/redis/6379.conf")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("save 900 1\nsave 300 10\nsave 60 10000\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("以上内容是原始默认的配置，该功能叫做 SNAPSHOTTING（快照）")]),s._v(" "),a("p",[a("code",[s._v("save <seconds> <changes>")]),s._v("：当 n 秒后有 n 个 key 发生改变，就做一次快照备份")]),s._v(" "),a("p",[s._v("可以设置多个检查点，默认设置了 3 个检查点")]),s._v(" "),a("h2",{attrs:{id:"rdb-持久化机制的工作流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rdb-持久化机制的工作流程","aria-hidden":"true"}},[s._v("#")]),s._v(" RDB 持久化机制的工作流程")]),s._v(" "),a("ol",[a("li",[s._v("redis 根据配置自己尝试去生成 rdb 快照文件")]),s._v(" "),a("li",[s._v("fork 一个子进程出来")]),s._v(" "),a("li",[s._v("子进程尝试将数据 dump 到临时的 rdb 快照文件中")]),s._v(" "),a("li",[s._v("完成 rdb 快照文件的生成之后，就替换之前的旧的快照文件")])]),s._v(" "),a("p",[s._v("每次生成一个新的快照，都会覆盖之前的老快照，所以只会有一个 dump.rdb")]),s._v(" "),a("h2",{attrs:{id:"基于-rdb-持久化机制的数据恢复实验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于-rdb-持久化机制的数据恢复实验","aria-hidden":"true"}},[s._v("#")]),s._v(" 基于 RDB 持久化机制的数据恢复实验")]),s._v(" "),a("p",[s._v("思路：")]),s._v(" "),a("ol",[a("li",[s._v("保存几条数据")]),s._v(" "),a("li",[s._v("关闭 redis")]),s._v(" "),a("li",[s._v("重启 redis")]),s._v(" "),a("li",[s._v("检查数据是否还在")])]),s._v(" "),a("p",[s._v("下面使用命令来实验")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("redis-cli\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" k1 11\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" k2 22\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" k3 33\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exit")]),s._v("\nredis-cli "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 redis")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" /etc/init.d/\n./redis_6379 start\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入 cli 查看数据是否还存在")]),s._v("\nredis-cli\nget k1\nget k2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("实验证明数据还是存在的。")]),s._v(" "),a("p",[s._v("这里有一个争议点，因为是 redis 自带的停止工具，是一种安全的退出模式，会将内存中的数据立即生成一份 rdb 快照文件，该文件存储在 /var/redis/6379/dump.rdb 中")]),s._v(" "),a("p",[s._v("下面再来测试 2 种非安全的退出模式：")]),s._v(" "),a("blockquote",[a("p",[s._v("第一种")])]),s._v(" "),a("p",[s._v("写入几条数据，然后直接 kill 掉 redis 进程，启动后会发现数据丢失了")]),s._v(" "),a("blockquote",[a("p",[s._v("第二种")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("手动配置一个 save 5 1")])]),s._v(" "),a("li",[a("p",[s._v("写入几条数据，等待 5 秒钟，会发现自动进行了一次 dump rdb 快照")]),s._v(" "),a("p",[s._v("可通过查看 dump.rdb 文件更新时间确定")])]),s._v(" "),a("li",[a("p",[s._v("kill -9 redis 进程")])]),s._v(" "),a("li",[a("p",[s._v("启动 redis 查看数据")]),s._v(" "),a("p",[s._v("因为有 save 生效，所以数据都在；")])])]),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("在非正常退出 redis 的时候，再次启动会报错")]),s._v(" "),a("p",[s._v("[root@eshop-cache01 init.d]# ./redis_6379 start\n/var/run/redis_6379.pid exists, process is already running or crashed")]),s._v(" "),a("p",[s._v("由此可以看出来，当 redis 启动的时候回生成一个 pid 文件，如果该文件存在则不能再次启动")]),s._v(" "),a("p",[s._v("这里只能先删除该 pid 文件后，才能启动 redis 了")])])])},[],!1,null,null,null);e.default=r.exports}}]);