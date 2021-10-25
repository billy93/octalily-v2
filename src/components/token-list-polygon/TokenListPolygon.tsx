import React, {useEffect} from 'react'
import { Box, Grid, Typography, Button, Stack } from '@mui/material';

export default function TokenListPolygon() {
    useEffect(() => {
        const body = document.querySelector("body");
        document.body.classList.add("dark_theme");
        return () => {
        body.classList.remove("dark_theme");
        }
    });
    return (
        <>
           <Box className="main tknlst_bg_v2">
                <Box component="img" src="/img/tkntp_lnbg_v4.png" className="tkntp_lnbg_v4 img-fluid" />
                <Box className="tkn_tp_bx" sx={{ pb: 20, }}>
                    
                    <Box component="img" src="/img/tkntp_lnbg_v5.png" className="img-fluid tkntp_lnbg_v3 tkntp_lnbg_v5" />
                    <Typography component="h3" className="tkn_title_v2">For trade Flower connect Token</Typography>
                    <Box className="v1_rltv_pddng v1_rltv_pddng_tkn">
                        <Box component="img" src="/img/tkn_wll_v2.png" className="wel_img" />
                            <Box className="homesc_one sc_wt_bg hm_sdw_bx">
                                <Box component="img" src="/img/mdl_lft_img.png" className="mdl_lft_img" />
                                <Box component="img" src="/img/mdl_rgt_img.png" className="mdl_rgt_img" />
                                <Box component="img" src="/img/buysell_bg.png" className="bg_img" />
                                <Box className="p_rltv w-100 mb-3">
                                    <Typography component="h3" className="modal_title">Sell Octa</Typography>
                                    <Typography component="h4" className="modal_subtitle">You use Root Token</Typography>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <Box className="tkninfo_bx">
                                                <Box className="tkninfo_bx_top">
                                                    Amount to spend
                                                    <span>Balance: <b>0.0565</b></span>
                                                </Box>
                                                <Box className="tkninfo_bx_mddl">
                                                    <input type="text" value="0.222" className="tknipt" />
                                                    <Box className="tkn_right_info">
                                                        <span>MAX</span>
                                                        ORLY
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
                                                    You have receive
                                                    <span>Balance: <b>0.0000</b></span>
                                                </Box>
                                                <Box className="tkninfo_bx_mddl">
                                                    <input type="text" value="0.222" className="tknipt" />
                                                    <Box className="tkn_right_info">
                                                        {/* <span>MAX</span> */}
                                                        BNB
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Button variant="contained" className="cncl_btn">Cancel</Button>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Button variant="contained" className="buy_btn">Sell</Button>
                                        </Grid>
                                    </Grid>
                                    
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                
                </Box>
        </>
    )
}
