import { Contract } from '@ethersproject/contracts'
import erc20abi from '../constants/abis/erc20.json'
import octalilyAbi  from '../constants/abis/octalily.json'
import { Web3Provider } from '@ethersproject/providers'
import { BalanceInfo } from 'dtos/BalanceInfo'
import { getDisplayBalance } from '../utils/formatBalance'
import { DEPLOYER_ADDRESS } from '../constants'

export class FlowerService {
    private signer: any;
    private chain: number;
    private account: string;

    constructor(library: Web3Provider, account: string, chain: number) {
        this.signer = library.getSigner(account).connectUnchecked();
        this.account = account;
        this.chain = chain;
    }

    public async getBalance(tokenAddress: string, account: string) {
        const erc20Contract = new Contract(tokenAddress, erc20abi, this.signer);
        return await erc20Contract.balanceOf(account);
    }

    public async getPetalBalances(flowerAddress: string, petalsCount: number) {
        const contract = new Contract(flowerAddress, octalilyAbi, this.signer);
        const petals: BalanceInfo[] = [];
        for(let i = 1; i <= petalsCount; i++){
            const petalAddress = await contract.theEightPetals(i);
            const balance = getDisplayBalance(await this.getBalance(petalAddress, this.account))
            petals.push(new BalanceInfo(petalAddress, balance));
        }
        
        return petals;
    }

    public async getParent(flowerAddress: string) {
        const contract = new Contract(flowerAddress, octalilyAbi, this.signer);
        const parent = await contract.parentFlower(); 
        
        console.log("Start Get Parent");
        if (!parent || parent.toString().toLowerCase() === DEPLOYER_ADDRESS.toLowerCase()) return undefined;

        const balance = getDisplayBalance(await this.getBalance(parent, this.account))
        return new BalanceInfo(parent, balance);
    }

}