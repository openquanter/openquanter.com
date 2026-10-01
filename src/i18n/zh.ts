import type { Copy } from "./en";

// Chinese copy, key for key with en.ts; `Copy` enforces the shape.
export const zh: Copy = {
  lang: "zh",
  htmlLang: "zh-CN",
  meta: {
    title: "OpenQuanter —— 回测与实盘之间的每一分钱，都对得上",
    description:
      "开源 Rust 量化交易：计入保证金的回测、回测与实盘共用一个确定性内核、差额归因、过拟合统计。配套自托管控制台 Quanterdeck，密钥只留在你自己的机器上。",
  },
  nav: {
    product: "产品",
    engine: "引擎",
    deck: "Quanterdeck",
    status: "现状",
    start: "上手",
    switchLang: "EN",
    switchHref: "/",
    theme: "切换主题",
  },
  hero: {
    badge: "OpenQuanter {oq} 与 Quanterdeck {deck} 已发布",
    title1: "回测与实盘之间的每一分钱，",
    title2: "都对得上。",
    sub: "一个 Rust 交易引擎：真实交易所会强平时它就强平，回测与实盘跑在同一个内核上，并把二者的差额讲清楚——上面再配一个自托管控制台。",
    primary: "开始上手",
    secondary: "GitHub",
    copy: "复制",
    copied: "已复制",
  },
  ledger: {
    title: "同一个策略，跑两遍",
    enforced: "计入保证金",
    free: "不计保证金",
    finalLabel: "最终权益",
    stamp: "已强平",
    foot: "cargo run --example martingale_ladder",
  },
  gap: {
    title: "实盘 − 回测，拆开来看",
    parts: ["滑点", "排队", "资金费", "延迟", "费率档", "残差"],
  },
  strip: "下单路径已接入八家交易所",
  stats: [
    { value: "3500 万", label: "每秒 tick，含保证金与策略" },
    { value: "0", label: "引擎中的第三方依赖" },
    { value: "+20,467", label: "某商业存档丢失、我们保住的成交" },
    { value: "3", label: "种下单结果：接受、拒绝、未知" },
  ],
  problem: {
    kicker: "要解决的问题",
    title: "最危险的错误，是看起来正确的那一个。",
    sub: "多年实盘撞上了六面墙，没有一面报过错。",
    items: [
      { title: "静默失败", body: "零价成交、无尽的撤单循环。没有崩溃。" },
      { title: "差额说不清", body: "实盘和回测不一样，却说不出差在哪。" },
      { title: "两套代码", body: "回测与实盘本应一致，却没有任何保证。" },
      { title: "研究太慢", body: "跑一次要几十分钟，人就不再提问了。" },
      { title: "结论会过期", body: "代码、数据、参数都变了，结论还成立吗？" },
      { title: "过拟合不要钱", body: "两百次里挑最好的——却从不给运气定价。" },
    ],
  },
  product: {
    kicker: "产品",
    title: "两层结构，一本真账。",
    sub: "引擎负责产出证据，控制台负责让证据看得懂。",
    deckLayer: "Quanterdeck 读取下面的一切——而不改变任何东西",
    flow: ["交易所", "采集", "Journal", "内核", "撮合", "保证金", "归因"],
    flowNote: "回测与实盘共用一个确定性内核",
    cards: [
      {
        name: "OpenQuanter",
        role: "引擎",
        body: "可组合的 Rust crate，附 Python 绑定。取其中一个，或者整套拿走。",
        chips: ["journal", "内核", "撮合", "保证金", "回测", "对账", "统计"],
        link: "https://github.com/openquanter/openquanter",
        cta: "了解引擎",
      },
      {
        name: "Quanterdeck",
        role: "控制台",
        body: "自托管的 Web 控制台：回测记录、对账、归因，以及交易主机本身。",
        chips: ["自托管", "密钥不出本机", "签名发布"],
        link: "https://github.com/openquanter/quanterdeck",
        cta: "了解控制台",
      },
    ],
  },
  features: {
    kicker: "OpenQuanter",
    title: "生来就不讨好你。",
    margin: {
      title: "计入保证金的回测",
      body: "分级保证金、强平、资金费、手续费。真实交易所会强平你，这里也会。",
      a: "不计保证金",
      b: "实际",
    },
    ladder: {
      title: "保真度阶梯",
      body: "L0 上快速扫参，再逐级加上排队、延迟与订单簿。",
      steps: [
        ["L0", "逐 tick 重放"],
        ["L1", "排队与延迟"],
        ["L2", "订单簿"],
      ],
    },
    attribution: {
      title: "差额归因",
      body: "影子内核在交易所旁并行运行，把差额拆开；拆不开的，记为残差。",
    },
    overfit: {
      title: "给过拟合定价",
      body: "每次扫参都给出 Deflated Sharpe 与 PBO，并对赢家重查前视偏差。",
    },
    journal: {
      title: "确定性 journal",
      body: "重放精确还原状态。恢复、审计与研究是同一套机制。",
    },
    deps: {
      title: "零依赖",
      body: "引擎是纯标准库 Rust，引入依赖 CI 就失败。",
    },
    python: {
      title: "Python 策略",
      body: "用 Python 写，在 Rust 引擎上跑——批量模式最快七倍。",
    },
    orders: {
      title: "诚实的下单路径",
      body: "超时不等于失败，「未知」是一等结果。",
      chips: ["接受", "拒绝", "未知"],
    },
  },
  deck: {
    kicker: "Quanterdeck",
    title: "一个敢于说「不」的控制台。",
    sub: "「无法判断」永远不会显示成「一切正常」。",
    tabs: [
      ["overview", "总览"],
      ["live", "实盘"],
      ["reconcile", "对账"],
      ["attribution", "归因"],
      ["blackbox-moment", "黑匣子"],
      ["deploy", "发布"],
    ],
    points: [
      { title: "密钥不出本机", body: "自托管，从不持有你的 API 密钥。" },
      { title: "始终需要登录", body: "Argon2id、Origin 校验，非本机强制第二因素。" },
      { title: "双钥匙操作", body: "高风险操作需要只有主机代理能校验的验证码。" },
      { title: "黑匣子", body: "过去 90 天里的任意时刻，展开来看。" },
    ],
  },
  audience: {
    kicker: "给谁用",
    title: "为必须对这个数字负责的人而做。",
    items: [
      { title: "带杠杆的交易者", body: "自营、小基金或你自己——有真金白银，也有人要交代。" },
      { title: "迁移交易引擎", body: "逐笔证明行为没有改变。" },
      { title: "需要展示结果的人", body: "投资人与风控可以自己跑一遍核对，而不只是相信。" },
    ],
    notTitle: "不适合",
    not: ["两百个指标库", "五十家券商接口", "托管与一键部署", "只追求速度"],
  },
  status: {
    kicker: "现状",
    title: "对自己走到哪一步，说实话。",
    built: "已建成并有测试",
    builtItems: [
      "确定性内核与 journal 重放",
      "L0 / L1 / L2 撮合",
      "保证金、强平、资金费、手续费",
      "采集已在真实交易所验证",
      "DSR、PBO、前视检查",
      "8 家交易所下单路径、熔断开关",
      "Python 层已上 PyPI",
      "测试网实盘闭环 + 控制台",
    ],
    next: "尚未完成",
    nextItems: ["供归因的长时间实盘", "API 稳定", "ONNX 推理", "crates.io 发布"],
    more: "完整现状",
  },
  start: {
    kicker: "上手",
    title: "几分钟跑起来。",
    steps: [
      { title: "安装 Python 包", code: "pip install openquanter" },
      {
        title: "运行本页顶部那个示例",
        code: "git clone https://github.com/openquanter/openquanter\ncd openquanter\ncargo run --example martingale_ladder",
      },
      {
        title: "下载 Linux 版 Quanterdeck",
        code: "v={deck}; t=x86_64-unknown-linux-gnu\ncurl -LO https://github.com/openquanter/quanterdeck/releases/download/v$v/quanterdeck-v$v-$t.tar.gz{,.sha256}\nsha256sum -c quanterdeck-v$v-$t.tar.gz.sha256",
      },
    ],
    quickstart: "快速上手指南",
    releases: "全部发布",
  },
  footer: {
    tagline: "回测与实盘之间的每一分钱，都对得上。",
    disclaimer: "早期开发阶段。不构成投资建议；杠杆交易的亏损可能超过本金。",
    cols: [
      {
        title: "OpenQuanter",
        links: [
          ["GitHub", "https://github.com/openquanter/openquanter"],
          ["为什么有它", "https://github.com/openquanter/openquanter/blob/main/docs/WHY.zh-CN.md"],
          ["快速上手", "https://github.com/openquanter/openquanter/blob/main/docs/QUICKSTART.zh-CN.md"],
          ["PyPI", "https://pypi.org/project/openquanter/"],
        ],
      },
      {
        title: "Quanterdeck",
        links: [
          ["GitHub", "https://github.com/openquanter/quanterdeck"],
          ["安全模型", "https://github.com/openquanter/quanterdeck/blob/main/docs/SECURITY.zh-CN.md"],
          ["发布", "https://github.com/openquanter/quanterdeck/releases"],
        ],
      },
    ],
  },
};
