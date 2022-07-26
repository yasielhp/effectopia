import { useAddress, useVote, useEditionDrop, useToken } from '@thirdweb-dev/react';
import { useState, useEffect } from 'react';
import { editionDropAddress, voteAddress, tokenAddress} from '../constants';
import { ProposalItem } from './ProposalItem';
import { Button, Loading} from '../components/';
import { AddressZero } from '@ethersproject/constants';

export const ProposalsList = () => {

  const token = useToken(tokenAddress);
  const vote = useVote(voteAddress);
  const address = useAddress();
  const editionDrop = useEditionDrop(editionDropAddress);

  const [isLoading, setIsLoading] = useState(false);
  const [hasClaimedNFT, setHasClaimedNFT] = useState(false);

  const [proposals, setProposals] = useState([]);
  const [isVoting, setIsVoting] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    const checkBalance = async () => {
      try {
        setIsLoading(true);
        const balance = await editionDrop.balanceOf(address, 0);
        if (balance.gt(0)) {
          setHasClaimedNFT(true);
          console.log("🌟 this user has a membership NFT!");
          setIsLoading(false);
        } else {
          setHasClaimedNFT(false);
          console.log("😭 You are not yet a member of the community, claim your NFT to join.");
          setIsLoading(false);
        }
      } catch (error) {
        setHasClaimedNFT(false);
        console.log(`😭 ${error.message}`);
        console.error("Failed to get balance", error);
        setIsLoading(false);
      }
    };
    checkBalance();
  }, [address, editionDrop]);

  useEffect(() => {
  const getAllProposals = async () => {
    try {
      const proposals = await vote.getAll();
      setProposals(proposals);
      console.log("🌈 Proposals:", proposals);
    } catch (error) {
      console.log("failed to get proposals", error);
    }
  };
  getAllProposals();
  }, [vote]);

  useEffect(() => {
  if (!proposals.length) {
    return;
  }
  const checkIfUserHasVoted = async () => {
    try {
      setIsLoading(true);
      const hasVoted = await vote.hasVoted(proposals[0].proposalId, address);
      setHasVoted(hasVoted);
      setIsLoading(false);
      if (hasVoted) {
        console.log("🥵 User has already voted");
        setIsLoading(false);
      } else {
        console.log("🙂 User has not voted yet");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Failed to check if wallet has voted", error);
      setIsLoading(false);
    }
  };
  checkIfUserHasVoted();

  }, [proposals, address, vote]);

  const handelSubmit = async (e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsVoting(true);
          const votes = proposals.map((proposal) => {
            const voteResult = {
              proposalId: proposal.proposalId,
              vote: 2,
            };
            proposal.votes.forEach((vote) => {
              const elem = document.getElementById(
                proposal.proposalId + "-" + vote.type
              );
              if (elem.checked) {
                voteResult.vote = vote.type;
                return;
              }
            });
            return voteResult;
          });
          try {
            const delegation = await token.getDelegationOf(address);
            if (delegation === AddressZero) {
              await token.delegateTo(address);
            }
            try {
              await Promise.all(
                votes.map(async ({ proposalId, vote: _vote }) => {
                  const proposal = await vote.get(proposalId);
                  if (proposal.state === 1) {
                    return vote.vote(proposalId, _vote);
                  }
                  return;
                })
              );
              try {
                await Promise.all(
                  votes.map(async ({ proposalId }) => {
                    const proposal = await vote.get(proposalId);
                    if (proposal.state === 4) {
                      return vote.execute(proposalId);
                    }
                  })
                );
                setHasVoted(true);
                console.log("successfully voted");
              } catch (err) {
                console.error("failed to execute votes", err);
              }
            } catch (err) {
              console.error("failed to vote", err);
            }
          } catch (err) {
            console.error("failed to delegate tokens");
          } finally {
            setIsVoting(false);
          }
        }

  return (
    <>
      {
        isLoading
          ? <Loading text="Loading all proposals available" />
          : !hasClaimedNFT
          && (<p>no vote access</p>)
          || (
            <>
              <p className='w-11/12 text-xl font-semibold mb-4'>All proposals available</p>
              <form onSubmit={handelSubmit}>
                {
                  proposals.map((proposal) => (<ProposalItem key={proposal.proposalId} votes={proposal.votes} description={proposal.description} proposalId={proposal.proposalId} />))
                }
                <Button
                  type="submit"
                  onClick={handelSubmit}
                  disabled={isVoting || hasVoted}
                  title={isVoting
                  ? "Voting..."
                  : hasVoted
                  ? "You Already Voted"
                  : "Submit Votes"} />
                {!hasVoted && (
                  <small>
                    This will trigger multiple transactions that you will need to sign.
                  </small>
                )}
              </form>
            </>
            )
      }
    </>
  )
}
