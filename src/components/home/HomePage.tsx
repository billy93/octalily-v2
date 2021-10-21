import * as React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import {Link} from 'react-router-dom'

export default function HomePage() {

  return (
    <Box className="main hm_bg">
      <Box className="hm_cntnr defp_tp">
        <Grid container spacing={0}>
          <Grid item xs={12} className="hn_ttl">
            <Typography component="h3">Octalily starts here...</Typography>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Box className="v1_rltv_pddng">
              <Box component="img" src="/img/wel_img_v1.png" className="wel_img" />
              <Box className="homesc_one sc_wt_bg hm_sdw_bx">
                <Box component="img" src="/img/vctr_bg_v1.png" className="bg_img" />
                <Box className="p_rltv cntrmddl">
                  <Box component="img" src="/img/hm_img_01.png" className="img-fluid mb-4" />
                    <Link 
                        to="/roadmap"
                        className="def_blk_btn sdw_nn"
                    >
                        Create a Flower
                    </Link>
                </Box>
              </Box>
            </Box>
            
          </Grid>
          <Grid item xs={12} lg={4}>
            <Box component="img" src="/img/hm_img_03.png" className="img-fluid hm_img_03" />
          </Grid>
          <Grid item xs={12} lg={4} className="rsp_mrgn_bt">
            <Box className="v1_rltv_pddng">
              <Box component="img" src="/img/wel_img_v1.png" className="wel_img" />
              <Box className="homesc_one sc_wt_bg hm_sdw_bx">
                <Box component="img" src="/img/vctr_bg_v1.png" className="bg_img" />
                <Box className="p_rltv cntrmddl">
                  <Box component="img" src="/img/hm_img_02.png" className="img-fluid mb-4" />
                    <Link 
                        className="def_blk_btn sdw_nn"
                        to="/"
                    >
                        Trade a Flower
                    </Link>
                </Box>
              </Box>
            </Box>
            
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

