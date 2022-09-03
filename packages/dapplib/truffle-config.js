require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lobster flee spot bitter birth pizza promote inflict nasty flip genuine'; 
let testAccounts = [
"0x07176279ba2e4aa16f51d07fa694cb9df822298cca283656b53898532d97e40c",
"0x3a185b0c05db467896fefd95a7e061e27dc264f088b4f06d020b22b8b174d245",
"0x326da17b2658e2679bcb8a2f29019a0d79a57645cc3e4f68449aba5aadfa7149",
"0x062d7fa0047128e700aff6d77326de2d7b0846f63f8039cb1dac565d54a065a4",
"0x040960718ef46807429acc7ff475b1d251e65d857989e1f8509c212e800b1e2c",
"0x4f6641c6342d1d97cd9e1e5a7db643f2f99574cc71420cee51edb022705441ce",
"0x96c678d61291fea8ed5821ce0ca6ab1ce0b5beaee889f28d186c92892f1e2e2b",
"0x30e33068603bb64ca439004d43516e0bba9b40caba14f1f52325d42a8bbc2df3",
"0x0e9fafa6e8991e1c0af6654b826fe2d21f673bd1d2412f0de19bb0f034e48540",
"0x0e72e0ae92967be63139e0ffb61bc0c65a0429d08913169df1251310927c4ae8"
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

