import React, {useEffect} from 'react'
import { Box, Grid, Typography, Button, Stack } from '@mui/material';
import {Tabs, Tab} from 'react-bootstrap'
import ShowAll from './ShowAll';

export default function TokenDetails() {
    useEffect(() => {
        const body = document.querySelector("body");
        document.body.classList.add("dark_theme");
        return () => {
        body.classList.remove("dark_theme");
        }
    });
    return (
        <>
           <Box className="main tknplgn_bg">
               

                <Box className="tkn_tp_bx" sx={{ pb: 10, }}>
                    <Box className="tkntp_bg_img tkntp_bg_img_v3">
                        <Box component="img" src="/img/tkn_d_img_01.png" className="img-fluid" />
                    </Box>
                    <Box component="img" src="/img/tkn_d_img_02.png" className="img-fluid tkntp_lnbg_v3 tkntp_lnbg_v6" />
                    <Tabs defaultActiveKey="show_all" id="uncontrolled-tab-example" className="as_tabs">
                        <Tab eventKey="show_all" title="Show All">
                            <ShowAll />
                        </Tab>
                        <Tab eventKey="show_owned" title="Show Owned">
                            bbbb
                        </Tab>
                    </Tabs>
                    
                
                </Box>
            </Box>
        </>
    )
}
