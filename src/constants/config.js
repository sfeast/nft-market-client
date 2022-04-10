import { inProduction } from 'utils/helpers/xchRequests';

// TODO: move these values to .env files
export const SERVER_ADDRESS = inProduction() ? '' : 'http://localhost:5000';

export const ENVIRONMENT = {
    NODE_ADDRESS: 'http://95.216.67.162:7777/rpc',
    CHAIN_NAME: 'casper-test'
};

export const NFT_CONTRACT = {
    NAME: 'hackathon_nft_test_contract',
    HASH: 'hash-9de2e5785c920c139d66bf6db7198b48019ddb6973dc3d13e61b9c12a76d45a1',
    PACKAGE_HASH: 'hash-e38adbdaca505cbe435ede201f64771350d6f5a282510bd49df56c8424e946f3'
};

export const MARKET_CONTRACT = {
    NAME: 'market_contract',
    HASH: 'hash-bc113a82c4afc00627c95518cdd584f144719d7906271ed8f8889611d1dc4312',
    PACKAGE_HASH: 'hash-25700d96b1de45ab359736db3a3bfe84f442a67be1956d3d9e85428c70aa621e'
};

// for NCTL environment
// !!!!!!!!!Remember you must use a current key in signer for this to work (often clear nctl keys & settings)
// export const ENVIRONMENT = {
// 	NODE_ADDRESS: 'http://localhost:11101/rpc',
// 	CHAIN_NAME: 'casper-net-1'
// };

// export const NFT_CONTRACT = {
// 	NAME: 'nft_contract_test_1',
// 	HASH: 'hash-186cb857d6c9ce4d70cec17c4b4b750a8eeecd12975e48cd6767bacdffc36c37',
// 	PACKAGE_HASH: 'hash-a20b78c921753fec3dcc74c07bf7e61f63bab31c86a1cc6fc3975d7ebf3b6d77'
// };

// export const MARKET_CONTRACT = {
//     NAME: 'nft_contract_test_1',
//     HASH: 'hash-8a58d027f071ca99446fd20ec97d75047315c245164401353127d52a457778ae',
//     PACKAGE_HASH: 'hash-b93d5f2d2b1ab029cebb451810c8f6ac99a70ee5ce6ae11b3755cedc01ef2606'
// };

export const PAYMENT_AMOUNT = {
    MINT_ONE: '2000000000',
    DEPLOY: '7000000000'
};

export const TICKERS = {
    cspr: 'CSPR'
};

export const DEPLOYS = {
    mint: 'mint',
    approve: 'approve',
    list: 'list',
    cancel_listing: 'cancel_listing'
};
