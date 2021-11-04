import { Contract } from '@ethersproject/contracts'
import erc20abi from '../constants/abis/erc20.json'
import octalilyAbi  from '../constants/abis/octalily.json'
import { Web3Provider } from '@ethersproject/providers'
import { BalanceInfo } from 'dtos/BalanceInfo'
import { getDisplayBalance } from '../utils/formatBalance'
import { DEPLOYER_ADDRESS } from '../constants'
import { parseEther } from '@ethersproject/units'
import BigNumber from 'bignumber.js';

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
        
        if (!parent || parent.toString().toLowerCase() === DEPLOYER_ADDRESS.toLowerCase()) return undefined;

        const balance = getDisplayBalance(await this.getBalance(parent, this.account))
        return new BalanceInfo(parent, balance);
    }

    public async buy(flowerAddress: string, value: string) {
        const contract = new Contract(flowerAddress, octalilyAbi, this.signer);
        const buyValue = parseEther(value);
        return await contract.buy(buyValue);
    }

    public async sell(flowerAddress: string, value: string) {
        const contract = new Contract(flowerAddress, octalilyAbi, this.signer);
        const sellValue = parseEther(value);
        return await contract.sell(sellValue);
    }

    public async upOnly(flowerAddress: string) {
        const contract = new Contract(flowerAddress, octalilyAbi, this.signer);
        return await contract.upOnly();
    }

    public async collectFees(flowerAddress: string, otherFlowerAddress: string) {
        const contract = new Contract(flowerAddress, octalilyAbi, this.signer);
        return await contract.sellOffspringToken(otherFlowerAddress);
    }

    public async transferOwnership(flowerAddress: string, newOwner: string) {
        const contract = new Contract(flowerAddress, octalilyAbi, this.signer);
        return await contract.transferOwnership(newOwner);
    }

    public async claimOwnership(flowerAddress: string) {
        const contract = new Contract(flowerAddress, octalilyAbi, this.signer);
        return await contract.claimOwnership();
    }
}