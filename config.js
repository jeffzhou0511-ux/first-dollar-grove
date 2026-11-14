// ============================================================================
// First-Dollar Grove — site config
// *** MAINNET — deployed 2026-11-06, minting LIVE ***
// Contracts below are the BSC mainnet addresses. Do NOT change any other file.
// ============================================================================
const CONFIG = {
  // --- Network (BSC mainnet, chain 56) ---
  CHAIN_ID: 56,
  CHAIN_NAME: "BSC Mainnet",
  RPC_URL: "https://bsc-dataseed1.binance.org",
  EXPLORER: "https://bscscan.com",

  // --- Contracts (BSC MAINNET — deployed 2026-11-06) ---
  FDG:     "0x99b3C3841cc80Db38edF74c2907C9CA12F2986c8", // GroveToken ($FDG)
  TREE:    "0x56466afBcC2FDB847ed2cf5Bf78Ec1B213253611", // GroveTree (GROVE)
  YGG:     "0xA95E16997dc77FB7dE3F37eF3b200B4B417daA5D", // GroveYggdrasil (FDY)
  MINING:  "0x9DBb6a7944C8C5eE27323b87B9eccAF6c7fFe244", // GroveMining
  CLAIM:   "0x484a322DCB47250c68fC8f0E7c5482E0B10a73A2", // GroveClaim (open FDG airdrop)
  // Agent ID registry is read from the Tree contract (AGENT_ID_REGISTRY).
  // Mainnet it is the real HandleRegistry (0x60B9262456dE011F7d15a54CdD8c48bAaa8B022F).

  // --- Pricing / economics (from the plan) ---
  MINT_FEE_BNB: "0.0013",   // per tree after the first free one (~$0.82)
  MERGE_FEE_FDG: "1000",    // FDG burned on every merge
  BOOST_THRESHOLD_FDG: "10000", // FDG staked for the 1.5x boost
  BOOST_MULTIPLIER: "1.5x",
  MAX_PER_WALLET: 9,
  TREE_MAX_SUPPLY: 99999,
  YGG_MAX_SUPPLY: 11111,

  // --- Mining schedule (45 days, 5 tranches; amounts in FDG, durations in days) ---
  // Cumulative tranche ends (days after startTime): 2, 7, 15, 22, 45.
  TRANCHES: [
    { amount: 80_000_000,  days: 2,  label: "Tranche 1 · 80M FDG / 2 days · 40M/day" },
    { amount: 120_000_000, days: 5,  label: "Tranche 2 · 120M FDG / 5 days · 24M/day" },
    { amount: 160_000_000, days: 8,  label: "Tranche 3 · 160M FDG / 8 days · 20M/day" },
    { amount: 140_000_000, days: 7,  label: "Tranche 4 · 140M FDG / 7 days · 20M/day" },
    { amount: 300_000_000, days: 23, label: "Tranche 5 · 300M FDG / 23 days · ~13M/day" },
  ],
  TOTAL_EMISSION_FDG: 800_000_000,
  MINING_DAYS: 45,

  // --- Display ---
  // Realm names are DISPLAY labels only (the contract stores realm 0-8).
  // The nine realms of Yggdrasil, in contract order.
  REALM_NAMES: ["Asgard","Vanaheim","Alfheim","Midgard","Jotunheim","Svartalfheim","Niflheim","Muspelheim","Helheim"],
  RARITY_LABELS: ["N · Common","R · Rare","SR · Super Rare","SSR · Ultra Rare"],
  // Rarity mint odds (contract): N 70% / R 20% / SR 8% / SSR 2%.

  // --- USD reference (APPROXIMATE, fixed for display only) ---
  BNB_USD: 631,
};
