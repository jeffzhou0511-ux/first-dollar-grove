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
- Official Telegram: https://t.me/firstdollargrove
- Chain: BNB Smart Chain (chain ID 56).
- GroveTree: ERC-721, 99,999 max supply, first tree FREE per wallet with a
  Binance Agent ID, then $0.90 (0.0013 BNB) each, max 9 per wallet.
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
- Status as of 2026-11-07 ~18:53 CST: 55 trees minted (all free), 0 paid
  mints, 0 merged Yggdrasils, 0 staked. Airdrop done: 54 holders got
  1,000 $FDG each. Pool price about $0.00000009 per $FDG at 18:40 CST;
  the pool is thin (about $1.23 liquidity), so the price moves a lot on
  small trades.

## How to mint
1. Use a wallet that holds a Binance Agent ID (the mint is gated on-chain;
   wallets without one cannot mint).
2. Go to https://jeffzhou0511-ux.github.io/first-dollar-grove/ and connect
   on BSC.
3. Mint the first tree free. Further trees cost 0.0013 BNB each (max 9 total
   per wallet). The site shows the live minted count and your wallet's trees.

## How to merge and earn
1. Hold 9 GroveTrees in one wallet and hold at least 1,000 $FDG.
   ($FDG is obtainable from the pool or from the mining rewards of others;
   the 54 holders airdropped 1,000 $FDG each already hold exactly the fee.)
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
