import React, {useEffect} from 'react'
import { Box, Grid, Typography, Button, Stack } from '@mui/material';

export default function TokenList() {
    useEffect(() => {
        const body = document.querySelector("body");
        document.body.classList.add("dark_theme");
        return () => {
        body.classList.remove("dark_theme");
        }
    });
    return (
        <>
           <Box className="main tknlst_bg">
               <Box className="tkn_tp_bx">
                    <Box className="tkntp_bg_img">
                        <Box component="img" src="/img/tkntp_lnbg.png" className="img-fluid" />
                    </Box>
                    <Typography component="h3" className="tkn_title">Trade Flowers: Connect Token</Typography>
                    <Box className="v1_rltv_pddng v1_rltv_pddng_tkn">
                        <Box component="img" src="/img/tkn_wll.png" className="wel_img" />
                            <Box className="homesc_one sc_wt_bg hm_sdw_bx">
                                <Box component="img" src="/img/mdl_lft_img.png" className="mdl_lft_img" />
                                <Box component="img" src="/img/mdl_rgt_img.png" className="mdl_rgt_img" />
                                <Box component="img" src="/img/tkn_bx_bg01.png" className="bg_img" />
                                <Box className="p_rltv w-100">
                                    <Typography component="h3" className="modal_title">Token list</Typography>
                                    <Box className="token_l_box">
                                        <Box className="token_chkbx">
                                            <input type="checkbox" checked />
                                            <label>
                                                <Typography component="h6">ROOT</Typography>
                                                <Box component="img" src="/img/tkn_i.svg" />
                                            </label>
                                        </Box>
                                        <Box className="token_chkbx">
                                            <input type="checkbox" checked />
                                            <label>
                                                <Typography component="h6">USDC</Typography>
                                                <Box component="img" src="/img/tkn_i.svg" />
                                            </label>
                                        </Box>
                                        <Box className="token_chkbx">
                                            <input type="checkbox" />
                                            <label>
                                                <Typography component="h6">WETH</Typography>
                                                <Box component="img" src="/img/tkn_i.svg" />
                                            </label>
                                        </Box>
                                        <Box className="token_chkbx">
                                            <input type="checkbox" />
                                            <label>
                                                <Typography component="h6">SUSHI</Typography>
                                                <Box component="img" src="/img/tkn_i.svg" />
                                            </label>
                                        </Box>
                                        <Box className="token_chkbx">
                                            <input type="checkbox" />
                                            <label>
                                                <Typography component="h6">LINK</Typography>
                                                <Box component="img" src="/img/tkn_i.svg" />
                                            </label>
                                        </Box>
                                        <Box className="token_chkbx">
                                            <input type="checkbox" />
                                            <label>
                                                <Typography component="h6">UNI</Typography>
                                                <Box component="img" src="/img/tkn_i.svg" />
                                            </label>
                                        </Box>
                                        <Box className="token_chkbx">
                                            <input type="checkbox" />
                                            <label>
                                                <Typography component="h6">BADGER</Typography>
                                                <Box component="img" src="/img/tkn_i.svg" />
                                            </label>
                                        </Box>
                                        <Box className="token_chkbx">
                                            <input type="checkbox" />
                                            <label>
                                                <Typography component="h6">WBTC</Typography>
                                                <Box component="img" src="/img/tkn_i.svg" />
                                            </label>
                                        </Box>
                                        <Box className="token_chkbx">
                                            <input type="checkbox" />
                                            <label>
                                                <Typography component="h6">EVN</Typography>
                                                <Box component="img" src="/img/tkn_i.svg" />
                                            </label>
                                        </Box>
                                    </Box>
                                
                                    
                                
                                    
                            </Box>
                                
                        </Box>
                    </Box>
                </Box>

                <Box className="tkn_tp_bx" sx={{ pb: 10, }}>
                    <Box className="tkntp_bg_img tkntp_bg_img_v2">
                        <Box component="img" src="/img/tkntp_lnbg_v2.png" className="img-fluid" />
                    </Box>
                    <Box component="img" src="/img/tkntp_lnbg_v3.png" className="img-fluid tkntp_lnbg_v3" />
                    <Typography component="h3" className="tkn_title">For trade Flower connect Token</Typography>
                    <Box className="v1_rltv_pddng v1_rltv_pddng_tkn">
                        <Box component="img" src="/img/tkn_wll_v2.png" className="wel_img" />
                            <Box className="homesc_one sc_wt_bg hm_sdw_bx">
                                <Box component="img" src="/img/mdl_lft_img.png" className="mdl_lft_img" />
                                <Box component="img" src="/img/mdl_rgt_img.png" className="mdl_rgt_img" />
                                <Box component="img" src="/img/mdl_bg_01.png" className="bg_img" />
                                <Box className="p_rltv w-100">
                                    <Typography component="h3" className="modal_title">You can buy or sell Petals</Typography>
                                    <Typography component="h4" className="modal_subtitle">You use Root Token</Typography>
                                    <Box className="token_l_box token_l_box_v2">
                                        <Box className="token_chkbx">
                                            <input type="checkbox" />
                                            <label>
                                                <Typography component="h6">Buy Petals</Typography>
                                                <Typography component="h2">Buy</Typography>
                                                <Box component="img" src="/img/tkn_i.svg" />
                                            </label>
                                        </Box>
                                        <Box className="token_chkbx">
                                            <input type="checkbox" />
                                            <label>
                                                <Typography component="h6">Sell Petals</Typography>
                                                <Typography component="h2">Sell</Typography>
                                                <Box component="img" src="/img/tkn_i.svg" />
                                            </label>
                                        </Box>
                                     </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                
                </Box>
        </>
    )
}
