import React, {useEffect, useState} from 'react'
import { Box, Grid, Typography, Button, Stack } from '@mui/material';
import { useWeb3React } from "@web3-react/core"
import { useParams } from "react-router-dom"
import {
    useQuery,
    gql
  } from "@apollo/client";
import DetailsOne from 'components/details/DetailsOne';
import { CacheService } from 'services/CacheService';
import { TokenInfo } from 'dtos/TokenInfo';

export default function TokenListPolygon() {
    
    const { token, address } = useParams<{ token: string, address: string }>();
    const { account, library, chainId } = useWeb3React();
    const [baseToken, setBaseToken] = useState<TokenInfo[]>();
    const [currentFlower, setCurrentFlower] = useState(undefined);
    let dataFlower = null;

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

    useEffect(() => {
        if(baseToken == null){
            const getTokens = async () => {
                const service = new CacheService(chainId);
                let tokens = await service.getParentTokens();
                tokens = tokens.filter(e => e.address.toLowerCase() == token.toLowerCase());
                setBaseToken(tokens[0]);
                console.log("Get Base Token")
            }
            getTokens();
        }
    }, [])

    useEffect(() => {
        const body = document.querySelector("body");
        if(chainId == 137){
            document.body.classList.add("dark_theme");
        }
        return () => {
            body.classList.remove("dark_theme");
        }
    }, [chainId, library, account]);

    let {loading, error, data} = useQuery(query, { variables: { address: address }});
    if (loading){ 
        console.log("Loading dulu");
        return <><h1>Loading...</h1></>
    }

    if(currentFlower == null){
        dataFlower = data;
        var d = JSON.parse(JSON.stringify(dataFlower.octalilies[0]));
        setCurrentFlower(d);
    }
    
    return (
        <>
            <DetailsOne flower={currentFlower} baseToken={baseToken}></DetailsOne>
        </>
        // <>
        //    <Box className="main tknlst_bg_v2">
        //         <Box component="img" src="/img/tkntp_lnbg_v4.png" className="tkntp_lnbg_v4 img-fluid" />
        //         <Box className="tkn_tp_bx" sx={{ pb: 20, }}>
                    
        //             <Box component="img" src="/img/tkntp_lnbg_v5.png" className="img-fluid tkntp_lnbg_v3 tkntp_lnbg_v5" />
        //             <Typography component="h3" className="tkn_title_v2 tkn_title_v2_wt">For trade Flower connect Token</Typography>
        //             <Box className="v1_rltv_pddng v1_rltv_pddng_tkn">
        //                 <Box component="img" src="/img/tkn_wll_v2.png" className="wel_img" />
        //                     <Box className="homesc_one sc_wt_bg hm_sdw_bx">
        //                         <Box component="img" src="/img/mdl_lft_img.png" className="mdl_lft_img" />
        //                         <Box component="img" src="/img/mdl_rgt_img.png" className="mdl_rgt_img" />
        //                         <Box component="img" src="/img/buysell_bg.png" className="bg_img" />
        //                         <Box className="p_rltv w-100 mb-3">
        //                             <Typography component="h3" className="modal_title">Sell Octa</Typography>
        //                             <Typography component="h4" className="modal_subtitle">You use Root Token</Typography>
        //                             <Grid container spacing={3}>
        //                                 <Grid item xs={12}>
        //                                     <Box className="tkninfo_bx">
        //                                         <Box className="tkninfo_bx_top">
        //                                             Amount to spend
        //                                             <span>Balance: <b>0.0565</b></span>
        //                                         </Box>
        //                                         <Box className="tkninfo_bx_mddl">
        //                                             <input type="text" value="0.222" className="tknipt" />
        //                                             <Box className="tkn_right_info">
        //                                                 <span>MAX</span>
        //                                                 ORLY
        //                                             </Box>
        //                                         </Box>
        //                                     </Box>
        //                                 </Grid>
        //                                 <Grid item xs={12} className="text-center">
        //                                     <Button className="tknbtn">
        //                                         <Box component="img" src="/img/tknarrow.svg" />
        //                                     </Button>
        //                                 </Grid>
        //                                 <Grid item xs={12}>
        //                                     <Box className="tkninfo_bx">
        //                                         <Box className="tkninfo_bx_top">
        //                                             You have receive
        //                                             <span>Balance: <b>0.0000</b></span>
        //                                         </Box>
        //                                         <Box className="tkninfo_bx_mddl">
        //                                             <input type="text" value="0.222" className="tknipt" />
        //                                             <Box className="tkn_right_info">
        //                                                 {/* <span>MAX</span> */}
        //                                                 BNB
        //                                             </Box>
        //                                         </Box>
        //                                     </Box>
        //                                 </Grid>
        //                                 <Grid item xs={12} sm={6}>
        //                                     <Button variant="contained" className="cncl_btn">Cancel</Button>
        //                                 </Grid>
        //                                 <Grid item xs={12} sm={6}>
        //                                     <Button variant="contained" className="buy_btn">Sell</Button>
        //                                 </Grid>
        //                             </Grid>
                                    
        //                         </Box>
        //                     </Box>
        //                 </Box>
        //             </Box>
                
        //         </Box>
        // </>
    )
}
