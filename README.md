# First-Dollar Grove — mint + mining website

Single-page static site (no build step). Works from GitHub Pages.

## Files
- `index.html` — the page (ethers v6 via CDN, minimal ABIs embedded, all logic inline).
- `config.js` — **the only file to change for mainnet.** It holds the 4 contract addresses,
  chain id, RPC URL, tranche schedule, realm/rarity labels, and prices.
  Currently set to **BSC MAINNET (chain 56)** — mainnet contracts, minting live since 2026-11-06.
- `wiring-test.js` — Node test (needs `ethers@6` in the cwd). Loads CONFIG + ABIS from the
  built files and runs the page's read-only calls against the configured RPC.
  Run: `npm install ethers@6.13.0 --no-save && node wiring-test.js` (42 checks, all must pass).

## Mainnet swap (one edit)
In `config.js`: replace the 4 contract addresses (FDG, TREE, YGG, MINING) with the mainnet
addresses, set `CHAIN_ID: 56`, `CHAIN_NAME: "BNB Smart Chain"`, `RPC_URL:
"https://bsc-dataseed1.binance.org"`, `EXPLORER: "https://bscscan.com"`. Nothing else changes.
The Agent ID registry address is read from the Tree contract, so it follows the deployment.

## Sections (all wired to the real ABIs)
1. Connect wallet (MetaMask) + Agent ID check (registry balanceOf).
2. Mint tree — first per wallet free, then 0.0013 BNB (~$0.90); fee via `mintFeeFor`; 80/20 note.
3. My trees — on-chain scan (ownerOf 1..totalMinted, burned skipped) with realm/rarity.
4. Merge — pick 9 trees, approve FDG (1,000) + trees, `merge(uint256[9])`; weight 10 / 20 Full Set.
5. My Yggdrasil — owned + staked (localStorage + on-chain stakedBy + best-effort log scan).
6. Mining — stake/unstake, live pendingReward, Claim, boost (stake 10,000 FDG → 1.5x),
   45-day tranche table with the current tranche highlighted.
7. Lottery — explanatory panel only (weekly draw entry = minting; $FDG ticket draw rules).
   No ticket-buying contract exists in v1, so there is deliberately no buy button.
8. SR synthesis — pick 3 same-rarity trees, `synthesize(uint256[3])` → 1 tier higher.

## Known limitations
- "My trees" / "My Yggdrasil" scan `ownerOf` for every minted token id. Fine on testnet
  (28 minted); on mainnet with 99,999 minted it will be slow — a future version should index
  Transfer events instead. The scan is batched (25/call) and skips burned tokens.
- Realm names (Asgard, Vanaheim, …) are DISPLAY labels only; the contract stores realm 0–8.
- USD figures use a fixed ~$693/BNB and are labelled approximate.
- Staked Yggdrasil are discovered via localStorage + `stakedBy` + a best-effort Transfer log
  scan; if the log scan fails (RPC limits) the page falls back to stored ids + manual token-ID
  entry for unstaking.
