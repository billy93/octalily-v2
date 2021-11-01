import React, {useEffect} from 'react'
import { Box, Grid, Typography, Button } from '@mui/material';
import DetailsOne from './DetailsOne';
import DetailsTwo from './DetailsTwo';
import DetailsThree from './DetailsThree';
import DetailsFour from './DetailsFour';
import { useParams } from "react-router-dom"
import {
    useQuery,
    gql
  } from "@apollo/client";
import { FlowerService } from 'services/FlowerService';

export default function Details() {
    
    const { token, address } = useParams<{ token: string, address: string }>();
    
    // const flowerService = new FlowerService();
    // let dataFlower = flowerService.getFlower(address);
    // console.log(dataFlower);

    const query = gql`
        query getPairTokens($address: String!){
            octalilies(where: {id: $address}) {
                id
                pairedToken {
                    id
                }
                price
                burnRate
                totalFees
                upPercent
                upDelay
                totalSupply
                nonce
                owner {
                    id
                }
                owner2 {
                    id
                }
                owner3 {
                    id
                }
                owner4 {
                    id
                }
            }           
        }
    `;

        let {data: dataFlower} = useQuery(query, { variables: { address: address }});

        if(dataFlower != undefined){
            // console.log(dataFlower)
            dataFlower = dataFlower.octalilies[0];
        }

    useEffect(() => {
        const body = document.querySelector("body");
            document.body.classList.add("dark_theme");
            // document.body.classList.add("bsc_theme");
            // document.body.classList.add("eth_theme");
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
                                <DetailsTwo flower={dataFlower}/>
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
