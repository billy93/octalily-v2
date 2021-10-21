const networkSettings = {
  56: {
    chainId: '0x38',
    chainName: 'BSC  Mainnet',
    nativeCurrency: {
      name: 'Binance Coin',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: ['https://bsc-dataseed.binance.org/'],
    blockExplorerUrls: ['https://bscscan.com/'],
  },
  4: {
    chainId: '4',
    chainName: 'Rinkeby Test Network',
    nativeCurrency: {
      name: 'Binance Coin',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    blockExplorerUrls: ['https://rinkeby.etherscan.io'],
  },
  97: {
    chainId: '0x61',
    chainName: 'BSC Test Mainnet',
    nativeCurrency: {
      name: 'Binance Coin',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: ['https://data-seed-prebsc-2-s1.binance.org:8545/'],
    blockExplorerUrls: ['https://bscscan.com/'],
  },
  137: {
    chainId: '0x89',
    chainName: 'Polygon Mainnet',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: ['https://polygon-mainnet.infura.io/v3/ee22ed44a9b84c9f947f639c7c98f8da'],
    blockExplorerUrls: ['https://explorer-mainnet.maticvigil.com'],
  },  
};

declare const window: any;

export const networkSetup = (chainId) => {
  return new Promise((resolve, reject) => {
    const provider = window.ethereum;
    if (provider) {
      if (networkSettings.hasOwnProperty(chainId)) {
        provider
          .request({
            method: 'wallet_addEthereumChain',
            params: [networkSettings[chainId]],
          })
          .then(resolve)
          .catch(reject);
      } else {
        reject(
          new Error(`No network settings configured for chainId: '${chainId}'`)
        );
      }
    } else {
      alert('Please Install Wallet');
      reject(new Error(`window.ethereum is '${typeof provider}'`));
    }
  });
};
