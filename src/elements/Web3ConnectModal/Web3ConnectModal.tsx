import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import MetamaskLogo from '../../assets/img/metamask.svg';
import WalletConnectLogo from '../../assets/img/walletconnect.svg';
import { Web3ProviderButton } from './components/Web3ProviderButton';
import { useWallet } from '@binance-chain/bsc-use-wallet';
import { Modal, ModalProps } from '../Modal';
import { networkSetup } from 'utils/networkSetup';

export const Web3ConnectModal: React.FC<ModalProps> = ({
  isOpen,
  onDismiss,
}) => {
  const { account, connect } = useWallet();

  const currentChainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10);
  useEffect(() => {
    if (account && onDismiss) {
      onDismiss();
    }
  }, [account, onDismiss]);

  const login = (connectorId) => {
    // connect(connectorId);
    // localStorage.setItem('web3', connectorId);

    // onDismiss();
    const chainId = parseInt(window.localStorage.getItem('chain'));
    console.log(chainId ? chainId : currentChainId);
    networkSetup(chainId ? chainId : currentChainId)
      .then(() => {
        connect(connectorId);
        localStorage.setItem('web3', connectorId);

        onDismiss();
      })
      .catch((e) => {
        onDismiss();
        console.error(e);
      });
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
