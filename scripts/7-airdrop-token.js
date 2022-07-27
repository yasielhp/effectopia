import sdk from "./1-initialize-sdk.js";

const editionDrop = sdk.getEditionDrop("0x9F2050d4f96F15328Bd3d125d8aAD7De21a25d40");
const token = sdk.getToken("0x7324DC5B0a2B0C858b95dfD5c8A5996144535EaF");

(async () => {
  try {
    const walletAddresses = await editionDrop.history.getAllClaimerAddresses(0);

    if (walletAddresses.length === 0) {
      console.log(
        "No NFTs have been claimed yet, maybe get some friends to claim your free NFTs!",
      );
      process.exit(0);
    }
    const airdropTargets = walletAddresses.map((address) => {
      const randomAmount = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
      console.log("✅ Going to airdrop", randomAmount, "tokens to", address);

      const airdropTarget = {
        toAddress: address,
        amount: randomAmount,
      };
      return airdropTarget;
    });

    console.log("🌈 Starting airdrop...");
    await token.transferBatch(airdropTargets);
    console.log("✅ Successfully airdropped tokens to all the holders of the NFT!");
  } catch (err) {
    console.error("Failed to airdrop tokens", err);
  }
})();