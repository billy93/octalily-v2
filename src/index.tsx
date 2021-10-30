import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/App.scss';
import './assets/css/Dark.scss';
import './assets/css/BSC-theme.scss';
import './assets/css/ETH-theme.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Providers from 'Providers';
import { Web3Provider } from '@ethersproject/providers';
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import { NetworkContextName } from './constants';

if ('ethereum' in window) {
  (window.ethereum as any).autoRefreshOnNetworkChange = false; 

  // Refresh page on network change
  // https://github.com/ethers-io/ethers.js/issues/866
  // The "any" network will allow spontaneous network changes
  const provider = new Web3Provider(window.ethereum as any, "any");
  provider.on("network", (newNetwork, oldNetwork) => {
      // When a Provider makes its initial connection, it emits a "network"
      // event with a null oldNetwork along with the newNetwork. So, if the
      // oldNetwork exists, it represents a changing network
      if (oldNetwork) {
         window.location.reload();
      }
  });
}


const getLibrary = (provider: any): Web3Provider => {
  const library = new Web3Provider(provider, 'any')
  library.pollingInterval = 15000
  return library
}
const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)


ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>   
      <Web3ProviderNetwork getLibrary={getLibrary}>  
          <Providers>
            <App />
          </Providers>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
