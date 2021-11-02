import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import flowerGiverAbi from '../constants/abis/flowerOwnershipGiver.json'

export class FlowerOwnershipGiverService {

    private library: Web3Provider;
    private account: string;

    // MATIC
    private UPMATIC_GIVER_ADDRESS = '0x6A76A2887C14EbCb8370ea44CF975eA649343d68';
    private WMATIC_GIVER_ADDRESS = '0x7EfDf48aDcae7dC24695314E121cb6732329332D';

    constructor(library: Web3Provider, account: string) {
        this.library = library;
        this.account = account;
    }

    public async giveMeFlower(address: string) {
        console.log(address);
        const signer = this.library.getSigner(this.account).connectUnchecked()

        let contract = null;
        if(address == "0xe6a11f125a834e0676f3f8f33eb347d4e1938264"){
            contract = new Contract(this.UPMATIC_GIVER_ADDRESS, flowerGiverAbi, signer);
        }
        else if(address == "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270"){
            contract = new Contract(this.WMATIC_GIVER_ADDRESS, flowerGiverAbi, signer);
        }
        return await contract.giveMeFlower();
    }
}