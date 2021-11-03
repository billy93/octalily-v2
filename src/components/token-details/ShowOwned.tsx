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

export default function ShowOwned() {
    const { address } = useParams<{ address: string }>();
    const { account, library, chainId } = useWeb3React();
    
    const query = gql`
        query getPairTokens($address: String!){
                users(where:{id: $address }) {
                    id
                    ownedFlowers {
                        id
                        burnRate
                        upPercent
                        upDelay
                        pairedToken{
                            id
                        }
                    }
                    ownedFlowers2 {
                        id
                        burnRate
                        upPercent
                        upDelay
                        pairedToken{
                            id
                        }
                    }
                    ownedFlowers3 {
                        id
                        burnRate
                        upPercent
                        upDelay
                        pairedToken{
                            id
                        }
                    }
                    ownedFlowers4 {
                        id
                        burnRate
                        upPercent
                        upDelay
                        pairedToken{
                            id
                        }
                    }
                    ownedFlowers5 {
                        id
                        burnRate
                        upPercent
                        upDelay
                        pairedToken{
                            id
                        }
                    }
                    ownedFlowers6 {
                        id
                        burnRate
                        upPercent
                        upDelay
                        pairedToken{
                            id
                        }
                    }
                    ownedFlowers7 {
                        id
                        burnRate
                        upPercent
                        upDelay
                        pairedToken{
                            id
                        }
                    }
                    ownedFlowers8 {
                        id
                        burnRate
                        upPercent
                        upDelay
                        pairedToken{
                            id
                        }
                    }
                    ownedFlowers9 {
                        id
                        burnRate
                        upPercent
                        upDelay
                        pairedToken{
                            id
                        }
                    }
                    ownedFlowers10 {
                        id
                        burnRate
                        upPercent
                        upDelay
                        pairedToken{
                            id
                        }
                    }
                    ownedFlowers11{
                        id
                        burnRate
                        upPercent
                        upDelay
                        pairedToken{
                            id
                        }
                    }
                    ownedFlowers12 {
                        id
                        burnRate
                        upPercent
                        upDelay
                        pairedToken{
                            id
                        }
                    } 
                    ownedFlowers13 {
                        id
                        burnRate
                        upPercent
                        upDelay
                        pairedToken{
                            id
                        }
                    }
                    ownedFlowers14 {
                        id
                        burnRate
                        upPercent
                        upDelay
                        pairedToken{
                            id
                        }
                    }
                    ownedFlowers15 {
                        id
                        burnRate
                        upPercent
                        upDelay
                        pairedToken{
                            id
                        }
                    }
                }
            
        }
    `;

    const filterFlower = (arr) => {
        return arr.pairedToken.id.toLowerCase() == address.toLowerCase();
    }
    let {data: dataFlower} = useQuery(query, { variables: { address: account.toLowerCase() }});
    
    let flowers = [];
    if(dataFlower != null){
        if(dataFlower.users != null && dataFlower.users.length > 0){
            flowers = flowers.concat(dataFlower.users[0].ownedFlowers.filter(filterFlower));
            flowers = flowers.concat(dataFlower.users[0].ownedFlowers2.filter(filterFlower));
            flowers = flowers.concat(dataFlower.users[0].ownedFlowers3.filter(filterFlower));
            flowers = flowers.concat(dataFlower.users[0].ownedFlowers4.filter(filterFlower));
            flowers = flowers.concat(dataFlower.users[0].ownedFlowers5.filter(filterFlower));
            flowers = flowers.concat(dataFlower.users[0].ownedFlowers6.filter(filterFlower));
            flowers = flowers.concat(dataFlower.users[0].ownedFlowers7.filter(filterFlower));
            flowers = flowers.concat(dataFlower.users[0].ownedFlowers8.filter(filterFlower));
            flowers = flowers.concat(dataFlower.users[0].ownedFlowers9.filter(filterFlower));
            flowers = flowers.concat(dataFlower.users[0].ownedFlowers10.filter(filterFlower));
            flowers = flowers.concat(dataFlower.users[0].ownedFlowers11.filter(filterFlower));
            flowers = flowers.concat(dataFlower.users[0].ownedFlowers12.filter(filterFlower));
            flowers = flowers.concat(dataFlower.users[0].ownedFlowers13.filter(filterFlower));
            flowers = flowers.concat(dataFlower.users[0].ownedFlowers14.filter(filterFlower));
            flowers = flowers.concat(dataFlower.users[0].ownedFlowers15.filter(filterFlower));
        }
    }
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
                                    flowers != undefined ? flowers?.map(x => (
                                    
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
