/* eslint-disable prefer-const */
import {
  Address,
  BigInt,
} from "@graphprotocol/graph-ts"

// Initialize a Token Definition with the attributes
export class TokenDefinition {
  address : Address
  symbol: string
  name: string
  decimals: BigInt

  // Initialize a Token Definition with its attributes
  constructor(address: Address, symbol: string, name: string, decimals: BigInt) {
    this.address = address
    this.symbol = symbol
    this.name = name
    this.decimals = decimals
  }

  // Get all tokens with a static defintion
  static getStaticDefinitions(): Array<TokenDefinition> {
    let staticDefinitions = new Array<TokenDefinition>(7)

    // Add JF
    let tokenJF = new TokenDefinition(
      Address.fromString('0x5fac926bf1e638944bb16fb5b787b5ba4bc85b0a'),
      'JF',
      'Jswap Finance Token',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenJF)

    // Add BUSD
    let tokenBUSD = new TokenDefinition(
      Address.fromString('0xe9e7cea3dedca5984780bafc599bd69add087d56'),
      'BUSD',
      'BUSD',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenBUSD)

    // Add BTCB
    let tokenBTCB = new TokenDefinition(
      Address.fromString('0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c'),
      'BTCB',
      'BTCB',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenBTCB)

    // Add ETH
    let tokenETH = new TokenDefinition(
      Address.fromString('0x2170ed0880ac9a755fd29b2688956bd959f933f8'),
      'ETH',
      'ETH',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenETH)

    // Add USDT
    let tokenUSDT = new TokenDefinition(
      Address.fromString('0x55d398326f99059ff775485246999027b3197955'),
      'USDT',
      'USDT',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenUSDT)

    // Add DAI
    let tokenDAI = new TokenDefinition(
      Address.fromString('0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3'),
      'DAI',
      'DAI',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenDAI)

    // Add USDC
    let tokenUSDC = new TokenDefinition(
      Address.fromString('0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'),
      'USDC',
      'USDC',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenUSDC)

    return staticDefinitions
  }

  // Helper for hardcoded tokens
  static fromAddress(tokenAddress: Address) : TokenDefinition | null {
    let staticDefinitions = this.getStaticDefinitions()
    let tokenAddressHex = tokenAddress.toHexString()

    // Search the definition using the address
    for (let i = 0; i < staticDefinitions.length; i++) {
      let staticDefinition = staticDefinitions[i]
      if(staticDefinition.address.toHexString() == tokenAddressHex) {
        return staticDefinition
      }
    }

    // If not found, return null
    return null
  }

}