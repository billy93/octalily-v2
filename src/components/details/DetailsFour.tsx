import React from 'react'
import { Box, Grid, Typography, Button, Stack } from '@mui/material';
import { Table } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { formatAddress } from 'utils/address';

const DetailsFour = ({ flower }) =>  {
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
                                        <Typography component="p">{flower !=null && flower.owner != null ?formatAddress(flower.owner.id):""} </Typography>
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
                                        <Typography component="p">{flower !=null && flower.owner2 != null ? formatAddress(flower.owner2.id):""} </Typography>
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
                                        <Typography component="p">{flower !=null && flower.owner3 != null ? formatAddress(flower.owner3.id):""} </Typography>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 4:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">{flower !=null && flower.owner4 != null ? formatAddress(flower.owner4.id):""} </Typography>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 5:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">{flower !=null && flower.owner5 != null ? formatAddress(flower.owner5.id):""} </Typography>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 6:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">{flower !=null && flower.owner6 != null ? formatAddress(flower.owner6.id):""} </Typography>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 7:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">{flower !=null && flower.owner7 != null ? formatAddress(flower.owner7.id):""} </Typography>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 8:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">{flower !=null && flower.owner8 != null ? formatAddress(flower.owner8.id):""} </Typography>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 9:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">{flower !=null && flower.owner9 != null ? formatAddress(flower.owner9.id):""} </Typography>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 10:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">{flower !=null && flower.owner10 != null ? formatAddress(flower.owner10.id):""} </Typography>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 11:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">{flower !=null && flower.owner11 != null ? formatAddress(flower.owner11.id):""} </Typography>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 12:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">{flower !=null && flower.owner12 != null ? formatAddress(flower.owner12.id):""} </Typography>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 13:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">{flower !=null && flower.owner13 != null ? formatAddress(flower.owner13.id):""} </Typography>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 14:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">{flower !=null && flower.owner14 != null ? formatAddress(flower.owner14.id):""} </Typography>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 15:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">{flower !=null && flower.owner15 != null ? formatAddress(flower.owner15.id):""} </Typography>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Pending Owner:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">{flower !=null && flower.pendingOwner != null ? formatAddress(flower.pendingOwner):""}</Typography>
                                    </td>
                                    <td>
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
