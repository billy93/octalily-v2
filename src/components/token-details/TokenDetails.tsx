import { useWeb3React } from "@web3-react/core"
import { useParams } from "react-router-dom";
import React, {useEffect, useState} from 'react'
import { Box, Grid, Typography, Button, Stack } from '@mui/material';
import {Tabs, Tab} from 'react-bootstrap'
import ShowAll from './ShowAll';
import { FlowerInfo } from "../../dtos/FlowerInfo";
import { isAddress, supportedChain } from "../../utils";
import ShowOwned from "./ShowOwned";

enum View {
    All,
    Owned
}


export default function TokenDetails() {
    const { address } = useParams<{ address: string }>();
    const { account, library, chainId } = useWeb3React();
    const [flowers, setFlowers] = useState<FlowerInfo[]>([]);
    const [view, setView] = useState<View>(View.Owned);

    useEffect(() => {

        const getAll = async () => {
            if (library && account && chainId &&  isAddress(address)){
                // const service = new FlowerService(library, account!, chain)
                // setLoading(true) 
                // const lowerCaseAddress = address.toLowerCase();
                // if (serializedPaired.has(lowerCaseAddress)){
                //     setFlowers(await service.deserializeFlowers(lowerCaseAddress));
                // }
                // else {
                //     const flower = await service.getParentFlower(address);
                //     if (flower){
                //         setFlowers([flower]);
                //     }
                // }                
                // setLoading(false);
            }
        }

        const getOwned = async () => {
            // if (library && account && chainId && supportedChain(chainId!, chain) && isAddress(address)) {
            //     const service = new FlowerService(library, account!, chain)
            //     setLoading(true);
            //     setFlowers(await service.getOwnedFlowers(address, account!));
            //     setLoading(false);
            // }
        }
        if (view === View.Owned) {
            getOwned();
        }
        else {
            getAll();
        }
        

    }, [library, account, chainId, address, view])   

    useEffect(() => {
        const body = document.querySelector("body");
        
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
           <Box className="main tknplgn_bg">
               

                <Box className="tkn_tp_bx" sx={{ pb: 10, }}>
                    <Box className="tkntp_bg_img tkntp_bg_img_v3">
                        <Box component="img" src="/img/tkn_d_img_01.png" className="img-fluid" />
                    </Box>
                    <Box component="img" src="/img/tkn_d_img_02.png" className="img-fluid tkntp_lnbg_v3 tkntp_lnbg_v6" />
                    <Tabs defaultActiveKey="show_all" id="uncontrolled-tab-example" className="as_tabs">
                        <Tab eventKey="show_all" title="Show All">
                            <ShowAll />
                        </Tab>
                        <Tab eventKey="show_owned" title="Show Owned">
                            <ShowOwned />
                        </Tab>
                    </Tabs>
                    
                
                </Box>
            </Box>
        </>
    )
}
