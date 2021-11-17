import * as React from 'react';
import { Box, Grid, Typography, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import {Link} from 'react-router-dom'
import {Form} from 'react-bootstrap'
import PlusIcon from '@mui/icons-material/Add';
import RoadmapScOne from './partition/RoadmapScOne'
import RoadmapScTwo from './partition/RoadmapScTwo';
import RoadmapScThree from './partition/RoadmapScThree';
import RoadmapScFour from './partition/RoadmapScFour';

const Input = styled('input')({
  display: 'none',
});

export default function Roadmap() {
  const [tokenAddress, setTokenAddress] = React.useState("");
  const [transaction, setTransaction] = React.useState({
    "transactionHash": "-",
    "status": 0,
    "timestamp" : 0,
    "blockNumber" : "-",
    "gasUsed": {
      "_hex": "0"
    },
    "effectiveGasPrice":{
      "_hex":"0"
    }
  }
    // {
    //   "to": "0x6A76A2887C14EbCb8370ea44CF975eA649343d68",
    //   "from": "0xC157f383DC5Fc9301CDB2FEb958Ba394EF79f6e5",
    //   "contractAddress": null,
    //   "transactionIndex": 43,
    //   "gasUsed": {
    //       "type": "BigNumber",
    //       "hex": "0x01c1f7"
    //   },
    //   "logsBloom": "0x00000000000000000000000000000000000000000000000800800000000000000000000000000000000000000000000000008000000000000000000000000000000000200000000000000000000400800001000000000000000100000000000000000000020000000400000000000800000000000000000080000000800000400000000000000000000000000000000000000000000000000001000000000000200000000000000000000000001000000000000000000000000000000000004000000000000000004001000000000008000000000000000000100000000020000000000000000000000000000000000000000000000000000000000000100000",
    //   "blockHash": "0xbf6394cf28f6e120b3a3b9a21ab6d1d73f6f6a94c0906a1a5f3dff3a97f0ae8b",
    //   "transactionHash": "0x44942676883359aef5d508e81490fdc515153b984fb16f536d0b2c5907ad6703",
    //   "logs": [
    //       {
    //           "transactionIndex": 43,
    //           "blockNumber": 21482733,
    //           "transactionHash": "0x44942676883359aef5d508e81490fdc515153b984fb16f536d0b2c5907ad6703",
    //           "address": "0x2AA5e9079204e28375Dc3b15E0beE9c1ab3FAaD9",
    //           "topics": [
    //               "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
    //               "0x0000000000000000000000000000000000000000000000000000000000000000",
    //               "0x000000000000000000000000c157f383dc5fc9301cdb2feb958ba394ef79f6e5"
    //           ],
    //           "data": "0x",
    //           "logIndex": 122,
    //           "blockHash": "0xbf6394cf28f6e120b3a3b9a21ab6d1d73f6f6a94c0906a1a5f3dff3a97f0ae8b"
    //       },
    //       {
    //           "transactionIndex": 43,
    //           "blockNumber": 21482733,
    //           "transactionHash": "0x44942676883359aef5d508e81490fdc515153b984fb16f536d0b2c5907ad6703",
    //           "address": "0x0000000000000000000000000000000000001010",
    //           "topics": [
    //               "0x4dfe1bbbcf077ddc3e01291eea2d5c70c2b422b415d95645b9adcfd678cb1d63",
    //               "0x0000000000000000000000000000000000000000000000000000000000001010",
    //               "0x000000000000000000000000c157f383dc5fc9301cdb2feb958ba394ef79f6e5",
    //               "0x000000000000000000000000bc6044f4a1688d8b8596a9f7d4659e09985eebe6"
    //           ],
    //           "data": "0x0000000000000000000000000000000000000000000000000027b2437bb92600000000000000000000000000000000000000000000000000016345785d8a00000000000000000000000000000000000000000000000009c3c6ecc8f348b45292000000000000000000000000000000000000000000000000013b9334e1d0da000000000000000000000000000000000000000000000009c3c7147b36c46d7892",
    //           "logIndex": 123,
    //           "blockHash": "0xbf6394cf28f6e120b3a3b9a21ab6d1d73f6f6a94c0906a1a5f3dff3a97f0ae8b"
    //       }
    //   ],
    //   "blockNumber": 21482733,
    //   "confirmations": 4,
    //   "cumulativeGasUsed": {
    //       "type": "BigNumber",
    //       "hex": "0x3b6784"
    //   },
    //   "effectiveGasPrice": {
    //       "type": "BigNumber",
    //       "hex": "0x1695a68a00"
    //   },
    //   "status": 1,
    //   "type": 0,
    //   "byzantium": true,
    //   "events": [
    //       {
    //           "transactionIndex": 43,
    //           "blockNumber": 21482733,
    //           "transactionHash": "0x44942676883359aef5d508e81490fdc515153b984fb16f536d0b2c5907ad6703",
    //           "address": "0x2AA5e9079204e28375Dc3b15E0beE9c1ab3FAaD9",
    //           "topics": [
    //               "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
    //               "0x0000000000000000000000000000000000000000000000000000000000000000",
    //               "0x000000000000000000000000c157f383dc5fc9301cdb2feb958ba394ef79f6e5"
    //           ],
    //           "data": "0x",
    //           "logIndex": 122,
    //           "blockHash": "0xbf6394cf28f6e120b3a3b9a21ab6d1d73f6f6a94c0906a1a5f3dff3a97f0ae8b",
    //           "args": [
    //               "0x0000000000000000000000000000000000000000",
    //               "0xC157f383DC5Fc9301CDB2FEb958Ba394EF79f6e5"
    //           ],
    //           "event": "OwnershipTransferred",
    //           "eventSignature": "OwnershipTransferred(address,address)"
    //       },
    //       {
    //           "transactionIndex": 43,
    //           "blockNumber": 21482733,
    //           "transactionHash": "0x44942676883359aef5d508e81490fdc515153b984fb16f536d0b2c5907ad6703",
    //           "address": "0x0000000000000000000000000000000000001010",
    //           "topics": [
    //               "0x4dfe1bbbcf077ddc3e01291eea2d5c70c2b422b415d95645b9adcfd678cb1d63",
    //               "0x0000000000000000000000000000000000000000000000000000000000001010",
    //               "0x000000000000000000000000c157f383dc5fc9301cdb2feb958ba394ef79f6e5",
    //               "0x000000000000000000000000bc6044f4a1688d8b8596a9f7d4659e09985eebe6"
    //           ],
    //           "data": "0x0000000000000000000000000000000000000000000000000027b2437bb92600000000000000000000000000000000000000000000000000016345785d8a00000000000000000000000000000000000000000000000009c3c6ecc8f348b45292000000000000000000000000000000000000000000000000013b9334e1d0da000000000000000000000000000000000000000000000009c3c7147b36c46d7892",
    //           "logIndex": 123,
    //           "blockHash": "0xbf6394cf28f6e120b3a3b9a21ab6d1d73f6f6a94c0906a1a5f3dff3a97f0ae8b"
    //       }
    //   ]
    // }
  );

  return (
    <Box className="main rdmp_bg">
      <Box className="hm_cntnr defp_tp">
          <Box className="rdmp_sc01">
            <Box component="img" src="/img/rd_bg_01.png" className="img-fluid rd_bg_01" />
            <Grid container spacing={0}>
                <Grid item xs={12} lg={5} className="hn_ttl hn_ttl_v2">
                    <Box className="m-auto-lg">
                        <Typography component="h3">Give your flower life...</Typography>
                        <Box component="img" src="/img/wtcvd_ttl.png" className="img-fluid" />
                    </Box>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Box className="v1_rltv_pddng rdmp_sc_bx01">
                        <Box component="img" src="/img/rdmp_wl_01.png" className="wel_img" />
                        <Box className="p_rltv">
                            {/* <Box component="img" src="/img/video_img.png" className="img-fluid w-100" /> */}
                            <iframe width="100%" height="400" src="https://www.youtube.com/embed/SJwfkJQP3bY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
          </Box>
          <RoadmapScOne setTokenAddress={setTokenAddress} tokenAddress={tokenAddress} setTransaction={setTransaction}/>
          <RoadmapScTwo tokenAddress={tokenAddress} transaction={transaction}/>
          <RoadmapScThree />
          
          
          <Box className="rdmp_sc05">
            <Box component="img" src="/img/sc05_bg.png" className="sc05_bg" />
            <Box component="img" src="/img/sc05_img.png" className="img-fluid" />
          </Box>
          
          <RoadmapScFour />

          <Box className="rdmp_sc07">
            <Box component="img" src="/img/sc07_bg.png" className="sc07_bg img-fluid" alt="" />
            <Grid container spacing={3} className='zindx1'>
            <Grid item xs={12}>
              <Typography component='h3'>
                Share your flower with the world
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box className='v1_rltv_pddng'>
                <Box
                  component='img'
                  src='/img/wel_img_v1_v2.png'
                  className='wel_img'
                />
                <Box className='homesc_one sc_wt_bg sdw_bx_v3'>
                  <Box
                    component='img'
                    src='/img/vctr_bg_v1.png'
                    className='bg_img'
                  />
                  <Box className='p_rltv mddl_df_cntnt w-100'>
                    <Typography component='h4'>
                      Your flower’s contract address
                    </Typography>
                    <Typography component='p'>
                      The contract address is your flower’s ID number. Copy and
                      paste the address to allow others to see your flower!
                    </Typography>
                    <label className='frm_lbl'>Your contract address</label>
                    <Form.Control
                      type='text'
                      placeholder='0x0000012052fwafa51.......awfaw'
                      className='formfld'
                    />
                    <Button
                      variant='contained'
                      startIcon={
                        <Box component='img' src='/img/copy_ic.svg' alt='' />
                      }
                      className='upld_btn'
                    >
                      Copy contract Address
                    </Button>
                    <label className='frm_lbl'>Paste contract address</label>
                    <Form.Control
                      type='text'
                      placeholder='Paste here...'
                      className='formfld'
                    />
                    <Button
                      variant='contained'
                      startIcon={
                        <Box component='img' src='/img/past_ic.svg' alt='' />
                      }
                      className='upld_btn'
                    >
                      Click for paste
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box
                component='img'
                src='/img/sc07_img.png'
                className='img-fluid'
              />
            </Grid>
          </Grid>
          </Box>




        
      </Box>
    </Box>
  );
}


