(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{593:function(a,s,t){"use strict";t.r(s);var e=t(4),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("在写代码的过程中，发现很多的时间都会耗费在寻找错误，debug太慢，导致效率不高。")]),a._v(" "),t("h2",{attrs:{id:"简述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简述"}},[a._v("#")]),a._v(" 简述")]),a._v(" "),t("p",[a._v("环境大概分为以下三种")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("开发环境：开发机就是云服务器，直接在云服务器就可以写代码，省掉了自己在本地部署环境，vscode安装Remote-SSH就行了。在没有push前，代码只能够在自己机器上生效。")])]),a._v(" "),t("li",[t("p",[a._v("测试环境：用来和前端进行联调用的，当本地代码push到远程仓库后，会自动进行部署代码，并在测试环境中生效。")])]),a._v(" "),t("li",[t("p",[a._v("线上环境：代码没有bug，并且和前端联调完毕，便可以申请代码上线。这一步骤一定要慎重，代码是直接交给用户去使用的，要经过严格的测试才好。")])])]),a._v(" "),t("h2",{attrs:{id:"中控机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#中控机"}},[a._v("#")]),a._v(" 中控机")]),a._v(" "),t("p",[a._v("作为开发者和线上服务器的桥梁，线上有着众多的服务器，采用nginx作为负载均衡，ui和servie为服务器集群。要代码的时候要注意保持数据的一致性。")]),a._v(" "),t("h3",{attrs:{id:"连接方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#连接方式"}},[a._v("#")]),a._v(" 连接方式")]),a._v(" "),t("p",[a._v("确保已经登陆到开发机")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ssh")]),a._v(" rd@172.31.10.189\n")])])]),t("h3",{attrs:{id:"日志目录的格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#日志目录的格式"}},[a._v("#")]),a._v(" 日志目录的格式")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("activity\nkafka\nmcenter\norder\npayment\npost\nscript\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v("\nstockflow\nwebserver\nitem\nmark\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])])]),t("p",[a._v("当线上曝出bug时候，就要来这里找错误，由于有着大量的日志，需要合理的采用脚本搜索需要的日志内容。")]),a._v(" "),t("p",[a._v("进入了一个误区，因为线上是服务器集群，查日志，因为不知道会在哪一个服务器运行，所以需要遍历所有的线上服务器，在中控机看不到具体实实在在的日志路径。")]),a._v(" "),t("h3",{attrs:{id:"查找技巧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查找技巧"}},[a._v("#")]),a._v(" 查找技巧")]),a._v(" "),t("ul",[t("li",[a._v("grep 后面跟着的可以是logid、手机号等等值，可以定位到日志内容就行了。")])]),a._v(" "),t("blockquote",[t("p",[a._v("cd /home/work/env/log/uiww 代表日志存在的路径")])]),a._v(" "),t("blockquote",[t("p",[a._v("uiww.log.2021041912 日志文件名 后缀规范为日期到小时级")])]),a._v(" "),t("blockquote",[t("p",[a._v("{ui} 代表要查询的机器为所有 ui 机器，与此对应，里面填 service 便查询的是所有的 service 服务器")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("atnodes "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'cd /home/work/env/log/uiww && grep 11092479 uiww.log.2021041912'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{ui}'")]),a._v("\n")])])]),t("ul",[t("li",[a._v("可以用 ｜ 分割，增加更多的筛选条件")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("atnodes "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'cd /home/work/env/log/uiww && grep 1333651 uiww.log.2021041912 | grep getSellItem'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{ui}'")]),a._v("\n")])])]),t("h2",{attrs:{id:"测试环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试环境"}},[a._v("#")]),a._v(" 测试环境")]),a._v(" "),t("p",[a._v("使用的是线下数据库和线下代码，线下代码又分为两种，提交的和未提交的。")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("未提交使用ip访问：http://52.80.116.187:8081/1.0/uifa/c2cbrandlist")])]),a._v(" "),t("li",[t("p",[a._v("push了代码：http://apidev.bangbangtown.cn/1.0/uifa/c2cbrandlist")])])]),a._v(" "),t("h3",{attrs:{id:"连接方式-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#连接方式-2"}},[a._v("#")]),a._v(" 连接方式")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ssh")]),a._v(" work@172.31.25.21\n")])])]),t("h3",{attrs:{id:"日志目录的格式-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#日志目录的格式-2"}},[a._v("#")]),a._v(" 日志目录的格式")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("post\ntag\nuigs\nuiww\nuifa\nc2citem\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])])]),t("p",[a._v("这个日志的查找就比较方便了，日志在哪个模块打印出，进行查找即可。")]),a._v(" "),t("p",[a._v("需要用到一些查文件的命令。")]),a._v(" "),t("h3",{attrs:{id:"查找技巧-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查找技巧-2"}},[a._v("#")]),a._v(" 查找技巧")]),a._v(" "),t("ul",[t("li",[a._v("tail 查询实时最新的日志代码")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" post.log.2021042302 -f\n")])])]),t("ul",[t("li",[a._v("more 可以翻页文件中的内容，只能向下翻页")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("more")]),a._v(" post.log.2021042302\n")])])]),t("ul",[t("li",[a._v("less 比more更高级，支持向上和向下翻页")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("less")]),a._v(" post.log.2021042302\n")])])]),t("ul",[t("li",[a._v("cat 这个在查日志的时候用的很少，适合查看简短的文本信息")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" post.log.2021042302\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);