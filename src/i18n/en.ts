// English copy. zh.ts is typed against this shape, so a missing key in
// either language fails the build instead of rendering blank.
export const en = {
  lang: "en",
  htmlLang: "en",
  meta: {
    title: "OpenQuanter — every cent between backtest and live, accounted for",
    description:
      "Open-source quantitative trading in Rust: margin-aware backtesting, one deterministic core for backtest and live, gap attribution, overfitting statistics. With Quanterdeck, a self-hosted console that keeps your keys on your machine.",
  },
  nav: {
    product: "Product",
    engine: "Engine",
    deck: "Quanterdeck",
    status: "Status",
    start: "Get started",
    switchLang: "中文",
    switchHref: "/zh/",
    theme: "Toggle theme",
  },
  hero: {
    badge: "OpenQuanter {oq} and Quanterdeck {deck} are out",
    title1: "Every cent between backtest and live,",
    title2: "accounted for.",
    sub: "A Rust trading engine that liquidates when a real venue would, runs backtest and live on one core, and explains the gap — with a self-hosted console on top.",
    primary: "Get started",
    secondary: "GitHub",
    copy: "Copy",
    copied: "Copied",
  },
  ledger: {
    title: "Same strategy, run twice",
    enforced: "Margin enforced",
    free: "Margin-free",
    finalLabel: "Final equity",
    stamp: "Liquidated",
    foot: "cargo run --example martingale_ladder",
  },
  gap: {
    title: "Live − backtest, decomposed",
    parts: ["Slippage", "Queue", "Funding", "Latency", "Fee tier", "Residual"],
  },
  strip: "Eight venues on the order path",
  stats: [
    { value: "35M", label: "ticks per second, with margin and a strategy" },
    { value: "0", label: "third-party dependencies in the engine" },
    { value: "+20,467", label: "trades kept that a commercial archive lost" },
    { value: "3", label: "order outcomes: accepted, rejected, unknown" },
  ],
  problem: {
    kicker: "The problem",
    title: "The dangerous error is the one that looks right.",
    sub: "Built after years of live trading hit six walls. None of them raised an error.",
    items: [
      { title: "Silent failure", body: "Zero-price fills, endless cancel loops. Nothing crashed." },
      { title: "Unexplained gap", body: "Live differs from backtest, and nobody can say where." },
      { title: "Two codebases", body: "Backtest and live are supposed to agree. Nothing makes them." },
      { title: "Slow research", body: "When a run takes tens of minutes, you stop asking questions." },
      { title: "Results that expire", body: "Code, data and parameters moved. Does it still hold?" },
      { title: "Free overfitting", body: "Keep the best of 200 runs — and never price the luck." },
    ],
  },
  product: {
    kicker: "The product",
    title: "Two layers. One account of the truth.",
    sub: "The engine produces evidence. The console makes it legible.",
    deckLayer: "Quanterdeck reads everything below — and changes nothing",
    flow: ["Venues", "Capture", "Journal", "Core", "Matching", "Margin", "Attribution"],
    flowNote: "One deterministic core for backtest and live",
    cards: [
      {
        name: "OpenQuanter",
        role: "Engine",
        body: "Composable Rust crates with Python bindings. Take one, or the whole stack.",
        chips: ["journal", "core", "matching", "margin", "backtest", "parity", "stats"],
        link: "https://github.com/openquanter/openquanter",
        cta: "Explore the engine",
      },
      {
        name: "Quanterdeck",
        role: "Console",
        body: "A self-hosted web console for runs, reconciliation, attribution and the trading host.",
        chips: ["self-hosted", "keys stay local", "signed releases"],
        link: "https://github.com/openquanter/quanterdeck",
        cta: "Explore the console",
      },
    ],
  },
  features: {
    kicker: "OpenQuanter",
    title: "Built to not flatter you.",
    margin: {
      title: "Margin-aware backtesting",
      body: "Tiered margin, liquidation, funding, fees. Real venues liquidate you — so does this.",
      a: "Margin-free",
      b: "Real",
    },
    ladder: {
      title: "Fidelity ladder",
      body: "Fast sweeps on L0, then queue, latency and the order book.",
      steps: [
        ["L0", "Tick replay"],
        ["L1", "Queue & latency"],
        ["L2", "Order book"],
      ],
    },
    attribution: {
      title: "Gap attribution",
      body: "A shadow kernel beside the venue splits the difference. What will not split is the residual.",
    },
    overfit: {
      title: "Overfitting, priced",
      body: "Every sweep reports the deflated Sharpe ratio and PBO, and rechecks the winner for look-ahead.",
    },
    journal: {
      title: "Deterministic journal",
      body: "Replay reproduces state exactly. Recovery, audit and research are one mechanism.",
    },
    deps: {
      title: "Zero dependencies",
      body: "The engine is plain std Rust. CI fails the build if that changes.",
    },
    python: {
      title: "Python strategies",
      body: "Write it in Python, run it on the Rust engine — up to 7× faster batched.",
    },
    orders: {
      title: "Honest order path",
      body: "A timeout is not a failure. Unknown is a first-class outcome.",
      chips: ["accepted", "rejected", "unknown"],
    },
  },
  deck: {
    kicker: "Quanterdeck",
    title: "A console that is allowed to say no.",
    sub: "“Cannot tell” never renders as “all clear”.",
    tabs: [
      ["overview", "Overview"],
      ["live", "Live"],
      ["reconcile", "Reconcile"],
      ["attribution", "Attribution"],
      ["blackbox-moment", "Black box"],
      ["deploy", "Releases"],
    ],
    points: [
      { title: "Keys stay local", body: "Self-hosted. Never holds your API keys." },
      { title: "Login, always", body: "Argon2id, Origin checks, a second factor off loopback." },
      { title: "Two-key operations", body: "Risky actions need a code only the host agent can check." },
      { title: "Black box", body: "Any moment of the last 90 days, opened up." },
    ],
  },
  audience: {
    kicker: "Who it is for",
    title: "For people who answer for the number.",
    items: [
      { title: "Levered traders", body: "Prop desks, small funds, or you — money at stake, someone to answer to." },
      { title: "Engine migrations", body: "Prove the behaviour did not change, trade by trade." },
      { title: "Anyone reporting results", body: "Investors and risk can run it and check, not just believe." },
    ],
    notTitle: "Not for",
    not: ["200-indicator libraries", "50 broker integrations", "Hosted one-click deploys", "Speed alone"],
  },
  status: {
    kicker: "Status",
    title: "Honest about where it stands.",
    built: "Built and tested",
    builtItems: [
      "Deterministic core & journal replay",
      "L0 / L1 / L2 matching",
      "Margin, liquidation, funding, fees",
      "Capture proven on live venues",
      "DSR, PBO, look-ahead checks",
      "8-venue order path, kill switch",
      "Python tier on PyPI",
      "Live loop on testnet + console",
    ],
    next: "Not yet",
    nextItems: [
      "Long live runs for attribution",
      "API stability",
      "ONNX inference",
      "Crates on crates.io",
    ],
    more: "Full status",
  },
  start: {
    kicker: "Get started",
    title: "Running in minutes.",
    steps: [
      { title: "Install the Python package", code: "pip install openquanter" },
      {
        title: "Run the example from the top of this page",
        code: "git clone https://github.com/openquanter/openquanter\ncd openquanter\ncargo run --example martingale_ladder",
      },
      {
        title: "Download Quanterdeck for Linux",
        code: "v={deck}; t=x86_64-unknown-linux-gnu\ncurl -LO https://github.com/openquanter/quanterdeck/releases/download/v$v/quanterdeck-v$v-$t.tar.gz{,.sha256}\nsha256sum -c quanterdeck-v$v-$t.tar.gz.sha256",
      },
    ],
    quickstart: "Quickstart guide",
    releases: "All releases",
  },
  footer: {
    tagline: "Every cent between backtest and live, accounted for.",
    disclaimer: "Early development. Not financial advice; leveraged trading can lose more than you put in.",
    cols: [
      {
        title: "OpenQuanter",
        links: [
          ["GitHub", "https://github.com/openquanter/openquanter"],
          ["Why it exists", "https://github.com/openquanter/openquanter/blob/main/docs/WHY.md"],
          ["Quickstart", "https://github.com/openquanter/openquanter/blob/main/docs/QUICKSTART.md"],
          ["PyPI", "https://pypi.org/project/openquanter/"],
        ],
      },
      {
        title: "Quanterdeck",
        links: [
          ["GitHub", "https://github.com/openquanter/quanterdeck"],
          ["Security", "https://github.com/openquanter/quanterdeck/blob/main/docs/SECURITY.zh-CN.md"],
          ["Releases", "https://github.com/openquanter/quanterdeck/releases"],
        ],
      },
    ],
  },
};

export type Copy = typeof en;
