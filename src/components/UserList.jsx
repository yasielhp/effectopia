import React from 'react'
import { UserItem } from './UserItem';

const users = [
  {
    wallet: "0x779f1ac2aCfbA9739A06032997eF8742f73622E5",
    tokenAmount: 32115253.40,
  },
  {
    wallet: "0xc0ffee254729296a45a3885639AC7E10F9d54979",
    tokenAmount: 1234235.23,
  },
  {
    wallet: "0x999999cf1046e68e36E1aA2E0E07105eDDD1f08E",
    tokenAmount: 0.0,
  }
]

export const UserList = () => {
  return (
    <div className="flex flex-wrap overflow-hidden">
      {
        users.map((user) =>
          <UserItem key={user.wallet} wallet={user.wallet} tokenAmount={user.tokenAmount} />
        )
      }
    </div>
  )
}
