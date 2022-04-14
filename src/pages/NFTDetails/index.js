import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Page from 'components/shared/Page';

import NFTDetailsPage from 'pages/NFTDetails/NFTDetailsPage';
import { nftActions } from 'store/actions';

const NFTDetails = () => {
    const dispatch = useDispatch();
    const { contract, itemId } = useParams();

    useEffect(() => {
        dispatch(nftActions.loadNft(contract, itemId));
    }, [contract, itemId]);

    return (
        <Page>
            <NFTDetailsPage />
        </Page>
    );
};

export default NFTDetails;
