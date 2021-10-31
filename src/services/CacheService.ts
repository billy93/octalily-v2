
export class CacheService {
    private chainId: number;

    constructor(chainId: number) {
        this.chainId = chainId;
    }

    public getParentTokens = async () => await this.loadJsonData(`tokens/${this.chainToFileName()}.json`);
    
    public getFlowerTokens = async () => await this.loadJsonData(`flowers/${this.chainToFileName()}.json`);

    private async loadJsonData(path: string) {
        const response = await fetch(path, {
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
        });
        return await response.json();
    }

    // private chainToFileName = () => this.chain === Chain.Ethereum ? "eth" : this.chain === Chain.Bsc ? "bsc" :  "matic";
    private chainToFileName = () => "matic";
}