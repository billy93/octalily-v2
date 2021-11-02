import React, { useState, useEffect } from 'react'
import { Box, Grid, Typography, Button, Stack } from '@mui/material';
import { Table } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useWeb3React } from "@web3-react/core";
import { FlowerService } from 'services/FlowerService';
import { BalanceInfo } from '../../dtos/BalanceInfo'

const DetailsThree = ({ flower }) =>  {
    const { account, library, chainId } = useWeb3React();
    const [ parent, setParent ] = useState<BalanceInfo>();
    const [ petals, setPetals ] = useState<BalanceInfo[]>([]);
    const flowerService = new FlowerService(library, account, chainId);
    
    useEffect(() => {
        if(flower != undefined){
            const getPetals = async() => {
                let petals = await flowerService.getPetalBalances(flower.id, flower.petalCount);
                setPetals(petals)
            }
            getPetals();

            const getParentData = async() => {
                let p = await flowerService.getParent(flower.id);
                setParent(p);
            }
            getParentData();
        }
    }, [account, library, chainId, flower]);

    return (
        <>
           <Box className="v1_rltv_pddng v1_rltv_pddng_tkn_v2">
                <Box component="img" src="/img/pl_wl_03.png" className="wel_img" />
                <Box className="homesc_one sc_wt_bg hm_sdw_bx">
                    <Box component="img" src="/img/d_ftr_img03.png" className="mdl_lft_img" />
                    <Box component="img" src="/img/d_ftr_img04.png" className="mdl_rgt_img" />
                    <Box component="img" src="/img/pl_md_bg03.png" className="bg_img" />
                    <Box className="p_rltv w-100">
                        <Table responsive className="token_table token_table_wtbrdr">
                            <tbody>
                                {
                                    parent != null ? <tr>
                                        <td>
                                            <Button variant="contained" className="tbldrkbtn">Pay Fees</Button>
                                        </td>
                                        <td>
                                            <Typography component="p">{parent?.address}</Typography>
                                        </td>
                                        <td className="text-end">{parent?.balance}</td>
                                        <td>ORLY</td>
                                    </tr> : ""
                                }
                                {
                                    petals?.map((x, index) => (
                                        
                                        <tr key={x.address}>
                                            <td>
                                                <Button variant="contained" className="tbldrkbtn">Collect Fees from Petal {index+1}</Button>
                                            </td>
                                            <td>
                                                <Typography component="p">{x.address}</Typography>
                                            </td>
                                            <td className="text-end">{x.balance}</td>
                                            <td>ORLY</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default DetailsThree
