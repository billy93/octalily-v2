import React, { useState, useEffect } from 'react'
import { Box, Grid, Typography, Button, Stack, Dialog } from '@mui/material';
import { Table } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useWeb3React } from "@web3-react/core";
import { FlowerService } from 'services/FlowerService';
import { BalanceInfo } from '../../dtos/BalanceInfo'
import LoadingButton from '@mui/lab/LoadingButton';
import { PlayCircleFilledSharp } from '@mui/icons-material';

const DetailsThree = ({ flower }) =>  {
    const { account, library, chainId } = useWeb3React();
    const [ parent, setParent ] = useState<BalanceInfo>();
    const [ petals, setPetals ] = useState<BalanceInfo[]>([]);
    const [ isPayFee, setIsPayFee] = useState<boolean>(false);
    

    const flowerService = new FlowerService(library, account, chainId);
    

    const collectFee = async (petal) => {
        try {
            setIsPayFee(true)
            const txResponse = await flowerService.collectFees(flower.id, petal.address);
            if (txResponse) {
                const receipt = await txResponse.wait()               
                if (receipt?.status === 1) {
                    setIsPayFee(false)

                    // setTransactionHash(receipt.transactionHash);
                    // setCollectFeeStatus(Status.Done); 
                    // setBalance(await service.getBalance(petal.address, account!))          
                }
                else {
                    setIsPayFee(false)

                    // setError("Transaction Failed");
                    // setCollectFeeStatus(Status.None); 
                }
            }          
        }
        catch (e) {
            console.log(e)
            setIsPayFee(false)
            // const errorMessage = extractErrorMessage(e);
            // if(errorMessage) {
            //     setError(errorMessage);
            // }
            // setCollectFeeStatus(Status.None); 
        }
    }

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
    }, [account, library, chainId, flower == undefined]);

    const payFees = async(address) => {
        try {
            setIsPayFee(true)
            const txResponse = await flowerService.payFees(address);
            if (txResponse) {
                const receipt = await txResponse.wait()               
                if (receipt?.status === 1) {
                    setIsPayFee(false)

                    // setTransactionHash(receipt.transactionHash);
                    // setCollectFeeStatus(Status.Done); 
                    // setBalance(await service.getBalance(petal.address, account!))          
                }
                else {
                    setIsPayFee(false)

                    // setError("Transaction Failed");
                    // setCollectFeeStatus(Status.None); 
                }
            }          
        }
        catch (e) {
            console.log(e)
            setIsPayFee(false)
        }
    }

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
                                            <LoadingButton 
                                                    loading={isPayFee}
                                                    loadingIndicator="" 
                                                    variant="contained" 
                                                    className="tbldrkbtn" onClick={() => {payFees(parent?.address)}}>
                                                        {isPayFee ? "Pay fees..." : "Pay Fees"}</LoadingButton>
                                        </td>
                                        <td>
                                            <Typography component="p">{parent?.address}</Typography>
                                        </td>
                                        <td className="text-end">{parent?.balance}</td>
                                        <td>ORLY</td>
                                    </tr> : <></>
                                }
                                {
                                    petals?.map((x, index) => (
                                        
                                        <tr key={x.address}>
                                            <td>
                                                <LoadingButton 
                                                    loading={isPayFee}
                                                    loadingIndicator="" 
                                                    variant="contained" 
                                                    className="tbldrkbtn" onClick={() => collectFee(x)}>
                                                        {isPayFee ? "Collect fees..." : "Collect Fees from Petal "+(index+1)}
                                                    </LoadingButton>
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
