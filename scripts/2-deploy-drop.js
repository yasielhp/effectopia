import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDropAddress = await sdk.deployer.deployEditionDrop({
      name: "Effectopia",
      description: "A DAO for content creators",
      image: readFileSync("scripts/assets/DAO-Effectopia.png"),
      primary_sale_recipient: ethers.constants.AddressZero,
    });
    const editionDrop = sdk.getEditionDrop(editionDropAddress);
    const metadata = await editionDrop.metadata.get();
    console.log("✅ Successfully deployed editionDrop contract, address:",editionDropAddress,);
    console.log("✅ editionDrop metadata:", metadata);
  } catch (error) {
    console.log("failed to deploy editionDrop contract", error);
  }
})();