import { Link } from 'react-router-dom';
import { truncate } from 'utils/helpers/string';

export const notifications = {
    walletDisconnected: 'Wallet is disconnected.',
    connectWallet: 'Please, connect your wallet',
    mintingStarted: hash => (
        <div>
            Your NFT item is minting.. 😴 <br />
            You may explore it{' '}
            <a href={`https://testnet.cspr.live/deploy/${hash}`} target="_blank">
                here
            </a>
        </div>
    ),
    mintingSuccess: route => (
        <div>
            Your NFT has been minted 👌 <br />
            See it <Link to={route}>here</Link>
        </div>
    ),
    mintingFailed: 'Minting failed 🤯',
    saveToIpfsStarted: 'Metadata is saving to IPFS storage 😴',
    saveToIpfsSuccess: 'Metadata has been saved 👌',
    saveToIpfsFailed: 'Metadata saving is failed 🤯',
    tryAgain: '\nPlease, try again',
    andTryAgain: ' and try again.',
    wait: '\nPlease, wait',
    walletConnected: key => `Wallet is connected: ${truncate(key, 20, '..')}`,

    // Transfer approval
    approvalStarted: hash => (
        <div>
            Approving your nft for selling.. 🦥 <br />
            You may explore it{' '}
            <a href={`https://testnet.cspr.live/deploy/${hash}`} target="_blank">
                here
            </a>
        </div>
    ),
    approvalSuccess: 'Your approval has been granted 🪄',
    approvalFailed: 'Approval failed 💣',

    // Listings
    createListingStarted: hash => (
        <div>
            Your listing is being submitted.. 🐳 <br />
            You may explore it{' '}
            <a href={`https://testnet.cspr.live/deploy/${hash}`} target="_blank">
                here
            </a>
        </div>
    ),
    createListingSuccess: 'Your listing was created 🔥',
    createListingFailed: 'Your listing failed 🙈',

    cancelListingStarted: hash => (
        <div>
            Your cancellation is submitting.. 🏃 <br />
            You may explore it{' '}
            <a href={`https://testnet.cspr.live/deploy/${hash}`} target="_blank">
                here
            </a>
        </div>
    ),
    cancelListingSuccess: 'Your listing has been removed 🌈',
    cancelListingFailed: 'Your cancellation failed 🚽',

    buyListingStarted: hash => (
        <div>
            Your order is being submitted. Please wait.. 🦄 <br />
            You may explore it{' '}
            <a href={`https://testnet.cspr.live/deploy/${hash}`} target="_blank">
                here
            </a>
        </div>
    ),
    buyListingSuccess: 'Your purchase succeeded 🙌',
    buyListingFailed: 'Your order failed 🚽',

    // Offers
    makeOfferStarted: hash => (
        <div>
            Your offer is submitting.. 💎 <br />
            You may explore it{' '}
            <a href={`https://testnet.cspr.live/deploy/${hash}`} target="_blank">
                here
            </a>
        </div>
    ),
    makeOfferSuccess: 'Your offer has been placed 💸',
    makeOfferFailed: 'Your offer failed 💣',

    withdrawOfferStarted: hash => (
        <div>
            Your withdraw is being submitted. Please wait.. 🔑 <br />
            You may explore it{' '}
            <a href={`https://testnet.cspr.live/deploy/${hash}`} target="_blank">
                here
            </a>
        </div>
    ),
    withdrawOfferSuccess: 'Your offer withdraw succeeded 👋🏽',
    withdrawOfferFailed: 'Your offer withdraw failed 🚽',

    acceptOfferStarted: hash => (
        <div>
            The offer acceptance is being submitted. Please wait.. 🐌 <br />
            You may explore it{' '}
            <a href={`https://testnet.cspr.live/deploy/${hash}`} target="_blank">
                here
            </a>
        </div>
    ),
    acceptOfferSuccess: 'The offer has been accepted 💰',
    acceptOfferFailed: 'Accepting the offer failed 💣'
};
