(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{607:function(t,a,s){"use strict";s.r(a);var e=s(12),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("DNS 解析发生在浏览器地址栏输入 url 解析之后，用于将人可以理解的域名系统翻译成机器可以理解的 IP 地址。随着 DNS 的发展，DNS 除了采用 UDP 传输数据外，还会在必要的情况通过 TCP 协议进行数据传输。")]),t._v(" "),s("h2",{attrs:{id:"为什么选择使用-udp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么选择使用-udp"}},[t._v("#")]),t._v(" 为什么选择使用 UDP")]),t._v(" "),s("p",[t._v("早期 DNS 查询的数据包都非常小，DNS 查询请求体和响应分别是 15 和 70 字节；相比于 TCP 通信来说，建立三次握手和四次挥手连接时传输的数据消耗开销太大。此外，在实际过程中，DNS 解析往往不会只和一个服务器进行通信，可能会递归地与多个命名服务器进行通信，这样看来会加倍放大 TCP 协议在额外开销上的劣势。")]),t._v(" "),s("p",[t._v("当 DNS 请求体和响应的大小比较小的时候，通过 TCP 协议进行传输不仅需要传输更多的数据，还会消耗更多的资源，多次通信以及信息传输带来的时间成本在 DNS 查询较小时，TCP 的劣势会很明显，TCP 连接的可靠性在 DNS 场景下没有发挥出很大的作用。")]),t._v(" "),s("h2",{attrs:{id:"dns-协议的发展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns-协议的发展"}},[t._v("#")]),t._v(" DNS 协议的发展")]),t._v(" "),s("p",[t._v("现在 IPv4 即将无法分配，IPv6 的引入导致 DNS 查询的数据包变大；同时 DNS 协议中提出的 DNSSEC，新增多种资源记录为 DNS 客户端的 DNS 数据来源进行认证，记录的数据往往较大。这些都使得 DNS 需要处理的数据包越来越大，而我们规定一个 UDP 数据包的大小最多可以达到 64kB，这对于一个常见 DNS 查询来说其实已经非常大了；但是在实际生产中，一旦数据包中的数据超过了传输链路的最大传输单元（MTU，也就是单个数据包大小的上限，一般为 1500 字节），当前数据包就可能被分片传输、丢弃等，会导致使用 UDP 协议的 DNS 不稳定。")]),t._v(" "),s("h2",{attrs:{id:"tcp-协议的引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-协议的引入"}},[t._v("#")]),t._v(" TCP 协议的引入")]),t._v(" "),s("p",[t._v("上面说到的由于 DNS 查询数据量过大而导致的数据传输不稳定，这个问题刚好可以使用 TCP 来解决。我们知道 TCP 协议是面向连接的可靠协议，可以通过序列号、超时重传、阻塞控制、滑动窗口、流量控制等机制来保证消息的不重复不遗漏。接收方的 TCP 协议会对分片的数据重新进行拼装，然后上层的 DNS 等应用层协议可以直接使用处理好的完整数据。")]),t._v(" "),s("p",[t._v("同时，当数据包足够大的时候，TCP 三次握手带来的额外开销比例就会越来越小，与整个数据包相比就会趋向于 0 了。所以在 DNS 存储内容较多的时候，TCP 三次握手以及协议头带来的额外开销就不是关键影响因素了，但是 TCP 三次网络传输耗时还是没有办法避免的。")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("DNS 查询在刚设计时主要使用 UDP 协议进行通信，而在 DNS 的演进和发展中 TCP 协议也被加入到规范中。")]),t._v(" "),s("ol",[s("li",[t._v("DNS 设计之初就在区域传输中引入了 TCP 协议，在查询中使用 UDP 协议；")]),t._v(" "),s("li",[t._v("当 DNS 超过了 512 字节的限制，DNS 协议中规范第一次明确了：当 DNS 查询被截断时，应该使用 TCP 协议进行重试；")]),t._v(" "),s("li",[t._v("随后引入的 EDNS 机制允许 UDP 最多传输 4096 字节的数据，但是 MTU 的限制导致的数据分片以及丢失，使得 DNS 查询不可靠；")]),t._v(" "),s("li",[t._v("最近几年，重新规定了 DNS 应该同时支持 UDP 和 TCP 协议，TCP 协议也不再只是重试时的选择了。")])]),t._v(" "),s("h2",{attrs:{id:"dns-查询的类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns-查询的类型"}},[t._v("#")]),t._v(" DNS 查询的类型")]),t._v(" "),s("p",[t._v("A 记录、CNAME 记录是常见的查询类型，还包括 AXFR 类型的特殊查询。")]),t._v(" "),s("h2",{attrs:{id:"扩展-mtu-是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扩展-mtu-是什么"}},[t._v("#")]),t._v(" 扩展：MTU 是什么")]),t._v(" "),s("p",[t._v("MTU（Maximum Transmission Unit）最大传输单元，属于数据链路层的概念。MTU 限制的是数据链路层的 payload，也就是上层协议的大小，比如说 IP、ICMP 等。当传输的数据帧大于 MTU 时，上层协议会选择对数据帧进行分片或者直接丢弃。")]),t._v(" "),s("h3",{attrs:{id:"mtu-使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mtu-使用场景"}},[t._v("#")]),t._v(" MTU 使用场景")]),t._v(" "),s("p",[t._v("当在用笔记本上网时，靠的是路由器通信，路由器连接电信网络，然后访问"),s("code",[t._v("songbenblog.com")]),t._v("，从笔记本出发的一个以太网数据帧总共进过了以下路径：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("笔记本 -> 路由器 -> 电信机房 -> 服务器\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("其中，每个节点都有一个 MTU 值，如下：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("1500 1500 1500 笔记本 -> 路由器 -> 电信机房 -> 服务器\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("假设我把笔记本的 MTU 最大值设置为 1700，发送时候发了一个超大的 IP 数据包（2000），在外网传输的时候会被拆分成 2 个包，一个 1700、一个 300，然后加上头信息进行传输。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("1700 1500 1500 笔记本 -> 路由器 -> 电信机房 -> 服务器\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("当路由器接收了一个数据帧，发现如果大于 MTU 值，在 IP 包 DF 标志位为 1 情况下，路由器会直接将包丢弃；其实本质上 MTU 是在每个节点的管控值，当数据帧大于 MTU 时，要么选择分片要么直接丢弃。")]),t._v(" "),s("h3",{attrs:{id:"mtu-为什么是-1500"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mtu-为什么是-1500"}},[t._v("#")]),t._v(" MTU 为什么是 1500")]),t._v(" "),s("p",[t._v("一个标准的以太网数据帧大小是:1518，头信息有 14 字节（接收方 MAC 地址 48 位、发送方 MAC 地址 48 位、协议类型 16 位 "),s("code",[t._v("IP")]),t._v("），尾部校验和 FCS 占 4 字节，真正留给上层协议传输的数据大小就是 1518-14-4=1500")]),t._v(" "),s("p",[t._v("MTU 值更大不行吗？因为数据链路层的以太网帧是传输中最小可识别单元，再下一层就是物理层 01 数据传送了，一条带宽只能同时发送一个以太网帧，帧太大的话，只能等一帧发送完毕之后再发送下一帧，延迟太大了。")]),t._v(" "),s("p",[t._v("MTU 值更小不行吗？因为以太网帧头尾大小时固定，都是 14+4，所以值设置太小的话，传输效率就降低了。")]),t._v(" "),s("p",[t._v("总之，1518 这个值是考虑到传输效率与传输时间而折中选择的一个值；此外网络链路中的节点太多，其中某个节点的 MTU 值如果和别的节点不一样，很容易带来拆包重组的问题，甚至会导致无法发送。")]),t._v(" "),s("blockquote",[s("p",[t._v("参考链接："),s("a",{attrs:{href:"https://draveness.me/whys-the-design-dns-udp-tcp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("为什么 DNS 使用 UDP 协议"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://juejin.cn/post/7029321269778595877",target:"_blank",rel:"noopener noreferrer"}},[t._v("什么是MTU？为什么MTU值普遍都是1500？"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);