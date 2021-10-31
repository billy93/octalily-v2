export class TokenInfo {
    public symbol: string
    public address: string
    public decimals: number
    public img: string

    constructor(symbol: string, address: string, decimals: number = 18, img: string) {
        this.symbol = symbol
        this.address = address
        this.decimals = decimals
        this.img = img
    }
}