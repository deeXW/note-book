(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{286:function(s,a,e){s.exports=e.p+"assets/img/markdown-img-paste-20190328225031586.4fcd65a3.png"},641:function(s,a,e){"use strict";e.r(a);var t=e(2),r=Object(t.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_033-redis-在实践中的一些常见问题以及优化思路（包含-linux-内核参数优化）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_033-redis-在实践中的一些常见问题以及优化思路（包含-linux-内核参数优化）","aria-hidden":"true"}},[s._v("#")]),s._v(" 033. redis 在实践中的一些常见问题以及优化思路（包含 linux 内核参数优化）")]),s._v(" "),t("p",[t("TOC",{class:"table-of-contents",attrs:{"list-type":"ul","include-level":[2,3]}},[t("template",{slot:"header"}),t("template",{slot:"footer"})],2)],1),s._v(" "),t("p",[s._v("基本讲解到现在，大家其实直接到公司里，就可以去搭建 redis 了")]),s._v(" "),t("p",[s._v("其实有些东西，也许没有讲解到台细节的一些东西，比如一些参数的设置，这个是因为不同的公司，不同的业务，不同的数据量，可能要调节的参数不同")]),s._v(" "),t("p",[s._v("到这里为止，大家就差不多了，按照这个思路，去搭建 redis 支撑高并发、高可用、海量数据的架构，部署。可以用公司里的一些已有的数据，导入进去，几百万，一千万，导入进去，做各种压力测试（使用 redis-benchmark 就可以）、性能、并发、QPS，高可用的演练，每台机器最大能存储多少数据量，横向扩容支撑更多数据")]),s._v(" "),t("p",[s._v("基于测试环境还有测试数据，做各种演练，去摸索一些最适合自己的一些细节的东西")]),s._v(" "),t("blockquote",[t("p",[s._v("旁白")])]),s._v(" "),t("p",[s._v("你说你靠一套课程，搞定一个技术 100% 的所有的东西，几乎是不可能的")]),s._v(" "),t("p",[s._v("师傅领进门，修行在个人")]),s._v(" "),t("p",[s._v("一套好的课程，唯一的判断标准，就是在这个价格下，能教会你值得这个价格的一些技术和架构等等知识，是你从其他地方没法学到的，或者自己去学要耗费几倍的时间摸索的")]),s._v(" "),t("p",[s._v("这个课程的价值就已经达到了")]),s._v(" "),t("p",[s._v("你说你花了几百块钱，买了个课程，要求，课程，学完，立即就是独孤九剑，直接到公司里各种问题都能轻松解决")]),s._v(" "),t("p",[s._v("这个世界上，不存在这种课程，所以你需要有一个合理的价值观，我们大家才能有一个非常好的良性的互动的过程")]),s._v(" "),t("p",[s._v("之前也左右一些在线课程，比如 spark 等等课程，就有人说为什么没有成为顶尖高手，这就很尴尬了")]),s._v(" "),t("p",[s._v("实际学了课程去做项目，100% 会遇到大量自己没想到的问题，遇到了首先就自己尝试去解决，遇到问题，才是你的经验积累")]),s._v(" "),t("p",[s._v("遇到了问题，加我的 QQ，然后跟我咨询咨询，我给你看看，也是可以的")]),s._v(" "),t("p",[s._v("比如之前的 spark，elasticsearch，java 架构课程，基本上 70%~80% 的问题，我都可以帮你搞定，当然是我能做到的，有些不在现场也许也搞不定，就需要你自己搞定了")]),s._v(" "),t("h2",{attrs:{id:"fork-耗时导致高并发请求延时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fork-耗时导致高并发请求延时","aria-hidden":"true"}},[s._v("#")]),s._v(" fork 耗时导致高并发请求延时")]),s._v(" "),t("p",[s._v("RDB 和 AOF 的时候会存在 RDB 快照生成、AOF rewrite，耗费磁盘 IO 的过程")]),s._v(" "),t("p",[s._v("主进程 fork 子进程的时候，子进程是需要拷贝父进程的空间内存页表的，也是会耗费一定的时间的")]),s._v(" "),t("p",[s._v("一般来说，如果父进程内存有 1 个 G 的数据，那么 fork 可能会耗费在 20ms 左右，如果是 10G~30G，那么就会耗费 20 * 10，甚至 20 * 30，也就是几百毫秒的时间")]),s._v(" "),t("p",[s._v("info stats 中的 latest_fork_usec，可以看到最近一次 fork 的时长")]),s._v(" "),t("p",[s._v("redis 单机 QPS 一般在几万，fork 可能一下子就会拖慢几万条操作的请求时长，从几毫秒变成 1 秒")]),s._v(" "),t("p",[t("strong",[s._v("优化思路")]),s._v("：fork 耗时跟 redis 主进程的内存有关系，一般控制 redis 的内存在 10GB 以内；否则 slave -> master 在全量复制等时候就可能会出现一些问题")]),s._v(" "),t("h2",{attrs:{id:"aof-的阻塞问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aof-的阻塞问题","aria-hidden":"true"}},[s._v("#")]),s._v(" AOF 的阻塞问题")]),s._v(" "),t("p",[s._v("redis 将数据写入 AOF 缓冲区，单独开一个线程做 fsync 操作，每秒一次")]),s._v(" "),t("p",[s._v("但是 redis 主线程会检查两次 fsync 的时间，如果距离上次 fsync 时间超过了 2 秒，那么写请求就会阻塞")]),s._v(" "),t("p",[s._v("everysec，最多丢失 2 秒的数据")]),s._v(" "),t("p",[s._v("一旦 fsync 超过 2 秒的延时，整个 redis 就被拖慢")]),s._v(" "),t("p",[t("strong",[s._v("优化思路")]),s._v("：优化硬盘写入速度，建议采用 SSD，不要用普通的机械硬盘，SSD 大幅度提升磁盘读写的速度")]),s._v(" "),t("h2",{attrs:{id:"主从复制延迟问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主从复制延迟问题","aria-hidden":"true"}},[s._v("#")]),s._v(" 主从复制延迟问题")]),s._v(" "),t("p",[s._v("主从复制可能会超时严重，这个时候需要良好的监控和报警机制")]),s._v(" "),t("p",[s._v("在 info replication 中，可以看到 master 和 slave 复制的 offset，做一个差值就可以看到对应的延迟量，如果延迟过多，那么就进行报警（可以写一个 shell 脚本去监控）")]),s._v(" "),t("h2",{attrs:{id:"主从复制风暴问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主从复制风暴问题","aria-hidden":"true"}},[s._v("#")]),s._v(" 主从复制风暴问题")]),s._v(" "),t("p",[s._v("如果一下子让多个 slave 从 master 去执行全量复制，一份大的 rdb 同时发送到多个 slave，会导致网络带宽被严重占用")]),s._v(" "),t("p",[s._v("如果一个 master 真的要挂载多个 slave，那尽量用树状结构，不要用星型结构")]),s._v(" "),t("p",[t("img",{attrs:{src:e(286),alt:""}})]),s._v(" "),t("p",[s._v("树，意思就是说，让一个节点下面的 slave 不要太多，可以通过 replication 的方式去配置")]),s._v(" "),t("p",[s._v("如果是在 redis cluster 中应该不会存在这种问题")]),s._v(" "),t("h2",{attrs:{id:"vm-overcommit-memory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vm-overcommit-memory","aria-hidden":"true"}},[s._v("#")]),s._v(" vm.overcommit_memory")]),s._v(" "),t("p",[s._v("该信息是在 redis 启动的时候一些警告信息，这些警告信息可以通过调整 linux 内核配置达到性能的优化")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@eshop-cache03 ~]# cat /var/log/redis/7008.log\n1418:M 24 Mar 13:10:59.513 * Increased maximum number of open files to 10032 (it was originally set to 1024).\n1418:M 24 Mar 13:10:59.513 # Warning: 32 bit instance detected but no memory limit set. Setting 3 GB maxmemory limit with 'noeviction' policy now.\n1418:M 24 Mar 13:10:59.513 * No cluster configuration found, I'm 728e473d6e5e36ddb051c600c7708f23733c46f7\n                _._                                                  \n           _.-``__ ''-._                                             \n      _.-``    `.  `_.  ''-._           Redis 3.2.8 (00000000/0) 32 bit\n  .-`` .-```.  ```\\/    _.,_ ''-._                                   \n (    '      ,       .-`  | `,    )     Running in cluster mode\n |`-._`-...-` __...-.``-._|'` _.-'|     Port: 7008\n |    `-._   `._    /     _.-'    |     PID: 1418\n  `-._    `-._  `-./  _.-'    _.-'                                   \n |`-._`-._    `-.__.-'    _.-'_.-'|                                  \n |    `-._`-._        _.-'_.-'    |           http://redis.io        \n  `-._    `-._`-.__.-'_.-'    _.-'                                   \n |`-._`-._    `-.__.-'    _.-'_.-'|                                  \n |    `-._`-._        _.-'_.-'    |                                  \n  `-._    `-._`-.__.-'_.-'    _.-'                                   \n      `-._    `-.__.-'    _.-'                                       \n          `-._        _.-'                                           \n              `-.__.-'                                               \n\n1418:M 24 Mar 13:10:59.626 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.\n1418:M 24 Mar 13:10:59.626 # Server started, Redis version 3.2.8\n1418:M 24 Mar 13:10:59.626 # WARNING overcommit_memory is set to 0! Background save may fail under low memory condition. To fix this issue add 'vm.overcommit_memory = 1' to /etc/sysctl.conf and then reboot or run the command 'sysctl vm.overcommit_memory=1' for this to take effect.\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("ul",[t("li",[s._v("0: 检查有没有足够内存，没有的话申请内存失败")]),s._v(" "),t("li",[s._v("1: 允许使用内存直到用完为止")]),s._v(" "),t("li",[s._v("2: 内存地址空间不能超过 swap + 50%")])]),s._v(" "),t("p",[s._v("如果是 0 的话，可能导致类似 fork 等操作执行失败，申请不到足够的内存空间")]),s._v(" "),t("p",[s._v("下面的命令在日志里面就已经提示出来了")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('cat /proc/sys/vm/overcommit_memory\necho "vm.overcommit_memory=1" >> /etc/sysctl.conf\nsysctl vm.overcommit_memory=1\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"swapiness"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#swapiness","aria-hidden":"true"}},[s._v("#")]),s._v(" swapiness")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 linux 内核版本")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/version\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("如果 linux 内核版本 ❤️.5，那么 swapiness 设置为0，这样系统宁愿 swap也不会 oom killer（杀掉进程）")]),s._v(" "),t("p",[s._v("如果 linux 内核版本 >=3.5，那么 swapiness 设置为 1，这样系统宁愿 swap 也不会 oom killer")]),s._v(" "),t("p",[s._v("保证 redis 不会被杀掉")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" 0 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /proc/sys/vm/swappiness\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" vm.swapiness"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/sysctl.conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"最大打开文件句柄"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最大打开文件句柄","aria-hidden":"true"}},[s._v("#")]),s._v(" 最大打开文件句柄")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Increased maximum number of open files to 10032 (it was originally set to 1024).\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果该命令不可用，可以去百度搜索不同的版本命令")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ulimit")]),s._v(" -n 10032 10032\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("自己去上网搜一下，不同的操作系统，版本，设置的方式都不太一样")]),s._v(" "),t("h2",{attrs:{id:"tcp-backlog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-backlog","aria-hidden":"true"}},[s._v("#")]),s._v(" tcp backlog")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/sys/net/core/somaxconn\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" 511 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /proc/sys/net/core/somaxconn\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])},[],!1,null,null,null);a.default=r.exports}}]);