import {
  useAddress,
  useVote,
  useEditionDrop,
  useToken,
} from '@thirdweb-dev/react';
import { useState, useEffect } from 'react';
import {
  editionDropAddress,
  voteAddress,
  tokenAddress,
} from '../constants';
import { ProposalItem } from './ProposalItem';
import { Button, Loading } from '../components/';
import { AddressZero } from '@ethersproject/constants';
import { Link } from 'react-router-dom';

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
          console.log('🌟 this user has a membership NFT!');
          setIsLoading(false);
        } else {
          setHasClaimedNFT(false);
          console.log(
            '😭 You are not yet a member of the community, claim your NFT to join.'
          );
          setIsLoading(false);
        }
      } catch (error) {
        setHasClaimedNFT(false);
        console.log(`😭 ${error.message}`);
        console.error('Failed to get balance', error);
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
        console.log('🌈 Proposals:', proposals);
      } catch (error) {
        console.log('failed to get proposals', error);
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
        const hasVoted = await vote.hasVoted(
          proposals[0].proposalId,
          address
        );
        setHasVoted(hasVoted);
        setIsLoading(false);
        if (hasVoted) {
          console.log('🥵 User has already voted');
          setIsLoading(false);
        } else {
          console.log('🙂 User has not voted yet');
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Failed to check if wallet has voted', error);
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
          proposal.proposalId + '-' + vote.type
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
          console.log('successfully voted');
        } catch (err) {
          console.error('failed to execute votes', err);
        }
      } catch (err) {
        console.error('failed to vote', err);
      }
    } catch (err) {
      console.error('failed to delegate tokens');
    } finally {
      setIsVoting(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading text="Loading all proposals available" />
      ) : (
        <>
          {!hasClaimedNFT && <p>no vote access</p> ? (
            <div className="flex flex-col items-center justify-center w-auto h-full px-5 lg:px-20 py-5 lg:py-10 rounded-lg shadow-lg bg-neutral-800 shadow-neutral-900">
              <p className="w-full mb-5 text-center text-neutral-200">
                You are not yet a member of the community, claim your
                NFT to join
              </p>
              <Link
                to="/membership"
                className="w-full h-11 text-orange-100 bg-orange-500 hover:bg-orange-600 focus:ring-1 focus:outline-none focus:ring-orange-400 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-3 md:mr-0"
              >
                Join us now
              </Link>
            </div>
          ) : (
            <form onSubmit={handelSubmit}>
              {proposals.map((proposal) => (
                <ProposalItem
                  key={proposal.proposalId}
                  votes={proposal.votes}
                  description={proposal.description}
                  proposalId={proposal.proposalId}
                />
              ))}
              <Button
                type="submit"
                style={`${
                  hasVoted
                    ? `cursor-not-allowed opacity-70 bg-neutral-700 text-neutral-400 hover:bg-neutral-700 hover:text-neutral-400`
                    : isVoting
                    ? `cursor-progress opacity-70 hover:bg-orange-600 hover:text-orange-900`
                    : ``
                }`}
                onClick={handelSubmit}
                disabled={isVoting || hasVoted}
                title={
                  isVoting ? (
                    <Loading text="Voting..." />
                  ) : hasVoted ? (
                    'You Already Voted'
                  ) : (
                    'Submit Votes'
                  )
                }
              />
              {!hasVoted && (
                <p className="text-center text-xs text-neutral-600 py-2">
                  This will trigger multiple transactions that you
                  will need to sign.
                </p>
              )}
            </form>
          )}
        </>
      )}
    </>
  );
};
