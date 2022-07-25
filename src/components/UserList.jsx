import { useState, useEffect, useMemo } from 'react';
import { useEditionDrop, useToken } from '@thirdweb-dev/react';

import { UserItem } from './UserItem';
import { tokenAddress, editionDropAddress } from '../constants';

export const UserList = () => {

  const token = useToken(tokenAddress)
  const editionDrop = useEditionDrop(editionDropAddress);
  const [memberTokenAmounts, setMemberTokenAmounts] = useState([]);
  const [memberAddresses, setMemberAddresses] = useState([]);

  useEffect(() => {
  const getAllAddresses = async () => {
    try {
      const memberAddresses = await editionDrop.history.getAllClaimerAddresses(0);
      setMemberAddresses(memberAddresses);
      console.log("🚀 Members addresses", memberAddresses);
    } catch (error) {
      console.error("failed to get member list", error);
    }
  };
  getAllAddresses();
  }, [editionDrop.history]);

  useEffect(() => {
  const getAllBalances = async () => {
    try {
      const amounts = await token.history.getAllHolderBalances();
      setMemberTokenAmounts(amounts);
      console.log("👜 Amounts", amounts);
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
    <div className="flex flex-wrap overflow-hidden">
      {
        memberList.map((member) =>
          <UserItem key={member.address} address={member.address} tokenAmount={member.tokenAmount} />
        )
      }
    </div>
  )
}
