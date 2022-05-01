// import bitcoinjs-lib from 'bitcoinjs-lib';
import bitcoinjs from 'bitcoinjs-lib';
function generate() {
    const RXC = bitcoin.networks.bitcoin;
    RXC.pubKeyHash = 0x3c; RXC.wif = 0xBC; RXC.scriptHash = 0x3d;
    const keyPair = bitcoin.ECPair.makeRandom();
    const pubKey = keyPair.getAddress();
    const privKey = keyPair.toWIF();
    return {
        pubKey: pubKey,
        privKey: privKey
    };
}