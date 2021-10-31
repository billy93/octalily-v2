import * as React from 'react';
import { Box, Grid, Typography, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import {Link} from 'react-router-dom'
import {Form} from 'react-bootstrap'
import PlusIcon from '@mui/icons-material/Add';
import RoadmapScOne from './partition/RoadmapScOne'
import RoadmapScTwo from './partition/RoadmapScTwo';
import RoadmapScThree from './partition/RoadmapScThree';
import RoadmapScFour from './partition/RoadmapScFour';

const Input = styled('input')({
  display: 'none',
});

export default function Roadmap() {
  const [tokenAddress, setTokenAddress] = React.useState("");

  return (
    <Box className="main rdmp_bg">
      <Box className="hm_cntnr defp_tp">
          <Box className="rdmp_sc01">
            <Box component="img" src="/img/rd_bg_01.png" className="img-fluid rd_bg_01" />
            <Grid container spacing={0}>
                <Grid item xs={12} lg={5} className="hn_ttl hn_ttl_v2">
                    <Box className="m-auto-lg">
                        <Typography component="h3">Give life for your Flower...</Typography>
                        <Box component="img" src="/img/wtcvd_ttl.png" className="img-fluid" />
                    </Box>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Box className="v1_rltv_pddng rdmp_sc_bx01">
                        <Box component="img" src="/img/rdmp_wl_01.png" className="wel_img" />
                        <Box className="p_rltv">
                            {/* <Box component="img" src="/img/video_img.png" className="img-fluid w-100" /> */}
                            <iframe width="100%" height="400" src="https://www.youtube.com/embed/SJwfkJQP3bY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
          </Box>
          <RoadmapScOne setTokenAddress={setTokenAddress} tokenAddress={tokenAddress}/>
          <RoadmapScTwo tokenAddress={tokenAddress} />
          <RoadmapScThree />
          
          
          <Box className="rdmp_sc05">
            <Box component="img" src="/img/sc05_bg.png" className="sc05_bg" />
            <Box component="img" src="/img/sc05_img.png" className="img-fluid" />
          </Box>
          
          <RoadmapScFour />

          <Box className="rdmp_sc07">
            <Box component="img" src="/img/sc07_bg.png" className="sc07_bg img-fluid" alt="" />
            <Grid container spacing={3} className="zindx1">
              <Grid item xs={12}>
                <Typography component="h3">Share your flower with the world</Typography>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Box className="v1_rltv_pddng">
                  
                  <Box component="img" src="/img/wel_img_v1_v2.png" className="wel_img" />
                  <Box className="homesc_one sc_wt_bg sdw_bx_v3">
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


