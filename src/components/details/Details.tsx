import React, {useEffect, useState} from 'react'
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
import { useWeb3React } from "@web3-react/core";
import { TokenInfo } from "../../dtos/TokenInfo"
import { CacheService } from 'services/CacheService';

export default function Details() {
    
    const { token, address } = useParams<{ token: string, address: string }>();
    const { account, library, chainId } = useWeb3React();
    const [baseToken, setBaseToken] = useState<TokenInfo[]>();
  
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
                petalCount
                pendingOwner
                parentFlower
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
                owner5 {
                    id
                }
                owner6 {
                    id
                }
                owner7 {
                    id
                }
                owner8 {
                    id
                }
                owner9 {
                    id
                }
                owner10 {
                    id
                }
                owner11 {
                    id
                }
                owner12 {
                    id
                }
                owner13 {
                    id
                }
                owner14 {
                    id
                }
                owner15 {
                    id
                }
            }           
        }
    `;

    let {data: dataFlower} = useQuery(query, { variables: { address: address }});

    if(dataFlower != undefined){
        dataFlower = JSON.parse(JSON.stringify(dataFlower.octalilies[0]));
    }

    useEffect(() => {
        const getTokens = async () => {
            const service = new CacheService(chainId);
            let tokens = await service.getParentTokens();
            tokens = tokens.filter(e => e.address.toLowerCase() == token.toLowerCase());
            setBaseToken(tokens[0]);
        }
        getTokens();
    }, [ chainId, library, account, baseToken == null])

    useEffect(() => {
        const body = document.querySelector("body");
        if(chainId == 137){
            document.body.classList.add("dark_theme");
        }
        return () => {
            body.classList.remove("dark_theme");
        }
    }, [chainId, library, account]);
    
    return (
        <>
            <Box className="main plgn_d_pg_bg">
                <Box className="dt_frst_bx">
                    <Box component="img" src="/img/pl_ex_img01.png" className="img-fluid pl_ex_img01" />
                    <Box className="defmx">
                        <Grid container spacing={1}>
                            <Grid item xs={12} lg={7}>
                                <DetailsOne flower={dataFlower} baseToken={baseToken}/>
                            </Grid>
                            <Grid item xs={12} lg={5}>
                                {/* <DetailsTwo flower={dataFlower}/> */}
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box className="dt_tw_bx">
                    <Box component="img" src="/img/pl_ex_img03.png" className="img-fluid pl_ex_img03" />
                    <Box className="defmx">
                        {/* <DetailsThree flower={dataFlower}/> */}
                    </Box>
                </Box>
                <Box className="dt_tw_bx v1_rltv_pddng_tkn_v3">
                    <Box component="img" src="/img/pl_ex_img04.png" className="img-fluid pl_ex_img04" />
                    <Box className="defmx">
                        {/* <DetailsFour flower={dataFlower} /> */}
                    </Box>
                </Box>
            </Box>
        </>
    )
}
