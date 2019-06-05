(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{292:function(s,t,a){s.exports=a.p+"assets/img/1.7a0500ce.jpg"},293:function(s,t,a){s.exports=a.p+"assets/img/2.7b4319f0.jpg"},294:function(s,t,a){s.exports=a.p+"assets/img/3.cff9ced0.jpg"},295:function(s,t,a){s.exports=a.p+"assets/img/4.a358a8f3.jpg"},654:function(s,t,a){"use strict";a.r(t);var n=a(2),r=Object(n.a)({},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"简单工厂"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简单工厂","aria-hidden":"true"}},[s._v("#")]),s._v(" 简单工厂")]),s._v(" "),n("h2",{attrs:{id:"初识简单工厂"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#初识简单工厂","aria-hidden":"true"}},[s._v("#")]),s._v(" 初识简单工厂")]),s._v(" "),n("h3",{attrs:{id:"定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义","aria-hidden":"true"}},[s._v("#")]),s._v(" 定义")]),s._v(" "),n("p",[s._v("提供一个创建对象实例的功能，而无需关心其具体实现。被构建实例的类型可以是接口、抽象类，也可以是具体的类")]),s._v(" "),n("h3",{attrs:{id:"结构和说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结构和说明","aria-hidden":"true"}},[s._v("#")]),s._v(" 结构和说明")]),s._v(" "),n("p",[n("img",{attrs:{src:a(292),alt:""}})]),s._v(" "),n("p",[n("strong",[s._v("APi：")]),s._v(" 定义客户所需要的功能接口")]),s._v(" "),n("p",[n("strong",[s._v("Impl：")]),s._v(" 具体实现Api的实现类，可能会有多个")]),s._v(" "),n("p",[n("strong",[s._v("Factory：")]),s._v(" 工厂，选择合适的实现类来创建Api的接口对象")]),s._v(" "),n("p",[n("strong",[s._v("Client：")]),s._v(" 客户端，通过Factory去获取Api接口对象，然后面向Api接口编程")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Api")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("operation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ImplA")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Api")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("operation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        System"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"实现a:"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ImplB")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Api")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("operation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        System"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"实现b:"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Factory")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" Api "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("createApi")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" condition"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("condition "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ImplA")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("condition "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ImplB")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" null"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Client")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        Api api "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Factory"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("createApi")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("operation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        api "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Factory"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("createApi")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("operation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br")])]),n("h3",{attrs:{id:"接口回顾："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#接口回顾：","aria-hidden":"true"}},[s._v("#")]),s._v(" 接口回顾：")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("Java 中接口的概念：在 Java 中接口是一种特殊的抽象类")])]),s._v(" "),n("li",[n("p",[s._v("接口用来干什么:")]),s._v(" "),n("p",[s._v("通常用接口来定义实现类的外观，就相当于一份契约，根据外部应用需要的功能，约定了实现类应该要实现的功能")])]),s._v(" "),n("li",[n("p",[s._v("接口的思想： 封装隔离")])]),s._v(" "),n("li",[n("p",[s._v("使用接口的好处")]),s._v(" "),n("p",[s._v("只要接口不变，内部实现的变化就不会影响到外部应用，从而使得系统更灵活，具有更好的扩展性和可维护性")])]),s._v(" "),n("li",[n("p",[s._v("接口和抽象类的选择")]),s._v(" "),n("p",[s._v("（1）：优先选用接口")]),s._v(" "),n("p",[s._v("（2）：在如下情况选抽象类：既要定义子类的行为，又要为子类提供公共的功能")])])]),s._v(" "),n("h3",{attrs:{id:"面向接口编程回顾："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#面向接口编程回顾：","aria-hidden":"true"}},[s._v("#")]),s._v(" 面向接口编程回顾：")]),s._v(" "),n("p",[s._v("面向接口编程是 Java 编程中的一个重要原则。在 Java 程序设计里面，非常讲究层的划分和模块的划分。")]),s._v(" "),n("p",[s._v("比如常见的三层结构\n在一个层内部的各个模块交互也要通过接口\n不管是一层还是一个模块或则一个组件，都是一个被接口隔离的整体")]),s._v(" "),n("hr"),s._v(" "),n("h2",{attrs:{id:"体会简单工厂"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#体会简单工厂","aria-hidden":"true"}},[s._v("#")]),s._v(" 体会简单工厂")]),s._v(" "),n("h3",{attrs:{id:"不用模式的解决方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#不用模式的解决方案","aria-hidden":"true"}},[s._v("#")]),s._v(" 不用模式的解决方案")]),s._v(" "),n("p",[n("img",{attrs:{src:a(293),alt:""}})]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Api")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Impl")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Api")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        System"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"不用模式的解决方案:"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Client")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        Api api "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Impl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h3",{attrs:{id:"用模式的解决方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#用模式的解决方案","aria-hidden":"true"}},[s._v("#")]),s._v(" 用模式的解决方案")]),s._v(" "),n("p",[s._v("参考上面的 "),n("strong",[s._v("结构和说明")]),s._v(" 中的代码")]),s._v(" "),n("hr"),s._v(" "),n("h2",{attrs:{id:"理解简单工厂"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#理解简单工厂","aria-hidden":"true"}},[s._v("#")]),s._v(" 理解简单工厂")]),s._v(" "),n("h3",{attrs:{id:"一个典型的疑问"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一个典型的疑问","aria-hidden":"true"}},[s._v("#")]),s._v(" 一个典型的疑问")]),s._v(" "),n("p",[n("strong",[s._v("首先来解决一个常见的疑问：")]),s._v(" 可能有朋友会认为，上面的示列中的简单工厂看起来不就是把客户端里面的 "),n("code",[s._v("new Impl()")]),s._v(" 移动到简单工厂里面吗？不还是一样通过 new  实现类来得到接口吗？  把 "),n("code",[s._v("new Impl()")]),s._v(" 这句话放到客户端和放到简单工厂里面有什么不同吗？")]),s._v(" "),n("p",[n("code",[s._v("理解这个问题的重点就在于理解简单工厂所处的位置。")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(294),alt:""}})]),s._v(" "),n("p",[s._v("红框代表一个封装体，完全在红框中的为封装体内部的，工厂和接口暴露了一部分给外部。")]),s._v(" "),n("h3",{attrs:{id:"认识简单工厂"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#认识简单工厂","aria-hidden":"true"}},[s._v("#")]),s._v(" 认识简单工厂")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("简单工厂的功能")]),s._v(" "),n("p",[s._v("可以用来创建接口、抽象类或则是普通类的实例")])]),s._v(" "),n("li",[n("p",[s._v("静态工厂")]),s._v(" "),n("p",[s._v("通常把简单工厂类实现成一个工具类，直接使用静态方法就可以了，也就是说简单工厂的方法通常都是静态的，所以也被称为静态工厂")])]),s._v(" "),n("li",[n("p",[s._v("万能工厂")]),s._v(" "),n("p",[s._v("一个简单工厂理论上可以用来构造任何对象，所以又称之为“万能工厂”")])]),s._v(" "),n("li",[n("p",[s._v("简单工厂创建对象的范围")]),s._v(" "),n("p",[s._v("建议控制在一个独立的组件级别或则一个模块级别")])]),s._v(" "),n("li",[n("p",[s._v("简单工厂的调用顺序示意图")])])]),s._v(" "),n("p",[n("img",{attrs:{src:a(295),alt:""}})]),s._v(" "),n("ol",{attrs:{start:"6"}},[n("li",[n("p",[s._v("简单工厂命名的建议")]),s._v(" "),n("ol",[n("li",[s._v("类名建议为：“模块名称 + Factory ”")]),s._v(" "),n("li",[s._v("方法名通常为：“ get + 接口名称”或则是“ create + 接口名称”")]),s._v(" "),n("li",[s._v("不建议把方法名称命名为 new + 接口名称")])])])]),s._v(" "),n("h3",{attrs:{id:"简单工厂中方法的写法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简单工厂中方法的写法","aria-hidden":"true"}},[s._v("#")]),s._v(" 简单工厂中方法的写法")]),s._v(" "),n("p",[s._v("简单工方法的内部主要实现的功能是“选择合适的实现类”来创建实例对象")]),s._v(" "),n("p",[s._v("选择 --\x3e 如何选? ---\x3e 选择的参数 --\x3e 参数从何而来？")]),s._v(" "),n("ol",[n("li",[s._v("参数来源于client")]),s._v(" "),n("li",[s._v("参数来源于配置文件")]),s._v(" "),n("li",[s._v("参数来源于系统自身，比如运行期间的某个值")])]),s._v(" "),n("p",[n("code",[s._v("注：")]),s._v("如果是从客户端在调用工厂的时候，传入选择的参数，这就说明客户端必须知道每个参数的含义，也需要理解每个参数对应的功能处理。这就要求必须在一定程度上，向客户暴露一定的内部实现细节。")]),s._v(" "),n("h3",{attrs:{id:"可配置的简单工厂"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#可配置的简单工厂","aria-hidden":"true"}},[s._v("#")]),s._v(" 可配置的简单工厂")]),s._v(" "),n("p",[s._v("使用反射加上配置文件，来实现添加新的实现类过后，无需修改代码，就能把这个新的实现类加入应用中。")]),s._v(" "),n("p",[s._v("可配置的简单工厂，也是通过选择，但是这个选择不是体现在方法中了。 而是通过配置文件")]),s._v(" "),n("p",[s._v("这里配置是配置一些参数，用于选择哪一个实现。")]),s._v(" "),n("h3",{attrs:{id:"简单工厂的优缺点："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简单工厂的优缺点：","aria-hidden":"true"}},[s._v("#")]),s._v(" 简单工厂的优缺点：")]),s._v(" "),n("p",[n("strong",[s._v("优点：")])]),s._v(" "),n("ol",[n("li",[s._v("帮助封装： 真正实现面向接口编程")]),s._v(" "),n("li",[s._v("解耦：客户端和具体实现可以解耦")])]),s._v(" "),n("p",[n("strong",[s._v("缺点：")])]),s._v(" "),n("ol",[n("li",[s._v("可能增加客户端的复杂度：需要调用接口，就得了解这些参数的含义")]),s._v(" "),n("li",[s._v("不方便扩展子工程")])]),s._v(" "),n("hr"),s._v(" "),n("h2",{attrs:{id:"思考简单工厂"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思考简单工厂","aria-hidden":"true"}},[s._v("#")]),s._v(" 思考简单工厂")]),s._v(" "),n("h3",{attrs:{id:"简单工厂的本质"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简单工厂的本质","aria-hidden":"true"}},[s._v("#")]),s._v(" 简单工厂的本质")]),s._v(" "),n("p",[s._v("简单工厂的本质是： 选择实现 "),n("strong",[s._v("重点是选择")])]),s._v(" "),n("h3",{attrs:{id:"何时选用简单工厂："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#何时选用简单工厂：","aria-hidden":"true"}},[s._v("#")]),s._v(" 何时选用简单工厂：")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("如果想要完全封装隔离具体实现，让外部只能通过接口来操作封装体，那么可以选用简单工厂，让客户端通过工厂来获取相应的接口，而无需关心具体实现。")])]),s._v(" "),n("li",[n("p",[s._v("如果想要把对外创建对象的职责集中管理和控制，可以选用简单工厂，一个简单工厂可以创建很多的、不相关的对象，可以把对外创建对象的职责集中到一个简单工厂来，从而实现集中管理和控制")])])])])},[],!1,null,null,null);t.default=r.exports}}]);