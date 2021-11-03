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
    const [isBuy, setIsBuy] = useState<boolean>(true);

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
    }, [library, account, chainId, flower == undefined])

    let accountBaseBalance = getDisplayBalance(useTokenBalance(baseToken != null ? baseToken.address : ""), 18, 8);
    let accountBalance = getDisplayBalance(useTokenBalance(flower != undefined ? flower.id : null), 18, 8);

    const onBaseMax = () => {
        let val = 0;
        if(isBuy){
            val = parseFloat(accountBaseBalance);
            setBuyValue(val);
        }
        else{
            val = parseFloat(accountBalance.toString());
            setBuyValue(val);
        }
        triggerInputChange(val);
    }

    const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`) // match escaped "." characters via in a non-capturing group
    const isValid = (value: string) => value === '' || inputRegex.test(escapeRegExp(value))
    
    const onUserInput = (event) => {
        if (!isValid(event.target.value)) return  
        const newValue = event.target.value.replace(/,/g, '.')
        setBuyValue(newValue)

        if(newValue != ""){
            triggerInputChange(newValue);       
        }
        else{
            triggerInputChange(0);
        }
    }

    const triggerInputChange = (newValue) => {
        const amount = parseFloat(newValue);

        const price = parseFloat(flower.price);
        const outputAmount = isBuy ? amount / toNumber(price) : amount * toNumber(price);
        // console.log("Amount "+toNumber(outputAmount, 9))

        if(isBuy){
            var res = toNumber(outputAmount,9);
            var result = res - (res * (parseFloat(flower.burnRate) / 100) / 100)
            setSellValue(result);
        }
        else{
            var res = amount;
            res = res / 1e9;
            var exitAmount = (res - res * parseFloat(flower.totalFees) / 10000) * price;
            setSellValue(exitAmount);
        }
        // if(isBuy){
        // }
        // else{
        //     const sellValue = toNumber(newValue *  new BigNumber(flower.price).toNumber(), 18);
        //     setSellValue(sellValue);
        // }
    }

    const approve = async () =>{
        try {
            setStatus(SwapStatus.Approving);
            console.log("Before init token service")
            const service = new TokenService(library, account!, flower.pairedToken.id);
            console.log("Before approve")
            const txResponse = await service.approve(flower.id);
            console.log("Before check tx approve")
            if (txResponse) {
                const receipt = await txResponse.wait()
                if (receipt?.status === 1) {
                    console.log("Success approve")
                    setStatus(SwapStatus.Approved);
                    setIsApproved(true);
                }
                else {
                    setStatus(SwapStatus.None);
                }
            }  
            else{
                console.log("Error")
                console.log(txResponse)
            }        
        }
        catch (e) {
            console.log(e);
            setStatus(SwapStatus.None);
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
            const txResponse =  isBuy ? await service.buy(flower.id, buyValue.toString()) : await service.sell(flower.id, buyValue.toString());

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

    const changeSide = async () => {
        setIsBuy(!isBuy);

        let tempBuyValue = sellValue;
        let tempSellValue = buyValue;
        setBuyValue(tempBuyValue);
        setSellValue(tempSellValue);
    }
 
    const handleChange = () => {}
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
                                        <span>Balance: <b>{
                                            isBuy && accountBaseBalance != null ? accountBaseBalance.toString() : 
                                            !isBuy && accountBalance != null ? accountBalance.toString() : "" 
                                        }</b></span>
                                    </Box>
                                    <Box className="tkninfo_bx_mddl">
                                        <input type="text"  className="tknipt" value={buyValue} onChange={val => onUserInput(val)}
/>
                                        <Box className="tkn_right_info">
                                            <span onClick={ accountBaseBalance ? onBaseMax : () =>{} }>MAX</span>
                                            {!isBuy ? "ORLY" : baseToken?.symbol}
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} className="text-center">
                                <Button className="tknbtn" onClick={() => changeSide()}>
                                    <Box component="img" src="/img/tknarrow.svg" />
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Box className="tkninfo_bx">
                                    <Box className="tkninfo_bx_top">
                                        To
                                        <span>Balance: <b>
                                        {
                                            !isBuy && accountBaseBalance != null ? accountBaseBalance.toString() : 
                                            isBuy && accountBalance != null ? accountBalance.toString() : "" 
                                        }
                                            </b></span>
                                    </Box>
                                    <Box className="tkninfo_bx_mddl">
                                        <input type="text"  className="tknipt" value={sellValue} onChange={() => {handleChange()}}/>
                                        <Box className="tkn_right_info">
                                            {isBuy ? "ORLY" : baseToken?.symbol}
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
