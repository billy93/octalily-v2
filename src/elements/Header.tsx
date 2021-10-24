import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Web3ConnectButton } from './Web3ConnectButton';
import { networkSetup } from 'utils/networkSetup';
import { useWallet } from '@binance-chain/bsc-use-wallet';

function Header() {
  const { account, connect } = useWallet();
  const changeNetwork = (currentChainId) => {
    window.localStorage.setItem('chain', currentChainId);

    networkSetup(currentChainId)
      .then(() => {
        connect('injected');
        localStorage.setItem('web3', 'injected');
        window.location.reload();
      })
      .catch((e) => {
        console.error(e);
      });
  };
  return (
    <>
      <header className='header'>
        <Container fluid>
          <Box className='in_header'>
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
              <Navbar.Brand>
                <Link to='/'>
                  <Box component='img' src='/img/logo.svg' alt='' />
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='responsive-navbar-nav' />
              <Navbar.Collapse id='responsive-navbar-nav'>
                <Box className='rsp_pdngmn'>
                  <Nav className='m-auto'>
                    <Link
                      to='/'
                      className='nav-link'
                      onClick={() => changeNetwork(4)}
                    >
                      <span className="drk_lbl">Buy</span>
                      <Box component='span' className='mn_ic'>
                        <Box
                          component='img'
                          src='/img/ethereum_ic.svg'
                          alt=''
                        />
                      </Box>
                      ETHEREUM
                    </Link>
                    <Link
                      to='/'
                      className='nav-link'
                      onClick={() => changeNetwork(56)}
                    >
                      <Box component='span' className='mn_ic'>
                        <Box component='img' src='/img/bsc_ic.svg' alt='' />
                      </Box>
                      BSC
                    </Link>
                    <Link
                      to='/'
                      className='nav-link'
                      onClick={() => changeNetwork(137)}
                    >
                      <Box component='span' className='mn_ic'>
                        <Box component='img' src='/img/matic_ic.svg' alt='' />
                      </Box>
                      MATIC
                    </Link>
                  </Nav>
                  <Link
                      to='/'
                      onClick={() => changeNetwork(4)}
                      className="extrlnk"
                    >
                      <span className="drk_lbl">sell</span>
                      <Box component='span' className='mn_ic'>
                        <Box
                          component='img'
                          src='/img/sell_ic.svg'
                          alt=''
                        />
                      </Box>
                      SELL
                    </Link>
                  {/* <Button
                    variant='contained'
                    startIcon={
                      <Box component='img' src='/img/wallet_ic.svg' alt='' />
                    }
                    className='def_blk_btn'
                  >
                    Connect Wallet
                  </Button> */}
                  <Web3ConnectButton useWalletIcon={false} />
                </Box>
              </Navbar.Collapse>
            </Navbar>
          </Box>
        </Container>
      </header>
    </>
  );
}

export default Header;
