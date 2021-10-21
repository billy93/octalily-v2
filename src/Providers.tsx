import React from 'react';
import * as bsc from '@binance-chain/bsc-use-wallet';
import { getRpcUrl } from './utils';
import { ModalProvider } from 'contexts/Modal';

const Providers: React.FC = ({ children }) => {
  const rpcUrl = getRpcUrl();
  const chainId = parseInt(process.env.REACT_APP_CHAIN_ID!, 10);
  const localChainID = parseInt(window.localStorage.getItem('chain'));
  console.log(localChainID ? localChainID : chainId);
  return (
    <bsc.UseWalletProvider
      chainId={localChainID ? localChainID : chainId}
      connectors={{
        walletconnect: { rpcUrl },
        bsc,
      }}
    >
      <ModalProvider>{children}</ModalProvider>
    </bsc.UseWalletProvider>
  );
};

export default Providers;
