import { useState, useEffect } from 'react'
import { useAddress, useEditionDrop } from "@thirdweb-dev/react";

import { editionDropAddress } from '../constants';
import { useLoading } from './useLoading';

export const useMember = () => {

  const address = useAddress();
  const editionDrop = useEditionDrop(editionDropAddress);

  const [hasClaimedNFT, setHasClaimedNFT] = useState(false);

  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    if (!address) {
      return;
    }
    const checkBalance = async () => {
      try {
        setIsLoading(true);
        const balance = await editionDrop.balanceOf(address, 0);
        if (balance.gt(0)) {
          setHasClaimedNFT(true);
          console.log("🎉 You have an NFT!");
          setIsLoading(false);
        } else {
          setHasClaimedNFT(false);
          console.log("🤷‍♂️ You don't have an NFT.");
          setIsLoading(false);
        }
      } catch (error) {
        setHasClaimedNFT(false);
        console.error("Failed to get nft balance", error);
        setIsLoading(false);
      }
    };
    checkBalance();
  }, [address, editionDrop]);

  return { hasClaimedNFT, setHasClaimedNFT,  isLoading };
}
