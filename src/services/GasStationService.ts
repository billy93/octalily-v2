// import { formatNumber } from "../utils/format"
// import { BigNumber } from "@ethersproject/units";

export class GasStationService{

    private chainId:number;

    constructor(chainId:number) {
        this.chainId = chainId;
    }

    public async getGas(){
        if(this.chainId == 56){
            try{
                const response = await fetch('https://bscgas.info/gas?apikey=07b1d1b9789e435bbdfcf50b729bff23');
                const json = await response.json();
                return [5*1000000000, 5*1000000000, 5*1000000000]
            } catch(ex) {
                return [5*1000000000, 5*1000000000, 5*1000000000]
            }
        }
        else if(this.chainId == 137){
            try{
                const response = await fetch('https://gasstation-mainnet.matic.network');
                const json = await response.json();

                return [parseInt(json.safeLow) * 1000000000, parseInt(json.standard) * 1000000000, parseInt(json.fastest) * 1000000000];
                // if(type==1){
                //     return parseInt(json.safeLow) * 1000000000
                // }
                // else if(type==2){
                //     return parseInt(json.standard) * 1000000000
                // }
                // else if(type==3){
                //     return parseInt(json.fastest) * 1000000000
                // }
            } catch(ex) {
                return [5*1000000000, 5*1000000000, 5*1000000000]
            }
        }
    }
}