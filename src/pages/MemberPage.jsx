import { Link } from 'react-router-dom'
import { useAddress, useMetamask } from '@thirdweb-dev/react';
import { shortenAddress} from '../helpers';
import { Modal } from '../components';

export const MemberPage = () => {

  const address = useAddress()
  const connectWithMetamask = useMetamask()
  return (
    <>
    {
        !address
          ? <Modal titleModal="Connect Wallet" textModal="You need to connect your wallet to view this content." textButton="Connect Wallet" actionButton={connectWithMetamask} />
          : <section className="flex flex-row h-full py-10">
              <div className="w-1/2 flex flex-col pt-16 justify-start">
                <h1 className="text-4xl font-semibold mb-7 w-auto text-left">Welcome user {shortenAddress(address) }</h1>
                <p className="w-11/12 text-lg font-normal mb-7">With your membership you will be able to be part of our community, vote, publish content and interact with other users in an anonymous and decentralized way.</p>
                <div className='w-11/12 flex flex-row gap-x-5'>
                  <Link className='px-4 py-2 leading-loose text-center w-1/2 transition duration-150 ease-in-out bg-orange-500 rounded-lg border border-orange-500 text-neutral-900 hover:text-neutral-800 hover:border-orange-700' to="/community">Community access</Link>
                </div>
              </div>
              <div className="w-1/2 p-16">
                <div className='bg-neutral-800 rounded-lg w-auto h-full py-10 px-20 shadow-lg shadow-neutral-900 flex flex-col justify-center items-center'>
                  <p className='text-center w-full mb-5 text-neutral-200'>You are not yet a member of the community, claim your NFT to join.</p>
                  <Link className='px-10 py-2 leading-loose text-center w-auto transition duration-150 ease-in-out bg-orange-500 rounded-lg border border-orange-500 text-neutral-900 hover:text-neutral-800 hover:border-orange-700' to="#">Claim NFT</Link>
                  <p className='text-center w-full mt-2 text-neutral-500'>Free membership</p>
                </div>
              </div>
            </section>
    }
    </>
  )
}
