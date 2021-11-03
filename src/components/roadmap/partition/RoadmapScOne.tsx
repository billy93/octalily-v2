import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography, Button, Dialog } from '@mui/material';
import {Link} from 'react-router-dom'
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Web3ConnectButton } from '../../../elements/Web3ConnectButton/Web3ConnectButton';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useWeb3React } from "@web3-react/core"
import { CacheService } from "../../../services/CacheService"
import { TokenInfo } from "../../../dtos/TokenInfo"
import { FlowerOwnershipGiverService } from 'services/FlowerOwnershipGiver';
import LoadingButton from '@mui/lab/LoadingButton';

const RoadmapScOne = ({ setTokenAddress, tokenAddress }) =>  {
    const { account, library, chainId } = useWeb3React();
    const [open, setOpen] = React.useState(false);
    const [openAlert, setOpenAlert] = React.useState(false);
    const [tokens, setTokens] = useState<TokenInfo[]>();
    const [loading, setLoading] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState("");

    useEffect(() => {
        const getTokens = async () => {
            const service = new CacheService(chainId);
            setTokens(await service.getParentTokens());
        }
        getTokens();
    }, [chainId, library, account])
    
    const handleChange = (event) => {
        const {
        target: { value },
        } = event;

        setTokenAddress(
        // On autofill we get a the stringified value.
        typeof value === 'string' ? value.split(',') : value,
        );
    };
    
    const handleClickOpen = () => {
        if(tokenAddress != ""){
            setOpen(true);
        }
        else{
            setAlertMessage("Please select token first");
            setOpenAlert(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAlertClose = () => {
        setOpenAlert(false);
    };

    const buy = async () => {
        setLoading(true);

        try{
            const flowerGiver = new FlowerOwnershipGiverService(library, account);
            const txResponse = await flowerGiver.giveMeFlower(tokenAddress[0]);
            if (txResponse) {
                const receipt = await txResponse.wait()
                console.log(receipt);
                if (receipt?.status === 1) {
                    console.log("Success");
                    setLoading(false);
                    handleClose();
                }
                else {
                    console.log("Error");
                    setLoading(false);
                    setAlertMessage("Failed, please try again");
                    setOpenAlert(true);
                    handleClose();
                }
            }
        } catch(e){
            console.log(e);
            if(e["data"] != null && e["data"].message != null){
                setAlertMessage(e["data"].message);
                setLoading(false);
                setOpenAlert(true);
            }else if(e != null){
                setAlertMessage(e.toString());
                setLoading(false);
                setOpenAlert(true);
            }
        }
    }

    return (
        <>
            <Box className="rdmp_sc02 zindx1">
                <Box className="v1_rltv_pddng">
                    <Box component="img" src="/img/rdmp_wl_02.png" className="wel_img" />
                    <Box className="homesc_one sc_wt_bg sdw_bx_v2">
                        <Box component="img" src="/img/vctr_bg_v2.png" className="bg_img" />
                        <Box component="img" src="/img/fram_img.png" className="img-fluid fram_img" />
                        <Box className="p_rltv">
                        
                        <Grid container spacing={3}>
                        <Grid item xs={12} className="csm_bx_cntnt">
                            <Typography component="h2">Welcome to your garden</Typography>
                            <Typography component="p">
                            Your garden is where you will plant and grow your flowers.
                    You can have multiple flower beds within your garden, and
                    multiple flowers within each flower bed. Let’s start with a
                    single flower.
                            </Typography>
                            </Grid>              
                            <Grid item xs={12} lg={5}>
                            <Box component="img" src="/img/plntsd_img.png" className="img-fluid plntsd_img" />
                            </Grid>              
                            <Grid item xs={12} lg={7} className="csm_bx_cntnt csm_bx_cntnt_v2">
                            <Typography component="h2">Plant a Seed</Typography>
                            <Typography component="p">
                            Growing a flower is easy! It starts with planting a seed.
                    You plant a seed by connecting your wallet to the Octolily
                    site, and selecting the token with which you want to grow
                    your flower. Note: The tokens available will change
                    depending on your wallet settings. Once you have selected
                    the token you wish to use, just approve the gas fees and the
                    flower grows!
                            </Typography>
                            
                            
                            </Grid>  
                            <Grid item xs={12} lg={3}></Grid>
                                <Grid item xs={12} lg={9}>
                                    <Box className="bttn_bx">
                                        <Web3ConnectButton useWalletIcon={false} />
                                        <Box component="img" src="/img/bsd_arrow.png" className="bsd_arr_img" />
                                        <FormControl className="cstmslct">
                                            <Select
                                            
                                            displayEmpty
                                            value={tokenAddress}
                                            onChange={handleChange}
                                            input={<OutlinedInput />}
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            MenuProps={{ classes: { paper: 'inner_slct_clss' } }}
                                            >
                                                <MenuItem value="">
                                                    Choose Garden
                                                </MenuItem>

                                                {
                                                    tokens?.map(x => (
                                                    
                                                    <MenuItem key={x.address} value={x.address}>
                                                        <Box component="img" src={"/img/"+x.img} width="25px" className="slsct_in_img" />
                                                        <span>{x.symbol}</span>
                                                        <Box component="img" src="/img/slsctarrow.svg" width="45px" className="slsct_in_arr" />
                                                    </MenuItem>
                                                    // <Box key={x.address} className="token_chkbx" >
                                                    //     <input onChange={() => selectToken(x.address)} type="radio" name="token" value={x.address}/>
                                                    //     <label>
                                                    //         <Typography component="h6">{x.symbol}</Typography>
                                                    //         <Box component="img" src="/img/tkn_i.svg" />
                                                    //     </label>
                                                    // </Box>
                                                    ))
                                                }                                                 
                                            </Select>
                                        </FormControl>
                                        <Box component="img" src="/img/bsd_arrow.png" className="bsd_arr_img" />
                                        <Button 
                                            className="def_blk_btn sdw_nn"
                                            onClick={handleClickOpen}
                                        >
                                            Pay Gas Fee
                                        </Button>
                                    </Box>
                                </Grid>               
                        </Grid>
                        
                        
                        </Box>
                    </Box>
                </Box>
            </Box>
            {/* Modal */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className="def_modal"
            >
                <Box className="v1_rltv_pddng">
                    <Box component="img" src="/img/modal_well_01.png" className="wel_img" />
                    <Box className="homesc_one sc_wt_bg hm_sdw_bx">
                        <Box component="img" src="/img/mdl_lft_img.png" className="mdl_lft_img" />
                        <Box component="img" src="/img/mdl_rgt_img.png" className="mdl_rgt_img" />
                        <Box component="img" src="/img/mdl_bg_01.png" className="bg_img" />
                        <Box className="p_rltv w-100">
                            <Typography component="h3" className="modal_title">Create</Typography>
                            <Typography component="h4" className="modal_subtitle">Transaction</Typography>
                            <Box className="mdlv1_tp_bx">
                                <Box className="frst_clmn">
                                    <Typography component="p">Amount to spend:</Typography>
                                    <Typography component="h4">0.0254 ETH <span>$150.414</span></Typography>
                                </Box>
                                <Box className="frst_clmn">
                                    <Typography component="p">Network fee:</Typography>
                                    <Typography component="h4">0.0003 ETH <span>$4.4514</span></Typography>
                                </Box>
                            </Box>
                            <Box className="scnd_clmn">
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={4}>
                                        <Box className="cstm_rdo">
                                            <input type="radio" name="network_r" id="radio_one" className="redio_inpt" />
                                            <label html-for="radio_one">
                                                <Box component="span" className="rdrds" />
                                                <Typography component="p">Slow</Typography>
                                                <Typography component="h4">0.00022</Typography>
                                                <Typography component="h5">$3.76313</Typography>
                                            </label>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Box className="cstm_rdo">
                                            <input type="radio" name="network_r" id="radio_two" className="redio_inpt" />
                                            <label html-for="radio_two">
                                                <Box component="span" className="rdrds" />
                                                <Typography component="p">Slow</Typography>
                                                <Typography component="h4">0.0003</Typography>
                                                <Typography component="h5">$4.4514</Typography>
                                            </label>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Box className="cstm_rdo">
                                            <input type="radio" name="network_r" id="radio_three" className="redio_inpt" />
                                            <label html-for="radio_three">
                                                <Box component="span" className="rdrds" />
                                                <Typography component="p">Slow</Typography>
                                                <Typography component="h4">0.0045</Typography>
                                                <Typography component="h5">$6.46313</Typography>
                                            </label>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box className="mdl_actions">
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Button variant="contained" className="cncl_btn" onClick={handleClose}>Cancel</Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <LoadingButton 
                                            loading={loading}
                                            loadingIndicator="Loading..." 
                                            variant="contained" 
                                            className="sbmt_btn" onClick={buy}>Buy</LoadingButton>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        
                    </Box>
                </Box>
            </Dialog>


            <Dialog
                open={openAlert}
                onClose={handleAlertClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"Alert"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {alertMessage}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleAlertClose} autoFocus>
                    Ok
                </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default RoadmapScOne
