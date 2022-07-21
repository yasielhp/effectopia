import { ChainId } from "@thirdweb-dev/react";

export const activeChainId = ChainId.Rinkeby;
export const activeChainName = Object.keys(ChainId).find(key => ChainId[key] === activeChainId);
