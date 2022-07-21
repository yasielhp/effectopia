import { AppRouter } from './router/AppRouter'
import { useNetwork, useAddress } from '@thirdweb-dev/react';
import { activeChainId, activeChainName } from './constants/';
import { Modal } from './components';

export const App = () => {
  const address = useAddress();
  const network = useNetwork();
  const [, switchNetwork] = useNetwork();
  const idNetwork = network?.[0].data.chain?.id

  return (
    <>
      {
        address && (idNetwork !== activeChainId) ? <Modal titleModal="Change Networks" textModal={`Please this dapp only works on the ${activeChainName} Network, please switch networks in your connected wallet.`} textButton="Switch" actionButton={ () => switchNetwork(activeChainId)} /> : null
      }
      <AppRouter />
    </>
  )



}