require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift radar remain clutch gloom enroll flush gas'; 
let testAccounts = [
"0x996b38576f554b998f35e8551f98a5e02e6bfb2bc7c88b71e1a094a9a56ffca5",
"0x7bed43801b81bef61d06e6fca864afb174bb2830368a98fc020a8ecc3b888af5",
"0x338a2a3f17c4da66ab7ac23a2553b873145de06495c29a2d3c6f71f63abc1e3e",
"0x18d2b3bb2608348f55aba601cd6cfb2ee5b25383c5e7c5cecb6143b41b5fb0bb",
"0x70d544602cbf3be990dd16c570ecfef1b46ec79d1862610b96968c48f0842054",
"0x638e704fa647b158b0cd0bab36ac8e3340c91bd1bb182c09bc39631b7855386f",
"0x89d51120d3d9a7e994a27b51623f1f5fdd86beff24e7e40d934c81640c4ba927",
"0x73aa3b2d42a0553f96dab596808cb167dd741212fc01cc37956190d6b974149d",
"0x098bcaa2274b9c41da0937db96c7e17e45d240de4d70af49859dc33c98a9759c",
"0xb2a386978bd684dc3a7291b862cb03f3307d99d9597bada8d7d81d3f5f15f4e0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

