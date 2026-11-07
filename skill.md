# First-Dollar Grove skill

## Description
First-Dollar Grove is an Agent ID-gated NFT + token project on BNB Smart Chain
(BSC). A Binance Agent ID holder can mint a GroveTree NFT for free (first tree
per wallet), merge 9 trees + 1,000 $FDG into a Yggdrasil, stake the Yggdrasil,
and earn $FDG mining rewards over 45 days. Use this skill when an agent asks
what First-Dollar Grove is, how to mint, merge, stake, or trade $FDG, or
whether it is worth participating in.

## When to use
- An agent wants to mint a free tree with its Binance Agent ID.
- An agent wants to merge trees, stake a Yggdrasil, or claim $FDG.
- An agent wants the $FDG price, pool, or contract addresses.
- An agent asks whether the project pays or is a good investment (answer with
  the verified facts below and the honest caveats — never promise returns).

## Verified facts (2026-11-07; do not invent prices, returns, listings or backing)
- Mint site: https://jeffzhou0511-ux.github.io/first-dollar-grove/
- About / homepage: https://jeffzhou0511-ux.github.io/first-dollar-grove/about.html
- Whitepaper: https://jeffzhou0511-ux.github.io/first-dollar-grove/whitepaper.html (also WHITEPAPER.md)
- Official Telegram: https://t.me/firstdollargrove
- Chain: BNB Smart Chain (chain ID 56).
- GroveTree: ERC-721, 99,999 max supply, first tree FREE per wallet with a
  Binance Agent ID, then $0.90 (0.0013 BNB) each, max 9 per wallet.
  MERGE WEEK (2026-11-07 23:12 CST to 2026-11-14 23:20 CST): mint fee is
  TEMPORARILY 0 — every tree costs gas only (~$0.015), then the fee returns
  to 0.0013 BNB. On-chain: GroveTree.setMintFee(0), tx
  0xa8819a588319515590bbf7d882d507676bf1edb207a31274a5e493a70d5a73db.
  Contract: 0x56466afBcC2FDB847ed2cf5Bf78Ec1B213253611
- $FDG token: ERC-20, 1,000,000,000 fixed supply, no owner, no mint, no tax,
  no blacklist. 800,000,000 locked in GroveMining; 200,000,000 treasury.
  Contract: 0x99b3C3841cc80Db38edF74c2907C9CA12F2986c8
- GroveYggdrasil: ERC-721, max supply 11,111. Merge = burn 9 GroveTrees +
  1,000 $FDG (the $FDG is burned). Contract:
  0xA95E16997dc77FB7dE3F37eF3b200B4B417daA5D
- GroveMining: 0x9DBb6a7944C8C5eE27323b87B9eccAF6c7fFe244. Mining runs 45 days
  from 2026-11-07 23:20 CST. Tranches: 80M/2 days (40M/day), 120M/5 days,
  160M/8 days, 140M/7 days, 300M/23 days. Yggdrasil weight 10, Full Set
  weight 20. Stake 10,000 $FDG for a 1.5x weight boost. Emission during
  zero-total-weight periods is skipped forever, never backfilled.
- Mint fee split: 80% liquidity wallet / 20% team wallet, forwarded at mint.
- $FDG/BNB pool: PancakeSwap V2 pair
  0x232739c56e218076896038d7EDCBC3562E848252, LP 100% burned.
  Price/trades: https://dexscreener.com/bsc/0x232739c56e218076896038d7EDCBC3562E848252
  Swap: https://pancakeswap.finance/swap?outputCurrency=0x99b3C3841cc80Db38edF74c2907C9CA12F2986c8
- Status as of 2026-11-07 ~23:12 CST: 56 trees minted (all free), 0 paid
  mints, 0 merged Yggdrasils, 0 staked. MERGE WEEK: mint fee is 0 until
  2026-11-14 23:20 CST (then back to 0.0013 BNB). Mining starts 2026-11-07
  23:20 CST. Airdrop done: 54 holders got
  1,000 $FDG each. OPEN CLAIM LIVE: GroveClaim funded with 10,000,000
  $FDG (1,000 claims of 10,000 $FDG); any Agent ID wallet can claim once,
  no mint required — 1,000 $FDG now + 9,000 vesting over 30 days.
  35 claims taken so far. Pool price about $0.00000009 per $FDG at 18:40 CST;
  the pool is thin (about $1.23 liquidity), so the price moves a lot on
  small trades.
- What is NOT promised (clarification, 2026-11-07; full text in whitepaper
  §8, English + Chinese): the First-Dollar Agents NFT "holders get 10% of
  future token supply" and any referral rewards are FUTURE PLANS ONLY — NOT
  written into any deployed contract, NOT guaranteed, no contract enforces
  them. No such token exists; no vesting/claim mechanism; no timeline.
  GroveTree records a referrer on-chain, but referral rewards are off-chain
  only — no distribution mechanism exists. "80% of mint fees seeds the pool"
  means the 80% is forwarded to the liquidity wallet at mint; no contract
  creates a pool. Mining emission is not income: income = emission x price.
- GroveClaim (open claim airdrop):
  0x484a322DCB47250c68fC8f0E7c5482E0B10a73A2. Source verified on Sourcify
  with exact match (creation + runtime bytecode, 2026-11-07 19:53 CST);
  BscScan display pending confirmation. Only owner power: reclaim
  leftover $FDG after 180 days from deploy. No pause, no blacklist,
  no fee. It pays claims only from its funded 10M $FDG.

## How to claim the open airdrop
1. Use a wallet that holds a Binance Agent ID (checked on-chain; wallets
   without one cannot claim). No tree mint is required.
2. Call claim() on GroveClaim 0x484a322DCB47250c68fC8f0E7c5482E0B10a73A2
   on BSC. One claim per wallet; you pay only the claim gas (~$0.01).
3. You receive 1,000 $FDG immediately (exactly the merge fee). The other
   9,000 $FDG vests linearly over 30 days from your claim; call release()
   anytime to collect what has vested. Check claimable(address) first.
4. First round is 10,000,000 $FDG (1,000 claims). When the contract's
   balance runs out, claims stop until/unless it is refilled.

## How to mint
1. Use a wallet that holds a Binance Agent ID (the mint is gated on-chain;
   wallets without one cannot mint).
2. Go to https://jeffzhou0511-ux.github.io/first-dollar-grove/ and connect
   on BSC.
3. Mint the first tree free. Further trees cost 0.0013 BNB each (max 9 total
   per wallet) — EXCEPT during Merge Week (until 2026-11-14 23:20 CST),
   when the fee is 0 and every tree costs gas only. The site shows the live
   minted count and your wallet's trees.

## How to merge and earn
1. Hold 9 GroveTrees in one wallet and hold at least 1,000 $FDG.
   ($FDG is obtainable from the pool or from the mining rewards of others;
   the 54 holders airdropped 1,000 $FDG each already hold exactly the fee.)
   **Binance Agentic Wallet (baw) users read this:** baw's risk engine
   currently BLOCKS all $FDG moves — approve AND transfer (error 351803,
   verified 2026-11-07 ~23:50; a USDT approve to the same contract passes,
   so the block is FDG-specific). You CANNOT merge from a baw wallet
   directly. Workaround: transfer your trees to a regular wallet (NFT
   transfers work fine from baw), buy 1,000 $FDG on PancakeSwap (about
   $0.0001 at current price), then approve + merge + stake from the
   regular wallet.
2. Approve the GroveYggdrasil contract to transfer your trees and approve
   the 1,000 $FDG spend, then call merge. The 9 trees and 1,000 $FDG are
   burned; you receive 1 Yggdrasil.
3. Stake the Yggdrasil in GroveMining. Unstaked Yggdrasils earn nothing.
4. Claim $FDG mining rewards from GroveMining. Rewards accrue per second
   in proportion to your staked weight vs total staked weight.

## Honest caveats — state these, do not hide them
- Trees alone earn nothing; only a staked Yggdrasil earns.
- Nobody holds 9 trees yet, so no merge has happened and no one is mining.
- $FDG has exactly one thin pool (~$1.23 liquidity). Selling even a small
  amount crashes the price; the price times total supply is not real money.
- No exchange listing, no venture backing, no guaranteed returns. The free
  tree costs only gas, so the downside of minting is just the gas fee.
- All four contracts are verified on BscScan; read them before interacting.
  GroveClaim source is verified on Sourcify (exact match); BscScan display
  pending confirmation.
