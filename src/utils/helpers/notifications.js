import { truncate } from 'utils/helpers/string';

export const notifications = {
    walletDisconnected: 'Wallet is disconnected.',
    connectWallet: 'Please, connect your wallet',
    mintingStarted: hash => (
        <div>
            Your NFT item is minting. Please wait.. 😴 <br />
            You may explore it{' '}
            <a href={`https://testnet.cspr.live/deploy/${hash}`} target="_blank">
                here
            </a>
        </div>
    ),
    mintingSuccess: route => (
        <div>
            Your NFT has been minted 👌 <br />
            See it <a href={route}>here</a>
        </div>
    ),
    mintingFailed: 'Minting failed 🤯',
    saveToIpfsStarted: 'Metadata is saving to IPFS storage 😴',
    saveToIpfsSuccess: 'Metadata has been saved 👌',
    saveToIpfsFailed: 'Metadata saving is failed 🤯',
    tryAgain: '\nPlease, try again',
    andTryAgain: ' and try again.',
    wait: '\nPlease, wait',
    walletConnected: key => `Wallet is connected: ${truncate(key, 20, '..')}`
};
