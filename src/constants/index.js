import { ChainId } from "@thirdweb-dev/react";

export const activeChainId = ChainId.Rinkeby;
export const activeChainName = Object.keys(ChainId).find(key => ChainId[key] === activeChainId);
export const myAddress = "0x779f1ac2aCfbA9739A06032997eF8742f73622E5";
