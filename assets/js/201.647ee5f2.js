(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{741:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"search-api-的基础语法介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#search-api-的基础语法介绍","aria-hidden":"true"}},[s._v("#")]),s._v(" search api 的基础语法介绍")]),s._v(" "),t("p",[t("TOC",{class:"table-of-contents",attrs:{"list-type":"ul","include-level":[2,3]}},[t("template",{slot:"header"}),t("template",{slot:"footer"})],2)],1),s._v(" "),t("h2",{attrs:{id:"search-api的基本语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#search-api的基本语法","aria-hidden":"true"}},[s._v("#")]),s._v(" search api的基本语法")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("GET /search\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("多 index/type 查询")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("GET /index1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("index2/type1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("type2/search\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("分页查询")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("GET /_search\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"from"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"size"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n```json\n\n## http 协议中 get 是否可以带上 request body\n\nHTTP协议，一般不允许 get 请求带上 request body，但是因为 get 更加适合描述查询数据的操作，因此还是这么用了\n\n```json\nGET /_search?from="),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("&size="),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n\nPOST /_search\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"from"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"size"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[s._v("碰巧，很多浏览器，或者是服务器，也都支持 GET+request body 模式")]),s._v(" "),t("p",[s._v("如果遇到不支持的场景，也可以用 "),t("code",[s._v("POST /_search")])]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("HTTP 协议是规定不允许 get 携带 body 的，对于 es 来说他自己接收请求解析了 body。")])])])},[],!1,null,null,null);a.default=e.exports}}]);