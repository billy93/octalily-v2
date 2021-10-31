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
        const signer = this.library.getSigner(this.account).connectUnchecked()

        let contract = null;
        if(address == "0x0BE4fA46B9a1E484Ba3EDbf507E425C84B07Fa16"){
            contract = new Contract(this.UPMATIC_GIVER_ADDRESS, flowerGiverAbi, signer);
        }
        else if(address == "0xaFb250Da16bD715b32653240937b17bC720d1e99"){
            contract = new Contract(this.WMATIC_GIVER_ADDRESS, flowerGiverAbi, signer);
        }
        return await contract.giveMeFlower();
    }
}