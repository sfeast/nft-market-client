import { TICKERS } from 'constants/config';

export const getPrice = (price, float = 0) => {
    return price ? `${price.toFixed(float)} ${TICKERS.cspr}` : '';
};

export const getIPFSImage = uri => {
    return uri ? uri.replace('ipfs://', 'https://ipfs.io/ipfs/') : '';
};
