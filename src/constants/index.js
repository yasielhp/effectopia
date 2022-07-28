import { ChainId } from '@thirdweb-dev/react';

export const activeChainId = ChainId.Rinkeby;
export const activeChainName = Object.keys(ChainId).find(
  (key) => ChainId[key] === activeChainId
);
export const myAddress = '0x779f1ac2aCfbA9739A06032997eF8742f73622E5';
export const editionDropAddress =
  '0x9F2050d4f96F15328Bd3d125d8aAD7De21a25d40';
export const tokenAddress =
  '0x7324DC5B0a2B0C858b95dfD5c8A5996144535EaF';
export const voteAddress =
  '0x39AE9Ff63727189387BBB7D8CCEdd662682D2D10';
