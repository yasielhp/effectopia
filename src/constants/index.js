import { ChainId } from "@thirdweb-dev/react";

export const activeChainId = ChainId.Rinkeby;
export const activeChainName = Object.keys(ChainId).find(key => ChainId[key] === activeChainId);
export const myAddress = "0x779f1ac2aCfbA9739A06032997eF8742f73622E5";
export const editionDropAddress = "0xDBc61AeD99ff4b73656922BA0681d8ba9ADB62b3"
export const tokenAddress = "0x8Aa884099d1a86eB2810Ec2A25434BE5dfe65330";
export const voteAddress = "0x15FF76aF83F2c4855674B3Ca829D63f13B6aC706"

