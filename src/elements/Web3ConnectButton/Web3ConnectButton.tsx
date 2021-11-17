import React from 'react';
import { Box, Button, ButtonProps } from '@mui/material';
// import { useWallet } from '@binance-chain/bsc-use-wallet';
import { useWeb3React } from "@web3-react/core"

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Web3ConnectModal } from '../Web3ConnectModal';
import { formatAddress } from 'utils/address';
import { makeStyles, createStyles } from '@mui/styles';
import { useModal } from 'contexts/Modal';

const useStyles = makeStyles((theme) => ({
  label: {
    textTransform: 'none',
  },
}));

export const Web3ConnectButton = ({ useWalletIcon, ...props }) => {
  const classes = useStyles();
  const [showConnectModal] = useModal(<Web3ConnectModal />);

  const { account, library, chainId, error } = useWeb3React()

  // const { account, reset, connect, status } = useWallet();
  // console.log(account);

  // if (!account && status === 'disconnected') {
  //   const web3 = localStorage.getItem('web3');
  //   if (web3 === 'injected') connect('injected');
  //   else if (web3 === 'walletconnect') connect('walletconnect');
  // }

  return (
    <Button
      variant='contained'
      startIcon={<Box component='img' src='/img/wallet_ic.svg' alt='' />}
      className='def_blk_btn'
      onClick={
        !!account
          ? () => {
              console.log("Already connected");
            }
          : showConnectModal
      }
    >
      {/* <Box component='img' src='/images/cnnctwlt_ic.svg' alt='' /> */}
      {!!account ? formatAddress(account) : 'Connect Wallet'}
    </Button>
  );
};
