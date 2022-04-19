export const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;

export const ENVIRONMENT = {
    NODE_ADDRESS: process.env.REACT_APP_CASPER_NODE_ADDRESS,
    CHAIN_NAME: process.env.REACT_APP_CASPER_CHAIN_NAME
};

export const NFT_CONTRACT = {
    HASH: process.env.REACT_APP_NFT_CONTRACT_HASH,
    PACKAGE_HASH: process.env.REACT_APP_NFT_CONTRACT_PACKAGE_HASH
};

export const MARKET_CONTRACT = {
    HASH: process.env.REACT_APP_MARKET_CONTRACT_HASH,
    PACKAGE_HASH: process.env.REACT_APP_MARKET_CONTRACT_PACKAGE_HASH
};
debugger;
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
