import React, {useState} from 'react'
import { Box, Grid, Typography, Button, Dialog, Stack } from '@mui/material';
import { makeStyles } from '@mui/material/styles';
import {Link} from 'react-router-dom'
import {Form} from 'react-bootstrap'




function RoadmapScThree() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    ///file upload
    
    const [files,setFile]= useState([]);
    const handlerFile=(e)=>{    
        console.log(e.target.files);
        
        let allfiles=[]
    for(let i=0;i<e.target.files.length;i++){
        allfiles.push(e.target.files[i]);
    }
        if(allfiles.length>0){
        setFile(allfiles);  
        }
    };
    return (
        <>
            <Box className="rdmp_sc04">
                <Box component="img" src="/img/sc4_bg01.png" className="sc4_bg01 img-fluid" />
                <Grid container spacing={3} className='zindx1'>
                <Grid item xs={12}>
                    <Typography component="h3">Customise your Flower</Typography>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Box className="v1_rltv_pddng sc4v1_rltv_pddng">
                        <Box component="img" src="/img/sc4_bg02.png" className="sc4_bg02 img-fluid" />
                        <Box component="img" src="/img/sc4_wl_01.png" className="wel_img" />
                        <Box className="homesc_one sc_wt_bg sdw_bx_v3">
                        <Box component="img" src="/img/vctr_bg_v1.png" className="bg_img" />
                        <Box className="p_rltv mddl_df_cntnt">
                            <Typography component="h4">Give your flower a name.</Typography>
                            <Typography component="p">Label your flower for future reference.</Typography>
                            <Form.Control type="text" placeholder="Name here" className="formfld" />
                            <Link 
                                to="/"
                                className="def_blk_btn sdw_nn"
                            >
                                Next
                                <Box component="img" src="/img/next_ic.svg" width='16px' />
                            </Link>
                        </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Box className="v1_rltv_pddng sc4v2_rltv_pddng">
                        <Box component="img" src="/img/sc4_bg03.png" className="sc4_bg03 img-fluid" />
                        <Box component="img" src="/img/sc4_wl_02.png" className="wel_img" />
                        <Box className="homesc_one sc_wt_bg sdw_bx_v3">
                        <Box component="img" src="/img/vctr_bg_v1.png" className="bg_img" />
                        <Box className="p_rltv mddl_df_cntnt">
                            <Typography component="h4">Give your flower a picture </Typography>
                            <Typography component="p">Select an icon that represents your flower.</Typography>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Button variant="contained" component="span"
                                    startIcon={<Box component="img" src="/img/fileupld_ic.svg" alt="" />}
                                    className="upld_btn"
                                    onClick={handleClickOpen}
                                >
                                    Click for add .JPG
                                </Button>
                            </Stack>
                            <Button 
                                className="def_blk_btn sdw_nn"
                                onClick={handleClickOpen}
                            >
                                Next
                                <Box component="img" src="/img/next_ic.svg" width='16px' />
                            </Button>
                        </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Box className="v1_rltv_pddng sc4v3_rltv_pddng">
                        <Box component="img" src="/img/sc4_wl_03.png" className="wel_img" />
                        <Box className="homesc_one sc_wt_bg sdw_bx_v3">
                        <Box component="img" src="/img/vctr_bg_v1.png" className="bg_img" />
                        <Box className="p_rltv mddl_df_cntnt">
                            <Typography component="h4">Give your flower a description</Typography>
                            <Typography component="p">Add a tagline or description to make your flower unique.</Typography>
                            <Form.Control type="text" placeholder="Tag here" className="formfld" />
                            <Link 
                                to="/"
                                className="def_blk_btn sdw_nn"
                            >
                                Done
                            </Link>
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
                className="def_modal"
            >
                <Box className="v1_rltv_pddng">
                    <Box component="img" src="/img/modal_well_01.png" className="wel_img" />
                    <Box className="homesc_one sc_wt_bg hm_sdw_bx">
                        <Box component="img" src="/img/mdl_lft_img.png" className="mdl_lft_img" />
                        <Box component="img" src="/img/mdl_rgt_img.png" className="mdl_rgt_img" />
                        <Box component="img" src="/img/mdl_bg_01.png" className="bg_img" />
                        <Box className="p_rltv w-100">
                            <Typography component="h3" className="modal_title">Add image</Typography>
                            <Typography component="h4" className="modal_subtitle">Add image for collection</Typography>
                            <Box className="frst_clmnv3">
                                <Box className="prvw_box">
                                    <Box component="img" src="/img/noimage.png" alt="" />
                                    {files.map((file, key) => {
                                        return (
                                            <div key={key} className="Row">
                                                <span className="Filename">
                                                    {/* {file.name} */}
                                                    <img src={URL.createObjectURL(file)}  alt={file.name} />
                                                </span>
                                            </div>
                                        )
                                    })}
                                </Box>
                                
                                <input
                                    accept="image/*"
                                    className="file_s_input"
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    onChange={handlerFile}
                                />
                                <label htmlFor="contained-button-file" className="upldlbl">
                                    <Button variant="contained" component="span"
                                        startIcon={<Box component="img" src="/img/fileupld_ic.svg" alt="" />}
                                        className="upld_btn"
                                        onClick={handleClickOpen}
                                    >
                                        Click for add .JPG
                                    </Button>
                                </label> 
                            </Box>
                           
                            <Box className="mdl_actions">
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Button variant="contained" className="cncl_btn" onClick={handleClose}>Cancel</Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button variant="contained" className="sbmt_btn">Done</Button>
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

export default RoadmapScThree
