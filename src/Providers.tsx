import React from 'react';
// import * as bsc from '@binance-chain/bsc-use-wallet';
import { getRpcUrl } from './utils';
import { ModalProvider } from 'contexts/Modal';
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers';
import { NetworkContextName } from './constants';
import Web3ReactManager from './components/Web3ReactManager';

const Providers: React.FC = ({ children }) => {
  // const rpcUrl = getRpcUrl();
  // const chainId = parseInt(process.env.REACT_APP_CHAIN_ID!, 10);
  // const localChainID = parseInt(window.localStorage.getItem('chain'));
  // console.log(localChainID ? localChainID : chainId);

  return (
    <Web3ReactManager>
      <ModalProvider>{children}</ModalProvider>
    </Web3ReactManager>
  );
};

export default Providers;
