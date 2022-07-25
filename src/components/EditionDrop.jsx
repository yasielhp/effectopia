import { useAddress, useMetamask, useEditionDrop } from '@thirdweb-dev/react';
import { useState, useEffect } from 'react';
import { editionDropAddress } from '../constants';

export const EditionDrop = () => {
  const editionDrop = useEditionDrop(editionDropAddress);
  const [hasClaimedNFT, setHasClaimedNFT] = useState(false);


  return (
    <div>EditionDrop</div>
  )
}
