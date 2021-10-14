import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Box, Grid, Typography } from '@mui/material';
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer className="footer">
                <Container className="cstm_cntnr">
                    <Box className="top_footer">
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} lg={4}>
                                <Link to="/">
                                    <Box component="img" src="/img/logo.svg" alt="" className="ftrlg" />
                                </Link>
                            </Grid>
                            <Grid item xs={12} lg={2} sm={6}>
                                <Typography component="h4">Tools</Typography>
                                <ul>
                                    <li>
                                        <Link to="/">Transfer Gate</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Arvitrage</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Liqudity Event</Link>
                                    </li>
                                </ul>
                            </Grid>
                            <Grid item xs={12} lg={2} sm={6}>
                                <Typography component="h4">Pools</Typography>
                                <ul>
                                    <li>
                                        <Link to="/">ETH/kETH</Link>
                                    </li>
                                    <li>
                                        <Link to="/">ETH/wBTC</Link>
                                    </li>
                                    <li>
                                        <Link to="/">ETH/wETH</Link>
                                    </li>
                                </ul>
                            </Grid>
                            <Grid item xs={12} lg={2} sm={6}>
                                <Typography component="h4">Uniswap</Typography>
                                <ul>
                                    <li>
                                        <Link to="/">Swap ETH/ROOT</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Swap kETH/ROOT</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Swap wBTC/ROOT</Link>
                                    </li>
                                </ul>
                            </Grid>
                            <Grid item xs={12} lg={2} sm={6}>
                                <Typography component="h4">Information</Typography>
                                <ul>
                                    <li>
                                        <Link to="/">Learn more</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Medium articles</Link>
                                    </li>
                                    <li>
                                        <Link to="/">GitHub Contracts</Link>
                                    </li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className="bottom_footer">
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} lg={4}>
                                <Typography component="p">RootFinance. All rights reserved (c) 2021</Typography>
                            </Grid>
                            <Grid item xs={12} lg={4} className="text-center">as</Grid>
                            <Grid item xs={12} lg={4} className="as_text_right">
                                <Typography component="p">
                                    <Link to="/">Privacy policy </Link>
                                    &nbsp;and&nbsp;
                                    <Link to="/">Tems of use</Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </footer>
        </>
    )
}

export default Footer
