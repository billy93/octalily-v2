import React from 'react'
import { Box, Grid, Typography, Button, Stack } from '@mui/material';
import { Table } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function ShowAll() {
    return (
        <>
            <Box className="v1_rltv_pddng v1_rltv_pddng_tkn_v2">
                <Box component="img" src="/img/tkn_d_wll.png" className="wel_img" />
                <Box className="homesc_one sc_wt_bg hm_sdw_bx">
                    <Box component="img" src="/img/mdl_lft_img.png" className="mdl_lft_img" />
                    <Box component="img" src="/img/mdl_rgt_img.png" className="mdl_rgt_img" />
                    <Box component="img" src="/img/tkn_di_bg.png" className="bg_img" />
                    <Box className="p_rltv w-100">
                        <Table responsive className="token_table">
                            <thead>
                                <tr>
                                    <th>Address</th>
                                    <th>Burn Rate</th>
                                    <th>Up %</th>
                                    <th>Up Delay</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr>
                                    <td>0x235D...1A2A</td>
                                    <td>6.9</td>
                                    <td>4.2</td>
                                    <td>690</td>
                                    <td>
                                        <Button variant="contained" className="tbldrkbtn">Up Only</Button>
                                        <Link to="/" className="tbldrkbtn">Details</Link>
                                        <Button variant="contained" className="buy_btn" startIcon={<Box component="img" src="/img/wallet_ic.svg" alt="" />}>Buy</Button>
                                    </td>
                                </tr> */}
                                <tr>
                                    <td>0x235D...1A2A</td>
                                    <td>6.9</td>
                                    <td>4.2</td>
                                    <td>690</td>
                                    <td>
                                        <Button variant="contained" className="tbldrkbtn">Up Only</Button>
                                        <Button variant="contained" className="tbldrkbtn">Show Petals</Button>
                                        <Link to="/details/test" className="tbldrkbtn">Details</Link>

                                        <Link to="/details/test">
                                            <Button variant="contained" className="buy_btn" startIcon={<Box component="img" src="/img/wallet_ic.svg" alt="" />}>
                                                Buy
                                            </Button>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Box>
                </Box>
            </Box>
            
        </>
    )
}

export default ShowAll
