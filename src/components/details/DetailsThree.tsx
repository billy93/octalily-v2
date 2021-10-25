import React from 'react'
import { Box, Grid, Typography, Button, Stack } from '@mui/material';
import { Table } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function DetailsThree() {
    return (
        <>
           <Box className="v1_rltv_pddng v1_rltv_pddng_tkn_v2">
                <Box component="img" src="/img/pl_wl_03.png" className="wel_img" />
                <Box className="homesc_one sc_wt_bg hm_sdw_bx">
                    <Box component="img" src="/img/d_ftr_img03.png" className="mdl_lft_img" />
                    <Box component="img" src="/img/d_ftr_img04.png" className="mdl_rgt_img" />
                    <Box component="img" src="/img/pl_md_bg03.png" className="bg_img" />
                    <Box className="p_rltv w-100">
                        <Table responsive className="token_table token_table_wtbrdr">
                            <tbody>
                                <tr>
                                    <td>
                                        <Button variant="contained" className="tbldrkbtn">Pay Fees</Button>
                                    </td>
                                    <td>
                                        <Typography component="p">0x235DD84213aw64w3a54f4awf34a3w51f12aw</Typography>
                                    </td>
                                    <td className="text-end">17 294.9341</td>
                                    <td>ORLY</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Button variant="contained" className="tbldrkbtn">Collect Fees from Petal 1</Button>
                                    </td>
                                    <td>
                                        <Typography component="p">0x235DD84213aw64w3a54f4awf34a3w51f12aw</Typography>
                                    </td>
                                    <td className="text-end">0.0000</td>
                                    <td>ORLY</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Button variant="contained" className="tbldrkbtn">Collect Fees from Petal 2</Button>
                                    </td>
                                    <td>
                                        <Typography component="p">0x235DD84213aw64w3a54f4awf34a3w51f12aw</Typography>
                                    </td>
                                    <td className="text-end">0.0000</td>
                                    <td>ORLY</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Button variant="contained" className="tbldrkbtn">Pay Collect Fees from Petal 3</Button>
                                    </td>
                                    <td>
                                        <Typography component="p">0x235DD84213aw64w3a54f4awf34a3w51f12aw</Typography>
                                    </td>
                                    <td className="text-end">0.0000</td>
                                    <td>ORLY</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Button variant="contained" className="tbldrkbtn">Pay Collect Fees from Petal 4</Button>
                                    </td>
                                    <td>
                                        <Typography component="p">0x235DD84213aw64w3a54f4awf34a3w51f12aw</Typography>
                                    </td>
                                    <td className="text-end">0.0000</td>
                                    <td>ORLY</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Button variant="contained" className="tbldrkbtn">Pay Collect Fees from Petal 5</Button>
                                    </td>
                                    <td>
                                        <Typography component="p">0x235DD84213aw64w3a54f4awf34a3w51f12aw</Typography>
                                    </td>
                                    <td className="text-end">0.0000</td>
                                    <td>ORLY</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Button variant="contained" className="tbldrkbtn">Pay Collect Fees from Petal 6</Button>
                                    </td>
                                    <td>
                                        <Typography component="p">0x235DD84213aw64w3a54f4awf34a3w51f12aw</Typography>
                                    </td>
                                    <td className="text-end">0.0000</td>
                                    <td>ORLY</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Button variant="contained" className="tbldrkbtn">Pay Collect Fees from Petal 7</Button>
                                    </td>
                                    <td>
                                        <Typography component="p">0x235DD84213aw64w3a54f4awf34a3w51f12aw</Typography>
                                    </td>
                                    <td className="text-end">0.0000</td>
                                    <td>ORLY</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Button variant="contained" className="tbldrkbtn">Pay Collect Fees from Petal 8</Button>
                                    </td>
                                    <td>
                                        <Typography component="p">0x235DD84213aw64w3a54f4awf34a3w51f12aw</Typography>
                                    </td>
                                    <td className="text-end">0.0000</td>
                                    <td>ORLY</td>
                                </tr>
                                
                            </tbody>
                        </Table>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default DetailsThree
