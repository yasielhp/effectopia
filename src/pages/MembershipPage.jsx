import { Link } from 'react-router-dom'
import { useAddress, useMetamask } from '@thirdweb-dev/react';
import { shortenAddress} from '../helpers';
import { Modal } from '../components';

export const MembershipPage = () => {

  const address = useAddress()
  const connectWithMetamask = useMetamask()
  return (
    <>
    {
        !address
          ? <Modal titleModal="Connect Wallet" textModal="You need to connect your wallet to view this content." textButton="Connect Wallet" actionButton={connectWithMetamask} />
          : <section className="flex flex-row h-full py-10">
              <div className="flex flex-col justify-start w-1/2 pt-16">
                <h1 className="w-auto text-4xl font-semibold text-left mb-7">Welcome user {shortenAddress(address) }</h1>
                <p className="w-11/12 text-lg font-normal mb-7">With your membership you will be able to be part of our community, vote, publish content and interact with other users in an anonymous and decentralized way.</p>
                <div className='flex flex-row w-11/12 gap-x-5'>
                  <Link className='w-1/2 px-4 py-2 leading-loose text-center transition duration-150 ease-in-out bg-orange-500 border border-orange-500 rounded-lg text-neutral-200 hover:text-neutral-300 hover:border-orange-700' to="/community">Community access</Link>
                </div>
              </div>
              <div className="w-1/2 p-16">
                <div className='flex flex-col items-center justify-center w-auto h-full px-20 py-10 rounded-lg shadow-lg bg-neutral-800 shadow-neutral-900'>
                  <p className='w-full mb-5 text-center text-neutral-200'>You are not yet a member of the community, claim your NFT to join.</p>
                  <Link className='w-auto px-10 py-2 leading-loose text-center transition duration-150 ease-in-out bg-orange-500 border border-orange-500 rounded-lg text-neutral-200 hover:text-neutral-300 hover:border-orange-700' to="#">Claim NFT</Link>
                  <p className='w-full mt-2 text-center text-neutral-500'>Free membership</p>
                </div>
              </div>
            </section>
    }
    </>
  )
}
