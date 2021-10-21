import React from 'react'
import { Box, Grid, Typography, Button, Dialog } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import ClockIcon from '@mui/icons-material/WatchLaterOutlined';

function RoadmapScTwo() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Box className="rdmp_sc03">
                <Box component="img" src="/img/rdsc3_tp_img.png" className="img-fluid rdsc3_tp_img" />
                <Grid container spacing={3} className='zindx1'>
                <Grid item xs={12} lg={6}>
                    <Box component="img" src="/img/seeds_img.png" className="img-fluid sc3_lft_img" />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Box className="v1_rltv_pddng">
                    <Box component="img" src="/img/rdmp_wl_03.png" className="wel_img" />
                    <Box className="homesc_one sc_wt_bg sdw_bx_v3">
                        <Box component="img" src="/img/vctr_bg_v1.png" className="bg_img" />
                        <Box className="p_rltv mddl_df_cntnt">
                        <Typography component="h4">Read the package</Typography>
                        <Typography component="p">A flower is part of its own ecosystem. When a flower is created it makes an ERC 20 cntract with three slightly randomized statsA flower is part of its own ecosystem. When a flower is created it makes an ERC 20 cntract with three slightly randomized stats A flower is part of its own ecosystem. When a flower is created it makes an ERC 20 cntract with three slightly randomized statsA flower is part of its own ecosystem. </Typography>
                            <Button 
                                className="def_blk_btn sdw_nn"
                                onClick={handleClickOpen}
                            >
                                Show Contract
                            </Button>
                        </Box>
                    </Box>
                    </Box>
                </Grid>
                </Grid>
            </Box>
            {/* Modal */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className="def_modal def_modal_v2"
            >
                <Box className="v1_rltv_pddng">
                    <Box component="img" src="/img/modal_well_02.png" className="wel_img" />
                    <Box className="homesc_one sc_wt_bg hm_sdw_bx">
                        <Box component="img" src="/img/mdl_lft_img_v2.png" className="mdl_lft_img" />
                        <Box component="img" src="/img/mdl_rgt_img.png" className="mdl_rgt_img" />
                        <Box component="img" src="/img/mdl_bg_02.png" className="bg_img" />
                        <Box className="p_rltv w-100">
                            <Typography component="h3" className="modal_title">Contract</Typography>
                            <Typography component="h4" className="modal_subtitle">Transaction Details</Typography>
                            <Box className="mdlv2_tp_bx">
                                <Box className="mdlv2_frst_clmn">
                                    <Typography component="p">Teansaction Hash</Typography>
                                    <Typography component="h4">0x1023135aw151faw1awd5a1wd35aw151f3a1w5f1aw61f65aw1f561aw16f</Typography>
                                </Box>
                                <Box className="mdlv2_frst_clmn">
                                    <Typography component="p">Status</Typography>
                                    <Typography component="h4">13379687</Typography>
                                </Box>
                                <Box className="mdlv2_frst_clmn">
                                    <Typography component="p">Block</Typography>
                                    <Box className="sccss_stts">
                                        <DoneIcon /> Success
                                    </Box>
                                </Box>
                                <Box className="mdlv2_frst_clmn">
                                    <Typography component="p">Timestamp</Typography>
                                    <Typography component="h4">
                                        12 days 19 hrs ago (Oct-8-2021 06:01:21 PM +UTC)
                                        <span>
                                            <ClockIcon /> 
                                            Confirmed within 29 secs
                                        </span>
                                    </Typography>
                                </Box>
                                <Box className="mdlv2_frst_clmn">
                                    <Typography component="p">Teansaction Fee</Typography>
                                    <Typography component="h4">
                                        0.004169645192475 Ether
                                        &nbsp;
                                        <Box className="prcbx">
                                            $58.53
                                        </Box>
                                    </Typography>
                                    
                                </Box>
                                <Box className="mdlv2_frst_clmn">
                                    <Typography component="p">Gas Price</Typography>
                                    <Typography component="h4">
                                        0.0000000019875645131 Ether (198.554546 Gwel)
                                    </Typography>
                                    
                                </Box>
                                <Box className="mdlv2_frst_clmn">
                                    <Typography component="p">Tnx Type</Typography>
                                    <Typography component="h4">
                                        2 (EIP - 1559)
                                    </Typography>
                                    
                                </Box>
                            </Box>
                            
                        </Box>
                        
                    </Box>
                </Box>
            </Dialog>
        </>
    )
}

export default RoadmapScTwo
