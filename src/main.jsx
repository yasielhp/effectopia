import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';

import { activeChainId } from './constants/';

const appMeta = {
  name: 'Effectopia',
  description: 'A DAO for content creators around the world!',
  logoUrl: 'http://localhost:3000/logo.svg',
  url: 'https://effectopia.com',
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  //<React.StrictMode>
  <ThirdwebProvider desiredChainId={activeChainId} dAppMeta={appMeta}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThirdwebProvider>
  //</React.StrictMode>
);
