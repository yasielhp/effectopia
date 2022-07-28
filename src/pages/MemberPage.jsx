import { MemberList } from '../components/MemberList';
import { Modal } from '../components/Modal';
import { useAddress, useMetamask } from '@thirdweb-dev/react';

export const MemberPage = () => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
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
        <>
          <section className="flex flex-col">
            <h1 className="lg:w-4/5 text-3xl lg:text-5xl font-semibold text-left mb-7">
              Community members
            </h1>
            <p className="w-full text-base lg:text-lg font-normal mb-7">
              Effectopia is a revolutionary virtual community; a
              real-time peer-to-peer collaboration platform for
              teachers and students powered by the #MASSIVEADOPTION
              movement. Join the community and join us in our mission
              to provide diversity, individuality and freedom like
              never before.
            </p>
          </section>
          <section className="w-full">
            <MemberList />
          </section>
        </>
      )}
    </>
  );
};
