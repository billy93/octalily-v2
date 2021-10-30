import { useWeb3React } from "@web3-react/core"
import React, {useEffect, useContext, useState} from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Web3ConnectButton } from './Web3ConnectButton';
import { networkSetup } from 'utils/networkSetup';
// import { useWallet } from '@binance-chain/bsc-use-wallet';

function Header() {

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
                    {/* <Link
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
                    </Link> */}
                    <Link
                      to='/'
                      className='nav-link'
                    >
                      <Box component='span' className='mn_ic'>
                        <Box component='img' src='/img/matic_ic.svg' alt='' />
                      </Box>
                      MATIC
                    </Link>
                  </Nav>
                  {/* <Link
                      to='/'
                      onClick={() => changeNetwork(137)}
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
                  </Link> */}
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
