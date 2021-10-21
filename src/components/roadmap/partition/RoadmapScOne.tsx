import React from 'react'
import { Box, Grid, Typography, Button, Dialog } from '@mui/material';
import {Link} from 'react-router-dom'

function RoadmapScOne() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Box className="rdmp_sc02 zindx1">
                <Box className="v1_rltv_pddng">
                    <Box component="img" src="/img/rdmp_wl_02.png" className="wel_img" />
                    <Box className="homesc_one sc_wt_bg sdw_bx_v2">
                        <Box component="img" src="/img/vctr_bg_v2.png" className="bg_img" />
                        <Box component="img" src="/img/fram_img.png" className="img-fluid fram_img" />
                        <Box className="p_rltv">
                        
                        <Grid container spacing={3}>
                            <Grid item xs={12} className="csm_bx_cntnt">
                            <Typography component="h2">Welcome to your garden</Typography>
                            <Typography component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum massa leo duis semper viverra fermentum. Pharetra pharetra massa dui mi sapien, facilisis et. Sem gravida neque velit mauris feugiat. Augue lectus felis urna commodo nisi, mauris. Ut consectetur a, in amet, porta tellus.</Typography>
                            </Grid>              
                            <Grid item xs={12} lg={5}>
                            <Box component="img" src="/img/plntsd_img.png" className="img-fluid plntsd_img" />
                            </Grid>              
                            <Grid item xs={12} lg={7} className="csm_bx_cntnt csm_bx_cntnt_v2">
                            <Typography component="h2">Plant a Seed</Typography>
                            <Typography component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum massa leo duis semper viverra fermentum. Pharetra pharetra massa dui mi sapien, facilisis et. Sem gravida neque velit mauris feugiat. Augue lectus felis urna commodo nisi, mauris. Ut consectetur a, in amet, porta </Typography>
                            <Box className="m-auto-lg">
                                <Button 
                                    variant="contained" 
                                    startIcon={<Box component="img" src="/img/wallet_ic.svg" alt="" />}
                                    className="def_blk_btn me-2"
                                >
                                    Connect Wallet
                                </Button>
                                <Button 
                                    className="def_blk_btn sdw_nn"
                                    onClick={handleClickOpen}
                                >
                                    Pay Gas Fee
                                </Button>
                            </Box>
                            
                            </Grid>              
                        </Grid>
                        
                        
                        </Box>
                    </Box>
                </Box>
            </Box>
            {/* Modal */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className="def_modal"
            >
                <Box className="v1_rltv_pddng">
                    <Box component="img" src="/img/modal_well_01.png" className="wel_img" />
                    <Box className="homesc_one sc_wt_bg hm_sdw_bx">
                        <Box component="img" src="/img/mdl_lft_img.png" className="mdl_lft_img" />
                        <Box component="img" src="/img/mdl_rgt_img.png" className="mdl_rgt_img" />
                        <Box component="img" src="/img/mdl_bg_01.png" className="bg_img" />
                        <Box className="p_rltv w-100">
                            <Typography component="h3" className="modal_title">Create</Typography>
                            <Typography component="h4" className="modal_subtitle">Transaction</Typography>
                            <Box className="mdlv1_tp_bx">
                                <Box className="frst_clmn">
                                    <Typography component="p">Amount to spend:</Typography>
                                    <Typography component="h4">0.0254 ETH <span>$150.414</span></Typography>
                                </Box>
                                <Box className="frst_clmn">
                                    <Typography component="p">Network fee:</Typography>
                                    <Typography component="h4">0.0003 ETH <span>$4.4514</span></Typography>
                                </Box>
                            </Box>
                            <Box className="scnd_clmn">
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={4}>
                                        <Box className="cstm_rdo">
                                            <input type="radio" name="network_r" id="radio_one" className="redio_inpt" />
                                            <label html-for="radio_one">
                                                <Box component="span" className="rdrds" />
                                                <Typography component="p">Slow</Typography>
                                                <Typography component="h4">0.00022</Typography>
                                                <Typography component="h5">$3.76313</Typography>
                                            </label>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Box className="cstm_rdo">
                                            <input type="radio" name="network_r" id="radio_two" className="redio_inpt" />
                                            <label html-for="radio_two">
                                                <Box component="span" className="rdrds" />
                                                <Typography component="p">Slow</Typography>
                                                <Typography component="h4">0.0003</Typography>
                                                <Typography component="h5">$4.4514</Typography>
                                            </label>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Box className="cstm_rdo">
                                            <input type="radio" name="network_r" id="radio_three" className="redio_inpt" />
                                            <label html-for="radio_three">
                                                <Box component="span" className="rdrds" />
                                                <Typography component="p">Slow</Typography>
                                                <Typography component="h4">0.0045</Typography>
                                                <Typography component="h5">$6.46313</Typography>
                                            </label>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box className="mdl_actions">
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Button variant="contained" className="cncl_btn" onClick={handleClose}>Cancel</Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button variant="contained" className="sbmt_btn">Buy</Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        
                    </Box>
                </Box>
            </Dialog>
        </>
    )
}

export default RoadmapScOne
