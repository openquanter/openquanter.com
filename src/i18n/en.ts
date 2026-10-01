// English copy. The Chinese file mirrors this shape key for key; the
// type below makes a missing key a build error rather than a blank.
export const en = {
  lang: "en",
  htmlLang: "en",
  meta: {
    title: "OpenQuanter — every cent between a backtest and the live run, accounted for",
    description:
      "An open-source quantitative trading engine in Rust that models margin and liquidation, replays from a journal, and attributes the gap between backtest and live trading. With Quanterdeck, a self-hosted console that keeps your keys on your machine.",
  },
  nav: {
    why: "Why",
    engine: "Engine",
    deck: "Quanterdeck",
    status: "Status",
    start: "Get started",
    github: "GitHub",
    switchLang: "中文",
    switchHref: "/zh/",
    theme: "Toggle theme",
  },
  hero: {
    eyebrow: "Open-source quantitative trading · Rust · Apache-2.0",
    title: "Every cent between a backtest and the live run, accounted for.",
    motto: "P&L you cannot explain is not P&L.",
    lede:
      "OpenQuanter is a trading engine built to stop flattering you: it liquidates when a real venue would, runs backtest and live on one deterministic core, and decomposes the difference between them. Quanterdeck is the console that puts those numbers in front of you — on your own machine.",
    primary: "Get started",
    secondary: "View on GitHub",
    copy: "Copy",
    copied: "Copied",
  },
  ledger: {
    caption: "Same strategy, same market, run twice",
    command: "cargo run --example martingale_ladder",
    colEnforced: "margin enforced",
    colFree: "margin-free",
    rows: [
      ["final equity", "61.53", "20,908.11"],
      ["lowest equity", "61.53", "−30,302.14"],
      ["fills", "4", "6"],
      ["liquidations", "1", "0"],
    ],
    overstated: "overstated by",
    overstatedValue: "20,846.58 USDT",
    stamp: "Liquidated",
    note:
      "Real output from the repository, reproducible on your machine. Equity below zero is not a drawdown — it is an account that stopped existing. Most open backtesters report the right-hand column.",
  },
  proof: [
    {
      value: "35.38M",
      unit: "ticks / s",
      label: "matching, margin, accounting and a strategy, on one core",
      foot: "Margin fidelity costs about half — measured, not hidden.",
    },
    {
      value: "0",
      unit: "dependencies",
      label: "third-party crates in the entire engine",
      foot: "Checked in CI, not asserted. Take one crate or all of them.",
    },
    {
      value: "+20,467",
      unit: "trades",
      label: "a commercial archive lost that our capture kept",
      foot: "BTCUSDT perpetual, 2026-09-01, trade id by trade id.",
    },
    {
      value: "3",
      unit: "outcomes",
      label: "for every order: accepted, rejected, or unknown",
      foot: "A timeout is not a failure. Folding it into one makes duplicate positions.",
    },
  ],
  wall: {
    kicker: "Why it exists",
    title: "The dangerous error is the one that looks right.",
    lede:
      "OpenQuanter 2 is the rewrite of a closed platform that has traded real money, continuously, for years. It hit six walls. None of them ever raised an error.",
    items: [
      {
        title: "Failure is silent",
        body: "Synthetic fills at a price of zero, a cancel loop that never ended, a feed writing 24-hour volume into a per-trade field. Nothing crashed. The system believed it was fine.",
      },
      {
        title: "The gap has no explanation",
        body: "The backtest looks good, live differs, and every discrepancy collapses into “the market changed”. With leverage, you are amplifying something you do not understand.",
      },
      {
        title: "Backtest and live are two codebases",
        body: "They are supposed to agree. Nothing makes them. When they drift apart, nothing says so.",
      },
      {
        title: "Slow research becomes small research",
        body: "When a run takes tens of minutes you stop trying the ideas that are probably useless but worth a look. Speed changes which questions get asked.",
      },
      {
        title: "Past results expire silently",
        body: "Code changed, data was repaired, parameters moved. Does last spring’s result still hold? Without provenance, nobody can say.",
      },
      {
        title: "Overfitting has no price tag",
        body: "Sweep two hundred parameter sets, keep the best. The probability that the winner is noise is computable — and almost never printed.",
      },
    ],
  },
  audience: {
    kicker: "Who it is for",
    title: "Built for people who have to answer for the number.",
    forTitle: "For",
    for: [
      {
        title: "Levered traders with money at stake",
        body: "Prop desks, small funds, or you. A 20× strategy with 5% of its P&L unexplained and one with 0.3% are not the same instrument.",
      },
      {
        title: "Teams migrating a trading engine",
        body: "You must prove the behaviour did not change. The parity instrument here was built before the engine it measures, for exactly that.",
      },
      {
        title: "Anyone who shows results to someone else",
        body: "Investors, partners, risk. A commercial claim of trustworthy backtests can only be believed. An open one can be run and checked.",
      },
    ],
    notTitle: "Not for",
    not: [
      "A library of two hundred indicators.",
      "Fifty broker integrations — every unverified adapter dilutes what can be proven.",
      "Hosting and one-click deploys — that turns “reproducible” into “trust our servers”.",
      "Speed alone. Speed is a prerequisite here, not the pitch.",
    ],
  },
  stack: {
    kicker: "How it fits together",
    title: "Two layers. One account of the truth.",
    lede:
      "The engine produces evidence; the console makes it legible. The dependency runs one way: Quanterdeck reads what OpenQuanter writes, and the framework never needs to know the console exists.",
    layers: {
      deck: "Quanterdeck — the console",
      deckItems: ["Overview", "Live", "Reconcile", "Attribution", "Black box", "Releases"],
      engine: "OpenQuanter — the engine",
      flow: [
        ["Capture", "verbatim venue records, hashed manifests"],
        ["Journal", "sequenced, replayable, torn-tail safe"],
        ["Deterministic core", "one state machine for backtest and live"],
        ["Matching L0 → L2", "tick replay, queue & latency, order book"],
        ["Margin & costs", "tiers, liquidation, funding, fees"],
        ["Parity & attribution", "trade by trade, residual reported"],
      ],
      venues: "Venues",
      venuesNote: "8 on the order path · 3 with account streams",
      lang: "Rust traits for latency · Python for research",
    },
    products: [
      {
        name: "OpenQuanter",
        role: "The engine",
        body: "Composable Rust crates — types, journal, core, matching, margin, backtest, data, parity, statistics — with Python bindings. Use the margin model without the engine, the statistics without the backtester, or the whole stack.",
        facts: ["Rust · Python", "Apache-2.0", "pip install openquanter"],
        link: "https://github.com/openquanter/openquanter",
      },
      {
        name: "Quanterdeck",
        role: "The console",
        body: "A self-hosted web console over the engine’s journals, runs and the trading host. It reconciles what the process believes against what the venue holds, and never renders “cannot tell” as “all clear”.",
        facts: ["Self-hosted", "Keys stay local", "Linux bundles"],
        link: "https://github.com/openquanter/quanterdeck",
      },
    ],
    latest: "Latest",
  },
  features: {
    kicker: "OpenQuanter",
    title: "What the engine is built to get right.",
    items: [
      {
        title: "Margin-aware backtesting",
        body: "Tiered maintenance margin, liquidation prices derived rather than copied, funding spikes, maker/taker fees including rebates. Real venues liquidate you; so does this.",
      },
      {
        title: "A fidelity ladder",
        body: "L0 tick replay for sweeps, L1 queue position and latency as distributions, L2 order-book reconstruction. Every run reports which assumptions priced it.",
      },
      {
        title: "Gap attribution",
        body: "A shadow kernel runs beside the venue on the same observations. The gap splits into slippage, queue, funding, latency and fee tier; the rest is the unexplained residual.",
      },
      {
        title: "Overfitting statistics by default",
        body: "Every sweep reports the deflated Sharpe ratio and the probability of backtest overfitting — whether anyone asked or not — and reruns the winner for look-ahead.",
      },
      {
        title: "Journal-first, deterministic",
        body: "A pure state machine on a sequenced journal. Crash recovery, audit, reproducible research and fuzzing are one mechanism, and replay reproduces state exactly.",
      },
      {
        title: "Composable, zero dependencies",
        body: "Every crate builds alone. The engine is plain std Rust, and CI fails the build if it acquires a dependency. Adopting one piece does not mean adopting a platform.",
      },
      {
        title: "A careful order path",
        body: "Caller-chosen ids before sending, unknown as a first-class outcome, a pre-trade gate with a kill switch, and fills reconciled against the venue’s own view.",
      },
      {
        title: "Python, without a second engine",
        body: "Write a strategy in Python and the Rust engine runs it — per tick, or batched up to seven times faster, with the cost of batching measured rather than assumed.",
      },
    ],
  },
  deck: {
    kicker: "Quanterdeck",
    title: "A console that is allowed to say no.",
    lede:
      "Someone with no quant experience gets a first equity curve on their own machine within thirty minutes. Someone with experience never reads “cannot tell” as “all clear”.",
    shots: [
      ["overview", "Overview — is the trading host all right, and where is each “no” dealt with"],
      ["live", "Live — positions, orders, fills, market and risk limits on one page"],
      ["reconcile", "Reconcile — what the process believes against what the venue holds"],
      ["attribution", "Attribution — five causes in three states; an unknown residual is not zero"],
      ["blackbox-moment", "Black box — any moment of the last 90 days, opened up"],
      ["deploy", "Releases — signed builds, deployed and rolled back"],
    ],
    rulesTitle: "Three rules, in code rather than in prose",
    rules: [
      ["“Cannot tell” never renders as “they agree”.", "An invalidated baseline is amber, not green — and not red either, because it is not a regression."],
      ["An incomplete decomposition has an unknown residual, not zero.", "A zero from a partial decomposition claims everything was explained."],
      ["Reading never changes the runtime.", "The console is an observer of the systems it shows."],
    ],
    securityTitle: "Your keys stay on your machine",
    security: [
      "Not hosted, not a SaaS — it never holds your API keys.",
      "A login always, even on loopback: Argon2id, Host and Origin checks, a second factor off loopback.",
      "Risky operations need a one-time code checked by a separate host agent the console cannot impersonate.",
      "A hash-chained audit trail, anchored off the machine.",
    ],
  },
  status: {
    kicker: "Status",
    title: "Honest about where it stands.",
    lede:
      "Early, and specific about it. The pillars describe where this is going; this is where it is. Read the full status before deciding to use it.",
    builtTitle: "Built and tested",
    built: [
      "Deterministic core, journal replay that reproduces state exactly",
      "L0 matching, frozen as the regression anchor; L1 and L2 tiers",
      "Tiered margin, liquidation, funding and fees",
      "Capture proven against live venues and an independent archive",
      "Deflated Sharpe, PBO, sweeps with a look-ahead check",
      "Order path across eight venues, a pre-trade gate, a kill switch",
      "Python strategy tier and statistics on PyPI",
      "Live loop on testnet, with the console watching it",
    ],
    notTitle: "Not yet",
    not: [
      "A long live run for gap attribution to decompose — built, not yet exercised at length",
      "API stability — any API may still change between releases",
      "ONNX and compiled-tree inference",
      "Crates on crates.io — install from source or PyPI for now",
    ],
    full: "Full status in the README",
  },
  start: {
    kicker: "Get started",
    title: "Run it in a few minutes.",
    steps: [
      {
        title: "Evaluate a backtest you already have",
        note: "Deflated Sharpe, overfitting probability and the Python strategy tier. Wheels for Linux, macOS and Windows; no Rust toolchain needed.",
        code: "pip install openquanter",
      },
      {
        title: "See the engine explain itself",
        note: "Three examples, no data to download. The third is the one at the top of this page.",
        code: "git clone https://github.com/openquanter/openquanter\ncd openquanter\ncargo run --example martingale_ladder",
      },
      {
        title: "Put a console on it",
        note: "Download a Quanterdeck bundle for Linux — the deck, the host agent and the interface — and verify its checksum.",
        code: "v={deck}; t=x86_64-unknown-linux-gnu\ncurl -LO https://github.com/openquanter/quanterdeck/releases/download/v$v/quanterdeck-v$v-$t.tar.gz{,.sha256}\nsha256sum -c quanterdeck-v$v-$t.tar.gz.sha256",
      },
    ],
    quickstart: "Read the Quickstart",
    releases: "All releases",
  },
  footer: {
    tagline: "Every cent between a backtest and the live run, accounted for.",
    disclaimer:
      "Early development. Not financial advice; trading with leverage can lose more than you put in. Use at your own risk.",
    license: "Apache-2.0",
    cols: [
      {
        title: "OpenQuanter",
        links: [
          ["Repository", "https://github.com/openquanter/openquanter"],
          ["Why it exists", "https://github.com/openquanter/openquanter/blob/main/docs/WHY.md"],
          ["Quickstart", "https://github.com/openquanter/openquanter/blob/main/docs/QUICKSTART.md"],
          ["Releases", "https://github.com/openquanter/openquanter/releases"],
          ["PyPI", "https://pypi.org/project/openquanter/"],
        ],
      },
      {
        title: "Quanterdeck",
        links: [
          ["Repository", "https://github.com/openquanter/quanterdeck"],
          ["Security model", "https://github.com/openquanter/quanterdeck/blob/main/docs/SECURITY.zh-CN.md"],
          ["Releases", "https://github.com/openquanter/quanterdeck/releases"],
        ],
      },
    ],
  },
};

export type Copy = typeof en;
