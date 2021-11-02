import { useCallback, useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import useBlock from './useBlock'
import { useWeb3React } from '@web3-react/core'
import { TokenService } from '../services/TokenService'

const useTokenBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account, library, chainId } = useWeb3React() 
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    try{
      const service = new TokenService(library, account!, tokenAddress)
      const balance = await service.getBalance(account!)
      setBalance(new BigNumber(balance.toString()))  
    } catch(e){
      setBalance(new BigNumber(0))
    }
   
  }, [account, chainId, tokenAddress, library])

  useEffect(() => {
    if (account && library) {
      fetchBalance()
    }
  }, [account, chainId, library, fetchBalance, setBalance, block, tokenAddress])
  return balance
}

export default useTokenBalance

