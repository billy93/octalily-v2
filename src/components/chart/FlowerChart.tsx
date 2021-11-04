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
import ChartWrapper from 'kaktana-react-lightweight-charts';

import {
    useQuery,
    gql
  } from "@apollo/client";


const FlowerChart = ({ flower }) =>  {
    const { account, library, chainId } = useWeb3React();
    const [state, setState] = useState<any>({
        options: {
            alignLabels: false,
            timeScale: {
                rightOffset: 0,
                barSpacing: 10,
                fixLeftEdge: false,
                lockVisibleTimeRangeOnResize: false,
                rightBarStaysOnScroll: false,
                borderVisible: false,
                borderColor: "#fff000",
                visible: false,
                timeVisible: false,
                secondsVisible: false,
                downColor: 'rgba(37, 148, 51, 0.2)',
                upColor: 'rgba(191, 55, 48, 0.2)',
            },
            localization: {
            priceFormatter: (price:any) => parseFloat(price).toFixed(18)
            }
        },
        candlestickSeries: [{
            data: []
        }]
    });
    let chartDatas = null;

    const dateToString = (date_ob) => {                
        // adjust 0 before single digit date
        let date = ("0" + date_ob.getDate()).slice(-2);

        // current month
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

        // current year
        let year = date_ob.getFullYear();

        // current hours
        let hours = date_ob.getHours();

        // current minutes
        let minutes = date_ob.getMinutes();

        // current seconds
        let seconds = date_ob.getSeconds();
        return year + "-" + month + "-" + date;// + " " + hours + ":" + minutes + ":" + seconds;
    }

    // useEffect(() => {
    //     if(chartDatas != null){

            
    //         const getPrice = async () => { 
    //             let pairHourDatas = chartDatas;
                        
    //             let chartData = [];
    //             for(let x=0;x<pairHourDatas.length;x++){
    //                 // console.log(parseInt(pairHourDatas[x].timestamp))
    //                 let date = dateToString(new Date(parseInt(pairHourDatas[x].timestamp) * 1000));
    //                 console.log(date);
                   
    //                 let price =  getDisplayBalance(pairHourDatas[x].price, 18, 18);

    //                 let closePrice = (x+1 < pairHourDatas.length) ? getDisplayBalance(pairHourDatas[x+1].price, 18, 18) : price;
    //                 chartData.push({
    //                     time: date,
    //                     open: price,
    //                     high: price,
    //                     low: price,
    //                     close: closePrice
    //                 });
    //             }

    //             setState({
    //                 options: {
    //                     alignLabels: false,
    //                     timeScale: {
    //                         rightOffset: 10,
    //                         barSpacing: 20,
    //                         fixLeftEdge: true,
    //                         lockVisibleTimeRangeOnResize: true,
    //                         rightBarStaysOnScroll: false,
    //                         borderVisible: false,
    //                         borderColor: "#fff000",
    //                         visible: true,
    //                         timeVisible: true,
    //                         secondsVisible: true,
    //                     },
    //                     localization: {
    //                         priceFormatter: (price:any) => parseFloat(price).toFixed(18)
    //                     }
    //                 },
    //                 candlestickSeries: [{
    //                     data: chartData
    //                 }]
    //             });
    //         };
    //         const timer = setInterval(() => getPrice(), 1000)
    //         return () => clearInterval(timer)
    //     }
    // });
    
    const query = gql`
        query getPriceHistory($address: String!){
            priceHistories(where:{flower: $address}, orderBy:timestamp) {
                id
                flower {
                    id
                }
                price
                timestamp
            }
        }
    `

    let {loading, error, data} = useQuery(query, { variables: { address: flower.id }});
    if (loading){ 
        console.log("Loading dulu");
        return <><h1>Loading...</h1></>
    }

    chartDatas = data.priceHistories; 
    let pairHourDatas = [...chartDatas];
                        
    let chartData = [];


    let fakeData = [];
    var selisih = parseInt(pairHourDatas[0].price) * (parseFloat(flower.burnRate) / 100 / 100);
    for(let y=1;y<4;y++){
        var d = new Date(parseInt(pairHourDatas[0].timestamp) * 1000);
        d.setDate(d.getDate()-y);

        selisih*=y;
        fakeData.push({
            timestamp: parseInt(pairHourDatas[0].timestamp) - (86400*y),
            price: pairHourDatas[0].price - selisih
        })
    }

    for(let z=0;z<fakeData.length;z++){
        pairHourDatas.unshift(fakeData[z]);
    }

    console.log(pairHourDatas);
    for(let x=0;x<pairHourDatas.length;x++){
        // console.log(parseInt(pairHourDatas[x].timestamp))
        let date = dateToString(new Date(parseInt(pairHourDatas[x].timestamp) * 1000));
        console.log(date);
        
        let price =  getDisplayBalance(pairHourDatas[x].price, 18, 18);

        let closePrice = (x+1 < pairHourDatas.length) ? getDisplayBalance(pairHourDatas[x+1].price, 18, 18) : price;
        chartData.push({
            time: date,
            open: price,
            high: price,
            low: price,
            close: closePrice
        });
    }

    if(state.candlestickSeries[0].data.length == 0){
        setState({
            options: {
                alignLabels: false,
                timeScale: {
                    rightOffset: 0,
                    barSpacing: 100,
                    fixLeftEdge: false,
                    lockVisibleTimeRangeOnResize: false,
                    rightBarStaysOnScroll: true,
                    borderVisible: false,
                    borderColor: "#fff000",
                    visible: true,
                    timeVisible: true,
                    secondsVisible: true,
                },
                localization: {
                    priceFormatter: (price:any) => parseFloat(price).toFixed(18)
                }
            },
            candlestickSeries: [{
                data: chartData
            }]
        });
    }
    return (
        <>
           <Box className="v1_rltv_pddng v1_rltv_pddng_tkn_v2">
                <Box component="img" src="/img/pl_wl_03.png" className="wel_img" />
                <Box className="homesc_one sc_wt_bg hm_sdw_bx">
                    <Box component="img" src="/img/d_ftr_img03.png" className="mdl_lft_img" />
                    <Box component="img" src="/img/d_ftr_img04.png" className="mdl_rgt_img" />
                    <Box component="img" src="/img/pl_md_bg03.png" className="bg_img" />
                    
                    <Box className="p_rltv w-100 mb-2">
                        <Typography component="h3" className="modal_title">Chart</Typography>                        
                        <ChartWrapper options={state.options} candlestickSeries={state.candlestickSeries} autoWidth height={320} darkTheme={true}/>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default FlowerChart
