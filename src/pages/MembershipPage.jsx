import { useState } from 'react';
import {
  useAddress,
  useMetamask,
  useEditionDrop,
} from '@thirdweb-dev/react';
import Spline from '@splinetool/react-spline';

import { shortenAddress } from '../helpers';
import { Modal, Button, Loading } from '../components';
import { useMember } from '../hook/';
import { editionDropAddress } from '../constants';

export const MembershipPage = () => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const { hasClaimedNFT, setHasClaimedNFT, isLoading } = useMember();
  const editionDrop = useEditionDrop(editionDropAddress);

  const [isClaiming, setIsClaiming] = useState(false);
  const [error, setError] = useState(null);

  const mintNft = async () => {
    try {
      setIsClaiming(true);
      await editionDrop.claim('0', 1);
      console.log(
        `🌊 Successfully Minted! Check it out on OpenSea: https://testnets.opensea.io/assets/${editionDrop.getAddress()}/0`
      );
      setHasClaimedNFT(true);
    } catch (error) {
      setHasClaimedNFT(false);
      console.error('Failed to mint NFT', error);
      setError(error);
    } finally {
      setIsClaiming(false);
    }
  };

  return (
    <>
      {!address ? (
        <Modal
          titleModal="Connect Wallet"
          textModal="You need to connect your wallet to view this content."
          textButton="Connect Wallet"
          actionButton={connectWithMetamask}
        />
      ) : (
        <section className="flex flex-col lg:flex-row w-full lg:py-16">
          <div className="flex flex-col w-full lg:w-5/6 lg:mr-36 justify-center items-start">
            <h1 className="lg:w-4/5 text-3xl lg:text-5xl font-semibold text-left mb-7">
              Welcome user {shortenAddress(address)}
            </h1>
            <p className="w-full text-base lg:text-lg font-normal mb-7">
              With your membership you will be able to be part of our
              community, vote, publish content and interact with other
              users in an anonymous and decentralized way.
            </p>
          </div>
          {isLoading ? (
            <div className="w-full lg:w-1/2 lg:px-16">
              <Loading text="Loading Membership Pass" />
            </div>
          ) : (
            <>
              {!hasClaimedNFT || error ? (
                <div className="flex flex-col w-full lg:w-2/3">
                  <div className="flex flex-col items-center justify-center w-auto h-full px-5 lg:px-20 py-5 lg:py-10 rounded-lg shadow-lg bg-neutral-800 shadow-neutral-900">
                    <p className="w-full mb-5 text-center text-neutral-200">
                      You are not yet a member of the community, claim
                      your NFT to join
                    </p>
                    <Button
                      title={
                        isClaiming ? (
                          <Loading text="Minting..." />
                        ) : (
                          `Claim NFT`
                        )
                      }
                      onClick={mintNft}
                      disabled={isClaiming}
                      style={
                        isClaiming
                          ? `cursor-progress opacity-70 hover:bg-orange-600 hover:text-orange-900`
                          : ``
                      }
                    />
                    <p
                      className={`w-full mt-2 text-center ${
                        error
                          ? `text-red-500 text-sm`
                          : `text-neutral-500`
                      }`}
                    >
                      {error
                        ? 'Failed to mint NFT, please try again'
                        : 'Free membership'}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex w-full h-full ">
                  <Spline scene="https://prod.spline.design/9ppukUvwiPLxcP-z/scene.splinecode" />
                </div>
              )}
            </>
          )}
        </section>
      )}
    </>
  );
};
