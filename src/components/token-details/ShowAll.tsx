import React, {useEffect, useState} from 'react'
import { Box, Grid, Typography, Button, Stack } from '@mui/material';
import { Table } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { isAddress, supportedChain } from "../../utils"
import { formatAddress } from 'utils/address';

import { useWeb3React } from "@web3-react/core"
import { useParams } from "react-router-dom"
import {
    useQuery,
    gql
  } from "@apollo/client";

export default function ShowAll() {
    const { address } = useParams<{ address: string }>();
    const { account, library, chainId } = useWeb3React();
    
    const query = gql`
        query getPairTokens($address: String!){
            pairedTokens(where:{id: $address }) {
                id
                flowers {
                    id
                    burnRate
                    upPercent
                    upDelay
                }
            }
        }
    `;

    let {data: dataFlower} = useQuery(query, { variables: { address: address.toLowerCase() }});
    return (
        <>
            <Box className="v1_rltv_pddng v1_rltv_pddng_tkn_v2">
                <Box component="img" src="/img/tkn_d_wll.png" className="wel_img" />
                <Box className="homesc_one sc_wt_bg hm_sdw_bx">
                    <Box component="img" src="/img/mdl_lft_img.png" className="mdl_lft_img" />
                    <Box component="img" src="/img/mdl_rgt_img.png" className="mdl_rgt_img" />
                    <Box component="img" src="/img/tkn_di_bg.png" className="bg_img" />
                    <Box className="p_rltv w-100">
                        <Table responsive className="token_table">
                            <thead>
                                <tr>
                                    <th>Address</th>
                                    <th>Burn Rate</th>
                                    <th>Up %</th>
                                    <th>Up Delay</th>
                                    <th></th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                {
                                    dataFlower != undefined ? dataFlower.pairedTokens[0].flowers?.map(x => (
                                    
                                    <tr key={x.id}>
                                        <td>{formatAddress(x.id)}</td>
                                        <td>{x.burnRate}</td>
                                        <td>{x.upPercent}</td>
                                        <td>{x.upDelay}</td>
                                        <td>
                                            <Button variant="contained" className="tbldrkbtn">Up Only</Button>
                                            <Button variant="contained" className="tbldrkbtn">Show Petals</Button>
                                            <Link to={"/details/"+address+"/"+x.id} className="tbldrkbtn">Details</Link>

                                            <Link to={"/details/"+address+"/"+x.id}>
                                                <Button variant="contained" className="buy_btn" startIcon={<Box component="img" src="/img/wallet_ic.svg" alt="" />}>
                                                    Buy
                                                </Button>
                                            </Link>
                                        </td>
                                    </tr>
                                    )) : ""
                                } 
                            </tbody>
                        </Table>
                    </Box>
                </Box>
            </Box>
            
        </>
    )
}
