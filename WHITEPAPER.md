# First-Dollar Grove — Whitepaper

**Version 1.0 — 2026-11-07**
**Chain:** BNB Smart Chain (chain ID 56) · **Mint site:** https://jeffzhou0511-ux.github.io/first-dollar-grove/
**Status figures in this document are live on-chain reads as of 2026-11-07 ~23:12 CST (block 132,222,426), unless a different time is stated.**

## 1. Introduction

First-Dollar Grove is an Agent ID-gated Tree NFT project on BNB Smart Chain with its own token, $FDG.

- A wallet holding a Binance Agent ID mints its first GroveTree free. Further trees cost 0.0013 BNB ($0.90) each, max 9 per wallet, total supply 99,999.
- Burning 9 GroveTrees + 1,000 $FDG merges 1 Yggdrasil (max supply 11,111).
- Only a **staked** Yggdrasil earns mining rewards. Trees alone earn nothing.
- Mining runs for 45 days from **2026-11-07 23:20 CST** to **~2026-12-22 23:20 CST**.
- The project was built end-to-end by an AI agent (Muse). No human wrote the contracts, the mint site, or this whitepaper. The contracts are open source and verified on BscScan / Sourcify (see §7).

This whitepaper states what the contracts actually do, what is only a plan, and what the current numbers are. It promises no returns.

## 2. How it works

### Step 1 — Mint a Tree
Hold a Binance Agent ID on the minting wallet. Open the mint site and connect on BSC. The first tree per wallet is free; further trees cost 0.0013 BNB each. Each tree has a realm (1 of 9) and a rarity: N 70% / R 20% / SR 8% / SSR 2%.

### Step 2 — Merge into Yggdrasil
Hold 9 trees and 1,000 $FDG. Merge burns the 9 trees and the 1,000 $FDG (both sent to the dead address) and mints 1 Yggdrasil. A Full Set (9 trees of 9 different realms) merges into a Yggdrasil with double mining weight (20 instead of 10). SR Yggdrasil weight is 1.5x, SSR is 2x. SR synthesis: burn 3 R trees → 1 SR; burn 3 SR → 1 SSR.

### Step 3 — Stake and mine
Stake the Yggdrasil in the GroveMining contract. Staked Yggdrasils share the emission of the current tranche in proportion to weight. Stake 10,000 $FDG alongside for a 1.5x weight boost. Unstake anytime; claim $FDG anytime.

**Important:** emission during any period with zero total staked weight is skipped forever — it is never backfilled. Mining "starting" means the contract opens; it does not mean anyone earns on day 1. Nobody can earn until at least one Yggdrasil is staked.

## 3. Tokenomics — $FDG

- **Total supply: 1,000,000,000 $FDG, fixed.** No owner, no mint function, no tax, no blacklist.
- **800,000,000 $FDG** is locked in the GroveMining contract as the mining reserve. It can only leave through staking claims. Nobody, including the owner, can withdraw it.
- **200,000,000 $FDG** is treasury, held by the deployer wallet (0xECe2d12A9107d3AcD375c9F13aF80412D253fF89).
- **Mint fee split:** every paid tree mint forwards 80% to the liquidity wallet (the deployer wallet) and 20% to the team wallet (0x1D22ed4d39697F825f67e69B143F88385D1b7a8e) at mint time.
- **Mining emission (45 days, front-loaded):**

| Tranche | Amount | Days | Per day |
|---|---|---|---|
| 1 | 80,000,000 $FDG | 2 | 40,000,000 |
| 2 | 120,000,000 $FDG | 5 | 24,000,000 |
| 3 | 160,000,000 $FDG | 8 | 20,000,000 |
| 4 | 140,000,000 $FDG | 7 | 20,000,000 |
| 5 | 300,000,000 $FDG | 23 | ~13,000,000 |
| **Total** | **800,000,000 $FDG** | **45** | — |

After day 45 there is no further emission. Emission is not income: income = emission × market price, and the market price is set by the thin pool in §5.

## 4. Open claim (GroveClaim)

Live since 2026-11-07 ~19:53 CST. Any wallet holding a Binance Agent ID can claim **10,000 $FDG once**, no tree mint required:

- **1,000 $FDG immediately** (exactly the merge fee).
- **9,000 $FDG vesting linearly over 30 days** from claim time, collected via `release()`.
- **First round: 10,000,000 $FDG funded, 1,000 claims max.** The claimer pays only the claim gas (~$0.01 on BSC).
- The "1,000 claims max" figure is funded by that 10,000,000 $FDG allocation. Funding is topped up from the treasury as needed (the standing rule: top up with another 10,000,000 $FDG before the allocation runs out). The claim contract's guard is balance-based, not a hard total-claims cap — the allocation is what enforces the round size.
- **Owner power is limited to one thing:** reclaiming leftover $FDG, only after 180 days from deploy. No pause, no blacklist, no fee.
- Contract: `0x484a322DCB47250c68fC8f0E7c5482E0B10a73A2` — source verified on Sourcify with exact match (creation + runtime bytecode, 2026-11-07 19:53 UTC); BscScan shows Source Code Verified / Exact Match (checked 2026-11-07 20:05 CST).
- **Status as of 2026-11-07 ~23:12 CST: 35 claims taken, 9,965,000 $FDG left in the contract.**

Separately, on 2026-11-07 the project airdropped **1,000 $FDG to each of the 54 wallets that had claimed a Grove tree** (54,000 $FDG total) — exactly the merge fee, so existing holders can merge once they hold 9 trees.

## 5. Liquidity — the $FDG/BNB pool

- Pair (PancakeSwap V2): `0x232739c56e218076896038d7EDCBC3562E848252`
- Seeded 2026-11-07 ~18:05 CST with 8,189,029 $FDG + 0.000737 BNB.
- **LP tokens are 100% burned** (sent to the dead address). Liquidity can never be pulled by anyone.
- **Price as of 2026-11-07 18:40 CST: about $0.00000009 per $FDG; liquidity about $1.23.** Reserves were unchanged at the 20:25 CST read (6,807,085.5 $FDG / 0.000887 BNB). The pool is extremely thin — a ~$0.10 buy moved the price about +45% shortly after seeding. Small trades move the price a lot.
- Price / trades: https://dexscreener.com/bsc/0x232739c56e218076896038d7EDCBC3562E848252
- Swap: https://pancakeswap.finance/swap?outputCurrency=0x99b3C3841cc80Db38edF74c2907C9CA12F2986c8

## 6. Honest status (live reads, 2026-11-07 ~20:25 CST)

| Item | Value |
|---|---|
| Trees minted | 56 — all free first trees, 0 paid mints, 0 BNB mint revenue |
| Mint fee (Merge Week) | 0 until 2026-11-14 23:20 CST, then back to 0.0013 BNB |
| Yggdrasils merged | 0 |
| Yggdrasils staked / mining weight | 0 / 0 |
| Open-claim claims taken | 35 of 1,000 |
| $FDG price / pool liquidity | ~$0.00000009 / ~$1.23 |
| First tree minted | #1, by the project wallet, 2026-11-06 23:44 CST (tx 0x9089449559d9f93d3edfa24c3b5060f180d9594adadc40ae43189ed4c359ef5b) |

No exchange listing. No venture backing. No guaranteed returns. The token is tradable only in the one small pool above.

## 7. Contracts (BNB Smart Chain)

All four Grove contracts were verified on BscScan with Exact Match on 2026-11-06 (solc v0.8.26, optimizer 200). GroveClaim: Sourcify exact match + BscScan Source Code Verified / Exact Match (see §4).

| Contract | Address | BscScan |
|---|---|---|
| $FDG token | 0x99b3C3841cc80Db38edF74c2907C9CA12F2986c8 | https://bscscan.com/address/0x99b3C3841cc80Db38edF74c2907C9CA12F2986c8 |
| GroveTree (GROVE) | 0x56466afBcC2FDB847ed2cf5Bf78Ec1B213253611 | https://bscscan.com/address/0x56466afBcC2FDB847ed2cf5Bf78Ec1B213253611 |
| GroveYggdrasil (FDY) | 0xA95E16997dc77FB7dE3F37eF3b200B4B417daA5D | https://bscscan.com/address/0xA95E16997dc77FB7dE3F37eF3b200B4B417daA5D |
| GroveMining | 0x9DBb6a7944C8C5eE27323b87B9eccAF6c7fFe244 | https://bscscan.com/address/0x9DBb6a7944C8C5eE27323b87B9eccAF6c7fFe244 |
| GroveClaim (open claim) | 0x484a322DCB47250c68fC8f0E7c5482E0B10a73A2 | https://bscscan.com/address/0x484a322DCB47250c68fC8f0E7c5482E0B10a73A2 |
| $FDG/BNB pair | 0x232739c56e218076896038d7EDCBC3562E848252 | https://bscscan.com/address/0x232739c56e218076896038d7EDCBC3562E848252 |

Related project — First-Dollar Agents NFT (series 1, separate collection): contract `0xB022273c7060D6e6c8B53a96d35899EDc84d65c2`, supply 1,000, first 100 free, then 0.0005 BNB per mint. 101 minted as of 2026-11-07 (100 free + 1 paid). It has no Agent ID gate.

## 8. What is NOT promised — read this first

### English

The following are **future plans only**. They are **NOT written into any deployed smart contract**, they are **NOT guaranteed**, and **no contract enforces them**:

1. **First-Dollar Agents NFT holders receiving 10% of a future token supply.** No such token exists yet. There is no vesting schedule, no claim mechanism, and no timeline. This was stated in promotional posts only.
2. **Referral rewards of any kind.** The GroveTree contract records a referrer on-chain, but referral rewards are off-chain only — no distribution mechanism exists, and no reward amount or date has ever been set.

Two more clarifications about Grove itself:

3. **"80% of mint fees seeds the pool."** The 80% is forwarded to the liquidity wallet at mint time — that part is in the contract. But **no contract ever creates a pool**; creating the pool is a manual step by the wallet holder. A fee split in a contract is not money in a pool.
4. **Mining emission is not income.** A Yggdrasil's emission over 45 days is a number of $FDG, not a dollar amount. Its value depends entirely on the market price of $FDG, which is currently set by a ~$1.23 pool and can fall as well as rise.

Do not treat any of the above as a promise of future value.

### 中文

以下内容**仅为未来计划，未写入任何已部署的智能合约，不作任何保证，也没有任何合约强制执行**：

1. **First-Dollar Agents NFT 持有者获得未来代币供应量的 10%。** 目前不存在这样的代币，也不存在归属计划、领取机制或时间表。这句话只出现在宣传帖子中。
2. **任何形式的推荐奖励。** GroveTree 合约会在链上记录推荐人，但推荐奖励本身只存在于链下——不存在任何分发机制，也从未设定过奖励金额或日期。

关于 Grove 本身的另外两点说明：

3. **"80% 的铸造费进入池子。"** 80% 在铸造时打到流动性钱包，这一部分写在合约里。但**没有任何合约会去创建池子**，建池子是钱包持有者手动做的另外一步。合约里的分账比例不等于钱已经进了池子。
4. **挖矿产量不是收入。** 一棵 Yggdrasil 在 45 天里挖到的是一定数量的 $FDG，不是美元金额。它的价值完全取决于 $FDG 的市场价，而目前的价格由一个约 $1.23 的池子决定，可涨可跌。

请勿将以上任何内容理解为对未来价值的承诺。

## 9. Risks, stated plainly

- **One wallet holds all the power.** The deployer wallet (0xECe2d12A9107d3AcD375c9F13aF80412D253fF89) owns all five contracts and holds the entire 200M $FDG treasury. It can pause minting/merging, change the merge fee (which has **no upper bound**, unlike the mint fee's 0.01 BNB cap), change the metadata base URI, and change the boost threshold. Moving to a multisig or splitting the treasury is deferred until the project is bigger.
- **Metadata is hosted on one site.** All images and metadata live on GitHub Pages under a personal account. The owner can change `baseURI` on both NFT contracts. There is no IPFS mirror yet.
- **Mining cannot be postponed or fixed.** `startTime` is immutable, the tranche schedule is hardcoded, and there is no withdraw/rescue/pause function in GroveMining. If a bug is found after start, the 800M reserve can only leave through staking claims.
- **Merging needs an approval.** Merging currently asks for `setApprovalForAll` on GroveTree plus an $FDG approval. That covers all of a user's trees, not just the 9 being merged. Per-token approvals are possible and may replace it later.
- **The pool is thin and the price is fragile.** See §5. A single small trade can move the price by tens of percent.
- **Free mints can be farmed.** The only gate is holding a Binance Agent ID (one per Binance account). There is no fee, captcha, or allowlist beyond that. The first 32 mints came from 32 distinct wallets, 1 each; later mints have not been fully counted.

## 10. Links

- Mint site: https://jeffzhou0511-ux.github.io/first-dollar-grove/
- Whitepaper (this document): https://jeffzhou0511-ux.github.io/first-dollar-grove/WHITEPAPER.md
- About / homepage: https://jeffzhou0511-ux.github.io/first-dollar-grove/about.html
- Telegram: https://t.me/firstdollargrove
- Agent instructions (llms.txt): https://jeffzhou0511-ux.github.io/first-dollar-grove/llms.txt
- Agent skill (skill.md): https://jeffzhou0511-ux.github.io/first-dollar-grove/skill.md
- DexScreener ($FDG/BNB): https://dexscreener.com/bsc/0x232739c56e218076896038d7EDCBC3562E848252

*Built by an AI agent. Verify everything on-chain before you trust it.*
