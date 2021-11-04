import React from 'react'
import { Box, Grid, Typography, Button, Stack, Dialog } from '@mui/material';
import { Table } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { formatAddress } from 'utils/address';
import { useWeb3React } from "@web3-react/core";
import { FlowerService } from 'services/FlowerService';
import LoadingButton from '@mui/lab/LoadingButton';

const DetailsFour = ({ flower }) =>  {
    const { account, library, chainId } = useWeb3React();
    const [open, setOpen] = React.useState(false);
    
    const [isTransferOwnership, setIsTransferOwnership] = React.useState(false);
    const [isClaimOwnership, setIsClaimOwnership] = React.useState(false);
    const [owner, setOwner] = React.useState<string>("");
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const transferOwnership = async() => {
        setIsTransferOwnership(true);

        try {
            const flowerService = new FlowerService(library, account!, chainId);
            const txResponse = await flowerService.transferOwnership(flower.id, owner);
            if (txResponse) {
                const receipt = await txResponse.wait()
                if (receipt?.status === 1) {
                    setIsTransferOwnership(false);
                }
                else {
                    setIsTransferOwnership(false);
                    // setStatus(SwapStatus.None);
                }
            }          
        }
        catch (e) {
            console.log(e);
            setIsTransferOwnership(false);
        }
    }
    
    const claimOwnership = async () => {
        setIsClaimOwnership(true);
        try {
            const service = new FlowerService(library, account!, chainId);
            const txResponse = await service.claimOwnership(flower.address);

            if (txResponse) {
                const receipt = await txResponse.wait()
                if (receipt?.status === 1) {
                    setIsClaimOwnership(false);
                }
                else {
                    setIsClaimOwnership(false);
                }
            }
        }
        catch(e){
            console.log(e)
            setIsClaimOwnership(false);
        }
    }

    return (
        <>
           <Box className="v1_rltv_pddng v1_rltv_pddng_tkn_v2">
                <Box component="img" src="/img/pl_wl_04.png" className="wel_img" />
                <Box className="homesc_one sc_wt_bg hm_sdw_bx">
                    <Box component="img" src="/img/mdl_lft_img_v2.png" className="mdl_lft_img" />
                    <Box component="img" src="/img/d_ftr_img03.png" className="mdl_rgt_img" />
                    <Box component="img" src="/img/pl_md_bg04.png" className="bg_img" />
                    <Box className="p_rltv w-100">
                        <Table responsive className="token_table token_table_wtbrdr">
                            <tbody>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 1:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">{flower !=null && flower.owner != null ?formatAddress(flower.owner.id):""} </Typography>
                                    </td>
                                    <td>
                                        <Button variant="contained" className="tbldrkbtn" onClick={handleClickOpen}> Transfer Ownership</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 2:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">{flower !=null && flower.owner2 != null ? formatAddress(flower.owner2.id):""} </Typography>
                                    </td>
                                    <td>
                                        <LoadingButton 
                                            loading={isClaimOwnership}
                                            loadingIndicator="" 
                                            variant="contained" 
                                            className="tbldrkbtn" onClick={() => {claimOwnership()}}>
                                                {isClaimOwnership ? "Claiming ownership..." : "Claim Ownership"}
                                        </LoadingButton>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 3:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">{flower !=null && flower.owner3 != null ? formatAddress(flower.owner3.id):""} </Typography>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 4:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">{flower !=null && flower.owner4 != null ? formatAddress(flower.owner4.id):""} </Typography>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 5:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">{flower !=null && flower.owner5 != null ? formatAddress(flower.owner5.id):""} </Typography>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 6:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">{flower !=null && flower.owner6 != null ? formatAddress(flower.owner6.id):""} </Typography>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 7:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">{flower !=null && flower.owner7 != null ? formatAddress(flower.owner7.id):""} </Typography>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 8:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">{flower !=null && flower.owner8 != null ? formatAddress(flower.owner8.id):""} </Typography>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 9:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">{flower !=null && flower.owner9 != null ? formatAddress(flower.owner9.id):""} </Typography>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 10:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">{flower !=null && flower.owner10 != null ? formatAddress(flower.owner10.id):""} </Typography>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 11:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">{flower !=null && flower.owner11 != null ? formatAddress(flower.owner11.id):""} </Typography>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 12:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">{flower !=null && flower.owner12 != null ? formatAddress(flower.owner12.id):""} </Typography>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 13:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">{flower !=null && flower.owner13 != null ? formatAddress(flower.owner13.id):""} </Typography>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 14:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">{flower !=null && flower.owner14 != null ? formatAddress(flower.owner14.id):""} </Typography>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Owner 15:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">{flower !=null && flower.owner15 != null ? formatAddress(flower.owner15.id):""} </Typography>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="reg_txt">Pending Owner:</span>
                                    </td>
                                    <td>
                                        <Typography component="p">{flower !=null && flower.pendingOwner != null ? formatAddress(flower.pendingOwner):""}</Typography>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                
                                
                            </tbody>
                        </Table>
                    </Box>
                </Box>
            </Box>

            

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'
                className='def_modal'
            >
                <Box className='v1_rltv_pddng'>
                <Box
                    component='img'
                    src='/img/modal_well_01_v2.png'
                    className='wel_img'
                />
                <Box className='homesc_one sc_wt_bg hm_sdw_bx'>
                    <Box
                    component='img'
                    src='/img/mdl_lft_img.png'
                    className='mdl_lft_img'
                    />
                    <Box
                    component='img'
                    src='/img/mdl_rgt_img.png'
                    className='mdl_rgt_img'
                    />
                    <Box component='img' src='/img/mdl_bg_01.png' className='bg_img' />
                    <Box className='p_rltv w-100 mt-3'>
                    <Typography component='h3' className='modal_title'>
                        Transfer Ownership
                    </Typography>
                    <Typography component='h4' className='modal_subtitle'>
                        New Owner
                    </Typography>
                    <Box className='mdlv1_tp_bx'>
                        <Box className='frst_clmn'>
                            <Typography component='p'>New Owner</Typography>
                        </Box>
                        <Box className='frst_clmn'>
                            <input type="text" className="address_fld" placeholder="Address" value={owner} onChange={(e) => setOwner(e.target.value)}  />
                        </Box>
                    </Box>
                    
                    <Box className='mdl_actions'>
                        <Grid container spacing={3} justifyContent="center">
                            <Grid item xs={12} md={9}>
                                <Button
                                variant='contained'
                                className='cncl_btn'
                                onClick={handleClose}
                                >
                                Cancel
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={9}>
                                <LoadingButton 
                                loading={isTransferOwnership}
                                loadingIndicator="" 
                                variant='contained' 
                                className='sbmt_btn' onClick={() => transferOwnership()}>
                                {isTransferOwnership ? "Transferring...":"Transfer Ownership"}
                                </LoadingButton>
                            </Grid>
                        </Grid>
                    </Box>
                    </Box>
                </Box>
                </Box>
            </Dialog>
        </>
    )
}

export default DetailsFour
