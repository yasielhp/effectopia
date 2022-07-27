import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    const voteContractAddress = await sdk.deployer.deployVote({
      name: "Effectopia DAO",
      voting_token_address: "0x7324DC5B0a2B0C858b95dfD5c8A5996144535EaF",
      voting_delay_in_blocks: 0,
      voting_period_in_blocks: 6570,
      voting_quorum_fraction: 0,
      proposal_token_threshold: 0,
    });

    console.log("✅ Successfully deployed vote contract, address:",voteContractAddress,);
  } catch (err) {
    console.error("Failed to deploy vote contract", err);
  }
})();