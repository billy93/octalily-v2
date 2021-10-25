import React, {useEffect} from 'react'
import { Box, Grid, Typography, Button } from '@mui/material';
import DetailsOne from './DetailsOne';
import DetailsTwo from './DetailsTwo';
import DetailsThree from './DetailsThree';
import DetailsFour from './DetailsFour';

export default function Details() {
    useEffect(() => {
        const body = document.querySelector("body");
        document.body.classList.add("dark_theme");
        return () => {
        body.classList.remove("dark_theme");
        }
    });
    return (
        <>
            <Box className="main plgn_d_pg_bg">
                <Box className="dt_frst_bx">
                    <Box component="img" src="/img/pl_ex_img01.png" className="img-fluid pl_ex_img01" />
                    <Box className="defmx">
                        <Grid container spacing={1}>
                            <Grid item xs={12} lg={7}>
                                <DetailsOne />
                            </Grid>
                            <Grid item xs={12} lg={5}>
                                <DetailsTwo />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box className="dt_tw_bx">
                    <Box component="img" src="/img/pl_ex_img03.png" className="img-fluid pl_ex_img03" />
                    <Box className="defmx">
                        <DetailsThree />
                    </Box>
                </Box>
                <Box className="dt_tw_bx v1_rltv_pddng_tkn_v3">
                    <Box component="img" src="/img/pl_ex_img04.png" className="img-fluid pl_ex_img04" />
                    <Box className="defmx">
                        <DetailsFour />
                    </Box>
                </Box>
            </Box>
        </>
    )
}
