(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{185:function(e,t,a){e.exports=a.p+"assets/img/git-flow.2fcb774e.png"},198:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"bwton-gitflow"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bwton-gitflow","aria-hidden":"true"}},[e._v("#")]),e._v(" Bwton GitFlow")]),e._v(" "),r("h2",{attrs:{id:"项目阶段："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#项目阶段：","aria-hidden":"true"}},[e._v("#")]),e._v(" 项目阶段：")]),e._v(" "),r("pre",[r("code",[e._v("1. 开发阶段\n2. 测试阶段\n3. 发布阶段\n4. 线上bug阶段\n")])]),e._v(" "),r("h2",{attrs:{id:"基础分支："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基础分支：","aria-hidden":"true"}},[e._v("#")]),e._v(" 基础分支：")]),e._v(" "),r("pre",[r("code",[e._v("Master\ndevelop\nfeature*（多个）\nhotfix\nrelease (可以暂不考虑)\n")])]),e._v(" "),r("h2",{attrs:{id:"git流程："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git流程：","aria-hidden":"true"}},[e._v("#")]),e._v(" git流程：")]),e._v(" "),r("pre",[r("code",[e._v("1. 项目迭代开始时由组长从develop拉取新的feature分支，进入需求开发。\n2. 开发完成，使用feature进行自测，并发布到开发环境进行联调。\n3. 自测联调完成，可以直接使用featrue，进入测试环境发版（或者合入develop，进入测试环境发版，由于develop分支的唯一性，当多个需求重叠时，可能会有冲突）\n4. 测试完成后将feature合并到develop，由组长或指定小组长完成。\n5. 生产(预发)时develop分支合并到master分支，此时如果存在bug，需在原来的feature分支中进行修改测试通过后再合并到develop分支中，再由develop合并到master分支。\n6. 发版完成，验证通过，打tag，并通知其他正在feature开发的同事，拉取最新的develop到自己feature开发分支中，保证feature代码始终是基于develop最新代码开发。\n7. 如果遇到生产BUG，需要从master拉取hotfix进行修正，测试通过后合并到master和develop中；如有进行中的feature，需要讲develop合到feature中\n")])]),e._v(" "),r("h2",{attrs:{id:"注意点："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#注意点：","aria-hidden":"true"}},[e._v("#")]),e._v(" 注意点：")]),e._v(" "),r("pre",[r("code",[e._v("1. master权限只有组长有\n2. 不可在develop进行代码修改，所有修改都需要通过feature和hotfix来完成\n3. feature从develop拉取\n4. feature测试完成没有问题才能合并到develop\n5. master上生产后，打tag(特性+日期)\n6. 开发人员可以每日定期从develop拉取最新的代码到本地feature中 （暂定）\n")])]),e._v(" "),r("h2",{attrs:{id:"分支命名方式："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分支命名方式：","aria-hidden":"true"}},[e._v("#")]),e._v(" 分支命名方式：")]),e._v(" "),r("pre",[r("code",[e._v("feature/v1.0.0/需求特性\nhotfix/v1.0.0/需求特性+bug简述\n")])]),e._v(" "),r("h2",{attrs:{id:"流程图："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#流程图：","aria-hidden":"true"}},[e._v("#")]),e._v(" 流程图：")]),e._v(" "),r("p",[r("img",{attrs:{src:a(185),alt:""}})])])},[],!1,null,null,null);t.default=s.exports}}]);