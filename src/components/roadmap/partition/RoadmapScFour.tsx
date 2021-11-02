import React, {useState} from 'react'
import { Box, Grid, Typography, Button, Dialog, Stack } from '@mui/material';
import PlusIcon from '@mui/icons-material/Add';
import {Link} from 'react-router-dom'
import {Form} from 'react-bootstrap'

function RoadmapScFour() {
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
            <Box className="rdmp_sc02 zindx1">
                <Box className="v1_rltv_pddng v1_rltv_pddng_v2">
                    <Box component="img" src="/img/sc06_well_img.png" className="wel_img" />
                    <Box className="homesc_one sc_wt_bg sdw_bx_v3">
                        <Box component="img" src="/img/vctr_bg_v2.png" className="bg_img" />
                        <Box className="p_rltv w-100">
                        <Grid container spacing={3}>
                            <Grid item xs={12} className="csm_bx_cntnt">
                            <Typography component="h2">Add your flower to your flower bed</Typography>
                            </Grid>              
                            <Grid item xs={12}>
                            <Box className="sc06_cntnr">
                                <Grid container spacing={5}>
                                <Grid item xs={12} md={4}>
                                    <Button variant="contained" className="crtnwclcn_btn sdw_bx_v3" onClick={handleClickOpen}>
                                    <PlusIcon />
                                    <span className="btntxt">Create new collection</span>
                                    </Button>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Box className="bd_box sdw_bx_v3">
                                    <Box component="img" src="/img/bed_img01.png" className="bed_img" />
                                    <span className="bd_box_txt">Name of bed</span>
                                    <Button 
                                        variant="contained" 
                                        startIcon={<PlusIcon />}
                                        className="def_blk_btn"
                                    >
                                        Add to collection
                                    </Button>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Box className="bd_box sdw_bx_v3">
                                    <Box component="img" src="/img/bed_img01.png" className="bed_img" />
                                    <span className="bd_box_txt">Name of bed</span>
                                    <Button 
                                        variant="contained" 
                                        startIcon={<PlusIcon />}
                                        className="def_blk_btn"
                                    >
                                        Add to collection
                                    </Button>
                                    </Box>
                                </Grid>
                                </Grid>
                                
                            </Box>
                            </Grid>    
                            <Grid item xs={12} className="text-center mb-4">
                            <Button className="def_blk_btn sdw_nn mn-190">
                                Done
                            </Button>
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
                            <Typography component="h3" className="modal_title">Create collection</Typography>
                            <Typography component="h4" className="modal_subtitle">Name of collection</Typography>
                            <Box className="mdl_frm_bx">
                                <Form.Control type="text" placeholder="Name here" className="formfld" />
                            </Box>
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

export default RoadmapScFour
