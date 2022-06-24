import { mnemonic } from 'thor-devkit'
import dotenv from 'dotenv'
dotenv.config()

// retrieve BIP39 mnemonic words, default to 12 words(128bit strength)
const words = process.env.words.split(' ')

// derive private key from mnemonic words according to BIP32, using the path `m/44'/818'/0'/0`.
// defined for VET at https://github.com/satoshilabs/slips/blob/master/slip-0044.md
const privateKey = mnemonic.derivePrivateKey(words)

console.log(words, privateKey.toString('hex'))
