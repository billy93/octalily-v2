import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Box, Button } from '@mui/material';
import {Link} from 'react-router-dom'

function Header() {
    return (
        <>
            <header className="header">
                <Container fluid>
                    <Box className="in_header">
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                            <Navbar.Brand>
                                <Link to="/">
                                    <Box component="img" src="/img/logo.svg" alt="" />
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Box className="rsp_pdngmn">
                                    <Nav className="m-auto">
                                        <Link to="/" className="nav-link">
                                            <Box component="span" className="mn_ic">
                                                <Box component="img" src="/img/ethereum_ic.svg" alt="" />
                                            </Box>
                                            ETHEREUM
                                        </Link>
                                        <Link to="/" className="nav-link">
                                            <Box component="span" className="mn_ic">
                                                <Box component="img" src="/img/bsc_ic.svg" alt="" />
                                            </Box>
                                            BSC
                                        </Link>
                                        <Link to="/" className="nav-link">
                                            <Box component="span" className="mn_ic">
                                                <Box component="img" src="/img/matic_ic.svg" alt="" />
                                            </Box>
                                            MATIC
                                        </Link>
                                    </Nav>
                                    <Button 
                                        variant="contained" 
                                        startIcon={<Box component="img" src="/img/wallet_ic.svg" alt="" />}
                                        className="def_blk_btn"
                                    >
                                        Connect Wallet
                                    </Button>
                                </Box>
                                
                            </Navbar.Collapse>
                            
                        </Navbar>
                    </Box>
                </Container>
            </header>
        </>
    )
}

export default Header
