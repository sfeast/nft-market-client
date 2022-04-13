import { truncate } from 'utils/helpers/string';

export const notifications = {
    walletDisconnected: 'Wallet is disconnected.',
    connectWallet: 'Please, connect your wallet',
    mintingStarted: 'Minting your NFT 😴',
    mintingSuccess: 'Your NFT has been minted 👌',
    mintingFailed: 'Minting failed 🤯',
    saveToIpfsStarted: 'Metadata is saving to IPFS storage 😴',
    saveToIpfsSuccess: 'Metadata has been saved 👌',
    saveToIpfsFailed: 'Metadata saving is failed 🤯',
    tryAgain: '\nPlease, try again',
    andTryAgain: ' and try again.',
    wait: '\nPlease, wait',
    walletConnected: key => `Wallet is connected: ${truncate(key, 20, '..')}`
};
