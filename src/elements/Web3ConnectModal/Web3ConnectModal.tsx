import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import MetamaskLogo from '../../assets/img/metamask.svg';
import WalletConnectLogo from '../../assets/img/walletconnect.svg';
import { Web3ProviderButton } from './components/Web3ProviderButton';
// import { useWallet } from '@binance-chain/bsc-use-wallet';
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core"

import { Modal, ModalProps } from '../Modal';
import { networkSetup } from 'utils/networkSetup';

export const Web3ConnectModal: React.FC<ModalProps> = ({
  isOpen,
  onDismiss,
}) => {
  // const { account, connect } = useWallet();
  const { active, account, connector, activate, error } = useWeb3React()

  const currentChainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10);
  // useEffect(() => {
  //   if (account && onDismiss) {
  //     onDismiss();
  //   }
  // }, [account, onDismiss]);

  const login = (connectorId) => {
    // connect(connectorId);
    // localStorage.setItem('web3', connectorId);

    // onDismiss();
    const chainId = parseInt(window.localStorage.getItem('chain'));
    // networkSetup(chainId ? chainId : currentChainId)
    //   .then(() => {
        const walletconnect = new WalletConnectConnector({
          rpc: { 137: 'https://matic-mainnet.chainstacklabs.com' }, // Infura URL does not work 
          bridge: 'https://bridge.walletconnect.org',
          qrcode: true,
          chainId: 137,
          supportedChainIds: [137]
        })
        const conn = new InjectedConnector({
          supportedChainIds: [137]
        });

        
        activate(connectorId == "injected" ? conn : walletconnect, undefined, true).then(() => {
          console.log("Success connected")
          onDismiss();
        }).catch(error => {
          console.log("ERROR");
          console.log(error);
          if (error instanceof UnsupportedChainIdError) {
              activate(conn) // a little janky...can't use setError because the connector isn't set
          } else {
              // setPendingError(true)
          }
        })
      // })
      // .catch((e) => {
      //   onDismiss();
      //   console.error(e);
      // });
  };

  return (
    <Modal
      isOpen={true}
      onDismiss={onDismiss}
      fullWidth
      title='Connect To Wallet'
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Web3ProviderButton
            image={MetamaskLogo}
            providerName='Metamask'
            onClick={() => {
              login('injected');
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Web3ProviderButton
            image={WalletConnectLogo}
            providerName='WalletConnect'
            onClick={() => {
              login('walletconnect');
            }}
          />
        </Grid>
      </Grid>
    </Modal>
  );
};
