import React, { useState, useEffect } from 'react'
import { Box, Grid, Typography, Button } from '@mui/material';
import { formatAddress } from 'utils/address';
import { useWeb3React } from "@web3-react/core";
import { FlowerService } from 'services/FlowerService';
import useTokenBalance from "../../hooks/useTokenBalance";

const DetailsTwo = ({ flower }) =>  {
    const { account, library, chainId } = useWeb3React();
    const [pairTokenBalance, setPairTokenBalance] = useState<string>("");
    const flowerService = new FlowerService(library, account, chainId);
    let accountBalance = useTokenBalance(flower != undefined ? flower.id : null);
    if(flower != undefined){
        console.log(flower)
    }
    useEffect(() => {
        if(flower != undefined){
            const getPairedTokenBalance = async() => {
                const balance = await flowerService.getBalance(flower.pairedToken.id, flower.id);
                setPairTokenBalance(balance.toString());
            }
            getPairedTokenBalance();
        }
    }, [flower]);
    return (
        <>
            <Box className="v1_rltv_pddng v1_rltv_pddng_tkn dtls_d_prnt02">
                <Box component="img" src="/img/pl_wl_02.png" className="wel_img" />
                <Box className="homesc_one sc_wt_bg hm_sdw_bx">
                    <Box component="img" src="/img/pl_md_bg02.png" className="bg_img" />
                    <Box className="p_rltv w-100">
                        <Box className="d_all_infobx">
                            <Typography component="h4">
                                <span>Price:</span>
                                {flower!=null?flower.price:""} 
                            </Typography>
                            <Typography component="h4">
                                <span>Total Supply:</span>
                                {flower!=null?flower.totalSupply:""} 
                            </Typography>
                            <Typography component="h4">
                                <span>Paired Balance:</span>
                                {pairTokenBalance}
                            </Typography>
                            <Typography component="h4">
                                <span>Account Balance:</span>
                                {accountBalance != null ? accountBalance.toString() : ""}
                            </Typography>
                            <Typography component="h4">
                                <span>Burn Rate:</span>
                                {flower!=null?flower.burnRate/100:""} %
                            </Typography>
                            <Typography component="h4">
                                <span>Up Percent:</span>
                                {flower!=null?flower.upPercent/100:""} %
                            </Typography>
                            <Typography component="h4">
                                <span>Up Delay:</span>
                                {flower!=null?flower.upDelay:""}  seconds
                            </Typography>
                            <Typography component="h4">
                                <span>Petal Count:</span>
                                {flower!=null?flower.petalCount:""}
                            </Typography>
                            <Typography component="h4">
                                <span>Owner:</span>
                                {flower!=null ? formatAddress(flower.owner.id):""} 
                            </Typography>
                            <Typography component="h4">
                                <span>Owner 2:</span>
                                {flower!=null ? formatAddress(flower.owner2.id):""} 
                            </Typography>
                            <Typography component="h4">
                                <span>Owner 3:</span>
                                {flower!=null?formatAddress(flower.owner3.id):""} 
                            </Typography>
                            <Typography component="h4">
                                <span>Owner 4:</span>
                                {flower!=null?formatAddress(flower.owner4.id):""} 
                            </Typography>
                            <Typography component="h4">
                                <span>Owner 5:</span>
                                {flower!=null?formatAddress(flower.owner5.id):""} 
                            </Typography>
                            <Typography component="h4">
                                <span>Owner 6:</span>
                                {flower!=null?formatAddress(flower.owner6.id):""} 
                            </Typography>
                            <Typography component="h4">
                                <span>Owner 7:</span>
                                {flower!=null?formatAddress(flower.owner7.id):""} 
                            </Typography>
                            <Typography component="h4">
                                <span>Owner 8:</span>
                                {flower!=null?formatAddress(flower.owner8.id):""} 
                            </Typography>
                            <Typography component="h4">
                                <span>Owner 9:</span>
                                {flower!=null?formatAddress(flower.owner9.id):""} 
                            </Typography>
                            <Typography component="h4">
                                <span>Owner 10:</span>
                                {flower!=null?formatAddress(flower.owner10.id):""} 
                            </Typography>
                            <Typography component="h4">
                                <span>Owner 11:</span>
                                {flower!=null?formatAddress(flower.owner11.id):""} 
                            </Typography>
                            <Typography component="h4">
                                <span>Owner 12:</span>
                                {flower!=null?formatAddress(flower.owner12.id):""} 
                            </Typography>
                            <Typography component="h4">
                                <span>Owner 13:</span>
                                {flower!=null?formatAddress(flower.owner13.id):""} 
                            </Typography>
                            <Typography component="h4">
                                <span>Owner 14:</span>
                                {flower!=null?formatAddress(flower.owner14.id):""} 
                            </Typography>
                            <Typography component="h4">
                                <span>Owner 15:</span>
                                {flower!=null?formatAddress(flower.owner15.id):""} 
                            </Typography>
                        </Box>
                        <hr className="d_hr" />
                        <Box className="d_all_infobx_btm">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Button variant="contained" className="buy_btn more_shadow">Up Only</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" className="cncl_btn">Let Flowers Cover The Earth</Button>
                                </Grid>
                                <Grid item xs={12} className="text-center">
                                    <Box component="img" src="/img/d_ftr_img03.png" className="img-fluid" />        
                                </Grid>
                                
                            </Grid>
                        </Box>
                        
                        
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default DetailsTwo
