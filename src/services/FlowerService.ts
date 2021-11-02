import { Contract } from '@ethersproject/contracts'
import erc20abi from '../constants/abis/erc20.json'
import { Web3Provider } from '@ethersproject/providers'

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
}