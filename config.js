// ============================================================================
// First-Dollar Grove — site config
// *** TESTNET — swap the 4 addresses + CHAIN_ID + RPC_URL to mainnet after deploy ***
// Mainnet deploy is a ONE-EDIT swap: replace the values in CONFIG below.
// Do NOT change any other file.
// ============================================================================
const CONFIG = {
  // --- Network (BSC testnet, chain 97). Mainnet: chainId 56, RPC https://bsc-dataseed1.binance.org ---
  CHAIN_ID: 97,
  CHAIN_NAME: "BSC Testnet",
  RPC_URL: "https://data-seed-prebsc-1-s1.binance.org:8545",
  EXPLORER: "https://testnet.bscscan.com",

  // --- Contracts (BSC TESTNET — deployed 2026-11-06, 48/48 tests PASS) ---
  FDG:     "0x08C0efe137093EedB8370691f01eb69A49D9aab5", // GroveToken ($FDG)
  TREE:    "0xFCFCf53a8Dc4fA370a7b29Cf672dedAeAba134Cd", // GroveTree (GROVE)
  YGG:     "0x81D5f6654059D6CA42822fB6393a01e71eC49303", // GroveYggdrasil (FDY)
  MINING:  "0x8B7Fca573E7871002ab4Bdd333ed71aB9eFB2579", // GroveMining
  // Agent ID registry is read from the Tree contract (AGENT_ID_REGISTRY).
  // Testnet it points at the mock registry; mainnet it is the real HandleRegistry.

  // --- Pricing / economics (from the plan) ---
  MINT_FEE_BNB: "0.0013",   // per tree after the first free one (~$0.90)
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
  BNB_USD: 693,
};
