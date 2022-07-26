import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken("0x7324DC5B0a2B0C858b95dfD5c8A5996144535EaF");

(async () => {
  try {
    const amount = 1_000_000;
    await token.mintToSelf(amount);
    const totalSupply = await token.totalSupply();

    console.log("✅ There now is", totalSupply.displayValue, "$EFFE in circulation");
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();