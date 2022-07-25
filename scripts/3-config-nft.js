import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xDBc61AeD99ff4b73656922BA0681d8ba9ADB62b3");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Effectopia Membership Pass",
        description: "This is the NFT to access the Effectopia community ",
        image: readFileSync("scripts/assets/previewNFT.mp4"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();