(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{485:function(e,t,v){"use strict";v.r(t);var a=v(4),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"简述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简述"}},[e._v("#")]),e._v(" 简述")]),e._v(" "),v("p",[e._v("搭建php环境需要用到三个软件")]),e._v(" "),v("ol",[v("li",[e._v("Apache：用作搭建服务器")]),e._v(" "),v("li",[e._v("PHP：用作解析php代码")]),e._v(" "),v("li",[e._v("Mysql：用作数据存储")])]),e._v(" "),v("p",[e._v("下载Apache的时候我可是费了老劲了，短短10M我几乎花了五个小时才下载玩。在将PHP加载到Apache中的时候需要需要注意它们的版本，否则将会加载失败，我这里"),v("code",[e._v("PHP2.2.25")]),e._v("和"),v("code",[e._v("httpd5.4.8")]),e._v("、"),v("code",[e._v("PHP2.4.23")]),e._v("和"),v("code",[e._v("httpd7.4.2")]),e._v("是可以匹配成功的（httpd是Apache超文本传输协议(HTTP)服务器的主程序，下载Apache就是它），希望不要再踩坑了。")]),e._v(" "),v("p",[e._v("可以参考"),v("a",{attrs:{href:"https://www.bilibili.com/video/av12863134",target:"_blank",rel:"noopener noreferrer"}},[e._v("学习地址"),v("OutboundLink")],1),e._v("中老师讲的，完美配置。")]),e._v(" "),v("h2",{attrs:{id:"下载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[e._v("#")]),e._v(" 下载")]),e._v(" "),v("p",[e._v("apache有支持https的，给的是不支持的。适用于64位Windows10计算机。")]),e._v(" "),v("p",[e._v("Apache下载地址："),v("a",{attrs:{href:"https://www.lanzous.com/i9g049i",target:"_blank",rel:"noopener noreferrer"}},[e._v("点我"),v("OutboundLink")],1)]),e._v(" "),v("p",[e._v("PHP下载地址："),v("a",{attrs:{href:"https://www.lanzous.com/i9ahfbc",target:"_blank",rel:"noopener noreferrer"}},[e._v("点我"),v("OutboundLink")],1)]),e._v(" "),v("p",[e._v("Mysql下载地址："),v("a",{attrs:{href:"https://www.lanzous.com/i93viof",target:"_blank",rel:"noopener noreferrer"}},[e._v("点我"),v("OutboundLink")],1)]),e._v(" "),v("h2",{attrs:{id:"安装"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),v("p",[e._v("安装就不需要多说了，为了方便以后的配置，建议在D盘目录下建立一个名称为"),v("code",[e._v("server")]),e._v("的文件夹，将三个软件都安装在这个文件夹中")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("httpd的安装目录为"),v("code",[e._v("D:\\server\\apache")])])]),e._v(" "),v("li",[v("p",[e._v("PHP的安装目录为"),v("code",[e._v("D:\\server\\php7")])])])]),e._v(" "),v("p",[e._v("php是压缩包，不需要安装，只需要将里面的文件放到php7中就可以了")]),e._v(" "),v("ul",[v("li",[e._v("Mysql的安装目录"),v("code",[e._v("D:\\server\\mysql")])])]),e._v(" "),v("h2",{attrs:{id:"配置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[e._v("#")]),e._v(" 配置")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("将"),v("code",[e._v("D:\\server\\apache\\bin")]),e._v("配置到环境变量中，mysql因为我是之前就安装了，如果没有环境变量也需要把它的bin目录加载进来。")])]),e._v(" "),v("li",[v("p",[e._v("打开"),v("code",[e._v("D:\\server\\apache\\conf\\httpd.conf")])])])]),e._v(" "),v("p",[e._v("需要认识几个地方")]),e._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[v("p",[e._v("37行的"),v("code",[e._v("ServerRoot")]),e._v("就是服务的根目录，这里不需要修改。")])]),e._v(" "),v("li",[v("p",[e._v("将220行的"),v("code",[e._v("#ServerName localhost:80")]),e._v("修改成"),v("code",[e._v("ServerName localhost")]),e._v(",这里是服务的名字。")])]),e._v(" "),v("li",[v("p",[e._v("58行的"),v("code",[e._v("Listen 80")]),e._v("这里是服务监听的端口，通常不需要修改。")])]),e._v(" "),v("li",[v("p",[e._v("配置DNS域名解析")])])]),e._v(" "),v("p",[e._v("打开"),v("code",[e._v("C:\\Windows\\System32\\drivers\\etc\\hosts")]),e._v("，注意要给管理员权限（但是我的给了也不行，后来用vscode才修改成功，今天再一看又可以修改了，迷），在最后一行添加")]),e._v(" "),v("p",[v("code",[e._v("127.0.0.1 localhost")])]),e._v(" "),v("ol",{attrs:{start:"7"}},[v("li",[e._v("三项配置")])]),e._v(" "),v("p",[e._v("在178行后面添加")]),e._v(" "),v("div",{staticClass:"language-yaml extra-class"},[v("pre",{pre:!0,attrs:{class:"language-yaml"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#加载PHP")]),e._v("\nLoadModule php7_module 'D"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("/server/php7/php7apache2_4.dll'\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#将PHP配置文件加载到Apache配置文件")]),e._v("\nPHPIniDir 'D"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("/server/php7/php.ini'\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#分配给PHP")]),e._v("\nAddType application/x"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("httpd"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("php .php\n")])])]),v("ol",{attrs:{start:"8"}},[v("li",[e._v("将"),v("code",[e._v("D:\\server\\php7\\php.ini-development")]),e._v("复制一份，然后将"),v("code",[e._v("php - 副本.ini-development")]),e._v("修改为"),v("code",[e._v("php.ini")])])]),e._v(" "),v("h2",{attrs:{id:"将mysql加载到php中"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#将mysql加载到php中"}},[e._v("#")]),e._v(" 将MySQL加载到PHP中")]),e._v(" "),v("p",[e._v("这里我就简短的说明一下，因为如果只是学习php语言的话很可能用不到。但是很重要。")]),e._v(" "),v("p",[e._v("在上面推荐的视频中，使用的时"),v("code",[e._v("php5.4.8")]),e._v("版本，有mysql的扩展，但是下载的软件时"),v("code",[e._v("php7.4.2")]),e._v("版本，在这哥版本中已经删掉了"),v("code",[e._v("php_mysql.dll")]),e._v("扩展，但是可以使用"),v("code",[e._v("php_pdo_mysql.dll")]),e._v("来代替。")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("打开"),v("code",[e._v("D:\\server\\php7\\php.ini")])])]),e._v(" "),v("li",[v("p",[e._v("搜索"),v("code",[e._v("pdo_mysql")]),e._v(",将927行"),v("code",[e._v(";extension=pdo_mysql")]),e._v("修改成"),v("code",[e._v("extension=pdo_mysql")])])]),e._v(" "),v("li",[v("p",[e._v("搜索"),v("code",[e._v("extension_dir")]),e._v("在757行后面添加")])])]),e._v(" "),v("div",{staticClass:"language-ini extra-class"},[v("pre",{pre:!0,attrs:{class:"language-ini"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[e._v(";增加扩展路径")]),e._v("\n"),v("span",{pre:!0,attrs:{class:"token constant"}},[e._v("extension_dir")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token attr-value"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(' "D:/server/php7/ext"')]),e._v("\n")])])]),v("p",[e._v("至此mysql已经加载成功，pdo是一个连接mysql数据库的工具。")]),e._v(" "),v("h2",{attrs:{id:"检查"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#检查"}},[e._v("#")]),e._v(" 检查")]),e._v(" "),v("p",[e._v("打开CMD命令行，输入"),v("code",[e._v("httpd -t")]),e._v("指令，可以检查是否有语法错误，如果返回")]),e._v(" "),v("div",{staticClass:"language-yaml extra-class"},[v("pre",{pre:!0,attrs:{class:"language-yaml"}},[v("code",[e._v("'httpd' 不是内部或外部命令，也不是可运行的程序\n或批处理文件。\n")])])]),v("p",[e._v("说明是没有配置环境变量。")]),e._v(" "),v("p",[v("code",[e._v("httpd -M")]),e._v("可以看哪写模块加载到服务程序中。")]),e._v(" "),v("p",[e._v("注意每次更改配置文件都要重启一下。")]),e._v(" "),v("h2",{attrs:{id:"测试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[e._v("#")]),e._v(" 测试")]),e._v(" "),v("p",[e._v("如果前面一切都没有问题，那么现在就可以测试了")]),e._v(" "),v("p",[e._v("在"),v("code",[e._v("D:\\server\\apache\\htdocs")]),e._v("中新建一个"),v("code",[e._v("index.php")]),e._v(",里面内容为")]),e._v(" "),v("div",{staticClass:"language-php extra-class"},[v("pre",{pre:!0,attrs:{class:"language-php"}},[v("code",[v("span",{pre:!0,attrs:{class:"token php language-php"}},[v("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("<?php")]),e._v("\n  "),v("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("echo")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'hello world'")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),v("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("?>")])]),e._v("\n")])])]),v("p",[e._v("在浏览器输入"),v("code",[e._v("http://localhost/index.php")]),e._v("正常时可以返回"),v("code",[e._v("hello world")]),e._v("的。不清楚的可以参考上面推荐的视频。")])])}),[],!1,null,null,null);t.default=s.exports}}]);