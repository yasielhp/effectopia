import { useState, useEffect, useMemo } from 'react';
import { useEditionDrop, useToken } from '@thirdweb-dev/react';
import { Loading} from '../components/Loading';

import { MemberItem } from './MemberItem';
import { tokenAddress, editionDropAddress } from '../constants';

export const MemberList = () => {

  const token = useToken(tokenAddress)
  const editionDrop = useEditionDrop(editionDropAddress);
  const [memberTokenAmounts, setMemberTokenAmounts] = useState([]);
  const [memberAddresses, setMemberAddresses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
  const getAllAddresses = async () => {
    try {
      setIsLoading(true);
      const memberAddresses = await editionDrop.history.getAllClaimerAddresses(0);
      setMemberAddresses(memberAddresses);
      console.log("🚀 Members addresses", memberAddresses);
      setIsLoading(false)
    } catch (error) {
      console.error("failed to get member list", error);
    }
  };
  getAllAddresses();
  }, [editionDrop.history]);

  useEffect(() => {
  const getAllBalances = async () => {
    try {
      setIsLoading(true);
      const amounts = await token.history.getAllHolderBalances();
      setMemberTokenAmounts(amounts);
      console.log("👜 Amounts", amounts);
      setIsLoading(false)
    } catch (error) {
      console.error("failed to get member balances", error);
    }
  };
  getAllBalances();
  }, [token.history]);

  const memberList = useMemo(() => {
  return memberAddresses.map((address) => {
    const member = memberTokenAmounts?.find(({ holder }) => holder === address);
    return {
      address,
      tokenAmount: member?.balance.displayValue || "0.0",
    }
  });
}, [memberAddresses, memberTokenAmounts]);

  return (
    <>
      {
        isLoading
          ? <Loading text="Loading member list " />
          : <>
              <p className='w-11/12 text-xl font-semibold mb-4'>Member list</p>
              <div className="flex flex-wrap overflow-hidden">
              {memberList.map((member) => <MemberItem key={member.address} address={member.address} tokenAmount={member.tokenAmount} />)}
              </div>
            </>
      }
    </>
  )
}
