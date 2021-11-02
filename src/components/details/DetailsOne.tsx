import React, {useState, useEffect} from 'react'
import { Box, Grid, Typography, Button } from '@mui/material';
import useTokenBalance from "../../hooks/useTokenBalance";
import useBaseBalance from "../../hooks/useBaseBalance";
import { useWeb3React } from "@web3-react/core";
import { getDisplayBalance, toNumber } from '../../utils/formatBalance'
import BigNumber from 'bignumber.js';
import { escapeRegExp } from '../../utils'
import { TokenService } from 'services/TokenService';
import LoadingButton from '@mui/lab/LoadingButton';
import { FlowerService } from 'services/FlowerService';

enum SwapStatus {
    None,
    Approving,
    Approved,
    Swapping,
    Swapped
}

const DetailsOne = ({ flower, baseToken }) =>  {
    const { account, library, chainId } = useWeb3React();
    const [status, setStatus] = useState<SwapStatus>(SwapStatus.None);
    const [isApproved, setIsApproved] = useState<boolean>(false);
    const [buyValue, setBuyValue] = useState(0);
    const [sellValue, setSellValue] = useState(0);

    useEffect(() => {
        if(flower != undefined){
            const getIsApprove = async () => {
                const service = new TokenService(library, account!, flower.pairedToken.id);
                const approved = await service.isApproved(flower.id);
                setIsApproved(approved);
            }
            if(chainId) {
                getIsApprove();
            }
        }
    }, [library, account, chainId, flower])

    let accountBaseBalance = getDisplayBalance(useTokenBalance(baseToken != null ? baseToken.address : ""), 18, 8);
    let accountBalance = useTokenBalance(flower != undefined ? flower.id : null);

    const onBaseMax = () => {
        setBuyValue(parseFloat(accountBaseBalance));
    }

    const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`) // match escaped "." characters via in a non-capturing group
    const isValid = (value: string) => value === '' || inputRegex.test(escapeRegExp(value))
    
    const onUserInput = (event) => {
        if (!isValid(event.target.value)) return  
        const newValue = event.target.value.replace(/,/g, '.')
        setBuyValue(newValue)

        const sellValue = newValue / toNumber(flower.price);
        console.log(sellValue);
        setSellValue(sellValue);
    }

    const approve = async () =>{
        try {
            setStatus(SwapStatus.Approving);
            const service = new TokenService(library, account!, flower.pairedToken.id);
            const txResponse = await service.approve(flower.id);
            if (txResponse) {
                const receipt = await txResponse.wait()
                if (receipt?.status === 1) {
                    setStatus(SwapStatus.Approved);
                    setIsApproved(true);
                }
                else {
                    // setStatus(SwapStatus.None);
                }
            }          
        }
        catch (e) {
            console.log(e);
            // setStatus(SwapStatus.None);
            // const errorMessage = extractErrorMessage(e);
            // if(errorMessage) {
                // setError(errorMessage);
            // }
            // setStatus(SwapStatus.None);
        }
    }

    const swap = async () => {
        const inputAmount = parseFloat(buyValue.toString());
        if (Number.isNaN(inputAmount) || inputAmount <= 0) {
            // setError("Enter amount");
            return;
        }       
        
        // setError("");       
        try {
            setStatus(SwapStatus.Swapping);

            console.log("Swapping....")
            const service = new FlowerService(library, account!, chainId);
            const txResponse =  await service.buy(flower.id, buyValue.toString());

            if (txResponse) {
                const receipt = await txResponse.wait()
                if (receipt?.status === 1) {
                    console.log("SWAP SUCCESS")
                    // setTransactionHash(receipt.transactionHash); 
                    setStatus(SwapStatus.Swapped);
                    // onComplete();
                    // setInputValue("");
                    // setOutputValue("");  
                }
                else {
                    console.log("SWAP ERROR")
                    // setError("Transaction Failed");
                    setStatus(SwapStatus.None);
                }
            }         
        }
        catch (e) {
            console.log(e)
            // const errorMessage = extractErrorMessage(e);
            // if(errorMessage) {
            //     setError(errorMessage);
            // }
            setStatus(SwapStatus.None);
        }
    }
    return (
        <>
            <Box className="v1_rltv_pddng v1_rltv_pddng_tkn dtls_d_prnt01">
                <Box component="img" src="/img/pl_wl_01.png" className="wel_img" />
                <Box component="img" src="/img/pl_ex_img02.png" className="img-fluid pl_ex_img02" />
                <Box className="homesc_one sc_wt_bg hm_sdw_bx">
                    <Box component="img" src="/img/d_ftr_img01.png" className="mdl_lft_img" />
                    <Box component="img" src="/img/d_ftr_img02.png" className="mdl_rgt_img" />
                    <Box component="img" src="/img/buysell_bg.png" className="bg_img" />
                    <Box className="p_rltv w-100 mb-3">
                        <Typography component="h3" className="modal_title">Swap</Typography>
                        <Typography component="h4" className="modal_subtitle">You use {baseToken?.symbol} Token</Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Box className="tkninfo_bx">
                                    <Box className="tkninfo_bx_top">
                                        From
                                        <span>Balance: <b>{accountBaseBalance != null ? accountBaseBalance.toString() : ""}</b></span>
                                    </Box>
                                    <Box className="tkninfo_bx_mddl">
                                        <input type="text"  className="tknipt" value={buyValue} onInput={val => onUserInput(val)}
/>
                                        <Box className="tkn_right_info">
                                            <span onClick={ accountBaseBalance ? onBaseMax : () =>{} }>MAX</span>
                                            {/* ORLY */}
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} className="text-center">
                                <Button className="tknbtn">
                                    <Box component="img" src="/img/tknarrow.svg" />
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Box className="tkninfo_bx">
                                    <Box className="tkninfo_bx_top">
                                        To
                                        <span>Balance: <b>{accountBalance != null ? accountBalance.toString() : ""}</b></span>
                                    </Box>
                                    <Box className="tkninfo_bx_mddl">
                                        <input type="text"  className="tknipt" value={sellValue}/>
                                        <Box className="tkn_right_info">
                                            <span>MAX</span>
                                            ORLY
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            {!isApproved ?
                                <Grid item xs={12} sm={12}>
                                    <LoadingButton 
                                    loading={status == SwapStatus.Approving}
                                    loadingIndicator="" 
                                    variant="contained" 
                                    className="cncl_btn" onClick={() => approve()}>
                                        {
                                            status == SwapStatus.Approving ? "Approving..." : "Approve"
                                        }
                                    </LoadingButton>
                                </Grid> : 

                                
                                <Grid item xs={12} sm={12}>
                                    <LoadingButton 
                                        loading={status == SwapStatus.Swapping}
                                        loadingIndicator="" 
                                        variant="contained" 
                                        className="buy_btn"
                                        onClick={() => swap()}>
                                            {
                                                status == SwapStatus.Swapping ? "Swapping..." : "Swap"
                                            }
                                        </LoadingButton>
                                </Grid>
                            }
                        </Grid>
                        
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default DetailsOne
