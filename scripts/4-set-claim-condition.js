import sdk from "./1-initialize-sdk.js";
import { ethers } from "ethers";

const editionDrop = sdk.getEditionDrop("0x9F2050d4f96F15328Bd3d125d8aAD7De21a25d40");

(async () => {
  try {
    const claimConditions = [{
      startTime: new Date(),
      maxQuantity: 100_000,
      price: 0,
      quantityLimitPerTransaction: 1,
      waitInSeconds: ethers.constants.MaxUint256,
    }]

    await editionDrop.claimConditions.set("0", claimConditions);
    console.log("✅ Successfully set claim condition!");
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
})();