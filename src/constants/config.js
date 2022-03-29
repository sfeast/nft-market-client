import { inProduction } from 'utils/helpers';

// TODO: move these values to .env files
export const SERVER_ADDRESS = inProduction() ? '' : 'http://localhost:5000';

export const ENVIRONMENT = {
    NODE_ADDRESS: 'http://162.55.6.177:7777/rpc',
    CHAIN_NAME: 'casper-test'
};

export const NFT_CONTRACT = {
    NAME: 'hackathon_nft_test_contract',
    HASH: 'hash-9de2e5785c920c139d66bf6db7198b48019ddb6973dc3d13e61b9c12a76d45a1',
    PACKAGE_HASH: 'hash-e38adbdaca505cbe435ede201f64771350d6f5a282510bd49df56c8424e946f3'
};

// for NCTL environment
// export const ENVIRONMENT = {
// 	NODE_ADDRESS: 'http://localhost:11101/rpc',
// 	CHAIN_NAME: 'casper-net-1'
// };

// export const NFT_CONTRACT = {
// 	NAME: 'nft_contract_test_1',
// 	HASH: 'hash-bdcb74ace671c417f08ef3685a462d63e74a10acf678305ecb3821a9812a4f48',
// 	PACKAGE_HASH: 'hash-db054e92e3125a3ce38ac1790994c8ec25b39b07193b0e64107ddc69b4613d3c'
// };

export const PAYMENT_AMOUNT = {
    MINT_ONE: '2000000000'
};
