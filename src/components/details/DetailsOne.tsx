import React from 'react'
import { Box, Grid, Typography, Button } from '@mui/material';

function DetailsOne() {
    return (
        <>
            <Box className="v1_rltv_pddng v1_rltv_pddng_tkn dtls_d_prnt01">
                <Box component="img" src="/img/pl_wl_01.png" className="wel_img" />
                <Box component="img" src="/img/pl_ex_img02.png" className="img-fluid pl_ex_img02" />
                <Box className="homesc_one sc_wt_bg hm_sdw_bx">
                    <Box component="img" src="/img/d_ftr_img01.png" className="mdl_lft_img" />
                    <Box component="img" src="/img/d_ftr_img02.png" className="mdl_rgt_img" />
                    <Box component="img" src="/img/buysell_bg.png" className="bg_img" />
                    <Box className="p_rltv w-100 mb-3">
                        <Typography component="h3" className="modal_title">Swap</Typography>
                        <Typography component="h4" className="modal_subtitle">You use Root Token</Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Box className="tkninfo_bx">
                                    <Box className="tkninfo_bx_top">
                                        From
                                        <span>Balance: <b>0.0000</b></span>
                                    </Box>
                                    <Box className="tkninfo_bx_mddl">
                                        <input type="text"  className="tknipt" />
                                        <Box className="tkn_right_info">
                                            <span>MAX</span>
                                            {/* ORLY */}
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} className="text-center">
                                <Button className="tknbtn">
                                    <Box component="img" src="/img/tknarrow.svg" />
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Box className="tkninfo_bx">
                                    <Box className="tkninfo_bx_top">
                                        To
                                        <span>Balance: <b>0.0000</b></span>
                                    </Box>
                                    <Box className="tkninfo_bx_mddl">
                                        <input type="text"  className="tknipt" />
                                        <Box className="tkn_right_info">
                                            <span>MAX</span>
                                            ORLY
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button variant="contained" className="cncl_btn">Approve</Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button variant="contained" className="buy_btn">Swap</Button>
                            </Grid>
                        </Grid>
                        
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default DetailsOne
