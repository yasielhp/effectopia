import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";
import { ethers } from 'ethers';

(async () => {
  try {
    const tokenAddress = await sdk.deployer.deployToken({
      name: "Effectopia Governance Token",
      image: readFileSync("scripts/assets/token.svg"),
      symbol: "EFFE",
      primary_sale_recipient: ethers.constants.AddressZero,
    });
    console.log("✅ Successfully deployed token module, address:",tokenAddress,);
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();