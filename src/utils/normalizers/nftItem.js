import { TICKERS } from 'constants/config';

export const getPrice = price => {
    return price ? `${price.toFixed(2)} ${TICKERS.cspr}` : '';
};

export const getIPFSImage = uri => {
    return uri ? uri.replace('ipfs://', 'https://ipfs.io/ipfs/') : '';
};
