import React from 'react'
import { Box, Grid, Typography, Button } from '@mui/material';

function DetailsTwo() {
    return (
        <>
            <Box className="v1_rltv_pddng v1_rltv_pddng_tkn dtls_d_prnt02">
                <Box component="img" src="/img/pl_wl_02.png" className="wel_img" />
                <Box className="homesc_one sc_wt_bg hm_sdw_bx">
                    <Box component="img" src="/img/pl_md_bg02.png" className="bg_img" />
                    <Box className="p_rltv w-100">
                        <Box className="d_all_infobx">
                            <Typography component="h4">
                                <span>Price:</span>
                                0.0000000069
                            </Typography>
                            <Typography component="h4">
                                <span>Total Supply:</span>
                                183 596
                            </Typography>
                            <Typography component="h4">
                                <span>Paired Balance:</span>
                                0.1772
                            </Typography>
                            <Typography component="h4">
                                <span>Account Balance:</span>
                                0.0000
                            </Typography>
                            <Typography component="h4">
                                <span>Burn Rate:</span>
                                6.9%
                            </Typography>
                            <Typography component="h4">
                                <span>Up Percent:</span>
                                4.2%
                            </Typography>
                            <Typography component="h4">
                                <span>Up Delay:</span>
                                690 seconds
                            </Typography>
                            <Typography component="h4">
                                <span>Petal Count:</span>
                                8
                            </Typography>
                            <Typography component="h4">
                                <span>Owner:</span>
                                0x804C...ABdf
                            </Typography>
                            <Typography component="h4">
                                <span>Owner 2:</span>
                                0x804C...ABdf
                            </Typography>
                            <Typography component="h4">
                                <span>Owner 3:</span>
                                0x804C...ABdf
                            </Typography>
                        </Box>
                        <hr className="d_hr" />
                        <Box className="d_all_infobx_btm">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Button variant="contained" className="buy_btn more_shadow">Up Only</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" className="cncl_btn">Let Flowers Cover The Earth</Button>
                                </Grid>
                                <Grid item xs={12} className="text-center">
                                    <Box component="img" src="/img/d_ftr_img03.png" className="img-fluid" />        
                                </Grid>
                                
                            </Grid>
                        </Box>
                        
                        
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default DetailsTwo
