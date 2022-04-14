import { useSelector } from 'react-redux';

import Typography from '@mui/material/Typography';
import WalletConnect from 'components/NftMarketActions/WalletConnect';
import { StyledMarketActions } from 'components/NFTDetails/MarketActions/styled';

import { walletSelectors } from 'store/selectors';
import ListNft from 'components/NftMarketActions/ListNft';
import BuyNow from 'components/NftMarketActions/BuyNow';
import MakeOffer from 'components/NftMarketActions/MakeOffer';
import ContentItem from 'components/shared/ContentItem';

import { TICKERS } from 'constants/config';

const Actions = ({ walletKey, currentUserIsOwner, tokenId, listed, price }) => {
    if (!walletKey) {
        return <WalletConnect fullWidth title="Connect your wallet" />;
    }
    // else
    if (Boolean(currentUserIsOwner)) {
        return <ListNft fullWidth tokenId={tokenId} listed={listed} />;
    }
    // else
    if (Boolean(listed)) {
        return (
            <div>
                <BuyNow tokenId={tokenId} price={price} fullWidth />
                <MakeOffer tokenId={tokenId} fullWidth />
            </div>
        );
    }
    // else
    return <MakeOffer tokenId={tokenId} fullWidth />;
};

const MarketActions = ({ listed, owner, tokenId, price }) => {
    const key = useSelector(walletSelectors.selectPublicKeyHash);
    const accountHash = useSelector(walletSelectors.selectAccountHash);
    const currentUserIsOwner = accountHash === owner;

    return (
        <StyledMarketActions>
            {!!price && (
                <ContentItem name="Price" flex="2">
                    <Typography variant="h5" fontWeight="bold">
                        {price} {TICKERS.cspr}
                    </Typography>
                </ContentItem>
            )}
            <Actions
                walletKey={key}
                currentUserIsOwner={currentUserIsOwner}
                listed={listed}
                tokenId={tokenId}
                price={price}
            />
        </StyledMarketActions>
    );
};

export default MarketActions;
