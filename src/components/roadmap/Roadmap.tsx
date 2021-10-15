import * as React from 'react';
import { Box, Grid, Typography, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import {Link} from 'react-router-dom'
import {Form} from 'react-bootstrap'
import PlusIcon from '@mui/icons-material/Add';

const Input = styled('input')({
  display: 'none',
});

export default function Roadmap() {

  return (
    <Box className="main rdmp_bg">
      <Box className="hm_cntnr defp_tp">
          <Box className="rdmp_sc01">
            <Box component="img" src="/img/rd_bg_01.png" className="img-fluid rd_bg_01" />
            <Grid container spacing={0}>
                <Grid item xs={12} lg={5} className="hn_ttl">
                    <Box className="m-auto-lg">
                        <Typography component="h3">Give life for your Flower...</Typography>
                        <Box component="img" src="/img/wtcvd_ttl.png" className="img-fluid" />
                    </Box>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Box className="v1_rltv_pddng rdmp_sc_bx01">
                        <Box component="img" src="/img/rdmp_wl_01.png" className="wel_img" />
                        <Box className="p_rltv">
                            <Box component="img" src="/img/video_img.png" className="img-fluid w-100" />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
          </Box>
          <Box className="rdmp_sc02 zindx1">
            <Box className="v1_rltv_pddng">
                <Box component="img" src="/img/rdmp_wl_02.png" className="wel_img" />
                <Box className="homesc_one sc_wt_bg">
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
                            <Link 
                                  to="/"
                                  className="def_blk_btn sdw_nn"
                              >
                                  Pay Gas Fee
                            </Link>
                          </Box>
                          
                        </Grid>              
                      </Grid>
                      
                      
                    </Box>
                </Box>
            </Box>
          </Box>
          <Box className="rdmp_sc03">
            <Box component="img" src="/img/rdsc3_tp_img.png" className="img-fluid rdsc3_tp_img" />
            <Grid container spacing={3} className='zindx1'>
              <Grid item xs={12} lg={6}>
                <Box component="img" src="/img/seeds_img.png" className="img-fluid sc3_lft_img" />
              </Grid>
              <Grid item xs={12} lg={6}>
                <Box className="v1_rltv_pddng">
                  <Box component="img" src="/img/rdmp_wl_03.png" className="wel_img" />
                  <Box className="homesc_one sc_wt_bg">
                    <Box component="img" src="/img/vctr_bg_v1.png" className="bg_img" />
                    <Box className="p_rltv mddl_df_cntnt">
                      <Typography component="h4">Read the package</Typography>
                      <Typography component="p">A flower is part of its own ecosystem. When a flower is created it makes an ERC 20 cntract with three slightly randomized statsA flower is part of its own ecosystem. When a flower is created it makes an ERC 20 cntract with three slightly randomized stats A flower is part of its own ecosystem. When a flower is created it makes an ERC 20 cntract with three slightly randomized statsA flower is part of its own ecosystem. </Typography>
                        <Link 
                            to="/"
                            className="def_blk_btn sdw_nn"
                        >
                            Show Contract
                        </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
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
                    <Box className="homesc_one sc_wt_bg">
                      <Box component="img" src="/img/vctr_bg_v1.png" className="bg_img" />
                      <Box className="p_rltv mddl_df_cntnt">
                        <Typography component="h4">Give name for your Flower</Typography>
                        <Typography component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan in varius integer sit mi</Typography>
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
                    <Box className="homesc_one sc_wt_bg">
                      <Box component="img" src="/img/vctr_bg_v1.png" className="bg_img" />
                      <Box className="p_rltv mddl_df_cntnt">
                        <Typography component="h4">Give your flower a picture </Typography>
                        <Typography component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan in varius integer sit mi</Typography>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <label htmlFor="contained-button-file" className="upldprnt">
                              <Input accept="image/*" id="contained-button-file" multiple type="file" />
                              <Button variant="contained" component="span"
                                startIcon={<Box component="img" src="/img/fileupld_ic.svg" alt="" />}
                                className="upld_btn"
                              >
                                Click for add .JPG
                              </Button>
                            </label>
                          </Stack>
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
                <Box className="v1_rltv_pddng sc4v3_rltv_pddng">
                    <Box component="img" src="/img/sc4_wl_03.png" className="wel_img" />
                    <Box className="homesc_one sc_wt_bg">
                      <Box component="img" src="/img/vctr_bg_v1.png" className="bg_img" />
                      <Box className="p_rltv mddl_df_cntnt">
                        <Typography component="h4">Add a description</Typography>
                        <Typography component="p">Add a tag line or description for your flower for make it unique for other flowers</Typography>
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
          <Box className="rdmp_sc05">
            <Box component="img" src="/img/sc05_bg.png" className="sc05_bg" />
            <Box component="img" src="/img/sc05_img.png" className="img-fluid" />
          </Box>
          <Box className="rdmp_sc02 zindx1">
            <Box className="v1_rltv_pddng">
                <Box component="img" src="/img/sc06_well_img.png" className="wel_img" />
                <Box className="homesc_one sc_wt_bg">
                    <Box component="img" src="/img/vctr_bg_v2.png" className="bg_img" />
                    <Box className="p_rltv w-100">
                      <Grid container spacing={3}>
                        <Grid item xs={12} className="csm_bx_cntnt">
                          <Typography component="h2">Add your flower to your flower bed</Typography>
                        </Grid>              
                        <Grid item xs={12}>
                          <Box className="sc06_cntnr">
                            <Grid container spacing={3}>
                              <Grid item xs={12} md={4}>
                                <Button variant="contained" className="crtnwclcn_btn">
                                  <PlusIcon />
                                  <span className="btntxt">Create new collection</span>
                                </Button>
                              </Grid>
                              <Grid item xs={12} md={4}>
                                <Box className="bd_box">
                                  <Box component="img" src="/img/bed_img01.png" className="bed_img" />
                                  <span className="bd_box_txt">Name of bed</span>
                                  <Button 
                                      variant="contained" 
                                      startIcon={<PlusIcon />}
                                      className="def_blk_btn"
                                  >
                                      Connect Wallet
                                  </Button>
                                </Box>
                              </Grid>
                              <Grid item xs={12} md={4}>
                                <Box className="bd_box">
                                  <Box component="img" src="/img/bed_img01.png" className="bed_img" />
                                  <span className="bd_box_txt">Name of bed</span>
                                  <Button 
                                      variant="contained" 
                                      startIcon={<PlusIcon />}
                                      className="def_blk_btn"
                                  >
                                      Connect Wallet
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
          <Box className="rdmp_sc07">
            <Box component="img" src="/img/sc07_bg.png" className="sc07_bg img-fluid" alt="" />
            <Grid container spacing={3} className="zindx1">
              <Grid item xs={12}>
                <Typography component="h3">Customise your Flower</Typography>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Box className="v1_rltv_pddng">
                  
                  <Box component="img" src="/img/wel_img_v1_v2.png" className="wel_img" />
                  <Box className="homesc_one sc_wt_bg">
                    <Box component="img" src="/img/vctr_bg_v1.png" className="bg_img" />
                    <Box className="p_rltv mddl_df_cntnt w-100">
                      <Typography component="h4">Your flower contract address</Typography>
                      <Typography component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan in varius integer sit mi Lorem ipsum dolor sit amet, consectetur</Typography>
                      <label className="frm_lbl">Your contract address</label>
                      <Form.Control type="text" placeholder="0x0000012052fwafa51.......awfaw" className="formfld" />
                      <Button variant="contained"
                        startIcon={<Box component="img" src="/img/copy_ic.svg" alt="" />}
                        className="upld_btn"
                      >
                        Copy contract Address
                      </Button>
                      <label className="frm_lbl">Paste contract address</label>
                      <Form.Control type="text" placeholder="Paste here..." className="formfld" />
                      <Button variant="contained"
                        startIcon={<Box component="img" src="/img/past_ic.svg" alt="" />}
                        className="upld_btn"
                      >
                        Click for paste
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Box component="img" src="/img/sc07_img.png" className="img-fluid" />
              </Grid>
            </Grid>
          </Box>




        
      </Box>
    </Box>
  );
}


