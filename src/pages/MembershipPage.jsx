import { useEffect, useState, useCallback, useRef } from 'react';
import { useAddress, useMetamask, useEditionDrop } from '@thirdweb-dev/react';
import Spline from '@splinetool/react-spline';
import ReactCanvasConfetti from "react-canvas-confetti";

import { shortenAddress} from '../helpers';
import { Modal, Button, Loading } from '../components';
import { editionDropAddress } from '../constants';

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
};

export const MembershipPage = () => {

  const address = useAddress()
  const connectWithMetamask = useMetamask()
  const editionDrop = useEditionDrop(editionDropAddress);

  const [hasClaimedNFT, setHasClaimedNFT] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const refAnimationInstance = useRef(null);
  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.5, x: 0.74 },
        particleCount: Math.floor(200 * particleRatio)
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55
    });

    makeShot(0.2, {
      spread: 60
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45
    });
  }, [makeShot]);


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

  const mintNft = async () => {
    try {
      setIsClaiming(true);
      await editionDrop.claim("0", 1);
      console.log(`🌊 Successfully Minted! Check it out on OpenSea: https://testnets.opensea.io/assets/${editionDrop.getAddress()}/0`);
      setHasClaimedNFT(true);
      fire()
    } catch (error) {
      setHasClaimedNFT(false);
      console.error("Failed to mint NFT", error);
    } finally {
      setIsClaiming(false);
    }
  };

  return (
    <>
    {
        !address
          ? <Modal titleModal="Connect Wallet" textModal="You need to connect your wallet to view this content." textButton="Connect Wallet" actionButton={connectWithMetamask} />
          : <section className="flex flex-row min-h-full py-10">
              <div className="flex flex-col justify-start w-1/2 pt-16">
                <h1 className="w-auto text-4xl font-semibold text-left mb-7">Welcome user {shortenAddress(address) }</h1>
                <p className="w-11/12 text-lg font-normal mb-7">With your membership you will be able to be part of our community, vote, publish content and interact with other users in an anonymous and decentralized way.</p>
              </div>
              {
                isLoading
                  ? <div className="w-1/2">
                      <Loading text='Loading Membership Pass' />
                    </div>
                  : <>
                    {
                    !hasClaimedNFT
                      ? <div className="w-1/2 p-16">
                          <div className='flex flex-col items-center justify-center w-auto h-full px-20 py-10 rounded-lg shadow-lg bg-neutral-800 shadow-neutral-900'>
                          <p className='w-full mb-5 text-center text-neutral-200'>You are not yet a member of the community, claim your NFT to join</p>
                          <Button title={isClaiming ? <Loading text="Minting..." /> : `Claim NFT`} onClick={mintNft} disabled={isClaiming} style={isClaiming ? `cursor-not-allowed opacity-70 hover:bg-orange-600 hover:text-orange-900` : ``} />
                            <p className='w-full mt-2 text-center text-neutral-500'>Free membership</p>
                          </div>
                        </div>
                      : <div className="w-1/2">
                          <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
                          <Spline className='w' scene="https://prod.spline.design/9ppukUvwiPLxcP-z/scene.splinecode" />
                        </div>
                    }
                    </>
              }
            </section>
    }
    </>
  )
}
