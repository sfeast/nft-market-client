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
    HASH: 'hash-ccdb2fab9f8cbb2416cb1227a7ffcbc35a33ae9f8059f5a637e4a2a92e766575',
    PACKAGE_HASH: 'hash-bc6b9203fb9b07ff1e1e30b7eb2d870e39101feab82a6e4ff2e8f88bedf21a6d'
};

// for NCTL environment
// !!!!!!!!!Remember you must use a current key in signer for this to work (often clear nctl keys & settings)
// export const ENVIRONMENT = {
// 	NODE_ADDRESS: 'http://localhost:11101/rpc',
// 	CHAIN_NAME: 'casper-net-1'
// };

// export const NFT_CONTRACT = {
// 	NAME: 'nft_contract_test_1',
// 	HASH: 'hash-6539e9c16bbea881d2a9cc2183d72dca956c798a3fb838e5b9707fa938e06687',
// 	PACKAGE_HASH: 'hash-a1f8c65b2f7776f314484433a43e9bd48e9bed423b022c21554f034d5ec92937'
// };

// export const MARKET_CONTRACT = {
//     NAME: 'nft_contract_test_1',
//     HASH: 'hash-34cfb79524146a9df2efb044a96479afd59688701f2c2aa09d856afad2ce7d22',
//     PACKAGE_HASH: 'hash-3ff56d345cdc501971ff0ccb9946b57dc4974bdf15b83042c0def68cd90ec3bc'
// };

export const PAYMENT_AMOUNT = {
    DEPLOY: '7000000000',
    INSTALL: '10000000000',
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
