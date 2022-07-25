import { useAddress, useVote } from '@thirdweb-dev/react';
import { useState, useEffect } from 'react';
import { voteAddress } from '../constants';
import { ProposalItem } from './ProposalItem';
import {Button} from '../components/Button';

export const ProposalsList = () => {

  const vote = useVote(voteAddress);
  const address = useAddress();
  const [proposals, setProposals] = useState([]);
  const [isVoting, setIsVoting] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

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
      const hasVoted = await vote.hasVoted(proposals[0].proposalId, address);
      setHasVoted(hasVoted);
      if (hasVoted) {
        console.log("🥵 User has already voted");
      } else {
        console.log("🙂 User has not voted yet");
      }
    } catch (error) {
      console.error("Failed to check if wallet has voted", error);
    }
  };
  checkIfUserHasVoted();

}, [ proposals, address, vote]);

  return (
    <div className=''>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          e.stopPropagation();

          //before we do async things, we want to disable the button to prevent double clicks
          setIsVoting(true);

          // lets get the votes from the form for the values
          const votes = proposals.map((proposal) => {
            const voteResult = {
              proposalId: proposal.proposalId,
              //abstain by default
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

          // first we need to make sure the user delegates their token to vote
          try {
            //we'll check if the wallet still needs to delegate their tokens before they can vote
            const delegation = await token.getDelegationOf(address);
            // if the delegation is the 0x0 address that means they have not delegated their governance tokens yet
            if (delegation === AddressZero) {
              //if they haven't delegated their tokens yet, we'll have them delegate them before voting
              await token.delegateTo(address);
            }
            // then we need to vote on the proposals
            try {
              await Promise.all(
                votes.map(async ({ proposalId, vote: _vote }) => {
                  // before voting we first need to check whether the proposal is open for voting
                  // we first need to get the latest state of the proposal
                  const proposal = await vote.get(proposalId);
                  // then we check if the proposal is open for voting (state === 1 means it is open)
                  if (proposal.state === 1) {
                    // if it is open for voting, we'll vote on it
                    return vote.vote(proposalId, _vote);
                  }
                  // if the proposal is not open for voting we just return nothing, letting us continue
                  return;
                })
              );
              try {
                // if any of the propsals are ready to be executed we'll need to execute them
                // a proposal is ready to be executed if it is in state 4
                await Promise.all(
                  votes.map(async ({ proposalId }) => {
                    // we'll first get the latest state of the proposal again, since we may have just voted before
                    const proposal = await vote.get(proposalId);

                    //if the state is in state 4 (meaning that it is ready to be executed), we'll execute the proposal
                    if (proposal.state === 4) {
                      return vote.execute(proposalId);
                    }
                  })
                );
                // if we get here that means we successfully voted, so let's set the "hasVoted" state to true
                setHasVoted(true);
                // and log out a success message
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
            // in *either* case we need to set the isVoting state to false to enable the button again
            setIsVoting(false);
          }
        }}
      >
        {proposals.map((proposal) => (
          <ProposalItem key={proposal.proposalId} proposal={proposal} hasVoted={hasVoted} isVoting={isVoting} />
        ))}
          <Button
            type="submit"
            disabled={isVoting || hasVoted}
            title= {isVoting
            ? "Voting..."
            : hasVoted
            ? "You Already Voted"
            : "Submit Votes"} />
        {!hasVoted && (
          <small>
            This will trigger multiple transactions that you will need to
            sign.
          </small>
        )}
      </form>
    </div>
  )
}
