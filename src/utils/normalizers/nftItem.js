export const getPrice = item => {
    return item.price ? `${item.price} ${item.currency}` : '';
};

export const getIPFSImage = uri => {
    return uri ? uri.replace('ipfs://', 'https://ipfs.io/ipfs/') : '';
};
