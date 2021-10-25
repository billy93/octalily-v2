import React from 'react'
import { Box, Grid, Typography, Button, Stack } from '@mui/material';
import { Table } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function DetailsFour() {
    return (
        <>
           <Box className="v1_rltv_pddng v1_rltv_pddng_tkn_v2">
                <Box component="img" src="/img/pl_wl_04.png" className="wel_img" />
                <Box className="homesc_one sc_wt_bg hm_sdw_bx">
                    <Box component="img" src="/img/mdl_lft_img_v2.png" className="mdl_lft_img" />
                    <Box component="img" src="/img/d_ftr_img03.png" className="mdl_rgt_img" />
                    <Box component="img" src="/img/pl_md_bg04.png" className="bg_img" />
                    <Box className="p_rltv w-100">
                        <Table responsive className="token_table token_table_wtbrdr">
                            <tbody>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 1:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">0x235DD84213aw64w3a54f4awf34a3w51f12aw</Typography>
                                    </td>
                                    <td>
                                        <Button variant="contained" className="tbldrkbtn">Transfer Ownership</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 2:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">0x235DD84213aw64w3a54f4awf34a3w51f12aw</Typography>
                                    </td>
                                    <td>
                                        <Button variant="contained" className="tbldrkbtn">Claim Ownership</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 3:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">0x235DD84213aw64w3a54f4awf34a3w51f12aw</Typography>
                                    </td>
                                    <td>
                                        <Button variant="contained" className="tbldrkbtn">Set Owner 2 and Owner 3</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Pending Owner:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">0x235DD84213aw64w3a54f4awf34a3w51f12aw</Typography>
                                    </td>
                                    <td>
                                        <Button variant="contained" className="tbldrkbtn">Set Owner 2 and Owner 3</Button>
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

export default DetailsFour
