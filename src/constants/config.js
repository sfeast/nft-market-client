import { inProduction } from 'utils/helpers/xchRequests';

// TODO: move these values to .env files
export const SERVER_ADDRESS = inProduction() ? process.env.SERVER_ADDRESS : 'http://localhost:5000';

export const ENVIRONMENT = {
    NODE_ADDRESS: 'http://95.216.67.162:7777/rpc',
    CHAIN_NAME: 'casper-test'
};

export const NFT_CONTRACT = {
    NAME: 'hackathon_nft_contract',
    HASH: 'hash-b82baff7badcbd0066aaf84006a5b5c6159a81ca2f0daf937f5894739a3d6863',
    PACKAGE_HASH: 'hash-fb1b716196827c6f6ffe76e1dd4d11dee2595436ae443ef6bf889f7c2c27d8ca'
};

export const MARKET_CONTRACT = {
    NAME: 'market_contract',
    HASH: 'hash-02067ab5ddf5d5cace04fb622994ff562343bc27eb5d03c9ae3a951c018a55ed',
    PACKAGE_HASH: 'hash-d0f060ce28fde52b867ed75700bd500de5396a4578e82aa324c16290ca1c6522'
};

// for NCTL environment
// !!!!!!!!!Remember you must use a current key in signer for this to work (often nctl keys & settings get cleared)
// export const ENVIRONMENT = {
// 	NODE_ADDRESS: 'http://localhost:11101/rpc',
// 	CHAIN_NAME: 'casper-net-1'
// };

// export const NFT_CONTRACT = {
// 	NAME: 'nft_contract_test_1',
// 	HASH: 'hash-893df41fc9643fa47be74102f9b285b6b887dfeec39116fa83a66d1e51b822ec',
// 	PACKAGE_HASH: 'hash-b56724868f78444699972ea0ec88a220909af2bc460af7916d0f1aed72d012e2'
// };

// export const MARKET_CONTRACT = {
//     NAME: 'nft_contract_test_1',
//     HASH: 'hash-e9ddf68fcf551da741d37cf3e5d229f4f48db8303d282278bcdf82d2469786cb',
//     PACKAGE_HASH: 'hash-7ead7247e05f3f3922147c6545968c1ab1b48fd8e28a704e45ad8af0bc63d5fe'
// };

export const PAYMENT_AMOUNT = {
    DEPLOY: '7000000000',
    INSTALL: '9000000000',
    MINT_ONE: '2000000000',
    APPROVE: '2000000000'
};

export const TICKERS = {
    cspr: 'CSPR'
};

export const DEPLOY_STATE = {
    MINT: 'mint',
    APPROVE: 'approve',
    LIST: 'list',
    CANCEL_LISTING: 'cancel_listing',
    BUY_LISTING: 'buy_listing',
    MAKE_OFFER: 'make_offer',
    WITHDRAW_OFFER: 'withdraw_offer',
    ACCEPT_OFFER: 'accept_offer',
    SUCCESS: 'success',
    ERROR: 'error',
    RESET: null
};

export const ACCEPTED_MIME_TYPES = {
    png: 'image/png',
    jpg: 'image/jpg',
    gif: 'image/gif',
    jpeg: 'image/jpeg'
};

export const SORT_OPTIONS = {
    NEW_TO_OLD: 'Newest to Oldest',
    OLD_TO_NEW: 'Oldest to Newest',
    PRICE_LOW_TO_HIGH: 'Price: Low to High',
    PRICE_HIGH_TO_LOW: 'Price: High to Low'
};
