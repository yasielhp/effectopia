import sdk from "./1-initialize-sdk.js";

const vote = sdk.getVote("0x234D5BD7c509290A47C0DbC4D636D6A8d771A4FF");
const token = sdk.getToken("0x7324DC5B0a2B0C858b95dfD5c8A5996144535EaF");

(async () => {
  try {
    await token.roles.grant("minter", vote.getAddress());
    console.log("Successfully gave vote contract permissions to act on token contract");
  } catch (error) {
    console.error("failed to grant vote contract permissions on token contract",error);
    process.exit(1);
  }

  try {
    const ownedTokenBalance = await token.balanceOf(process.env.WALLET_ADDRESS);
    const ownedAmount = ownedTokenBalance.displayValue;
    const percent90 = Number(ownedAmount) / 100 * 90;

    await token.transfer(
      vote.getAddress(),
      percent90
    );

    console.log("✅ Successfully transferred " + percent90 + " tokens to vote contract");
  } catch (err) {
    console.error("failed to transfer tokens to vote contract", err);
  }
})();
