import { useWeb3React } from "@web3-react/core"
import React, {useEffect, useContext, useState} from 'react'
import { Box, Grid, Typography, Button, Stack } from '@mui/material';
import { TokenInfo } from "../../dtos/TokenInfo"
import { CacheService } from "../../services/CacheService"
import { CheckBox } from "@mui/icons-material";
import { useHistory } from 'react-router-dom';

export default function TokenList() {
    const { account, library, chainId } = useWeb3React();
    // const { chain } = useContext(AppContext);
    const [tokens, setTokens] = useState<TokenInfo[]>();
  
    const [token, setToken] = useState<string>("");   
    let history = useHistory();
    useEffect(() => {
    const getTokens = async () => {
        const service = new CacheService(chainId);
        setTokens(await service.getParentTokens());
    }
    getTokens();

    }, [chainId, library, account])

    const selectToken = (e) => {
        setToken(e);
        history.push("/token-details/"+e);
    }

    useEffect(() => {
        const body = document.querySelector("body");
        console.log( document.body.classList)
        if(chainId == 137){
            document.body.classList.add("dark_theme");
        }
            // document.body.classList.add("bsc_theme");
            // document.body.classList.add("eth_theme");
        return () => {
            body.classList.remove("dark_theme");
        }
    }, [chainId, library, account]);
  

    return (
        <>
           <Box className="main tknlst_bg">
               <Box className="tkn_tp_bx" sx={{ pb: 10, }}>
                    <Box className="tkntp_bg_img">
                        <Box component="img" src="/img/tkntp_lnbg.png" className="img-fluid" />
                    </Box>
                    <Typography component="h3" className="tkn_title">Trade Flowers: Connect Token</Typography>
                    <Box className="v1_rltv_pddng v1_rltv_pddng_tkn">
                        <Box component="img" src="/img/tkn_wll.png" className="wel_img" />
                        <Box className="homesc_one sc_wt_bg hm_sdw_bx">
                            <Box component="img" src="/img/mdl_lft_img.png" className="mdl_lft_img" />
                            <Box component="img" src="/img/mdl_rgt_img.png" className="mdl_rgt_img" />
                            <Box component="img" src="/img/tkn_bx_bg01.png" className="bg_img" />
                            <Box className="p_rltv w-100">
                                <Typography component="h3" className="modal_title">Token list (Garden)</Typography>
                                <Box className="token_l_box">
                                    {
                                        tokens?.map(x => (
                                        
                                        <Box key={x.address} className="token_chkbx" >
                                            <input onChange={() => selectToken(x.address)} type="radio" name="token" value={x.address}/>
                                            <label>
                                                <Typography component="h6">{x.symbol}</Typography>
                                                <Box component="img" src="/img/tkn_i.svg" />
                                            </label>
                                        </Box>
                                        ))
                                    } 
                                </Box>
                            </Box>                                
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
