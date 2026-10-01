import type { Copy } from "./en";

// Chinese copy, key for key with en.ts. `Copy` makes a missing or
// misshapen key a build error.
export const zh: Copy = {
  lang: "zh",
  htmlLang: "zh-CN",
  meta: {
    title: "OpenQuanter —— 回测与实盘之间的每一分钱，都对得上",
    description:
      "开源的 Rust 量化交易引擎：建模保证金与强平，以 journal 重放，并对回测与实盘的差额做归因。配套自托管控制台 Quanterdeck，密钥只留在你自己的机器上。",
  },
  nav: {
    why: "为什么",
    engine: "引擎",
    deck: "Quanterdeck",
    status: "现状",
    start: "上手",
    github: "GitHub",
    switchLang: "EN",
    switchHref: "/",
    theme: "切换主题",
  },
  hero: {
    eyebrow: "开源量化交易 · Rust · Apache-2.0",
    title: "回测与实盘之间的每一分钱，都对得上。",
    motto: "解释不了的盈亏，不算盈亏。",
    lede:
      "OpenQuanter 是一个不再「讨好你」的交易引擎：真实交易所会强平的时候它就强平，回测与实盘跑在同一个确定性内核上，并把二者之间的差额拆开来讲清楚。Quanterdeck 是把这些数字摆到你面前的控制台——跑在你自己的机器上。",
    primary: "开始上手",
    secondary: "在 GitHub 查看",
    copy: "复制",
    copied: "已复制",
  },
  ledger: {
    caption: "同一个策略、同一段行情，跑两遍",
    command: "cargo run --example martingale_ladder",
    colEnforced: "计入保证金",
    colFree: "不计保证金",
    rows: [
      ["最终权益", "61.53", "20,908.11"],
      ["最低权益", "61.53", "−30,302.14"],
      ["成交笔数", "4", "6"],
      ["强平次数", "1", "0"],
    ],
    overstated: "高估了",
    overstatedValue: "20,846.58 USDT",
    stamp: "已强平",
    note:
      "这是仓库里的真实输出，在你的机器上可以复现。权益跌到零以下不是回撤，而是账户已经不存在了。大多数开源回测器给你的，是右边那一列。",
  },
  proof: [
    {
      value: "3538 万",
      unit: "tick / 秒",
      label: "撮合、保证金、记账加一个策略，跑在一个核上",
      foot: "建模保证金大约要花掉一半吞吐——量出来摆着，不藏。",
    },
    {
      value: "0",
      unit: "个依赖",
      label: "整个引擎里的第三方 crate 数量",
      foot: "由 CI 检查，不是口头承诺。取一个 crate，或者全部拿走。",
    },
    {
      value: "+20,467",
      unit: "笔成交",
      label: "某商业数据存档丢了、而我们的采集保住的真实成交",
      foot: "BTCUSDT 永续，2026-09-01，按成交 id 逐笔核对。",
    },
    {
      value: "3",
      unit: "种结果",
      label: "每一笔下单：接受、拒绝，或者未知",
      foot: "超时不等于失败。把它当失败处理，就会出现重复持仓。",
    },
  ],
  wall: {
    kicker: "为什么有它",
    title: "最危险的错误，是看起来正确的那一个。",
    lede:
      "OpenQuanter 2 是对一个闭源平台的重写——那个平台用真钱、在真实交易所上连续交易了好几年。它撞上了六面墙，而没有一面曾经报过错。",
    items: [
      {
        title: "失败是静默的",
        body: "价格为零的合成成交、永不结束的撤单循环、把 24 小时成交量写进逐笔字段的行情源。没有崩溃，系统一直以为自己没事。",
      },
      {
        title: "差额说不清从哪来",
        body: "回测很好，实盘不一样，而每一次偏差最后都归结为「市场变了」。加了杠杆，你就是在放大一个自己不理解的东西。",
      },
      {
        title: "回测与实盘是两套代码",
        body: "它们本应一致，却没有任何东西保证一致。它们分道扬镳的时候，什么也不会提醒你。",
      },
      {
        title: "慢研究会变成小研究",
        body: "一次回测要几十分钟，你就不再去试那些「多半没用但值得一看」的想法。速度决定了哪些问题会被提出来。",
      },
      {
        title: "过去的结论会悄悄过期",
        body: "代码改了，数据修了，参数动了。去年春天那个结果还成立吗？没有来源记录，谁也说不清。",
      },
      {
        title: "过拟合没有价签",
        body: "扫两百组参数，留下最好的那组。赢家只是噪声的概率是算得出来的——却几乎从不被打印出来。",
      },
    ],
  },
  audience: {
    kicker: "给谁用",
    title: "为那些必须为这个数字负责的人而做。",
    forTitle: "适合",
    for: [
      {
        title: "真金白银、带杠杆的交易者",
        body: "自营团队、小基金，或者你自己。盈亏里有 5% 解释不了的 20 倍策略，和只有 0.3% 解释不了的，不是同一种东西。",
      },
      {
        title: "正在迁移交易引擎的团队",
        body: "你必须证明行为没有变。这里的对账工具，恰恰是在它要度量的引擎之前就造好的，就是为了这件事。",
      },
      {
        title: "需要向别人展示结果的人",
        body: "投资人、合伙人、风控。商业产品说「我们的回测可信」，你只能选择相信；开源项目这么说，你可以自己跑一遍来核对。",
      },
    ],
    notTitle: "不适合",
    not: [
      "想要两百个指标库的人。",
      "想要接五十家券商的人——每一个未经验证的适配器都会稀释「可证明」这件事。",
      "想要托管和一键部署的人——那会把「可复现」变成「请相信我们的服务器」。",
      "只追求最快的人。在这里，速度是前提，不是卖点。",
    ],
  },
  stack: {
    kicker: "怎么拼在一起",
    title: "两层结构，一本真账。",
    lede:
      "引擎负责产出证据，控制台负责让证据看得懂。依赖是单向的：Quanterdeck 读 OpenQuanter 写下的东西，框架本身完全不需要知道控制台的存在。",
    layers: {
      deck: "Quanterdeck —— 控制台",
      deckItems: ["总览", "实盘", "对账", "归因", "黑匣子", "发布"],
      engine: "OpenQuanter —— 引擎",
      flow: [
        ["采集", "原样保存交易所记录，manifest 带哈希"],
        ["Journal", "有序、可重放、断尾安全"],
        ["确定性内核", "回测与实盘共用一个状态机"],
        ["撮合 L0 → L2", "逐 tick 重放、排队与延迟、订单簿"],
        ["保证金与成本", "分级、强平、资金费、手续费"],
        ["对账与归因", "逐笔比对，残差如实报告"],
      ],
      venues: "交易所",
      venuesNote: "下单路径 8 家 · 其中 3 家接入账户流",
      lang: "低延迟用 Rust trait · 研究用 Python",
    },
    products: [
      {
        name: "OpenQuanter",
        role: "引擎",
        body: "一组可组合的 Rust crate——类型、journal、内核、撮合、保证金、回测、数据、对账、统计——并提供 Python 绑定。可以只用保证金模型而不用引擎，只用统计量而不用回测器，也可以整套拿走。",
        facts: ["Rust · Python", "Apache-2.0", "pip install openquanter"],
        link: "https://github.com/openquanter/openquanter",
      },
      {
        name: "Quanterdeck",
        role: "控制台",
        body: "一个自托管的 Web 控制台，覆盖引擎的 journal、回测记录和交易主机。它把进程认为的状态和交易所实际持有的状态逐项对账，而且绝不把「无法判断」显示成「一切正常」。",
        facts: ["自托管", "密钥不出本机", "Linux 发布包"],
        link: "https://github.com/openquanter/quanterdeck",
      },
    ],
    latest: "最新版本",
  },
  features: {
    kicker: "OpenQuanter",
    title: "引擎要做对的那些事。",
    items: [
      {
        title: "计入保证金的回测",
        body: "分级维持保证金、推导而非照抄的强平价、资金费尖峰、区分 maker/taker 的手续费（含返佣）。真实交易所会强平你，这里也会。",
      },
      {
        title: "保真度阶梯",
        body: "L0 逐 tick 重放用于参数扫描，L1 把排队位置和延迟建模为分布，L2 重建订单簿。每次运行都报告它用了哪些假设来定价。",
      },
      {
        title: "差额归因",
        body: "一个影子内核在交易所旁边、用同样的观测数据并行运行。差额拆成滑点、排队、资金费、延迟和费率档；拆不开的部分，记为未解释残差。",
      },
      {
        title: "默认输出过拟合统计",
        body: "每次参数扫描都会给出 Deflated Sharpe 和回测过拟合概率（PBO）——不管有没有人要；并对赢家重跑一遍，检查前视偏差。",
      },
      {
        title: "Journal 优先，确定性",
        body: "一个跑在有序 journal 上的纯状态机。崩溃恢复、审计、可复现研究和模糊测试是同一套机制，重放能精确还原状态。",
      },
      {
        title: "可组合，零依赖",
        body: "每个 crate 都能单独构建。引擎是纯标准库 Rust，一旦引入依赖 CI 就会失败。用其中一块，不等于接受一整个平台。",
      },
      {
        title: "谨慎的下单路径",
        body: "发送前由调用方生成订单 id，「未知」是一等结果，下单前风控闸门带熔断开关，成交会和交易所自己的视图对账。",
      },
      {
        title: "Python，但不是第二个引擎",
        body: "用 Python 写策略，由 Rust 引擎来跑——逐 tick 调用，或批量调用快至七倍，而批量的代价是量出来的，不是假设的。",
      },
    ],
  },
  deck: {
    kicker: "Quanterdeck",
    title: "一个敢于说「不」的控制台。",
    lede:
      "没有量化经验的人，三十分钟内在自己的机器上看到第一条权益曲线；有经验的人，永远不会把「无法判断」读成「一切正常」。",
    shots: [
      ["overview", "总览——交易主机是否一切正常，每一个「不」在哪里处理"],
      ["live", "实盘——持仓、挂单、成交、行情与风控限额在同一页"],
      ["reconcile", "对账——进程认为的，对比交易所实际持有的"],
      ["attribution", "归因——五个成因、三种状态；未知的残差不是零"],
      ["blackbox-moment", "黑匣子——过去 90 天里的任意时刻，展开来看"],
      ["deploy", "发布——签名构建，部署与回滚"],
    ],
    rulesTitle: "三条硬规则，写在代码里而不是文档里",
    rules: [
      ["「无法判断」永远不会显示成「一致」。", "基准失效时显示琥珀色，不是绿色——也不是红色，因为它不是回归。"],
      ["分解不完整时，残差是未知，而不是零。", "从不完整的分解里算出一个零，等于宣称一切都解释清楚了。"],
      ["读取永远不改变运行时。", "控制台只是它所展示系统的观察者。"],
    ],
    securityTitle: "密钥只留在你的机器上",
    security: [
      "不托管、不是 SaaS——它从不持有你的 API 密钥。",
      "无条件需要登录，即使只听本机：Argon2id、Host 与 Origin 校验，非本机访问强制第二因素。",
      "高风险操作需要一次性验证码，由一个控制台无法冒充的独立主机代理校验。",
      "哈希链审计日志，并在机器之外留有锚点。",
    ],
  },
  status: {
    kicker: "现状",
    title: "对自己走到哪一步，说实话。",
    lede: "仍在早期，并且把话说清楚。设计支柱描述的是方向，这里是现状。决定是否使用之前，请先读完整的现状说明。",
    builtTitle: "已建成并有测试",
    built: [
      "确定性内核，journal 重放可精确还原状态",
      "L0 撮合（冻结为回归锚点），以及 L1、L2 两档",
      "分级保证金、强平、资金费与手续费",
      "采集已在真实交易所和独立存档上验证",
      "Deflated Sharpe、PBO，带前视检查的参数扫描",
      "覆盖 8 家交易所的下单路径、下单前风控闸门、熔断开关",
      "Python 策略层与统计量已发布到 PyPI",
      "实盘闭环在测试网运行，并由控制台监控",
    ],
    notTitle: "尚未完成",
    not: [
      "供差额归因拆解的长时间实盘运行——已建成，尚未长时间运行",
      "API 稳定——任何 API 仍可能在两次发布之间改变",
      "ONNX 与编译树推理",
      "crates.io 上的 crate——目前请从源码或 PyPI 安装",
    ],
    full: "README 里的完整现状",
  },
  start: {
    kicker: "上手",
    title: "几分钟就能跑起来。",
    steps: [
      {
        title: "评估你已有的回测",
        note: "Deflated Sharpe、过拟合概率和 Python 策略层。提供 Linux、macOS、Windows 的 wheel，不需要 Rust 工具链。",
        code: "pip install openquanter",
      },
      {
        title: "让引擎自己讲清楚",
        note: "三个示例，不需要下载数据。第三个，就是本页顶部那张对账单。",
        code: "git clone https://github.com/openquanter/openquanter\ncd openquanter\ncargo run --example martingale_ladder",
      },
      {
        title: "给它配一个控制台",
        note: "下载 Linux 版 Quanterdeck 发布包（控制台、主机代理与界面），并校验它的校验和。",
        code: "v={deck}; t=x86_64-unknown-linux-gnu\ncurl -LO https://github.com/openquanter/quanterdeck/releases/download/v$v/quanterdeck-v$v-$t.tar.gz{,.sha256}\nsha256sum -c quanterdeck-v$v-$t.tar.gz.sha256",
      },
    ],
    quickstart: "阅读快速上手",
    releases: "全部发布",
  },
  footer: {
    tagline: "回测与实盘之间的每一分钱，都对得上。",
    disclaimer: "早期开发阶段。不构成投资建议；杠杆交易的亏损可能超过本金。使用风险自负。",
    license: "Apache-2.0",
    cols: [
      {
        title: "OpenQuanter",
        links: [
          ["代码仓库", "https://github.com/openquanter/openquanter"],
          ["为什么有它", "https://github.com/openquanter/openquanter/blob/main/docs/WHY.zh-CN.md"],
          ["快速上手", "https://github.com/openquanter/openquanter/blob/main/docs/QUICKSTART.zh-CN.md"],
          ["发布", "https://github.com/openquanter/openquanter/releases"],
          ["PyPI", "https://pypi.org/project/openquanter/"],
        ],
      },
      {
        title: "Quanterdeck",
        links: [
          ["代码仓库", "https://github.com/openquanter/quanterdeck"],
          ["安全模型", "https://github.com/openquanter/quanterdeck/blob/main/docs/SECURITY.zh-CN.md"],
          ["发布", "https://github.com/openquanter/quanterdeck/releases"],
        ],
      },
    ],
  },
};
