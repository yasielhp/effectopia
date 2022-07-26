import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x9F2050d4f96F15328Bd3d125d8aAD7De21a25d40");

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